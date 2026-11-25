# Mtseku Transport Services

Multi-page React and Vite website for Mtseku Transport Services.

## Local development

```sh
npm ci
npm run dev
```

## Booking form setup

The contact page posts to the same-origin `POST /api/booking` Worker endpoint.
Configure the following **runtime** variables on the production `mtseku` Worker.

| Name | Type | Value |
| --- | --- | --- |
| `TURNSTILE_SECRET_KEY` | Secret | Secret for the Turnstile widget restricted to `www.mtsekutransport.co.za` |
| `TURNSTILE_SITE_KEY` | Text | Public site key for the same widget |

Use a Managed widget that allows only `www.mtsekutransport.co.za`. The form
directs visitors to WhatsApp or phone while a required value is missing.

Cloudflare Email Sending authenticates `bookings.mtsekutransport.co.za` as a
separate sending domain. The `BOOKING_EMAIL` binding sends from
`notifications@bookings.mtsekutransport.co.za` to the single verified recipient
`info@mtsekutransport.co.za`, whose inbox stays at Hostinger. The customer’s
address is used as Reply-To. Check the Cloudflare delivery activity and the
Hostinger inbox when verifying a deployment.

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
