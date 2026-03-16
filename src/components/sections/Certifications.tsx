export default function Certifications() {
  return (
    <section className="bg-white border-t border-b border-ag-border py-5">
      <div className="container-retail">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-ag-text-muted shrink-0">
            Certified Quality Standards
          </h3>
          <div className="h-px flex-1 bg-ag-border hidden md:block" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {["ISO 9001:2015", "FIFA Quality", "IAAF Certified", "BIS Approved", "NSIC"].map((cert) => (
              <div key={cert} className="px-4 py-1.5 border border-ag-border text-[10px] font-body font-semibold text-ag-text-muted uppercase tracking-wider hover:border-ag-gold hover:text-ag-primary transition-all cursor-default">
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
