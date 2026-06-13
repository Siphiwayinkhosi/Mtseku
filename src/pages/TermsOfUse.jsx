import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SEO_PAGES } from "@/lib/seo-pages.mjs";

const TermsOfUse = () => {
  usePageMeta(SEO_PAGES["/terms-of-use"]);

  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          ← Back to home
        </Link>
        <header>
          <p>Mtseku Transport Services</p>
          <h1>Terms of Use</h1>
          <span>Effective date: September 2025</span>
        </header>
        <div className="legal-content">
          <section>
            <h2>Services</h2>
            <p>
              We provide shuttle, tour, private hire and contract transport
              solutions in South Africa.
            </p>
          </section>
          <section>
            <h2>User Responsibilities</h2>
            <ul>
              <li>Provide accurate booking information</li>
              <li>Use services for lawful purposes only</li>
              <li>Respect the rights and safety of drivers and passengers</li>
            </ul>
          </section>
          <section>
            <h2>Limitations of Liability</h2>
            <p>
              We are not responsible for delays caused by traffic, weather or
              events beyond our control. Services are covered by passenger
              liability insurance.
            </p>
          </section>
          <section>
            <h2>Intellectual Property</h2>
            <p>
              Website content, including the logo, text and images, belongs to
              Mtseku Transport Services and may not be copied without
              permission.
            </p>
          </section>
          <section>
            <h2>Governing Law</h2>
            <p>These terms are governed by the laws of South Africa.</p>
          </section>
          <p className="legal-contact">
            Contact: <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfUse;
