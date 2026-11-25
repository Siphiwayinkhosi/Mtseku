const escapeHtml = (value) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const buildEmail = (submission) => {
  const fields = [
    ["Name", submission.name],
    ["Email", submission.email || "Not supplied"],
    ["Phone", submission.phone || "Not supplied"],
    ["Service type", submission.serviceType],
    ["Pickup location", submission.pickupLocation || "Not supplied"],
    ["Drop-off location", submission.dropoffLocation || "Not supplied"],
    ["Preferred date/time", submission.preferredDateTime || "Not supplied"],
    ["Passengers", submission.passengers || "Not supplied"],
    ["Message", submission.message],
  ];

  const text = [
    "A new transport enquiry was submitted on the Mtseku Transport Services website.",
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
  ].join("\n");

  const htmlRows = fields
    .map(
      ([label, value]) => `
        <tr>
          <th style="padding:10px 14px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb;color:#071426;background:#f8fafc;">${escapeHtml(label)}</th>
          <td style="padding:10px 14px;border-bottom:1px solid #e5e7eb;color:#344257;">${escapeHtml(value).replaceAll("\n", "<br>")}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:720px;margin:0 auto;color:#071426;">
      <h1 style="font-size:24px;margin:0 0 8px;">New Mtseku transport enquiry</h1>
      <p style="margin:0 0 18px;color:#5b6677;">Submitted through the Mtseku Transport Services website.</p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;">
        <tbody>${htmlRows}</tbody>
      </table>
      <p style="font-size:13px;color:#6b7280;margin-top:20px;">Reply directly to this email if a customer email address was supplied.</p>
    </div>`;

  return {
    subject: `New ${submission.serviceType} enquiry from ${submission.name}`,
    text,
    html,
  };
};
