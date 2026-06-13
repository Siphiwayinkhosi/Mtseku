import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SEO_PAGES } from "@/lib/seo-pages.mjs";

const NotFound = () => {
  usePageMeta(SEO_PAGES["/404"]);

  return (
    <main className="not-found">
      <p>404</p>
      <h1>This route has reached a dead end.</h1>
      <span>The page you requested could not be found.</span>
      <Link className="button button-accent" to="/">
        Return to Mtseku Transport
      </Link>
    </main>
  );
};

export default NotFound;
