# Newsletter operations (Alignna)

## 1) Setup rápido (captura de correos)

1. Crea proyecto en Supabase.
2. Ejecuta el SQL de [`supabase/newsletter_schema.sql`](../supabase/newsletter_schema.sql) en SQL Editor.
3. Configura variables de entorno usando [`.env.example`](../.env.example):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `VITE_NEWSLETTER_ENDPOINT=/api/subscribe`
4. Despliega el sitio con soporte serverless para `api/*.js` (ej. Vercel).

## 2) Flujo actual

- El formulario del footer llama `POST /api/subscribe`.
- El endpoint normaliza email (`trim + lowercase`) y hace `upsert` por `email`.
- Si el correo ya existe, no duplica filas.

## 3) Acceso del cliente (tabla/lista)

En Supabase:

1. Ve a **Table Editor**.
2. Abre tabla **`subscribers`**.
3. Ordena por `subscribed_at` DESC.
4. Usa **Export data** para CSV cuando necesite compartir la lista.

## 4) Envío futuro (cuando haya productos)

Ya queda base con Resend en `api/send-launch-broadcast.js`.

### Requisitos

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `NEWSLETTER_ADMIN_TOKEN`

### Ejecutar envío

Hacer `POST /api/send-launch-broadcast` con header:

`Authorization: Bearer <NEWSLETTER_ADMIN_TOKEN>`

Esto toma `status = active` desde Supabase y envía broadcast.

## 5) Recomendaciones de escalado

- Mantener tabla `subscribers` como fuente de verdad.
- Agregar `unsubscribe` actualizando `status='unsubscribed'`.
- Para mayor volumen:
  - procesar envíos en lotes
  - registrar historial de campañas en tabla `campaign_sends`
