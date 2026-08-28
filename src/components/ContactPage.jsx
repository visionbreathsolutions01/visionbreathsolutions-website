import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight, Check } from "lucide-react";
import SEO from "./SEO";
import PageHero from "./ui/PageHero";
import Reveal from "./ui/Reveal";
import Faq from "./Faq";
import { company, services } from "../lib/content";

const DOMAIN = "https://www.visionbreathsolutions.com";
const BUDGETS = ["Under ₹1L", "₹1L – ₹3L", "₹3L – ₹8L", "₹10L+", "Will Discuss in the call"];

/**
 * The enquiry form has no server behind it, so rather than pretending to submit
 * and silently dropping the message, it opens the visitor's mail client with a
 * fully composed email. Nothing is lost and no backend is required.
 *
 * TO WIRE A REAL BACKEND: replace the body of `onSubmit` with a POST to your
 * endpoint and keep the `sent` state for the confirmation panel.
 */
const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "019b47a0-f80b-4478-b6f4-a27a4eadcb58",
          subject: `New enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
          from_name: data.name,
          name: data.name,
          email: data.email,
          phone: data.phone || "—",
          company: data.company || "—",
          service: data.service,
          budget: data.budget,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSent(true);
      } else {
        setSubmitError(result.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      setSubmitError("Failed to submit enquiry. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const Err = ({ name }) =>
    errors[name] ? (
      <p role="alert" className="mt-1.5 font-mono text-[0.6875rem] text-red-400">
        {errors[name].message}
      </p>
    ) : null;

  return (
    <>
      <SEO
        path="/contact"
        title="Contact"
        description={`Talk to ${company.legalName} about a software, AI, mobile or cloud project. Email ${company.email} or call ${company.phone}.`}
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${DOMAIN}/` },
                { "@type": "ListItem", position: 2, name: "Contact", item: `${DOMAIN}/contact` },
              ],
            },
            { "@type": "ContactPage", name: `Contact ${company.legalName}`, url: `${DOMAIN}/contact` },
          ],
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="Tell us what you are trying to build."
        lead="Give us the shape of the problem and we will come back within one business day with a point of view — not a brochure."
      />

      <section className="section">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">

          {/* Direct channels first — some people will never fill in a form */}
          <Reveal className="lg:col-span-4">
            <span className="eyebrow">Direct</span>

            <div className="mt-7 space-y-px overflow-hidden rounded-lg border border-ink-800 bg-ink-800">
              {[
                { label: "WhatsApp", value: company.phone, href: `https://wa.me/${company.phoneHref.replace("+", "")}`, ext: true },
                { label: "Email", value: company.email, href: `mailto:${company.email}` },
                { label: "Phone", value: company.phone, href: `tel:${company.phoneHref}` },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-center justify-between gap-4 bg-ink-900 px-5 py-4 transition-colors hover:bg-ink-800/60"
                >
                  <span>
                    <span className="block font-mono text-label uppercase text-ink-400">{c.label}</span>
                    <span className="mt-1.5 block break-all text-sm text-white">{c.value}</span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-ink-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                  />
                </a>
              ))}
            </div>

            <div className="mt-10">
              <span className="font-mono text-label uppercase text-ink-400">Office</span>
              <address className="mt-3 not-italic text-sm leading-relaxed text-ink-300">
                {company.address.line1}<br />
                {company.address.line2}
              </address>
            </div>

            <div className="mt-10">
              <span className="font-mono text-label uppercase text-ink-400">Hours</span>
              <p className="mt-3 text-sm text-ink-300">
                Monday to Saturday, 9:00 – 18:30 IST.<br />
                We keep a fixed overlap window for clients in other time zones.
              </p>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={0.08} className="lg:col-span-8">
            {sent ? (
              <div className="panel flex min-h-[420px] flex-col items-start justify-center p-9 sm:p-12">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink-950 text-white">
                  <Check size={19} strokeWidth={2.4} />
                </span>
                <h2 className="mt-7 text-h3">Enquiry sent successfully.</h2>
                <p className="mt-4 max-w-[46ch] text-sm text-ink-400">
                  Thank you for reaching out! We have received your project details and will get back
                  to you at {company.email} within one business day.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${company.phoneHref.replace("+", "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    Message on WhatsApp <ArrowUpRight size={15} strokeWidth={2.2} />
                  </a>
                  <button type="button" onClick={() => setSent(false)} className="btn-outline">
                    Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="panel p-7 sm:p-10">
                <h2 className="text-h3">Project enquiry</h2>
                <p className="mt-2.5 text-sm text-ink-400">
                  Fields marked with an asterisk are required.
                </p>

                <div className="mt-9 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="field-label">Name *</label>
                    <input
                      id="name"
                      className="field"
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      {...register("name", { required: "Please tell us your name" })}
                    />
                    <Err name="name" />
                  </div>

                  <div>
                    <label htmlFor="company" className="field-label">Company</label>
                    <input id="company" className="field" placeholder="Organisation" {...register("company")} />
                  </div>

                  <div>
                    <label htmlFor="email" className="field-label">Email *</label>
                    <input
                      id="email"
                      type="email"
                      className="field"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      {...register("email", {
                        required: "We need an email to reply to",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "That address doesn't look right" },
                      })}
                    />
                    <Err name="email" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="field-label">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      className="field"
                      placeholder="Your phone number"
                      aria-invalid={!!errors.phone}
                      {...register("phone", {
                        required: "We need a phone number to reach you",
                        pattern: { value: /^[+]?[0-9\s-]{7,15}$/, message: "That phone number doesn't look right" }
                      })}
                    />
                    <Err name="phone" />
                  </div>

                  <div>
                    <label htmlFor="service" className="field-label">What do you need? *</label>
                    <select
                      id="service"
                      className="field"
                      defaultValue=""
                      aria-invalid={!!errors.service}
                      {...register("service", { required: "Pick the closest match" })}
                    >
                      <option value="" disabled>Select an area</option>
                      {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                      <option value="Something else">Something else</option>
                    </select>
                    <Err name="service" />
                  </div>

                  <div>
                    <label htmlFor="budget" className="field-label">Budget range *</label>
                    <select
                      id="budget"
                      className="field"
                      defaultValue=""
                      aria-invalid={!!errors.budget}
                      {...register("budget", { required: "A rough range is enough" })}
                    >
                      <option value="" disabled>Select a range</option>
                      {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    <Err name="budget" />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="field-label">The project *</label>
                    <textarea
                      id="message"
                      rows={6}
                      className="field resize-y"
                      placeholder="What are you building, who is it for, and what is forcing the timeline?"
                      aria-invalid={!!errors.message}
                      {...register("message", {
                        required: "A couple of sentences is plenty",
                        minLength: { value: 20, message: "A little more detail would help" },
                      })}
                    />
                    <Err name="message" />
                  </div>
                </div>

                {submitError && (
                  <p role="alert" className="mt-6 font-mono text-sm text-red-400">
                    {submitError}
                  </p>
                )}

                <div className="mt-9 flex flex-col gap-4 border-t border-ink-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[40ch] font-mono text-[0.6875rem] leading-relaxed text-ink-400">
                    Submitting sends your enquiry details directly to our team. We reply within
                    one business day.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary btn-lg shrink-0 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send enquiry"} <ArrowUpRight size={16} strokeWidth={2.2} />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Faq />
    </>
  );
};

export default ContactPage;
