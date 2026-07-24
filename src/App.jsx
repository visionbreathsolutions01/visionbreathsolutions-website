import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

// Lazy load route pages for chunk optimization
const AboutPage = lazy(() => import("./components/AboutPage"));
const ServicesPage = lazy(() => import("./components/ServicesPage"));
const ProjectsPage = lazy(() => import("./components/ProjectsPage"));
const ContactPage = lazy(() => import("./components/ContactPage"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./components/TermsOfService"));

// Lightweight loader fallback for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center" aria-live="polite" aria-busy="true">
    <div className="w-10 h-10 border-4 border-slate-200 border-t-brand-600 rounded-full animate-spin"></div>
  </div>
);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <SEO
        title="Vision Breath Solutions Pvt. Ltd. | AI, Software & Web Development Company"
        description="Vision Breath Solutions Pvt. Ltd. provides AI solutions, software development, website development, mobile app development, cloud solutions, enterprise software, automation, digital transformation, UI/UX design, and IT consulting services."
        keywords="Vision Breath Solutions, Vision Breath Solutions Pvt Ltd, AI Solutions Company, AI Development Company, Software Company, Software Company in India, Website Development Company, Mobile App Development Company, Custom Software Development, Enterprise Software Company, Cloud Solutions Company, Digital Transformation Company"
        path="/"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "SoftwareCompany", "LocalBusiness", "ProfessionalService"],
              "@id": "https://visionbreathsolutions.com/#organization",
              "name": "Vision Breath Solutions Pvt. Ltd.",
              "alternateName": ["Vision Breath Solutions", "Vision Breath"],
              "url": "https://visionbreathsolutions.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://visionbreathsolutions.com/favicon.png"
              },
              "image": "https://visionbreathsolutions.com/favicon.png",
              "description": "Vision Breath Solutions Pvt. Ltd. provides AI solutions, software development, website development, mobile app development, cloud solutions, enterprise software, automation, digital transformation, UI/UX design, and IT consulting services.",
              "email": "visionbreathsolutions@gmail.com",
              "telephone": "+91-9963416422",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pathuru Cross Road, Kunchanapalli",
                "addressLocality": "Vijayawada",
                "addressRegion": "Andhra Pradesh",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://www.instagram.com/visionbreathsolutions_01/",
                "https://github.com/visionbreathsolutions",
                "https://www.linkedin.com/company/visionbreathsolutions",
                "https://www.facebook.com/visionbreathsolutions",
                "https://x.com/visionbreath",
                "https://www.youtube.com/@visionbreathsolutions"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://visionbreathsolutions.com/#website",
              "url": "https://visionbreathsolutions.com",
              "name": "Vision Breath Solutions Pvt. Ltd.",
              "publisher": {
                "@id": "https://visionbreathsolutions.com/#organization"
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What services does Vision Breath Solutions Pvt. Ltd. provide?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vision Breath Solutions Pvt. Ltd. provides AI solutions, custom software development, website design & development, mobile app development (iOS & Android), cloud architecture, enterprise software, automation, digital transformation, and IT consulting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Where is Vision Breath Solutions Pvt. Ltd. located?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Vision Breath Solutions Pvt. Ltd. is located in Vijayawada, Andhra Pradesh, India, servicing clients globally."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get a custom quote for my software or web project?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can reach out directly via our contact page at visionbreathsolutions.com/contact, email us at visionbreathsolutions@gmail.com, or call +91 9963416422."
                  }
                }
              ]
            }
          ]
        }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <Technologies />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none"
      >
        Skip to main content
      </a>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<><Header /><main id="main-content"><AboutPage /></main><Footer /></>} />
          <Route path="/services" element={<><Header /><main id="main-content"><ServicesPage /></main><Footer /></>} />
          <Route path="/projects" element={<><Header /><main id="main-content"><ProjectsPage /></main><Footer /></>} />
          <Route path="/contact" element={<><Header /><main id="main-content"><ContactPage /></main><Footer /></>} />
          <Route
            path="/privacy"
            element={
              <div className="min-h-screen bg-white">
                <Header />
                <main id="main-content"><PrivacyPolicy /></main>
                <Footer />
              </div>
            }
          />
          <Route
            path="/terms"
            element={
              <div className="min-h-screen bg-white">
                <Header />
                <main id="main-content"><TermsOfService /></main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;