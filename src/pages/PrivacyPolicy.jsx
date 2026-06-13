import { Link } from "react-router-dom";
import { BUSINESS } from "@/lib/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { SEO_PAGES } from "@/lib/seo-pages.mjs";

const PrivacyPolicy = () => {
  usePageMeta(SEO_PAGES["/privacy-policy"]);

  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link to="/" className="legal-back">
          ← Back to home
        </Link>
        <header>
          <p>Mtseku Transport Services</p>
          <h1>Privacy Policy</h1>
          <span>Effective date: September 2025</span>
        </header>
        <div className="legal-content">
          <section>
            <h2>Information We Collect</h2>
            <ul>
              <li>Name, email and phone number when you contact us or book</li>
              <li>Pickup and drop-off details needed to provide transport</li>
              <li>Payment details handled securely by third-party providers</li>
              <li>Website usage data, including cookies and analytics</li>
            </ul>
          </section>
          <section>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>To manage shuttle, private hire and tour services</li>
              <li>To respond to inquiries and booking requests</li>
              <li>To improve our services and website</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2>Your Rights</h2>
            <p>
              You may request access to your data, ask us to correct or delete
              it, or opt out of marketing communications.
            </p>
          </section>
          <p className="legal-contact">
            Contact: <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
