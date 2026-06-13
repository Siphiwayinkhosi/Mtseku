import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SEO_PAGES } from "@/lib/seo-pages.mjs";

const CookieNotice = () => {
  usePageMeta(SEO_PAGES["/cookie-notice"]);

  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          ← Back to home
        </Link>
        <header>
          <p>Mtseku Transport Services</p>
          <h1>Cookie Notice</h1>
          <span>Effective date: September 2025</span>
        </header>
        <div className="legal-content">
          <section>
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small files stored on your device when you visit our
              website.
            </p>
          </section>
          <section>
            <h2>Types of Cookies We Use</h2>
            <ul>
              <li>
                Essential cookies for core navigation and form functionality
              </li>
              <li>Performance cookies for Google Analytics site traffic data</li>
              <li>Functionality cookies that remember website preferences</li>
            </ul>
          </section>
          <section>
            <h2>Managing Cookies</h2>
            <p>
              You can accept, reject or delete cookies through your browser
              settings. Disabling some cookies may affect website functionality.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CookieNotice;
