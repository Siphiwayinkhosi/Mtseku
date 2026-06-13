import { useEffect } from "react";
import { SITE_URL } from "@/lib/site";
import {
  buildPageSchema,
  DEFAULT_SOCIAL_IMAGE,
} from "@/lib/seo-pages.mjs";

type PageMeta = {
  path: string;
  title: string;
  description: string;
  robots: string;
  imageAlt: string;
  schemaType: string;
  breadcrumbName: string;
  mainEntity?: string;
};

const upsertMeta = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  let element = document.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
};

export const usePageMeta = (meta: PageMeta) => {
  const { title, description, path } = meta;

  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const image = `${SITE_URL}${DEFAULT_SOCIAL_IMAGE}`;
    document.title = title;

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[name="robots"]', "name", "robots", meta.robots);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description,
    );
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[property="og:image"]', "property", "og:image", image);
    upsertMeta(
      'meta[property="og:image:alt"]',
      "property",
      "og:image:alt",
      meta.imageAlt,
    );
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description,
    );
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    upsertMeta(
      'meta[name="twitter:image:alt"]',
      "name",
      "twitter:image:alt",
      meta.imageAlt,
    );

    let pageSchema = document.querySelector<HTMLScriptElement>("#page-schema");
    if (!pageSchema) {
      pageSchema = document.createElement("script");
      pageSchema.id = "page-schema";
      pageSchema.type = "application/ld+json";
      document.head.appendChild(pageSchema);
    }
    pageSchema.textContent = JSON.stringify(buildPageSchema(meta, SITE_URL));
  }, [description, meta, path, title]);
};
