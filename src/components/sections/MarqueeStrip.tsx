export default function MarqueeStrip() {
  const items = [
    "SURFACE SPORTS",
    "WATER SPORTS",
    "SMALL SPORTS",
    "BUDGET SPORTS",
    "SPORTS ACADEMIES",
    "PLAY ZONES",
    "ADVENTURE SPORTS GAMES",
    "CHALLENGE COURSES",
    "TALENT SCOUT CLUBS",
  ];

  return (
    <div className="bg-ag-bg-alt border-y border-ag-border py-3 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 px-6">
            {items.map((item) => (
              <span
                key={item}
                className="font-body font-semibold text-ag-text-muted/50 text-[11px] tracking-[0.25em] flex items-center gap-12"
              >
                {item}
                <span className="w-1 h-1 rounded-full bg-ag-gold/40 inline-block" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
