import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useParallax } from "@/hooks/use-parallax";
import { scrollToHash } from "@/lib/hash-scroll";
import { SEO_PAGES } from "@/lib/seo-pages.mjs";

type PageShellProps = {
  children: ReactNode;
  path: string;
};

const PageShell = ({ children, path }: PageShellProps) => {
  const location = useLocation();

  usePageMeta(SEO_PAGES[path]);
  useParallax(location.pathname);

  useEffect(() => {
    if (location.hash) {
      const timer = window.setTimeout(() => {
        scrollToHash(location.hash);
      }, 50);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.hash, location.pathname]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="route-main">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PageShell;
