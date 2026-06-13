import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  buildPageSchema,
  DEFAULT_SITE_URL,
  DEFAULT_SOCIAL_IMAGE,
  getSiteUrl,
  LAST_MODIFIED,
  SEO_PAGES,
} from "../src/lib/seo-pages.mjs";

const root = process.cwd();
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");
const siteUrl = getSiteUrl(process.env.VITE_SITE_URL);
const socialImage = `${siteUrl}${DEFAULT_SOCIAL_IMAGE}`;
const template = (await readFile(templatePath, "utf8")).replaceAll(
  DEFAULT_SITE_URL,
  siteUrl,
);

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const replaceMeta = (html, attribute, key, value) => {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${escapedKey}"\\s+content="[^"]*"\\s*\\/?>`,
    "i",
  );
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
};

const replaceLink = (html, rel, href) => {
  const pattern = new RegExp(
    `<link\\s+rel="${rel}"\\s+href="[^"]*"\\s*\\/?>`,
    "i",
  );
  const tag = `<link rel="${rel}" href="${escapeHtml(href)}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
};

const renderPage = (page) => {
  const url = page.path === "/" ? `${siteUrl}/` : `${siteUrl}${page.path}`;
  let html = template.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(page.title)}</title>`,
  );

  html = replaceMeta(html, "name", "description", page.description);
  html = replaceMeta(html, "name", "robots", page.robots);
  html = replaceMeta(html, "property", "og:title", page.title);
  html = replaceMeta(html, "property", "og:description", page.description);
  html = replaceMeta(html, "property", "og:url", url);
  html = replaceMeta(html, "property", "og:image", socialImage);
  html = replaceMeta(html, "property", "og:image:alt", page.imageAlt);
  html = replaceMeta(html, "name", "twitter:title", page.title);
  html = replaceMeta(html, "name", "twitter:description", page.description);
  html = replaceMeta(html, "name", "twitter:image", socialImage);
  html = replaceMeta(html, "name", "twitter:image:alt", page.imageAlt);
  html = replaceLink(html, "canonical", url);
  html = html.replace(
    /<script id="page-schema" type="application\/ld\+json">[\s\S]*?<\/script>/i,
    `<script id="page-schema" type="application/ld+json">${JSON.stringify(
      buildPageSchema(page, siteUrl),
    )}</script>`,
  );

  return html;
};

for (const page of Object.values(SEO_PAGES)) {
  if (page.path === "/404") continue;

  const html = renderPage(page);
  if (page.path === "/") {
    await writeFile(templatePath, html);
    continue;
  }

  const target = path.join(dist, `${page.path.slice(1)}.html`);
  await writeFile(target, html);
}

await writeFile(path.join(dist, "404.html"), renderPage(SEO_PAGES["/404"]));

const indexablePages = Object.values(SEO_PAGES).filter(
  (page) => page.robots.startsWith("index"),
);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexablePages
  .map((page) => {
    const url = page.path === "/" ? `${siteUrl}/` : `${siteUrl}${page.path}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${LAST_MODIFIED}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);
await writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
