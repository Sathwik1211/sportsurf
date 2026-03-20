export default function Certifications({ settings }: { settings: any }) {
  const defaults = ["ISO 9001:2015", "FIFA Quality", "IAAF Certified", "BIS Approved", "NSIC"];
  let certs = defaults.map(d => ({ title: d }));
  try {
    if (settings?.certsJson) certs = JSON.parse(settings.certsJson);
  } catch (err) {
    console.error("Failed to parse certsJson:", err);
  }

  return (
    <section className="bg-white border-t border-b border-ag-border py-5">
      <div className="container-retail">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-ag-text-muted shrink-0">
            Certified Quality Standards
          </h3>
          <div className="h-px flex-1 bg-ag-border hidden md:block" />
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {certs.map((cert: any) => (
              <div key={cert.title} className="px-4 py-1.5 border border-ag-border text-[10px] font-body font-semibold text-ag-text-muted uppercase tracking-wider hover:border-ag-gold hover:text-ag-primary transition-all cursor-default">
                {cert.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
