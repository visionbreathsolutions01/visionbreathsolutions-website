import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from './SEO';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[72px] min-h-screen bg-slate-900">
      <SEO
        title="Terms and Conditions"
        description="Official Terms and Conditions for Vision Breath Solutions Pvt. Ltd. detailing software service terms, intellectual property, liabilities, and client agreements."
        path="/terms"
      />
      {/* Header Banner */}
      <div className="bg-slate-900 pt-10 pb-12">
        <div className="container-xl">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Terms and Conditions</h1>
          <p className="text-slate-400 text-sm">Last updated: June 27, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-xl py-12 sm:py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-100 shadow-sm p-8 sm:p-12 space-y-10 text-slate-600 text-[15px] leading-relaxed">

          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>

          {/* Interpretation and Definitions */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Interpretation and Definitions</h2>
            <h3 className="font-bold text-slate-800 mb-2">Interpretation</h3>
            <p className="mb-4">
              The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
            <h3 className="font-bold text-slate-800 mb-3">Definitions</h3>
            <p className="mb-4">For the purposes of these Terms and Conditions:</p>
            <ul className="space-y-3 list-none">
              {[
                ["Affiliate", `means an entity that controls, is controlled by, or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.`],
                ["Country", "refers to: Andhra Pradesh, India"],
                ["Company", `(referred to as either "the Company", "We", "Us" or "Our" in these Terms and Conditions) refers to Vision Breath Solutions.`],
                ["Device", "means any device that can access the Service such as a computer, a cell phone or a digital tablet."],
                ["Service", "refers to the Website."],
                ["Terms and Conditions", `(also referred to as "Terms") means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.`],
                ["Third-Party Social Media Service", "means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service."],
                ["Website", "refers to Vision Breath Solutions, accessible from https://www.visionbreathsolutions.com/"],
                ["You", "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."],
              ].map(([term, def]) => (
                <li key={term} className="flex gap-2">
                  <span className="font-bold text-slate-800 shrink-0">{term}</span>
                  <span>{def}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Acknowledgment */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Acknowledgment</h2>
            <p className="mb-3">
              These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </p>
            <p className="mb-3">
              Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
            </p>
            <p className="mb-3">
              By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
            </p>
            <p className="mb-3">
              You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
            </p>
            <p>
              Your access to and use of the Service is also subject to Our{' '}
              <Link to="/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link>,
              which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
            </p>
          </section>

          {/* Links to Other Websites */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Links to Other Websites</h2>
            <p className="mb-3">
              Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
            </p>
            <p className="mb-3">
              The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
            </p>
            <p>
              We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
            </p>
          </section>

          {/* Third-Party Social Media */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Links from a Third-Party Social Media Service</h2>
            <p className="mb-3">
              The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.
            </p>
            <p>
              You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service. Your use of any Third-Party Social Media Service is governed by that service's own terms and privacy policies.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Termination</h2>
            <p className="mb-3">
              We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
            </p>
            <p>Upon termination, Your right to use the Service will cease immediately.</p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Limitation of Liability</h2>
            <p className="mb-3">
              Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
            </p>
            <p className="mb-3">
              To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service), even if the Company or any supplier has been advised of the possibility of such damages.
            </p>
            <p>
              Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
            </p>
          </section>

          {/* AS IS Disclaimer */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
            <p className="mb-3">
              The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement.
            </p>
            <p className="mb-3">
              Without limiting the foregoing, neither the Company nor any of the company's providers makes any representation or warranty of any kind, express or implied:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>As to the operation or availability of the Service, or the information, content, and materials included thereon.</li>
              <li>That the Service will be uninterrupted or error-free.</li>
              <li>As to the accuracy, reliability, or currency of any information or content provided through the Service.</li>
              <li>That the Service, its servers, or e-mails sent on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</li>
            </ul>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Governing Law</h2>
            <p>
              The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
            </p>
          </section>

          {/* Disputes Resolution */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Disputes Resolution</h2>
            <p>
              If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
            </p>
          </section>

          {/* EU Users */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">For European Union (EU) Users</h2>
            <p>
              If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
            </p>
          </section>

          {/* US Legal Compliance */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">United States Legal Compliance</h2>
            <p>
              You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
            </p>
          </section>

          {/* Severability and Waiver */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Severability and Waiver</h2>
            <h3 className="font-bold text-slate-800 mb-2">Severability</h3>
            <p className="mb-4">
              If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
            </p>
            <h3 className="font-bold text-slate-800 mb-2">Waiver</h3>
            <p>
              Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
            </p>
          </section>

          {/* Translation */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Translation Interpretation</h2>
            <p>
              These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl font-black text-slate-900 mb-4 pb-2 border-b border-slate-100">Changes to These Terms and Conditions</h2>
            <p className="mb-3">
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
            </p>
            <p>
              By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-brand-50 rounded-2xl p-6 border border-brand-100">
            <h2 className="text-xl font-black text-slate-900 mb-4">Contact Us</h2>
            <p className="mb-3">If you have any questions about these Terms and Conditions, You can contact us:</p>
            <ul className="space-y-2 text-sm">
              <li>🌐 <strong>Website:</strong>{' '}
                <a href="https://www.visionbreathsolutions.com/contact" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                  https://www.visionbreathsolutions.com/contact
                </a>
              </li>
            </ul>
          </section>

          <p className="text-xs text-slate-400 border-t border-slate-100 pt-6">
            Generated using Free Terms and Conditions Generator · Last updated: June 27, 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
