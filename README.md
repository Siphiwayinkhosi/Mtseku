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
| `SMTP_PASS` | Secret | Hostinger SMTP password for `info@mtsekutransport.co.za` |
| `TURNSTILE_SECRET_KEY` | Secret | Secret for the Turnstile widget restricted to `www.mtsekutransport.co.za` |
| `TURNSTILE_SITE_KEY` | Text | Public site key for the same widget |
| `SMTP_PORT` | Text, optional | `465` for implicit TLS (default), or `587` for required STARTTLS |

Use a Managed widget and allow only `www.mtsekutransport.co.za`. The form directs
visitors to WhatsApp or phone while a required value is missing. Hostinger sends
to the fixed business mailbox and the Worker acknowledges the request after
Hostinger accepts it over SMTP. Check the inbox to confirm end-to-end delivery
when setting up or changing SMTP credentials.

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
