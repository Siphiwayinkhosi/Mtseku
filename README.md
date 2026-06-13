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

The booking form sends through Gmail SMTP from the server. It does not expose
the Gmail credential in the browser and does not use FormSubmit.
The booking recipient and internal inbox copy are sent as separate messages
because Gmail can suppress a CC when the sender and CC address are identical.

Add these environment variables to the Vercel project:

```text
GMAIL_USER
GMAIL_APP_PASSWORD
BOOKING_EMAIL_TO
BOOKING_EMAIL_CC
VITE_SITE_URL
```

`GMAIL_APP_PASSWORD` must be a Google App Password created after enabling
2-Step Verification. Do not use the normal Gmail password. The defaults in the
code send to `Tony.Noyila@outlook.com` and CC
`siphiwayinkhosi.mahlalela9646@gmail.com`, but setting both variables
explicitly in Vercel is recommended.

Once a custom domain is available, this SMTP delivery can be replaced with
Resend and a verified domain sender.

## Production

```sh
npm run build
```

The build also generates route-specific HTML metadata, `sitemap.xml`, and
`robots.txt`. Pushes to the production branch deploy automatically when the
GitHub repository is connected to Vercel.
