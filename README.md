# Mtseku Transport Services

Multi-page React and Vite website for Mtseku Transport Services.

## Local development

```sh
npm install
npm run dev
```

The booking/contact form is frontend-only and posts to a configurable API
endpoint. This project is prepared for an AWS API Gateway/Lambda endpoint, but
does not include the Lambda backend yet.

## Contact form API setup

Set the public Vite environment variable:

```text
VITE_CONTACT_API_URL=https://your-aws-api-gateway-url.example/contact
```

API contract:

```http
POST {VITE_CONTACT_API_URL}
Content-Type: application/json
```

Request body:

```json
{
  "formType": "transport-enquiry",
  "name": "Customer name",
  "email": "customer@example.com",
  "phone": "+27...",
  "serviceType": "Airport Transfer",
  "pickupLocation": "Pickup address or area",
  "dropoffLocation": "Drop-off address or area",
  "preferredDate": "2026-06-20",
  "preferredTime": "10:30",
  "numberOfPassengers": 2,
  "message": "Transport enquiry details"
}
```

Expected success response:

```json
{ "success": true }
```

If `VITE_CONTACT_API_URL` is missing, the form shows a clear user-facing error
and does not submit.

## Production

```sh
npm run build
```

The build also generates route-specific HTML metadata, `sitemap.xml`, and
`robots.txt`. Pushes to the production branch deploy automatically when the
GitHub repository is connected to Vercel.
