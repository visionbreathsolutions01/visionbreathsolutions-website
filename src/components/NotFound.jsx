import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "./SEO";
import { nav } from "../lib/content";

const NotFound = () => (
  <>
    <SEO path="/404" title="Page not found" description="That page does not exist." />
    <section className="relative overflow-hidden pt-[68px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-grid mask-fade-b opacity-60" aria-hidden="true" />
      <div className="shell relative flex min-h-[70vh] flex-col justify-center py-24">
        <span className="eyebrow">Error 404</span>
        <h1 className="mt-6 text-h1 max-w-[16ch]">This page doesn't exist.</h1>
        <p className="mt-6 max-w-[48ch] text-lead text-ink-400">
          The link may be out of date, or the page has moved. Here is everything else.
        </p>
        <nav aria-label="Site" className="mt-10 flex flex-wrap gap-2">
          <Link to="/" className="btn-primary">
            Home <ArrowRight size={15} />
          </Link>
          {nav.map((l) => (
            <Link key={l.path} to={l.path} className="btn-outline">{l.label}</Link>
          ))}
        </nav>
      </div>
    </section>
  </>
);

export default NotFound;
