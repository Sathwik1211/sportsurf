"use client";

import { Section } from "@/components/ui/Section";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="pt-12     bg-ag-bg min-h-screen  pb-32">
      <div className="container-retail">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <span className="text-ag-primary font-extrabold text-[11px] uppercase tracking-widest">Legal Documentation</span>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-ag-text uppercase tracking-tight mt-2">
              Privacy <span className="text-ag-primary">Policy</span>
            </h1>
            <p className="font-body text-ag-text-muted mt-6 text-lg max-w-2xl">
              At SportSurf Antigravity, we prioritize the protection of your intellectual property and project data.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1 border-r border-ag-border pr-8 hidden lg:block">
               <nav className="sticky top-80 space-y-6">
                  <div className="space-y-2">
                     <p className="text-[10px] font-black text-ag-primary uppercase tracking-[0.2em]">Navigation</p>
                     <ul className="space-y-4">
                        {["Overview", "Data Collection", "User Rights", "Security", "Contact"].map((item) => (
                          <li key={item}>
                             <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-bold text-ag-text-muted hover:text-ag-primary transition-colors uppercase tracking-wider">{item}</a>
                          </li>
                        ))}
                     </ul>
                  </div>
               </nav>
            </div>

            <div className="lg:col-span-3 space-y-16">
              <section id="overview" className="space-y-6">
                <h2 className="font-heading font-bold text-2xl text-ag-text uppercase tracking-tight flex items-center gap-3">
                   <ShieldCheck className="text-ag-primary" size={24} />
                   1. Data Stewardship
                </h2>
                <div className="font-body text-ag-text-muted text-base leading-relaxed space-y-4">
                  <p>
                    SportSurf ("we", "our", or "us") operates the Antigravity platform. This policy informs you of our practices regarding the collection, use, and disclosure of personal data when you use our Service.
                  </p>
                  <p>
                    We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
                  </p>
                </div>
              </section>

              <section id="data-collection" className="space-y-6">
                <h2 className="font-heading font-bold text-2xl text-ag-text uppercase tracking-tight flex items-center gap-3">
                   <Lock className="text-ag-primary" size={24} />
                   2. Information Collection
                </h2>
                <div className="font-body text-ag-text-muted text-base leading-relaxed space-y-4">
                  <p>
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data").
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                     <li>Email address</li>
                     <li>First name and last name</li>
                     <li>Phone number</li>
                     <li>Address, State, Province, ZIP/Postal code, City</li>
                     <li>Project site coordinates and dimensions</li>
                  </ul>
                </div>
              </section>

              <section id="security" className="space-y-6">
                <h2 className="font-heading font-bold text-2xl text-ag-text uppercase tracking-tight flex items-center gap-3">
                   <Eye className="text-ag-primary" size={24} />
                   3. Data Security
                </h2>
                <div className="font-body text-ag-text-muted text-base leading-relaxed space-y-4">
                  <p>
                    The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
                  </p>
                  <p>
                    We strive to use commercially acceptable means to protect your Personal Data, including SSL encryption and restricted database access for mission-critical infrastructure data.
                  </p>
                </div>
              </section>

              <div className="p-8 bg-ag-bg-alt border border-ag-border rounded-2xl flex gap-6 items-start">
                 <div className="p-3 bg-ag-primary/10 rounded-xl text-ag-primary shrink-0">
                    <FileText size={24} />
                 </div>
                 <div className="space-y-2">
                    <h4 className="font-heading font-bold text-ag-text uppercase tracking-tight">Questions about Privacy?</h4>
                    <p className="font-body text-ag-text-muted text-sm">
                       Our legal team is available for detailed compliance inquiries at <b>legal@sportsurf.in</b>.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
