# Google Analytics 4 — Caenna / Alignna

## Para el desarrollador (una vez)

1. Crear propiedad GA4 (idealmente en la cuenta Google de Michelle).
2. Copiar el **Measurement ID** (`G-XXXXXXXX`).
3. En Vercel → **Settings → Environment Variables** → Production:
   - `VITE_GA_MEASUREMENT_ID` = `G-XXXXXXXX`
4. **Redeploy** Production.
5. Verificar: sitio en vivo → GA4 → **Reports → Realtime** (debe aparecer 1 usuario).

En local (`npm run dev`) GA **no** se carga (evita datos basura).

## Para Michelle (ver datos sin preguntar al dev)

1. Entrar a [https://analytics.google.com](https://analytics.google.com) con el Gmail donde recibió la invitación.
2. Elegir la propiedad **Caenna** (o el nombre que se haya puesto).
3. Informes útiles:
   - **Informes → Tiempo real** — visitas ahora.
   - **Adquisición → Adquisición de tráfico** — de dónde vienen (Google, redes, directo).
   - **Adquisición → Adquisición de campañas** — si usan enlaces con UTM (Instagram, QR, etc.).
   - **Interacción → Páginas y pantallas** — páginas más vistas (`/`, `/alignna`, etc.).

### Enlaces con campaña (recomendado al publicar)

Ejemplo para Instagram:

`https://www.caenna.com/alignna?utm_source=instagram&utm_medium=social&utm_campaign=alignna_launch`

Esos parámetros aparecen en **Adquisición de campañas**.

## Invitar a Michelle en GA4

1. GA4 → **Admin** (engranaje) → **Property access management**.
2. **+** → **Add users**.
3. Email de Michelle → rol **Viewer** (solo lectura).
4. Enviar invitación; ella acepta por correo.
