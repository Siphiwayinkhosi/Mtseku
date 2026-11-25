# Mtseku Transport Services

Multi-page React and Vite website for Mtseku Transport Services.

## Local development

```sh
npm ci
npm run dev
```

## Contact form API setup

`VITE_CONTACT_API_URL` is a public, build-time Vite variable. Leave it unset in
Cloudflare Workers Builds until the replacement booking endpoint is ready. The
form then directs visitors to WhatsApp or phone when they try to submit online.

API contract:

```http
POST {VITE_CONTACT_API_URL}
Content-Type: application/json
```

Request body:

```json
{
  "name": "Customer name",
  "email": "customer@example.com",
  "phone": "+27...",
  "serviceType": "Airport Transfer",
  "pickupLocation": "Pickup address or area",
  "dropoffLocation": "Drop-off address or area",
  "preferredDateTime": "2026-06-20 10:30",
  "passengers": "2",
  "message": "Transport enquiry details",
  "honeypot": ""
}
```

Expected success response:

```json
{ "success": true }
```

## Production

```sh
npm ci
npm run lint
npm run build
```

Cloudflare Workers Builds deploys the `main` branch to the `mtseku` Worker using
`npm run build` and `npx wrangler deploy --name mtseku --assets ./dist`. The npm
lockfile determines dependency installation. `wrangler.jsonc` serves the static
files in `dist` with extensionless page URLs and a custom 404 page.

The build generates route-specific HTML metadata, `sitemap.xml`, and
`robots.txt` for `https://www.mtsekutransport.co.za`.
