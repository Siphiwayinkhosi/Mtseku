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

The booking form sends through Resend from the server. It does not expose an
email API key in the browser and does not use FormSubmit.

Add these environment variables to the Vercel project:

```text
RESEND_API_KEY
BOOKING_EMAIL_FROM
BOOKING_EMAIL_TO
BOOKING_EMAIL_CC
VITE_SITE_URL
```

`BOOKING_EMAIL_FROM` must use a domain verified in Resend. The defaults in the
code send to `Tony.Noyila@outlook.com` and CC
`siphiwayinkhosi.mahlalela9646@gmail.com`, but setting both variables explicitly
in Vercel is recommended.

## Production

```sh
npm run build
```

The build also generates route-specific HTML metadata, `sitemap.xml`, and
`robots.txt`. Pushes to the production branch deploy automatically when the
GitHub repository is connected to Vercel.
