import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import ScrollToTop from "./components/ui/ScrollToTop";
import BackToTop from "./components/ui/BackToTop";

import Hero from "./components/Hero";
import Statement from "./components/Statement";
import Services from "./components/Services";
import Work from "./components/Work";
import CtaBand from "./components/CtaBand";

import { company, faqs } from "./lib/content";

const AboutPage     = lazy(() => import("./components/AboutPage"));
const ServicesPage  = lazy(() => import("./components/ServicesPage"));
const ProjectsPage  = lazy(() => import("./components/ProjectsPage"));
const ContactPage   = lazy(() => import("./components/ContactPage"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsOfService= lazy(() => import("./components/TermsOfService"));
const NotFound      = lazy(() => import("./components/NotFound"));

const DOMAIN = "https://www.visionbreathsolutions.com";

/* A quiet loader — a flash of spinner is worse than a beat of nothing. */
const PageLoader = () => (
  <div className="min-h-[70vh]" aria-live="polite" aria-busy="true" />
);

/* Every route shares the same chrome. */
const Layout = ({ children }) => (
  <>
    <Header />
    <main id="main">{children}</main>
    <Footer />
    <BackToTop />
  </>
);

const Home = () => (
  <>
    <SEO
      path="/"
      title="AI, Software & Web Development Company"
      description={`${company.legalName} builds AI systems, web platforms, mobile apps and cloud infrastructure for businesses in India and worldwide.`}
      schema={{
        "@context": "https://schema.org",
        "@graph": [
          { "@id": `${DOMAIN}/#organization` },
          {
            "@type": "FAQPage",
            "@id": `${DOMAIN}/#faq`,
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ],
      }}
    />
    <Hero />
    <Statement />
    <Services />
    <Work />
    <CtaBand />
  </>
);

const App = () => (
  /* "user" — honour the OS preference instead of disabling all motion outright */
  <MotionConfig reducedMotion="user">
    <ScrollToTop />

    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2.5 focus:text-sm
                 focus:font-medium focus:text-white"
    >
      Skip to content
    </a>

    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/"         element={<Layout><Home /></Layout>} />
        <Route path="/about"    element={<Layout><AboutPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
        <Route path="/contact"  element={<Layout><ContactPage /></Layout>} />
        <Route path="/privacy"  element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms"    element={<Layout><TermsOfService /></Layout>} />
        <Route path="*"         element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Suspense>
  </MotionConfig>
);

export default App;
