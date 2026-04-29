/* eslint-env node */
import { createClient } from "@supabase/supabase-js";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Authorization",
};

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

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    return res
      .status(500)
      .json({ message: "Newsletter service is not configured." });
  }

  let payload = {};
  try {
    payload = await readJsonBody(req);
  } catch {
    return res.status(400).json({ message: "Invalid request body." });
  }

  const email = String(payload.email ?? "")
    .trim()
    .toLowerCase();
  const source = String(payload.source ?? "site-footer")
    .trim()
    .slice(0, 64);

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ message: "Escribe un correo válido." });
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
    return res
      .status(500)
      .json({ message: "No se pudo guardar tu correo. Intenta nuevamente." });
  }

  return res
    .status(200)
    .json({ message: "Listo. Te avisamos en cuanto sea el lanzamiento." });
}
