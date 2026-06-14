# Mtseku Transport Services

Multi-page React and Vite website for Mtseku Transport Services.

## Local development

```sh
npm install
npm run dev
```

The booking email endpoint is a Vercel Function at `/api/booking`. Use
`vercel dev` when testing that endpoint locally.

## Booking email setup

The booking form sends through Brevo's transactional email API from the
server. Brevo allows a sender email to be verified by email while the custom
domain is not yet available. Gmail SMTP remains a temporary fallback.

Add these environment variables to the Vercel project:

```text
BREVO_API_KEY
BREVO_SENDER_EMAIL
GMAIL_USER
GMAIL_APP_PASSWORD
BOOKING_EMAIL_TO
BOOKING_EMAIL_CC
VITE_SITE_URL
```

Create and verify `BREVO_SENDER_EMAIL` in Brevo, then create an API key and add
it as `BREVO_API_KEY`. The defaults in the code send to
`Tony.Noyila@outlook.com` and CC
`siphiwayinkhosi.mahlalela9646@gmail.com`.

Once a custom domain is available, this temporary delivery setup can be
replaced with Resend and a verified domain sender.

## Production

```sh
npm run build
```

The build also generates route-specific HTML metadata, `sitemap.xml`, and
`robots.txt`. Pushes to the production branch deploy automatically when the
GitHub repository is connected to Vercel.
