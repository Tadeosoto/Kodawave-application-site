/* eslint-env node */
/* global Buffer, process */
import { createClient } from "@supabase/supabase-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization",
};

const MESSAGES = {
  "en-AU": {
    methodNotAllowed: "Method not allowed.",
    serviceNotConfigured: "Newsletter service is not configured.",
    invalidRequestBody: "Invalid request body.",
    invalidEmail: "Please enter a valid email address.",
    saveFailed: "Could not save your email. Please try again.",
    success: "Done. We will notify you when launch is ready.",
  },
  "es-MX": {
    methodNotAllowed: "Método no permitido.",
    serviceNotConfigured: "El servicio de newsletter no está configurado.",
    invalidRequestBody: "El cuerpo de la solicitud no es válido.",
    invalidEmail: "Escribe un correo válido.",
    saveFailed: "No se pudo guardar tu correo. Intenta nuevamente.",
    success: "Listo. Te avisamos en cuanto sea el lanzamiento.",
  },
};

function normalizeLocale(locale) {
  const value = String(locale ?? "").trim().toLowerCase();
  if (value === "es-mx" || value.startsWith("es")) return "es-MX";
  return "en-AU";
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object" && !("pipe" in req.body)) {
    return req.body;
  }

  if (typeof req.body === "string") {
    return req.body ? JSON.parse(req.body) : {};
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  return raw ? JSON.parse(raw) : {};
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Max-Age", "86400");
    Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(204).end();
  }

  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v));

  const requestLocale = normalizeLocale(
    req.headers["x-locale"] ?? req.query?.locale,
  );
  let i18n = MESSAGES[requestLocale];

  if (req.method !== "POST") {
    return res.status(405).json({ message: i18n.methodNotAllowed });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return res.status(500).json({ message: i18n.serviceNotConfigured });
  }

  let payload = {};
  try {
    payload = await readJsonBody(req);
  } catch {
    return res.status(400).json({ message: i18n.invalidRequestBody });
  }

  i18n = MESSAGES[normalizeLocale(payload.locale)] ?? i18n;

  const email = String(payload.email ?? "")
    .trim()
    .toLowerCase();
  const source = String(payload.source ?? "site-footer")
    .trim()
    .slice(0, 64);

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ message: i18n.invalidEmail });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await supabase.from("subscribers").upsert(
    {
      email,
      source,
      status: "active",
      subscribed_at: new Date().toISOString(),
    },
    { onConflict: "email", ignoreDuplicates: false },
  );

  if (error) {
    return res.status(500).json({ message: i18n.saveFailed });
  }

  return res.status(200).json({ message: i18n.success });
}
