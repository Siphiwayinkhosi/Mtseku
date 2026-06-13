export const DEFAULT_SITE_URL = "https://mtseku.vercel.app";
export const DEFAULT_SOCIAL_IMAGE = "/og-mtseku.jpg";
export const LAST_MODIFIED = "2026-06-13";

export const SEO_PAGES = {
  "/": {
    path: "/",
    title: "Shuttle Services Cape Town & Johannesburg | Mtseku",
    description:
      "Book professional shuttle services, airport transfers, private hire, tours and contract transport in Cape Town, Johannesburg and across South Africa.",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    schemaType: "WebPage",
    breadcrumbName: "Home",
    imageAlt: "Mtseku shuttle vehicles beside the Cape Town coastline",
    priority: "1.0",
    changefreq: "monthly",
  },
  "/services": {
    path: "/services",
    title: "Shuttle, Airport Transfer & Private Hire Services | Mtseku",
    description:
      "Compare Mtseku shuttle services, airport transfers, tours, private hire and contract transport for individuals, groups, schools and businesses.",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    schemaType: "CollectionPage",
    breadcrumbName: "Services",
    imageAlt: "Mtseku passenger shuttle ready for transport",
    priority: "0.9",
    changefreq: "monthly",
    mainEntity: "#transport-services",
  },
  "/about": {
    path: "/about",
    title: "About Mtseku Transport Services | South Africa",
    description:
      "Learn about Mtseku Transport Services, our passenger-first standards, professional drivers, responsible operating principles and career opportunities.",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    schemaType: "AboutPage",
    breadcrumbName: "About",
    imageAlt: "Mtseku passenger transport vehicle in South Africa",
    priority: "0.8",
    changefreq: "monthly",
    mainEntity: "#organization",
  },
  "/fleet": {
    path: "/fleet",
    title: "Transport Fleet for Shuttles, Tours & Transfers | Mtseku",
    description:
      "View Mtseku vehicles used for airport transfers, shuttle services, private hire, tours and passenger journeys across South Africa.",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    schemaType: "CollectionPage",
    breadcrumbName: "Fleet",
    imageAlt: "Mtseku transport vehicles on a South African route",
    priority: "0.8",
    changefreq: "monthly",
  },
  "/contact": {
    path: "/contact",
    title: "Book Transport in Cape Town & Johannesburg | Mtseku",
    description:
      "Request a transport quote from Mtseku for shuttles, airport transfers, tours, private hire or contract transport in Cape Town and Johannesburg.",
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    schemaType: "ContactPage",
    breadcrumbName: "Contact",
    imageAlt: "Mtseku shuttle vehicles operating in Cape Town",
    priority: "0.9",
    changefreq: "monthly",
    mainEntity: "#organization",
  },
  "/privacy-policy": {
    path: "/privacy-policy",
    title: "Privacy Policy | Mtseku Transport Services",
    description:
      "Read how Mtseku Transport Services collects, uses and protects personal information provided through bookings and website enquiries.",
    robots: "noindex, follow",
    schemaType: "WebPage",
    breadcrumbName: "Privacy Policy",
    imageAlt: "Mtseku Transport Services",
  },
  "/cookie-notice": {
    path: "/cookie-notice",
    title: "Cookie Notice | Mtseku Transport Services",
    description:
      "Read the Mtseku Transport Services cookie notice and learn how website cookies and analytics data are used.",
    robots: "noindex, follow",
    schemaType: "WebPage",
    breadcrumbName: "Cookie Notice",
    imageAlt: "Mtseku Transport Services",
  },
  "/terms-of-use": {
    path: "/terms-of-use",
    title: "Terms of Use | Mtseku Transport Services",
    description:
      "Read the terms that apply when using the Mtseku Transport Services website and passenger transport services.",
    robots: "noindex, follow",
    schemaType: "WebPage",
    breadcrumbName: "Terms of Use",
    imageAlt: "Mtseku Transport Services",
  },
  "/404": {
    path: "/404",
    title: "Page Not Found | Mtseku Transport Services",
    description: "The requested Mtseku Transport Services page was not found.",
    robots: "noindex, nofollow",
    schemaType: "WebPage",
    breadcrumbName: "Page Not Found",
    imageAlt: "Mtseku Transport Services",
  },
};

export const getSiteUrl = (value) =>
  (value || DEFAULT_SITE_URL).replace(/\/$/, "");

export const buildPageSchema = (page, siteUrlValue) => {
  const siteUrl = getSiteUrl(siteUrlValue);
  const url = page.path === "/" ? `${siteUrl}/` : `${siteUrl}${page.path}`;
  const webpage = {
    "@type": page.schemaType,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en-ZA",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    primaryImageOfPage: { "@id": `${siteUrl}/#primaryimage` },
  };

  if (page.mainEntity) {
    webpage.mainEntity = { "@id": `${siteUrl}/${page.mainEntity}` };
  }

  const graph = [webpage];

  if (page.path !== "/" && page.path !== "/404") {
    const breadcrumbId = `${url}#breadcrumb`;
    webpage.breadcrumb = { "@id": breadcrumbId };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.breadcrumbName,
          item: url,
        },
      ],
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
};
