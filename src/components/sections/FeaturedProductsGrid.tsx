import Link from "next/link";

const featured = [
  {
    id: "1",
    label: "Surface sports",
    desc: "Synthetic turf, running tracks & multi-sport courts",
    image: "/images/sports/surface_sports.png",
    href: "/products?category=surface-sports",
    count: "12 products",
    tall: true,
  },
  {
    id: "2",
    label: "Water sports",
    desc: "Kayaking lanes, pool decking & aquatic gear",
    image: "/images/sports/water_sports.png",
    href: "/products?category=water-sports",
    count: "8 products",
    tall: false,
  },
  {
    id: "3",
    label: "Small sports",
    desc: "Badminton, table tennis & squash setups",
    image: "/images/sports/small_sports.png",
    href: "/products?category=small-sports",
    count: "15 products",
    tall: false,
  },
  {
    id: "4",
    label: "Budget sports",
    desc: "Cost-effective solutions for schools & communities",
    image: "/images/sports/budget_sports.png",
    href: "/products?category=budget-sports",
    count: "20 products",
    tall: false,
  },
  {
    id: "5",
    label: "Adventure sports games",
    desc: "Climbing walls, rope courses & obstacle setups",
    image: "/images/sports/adventure_sports.png",
    href: "/products?category=adventure-sports",
    count: "7 products",
    tall: true,
  },
  {
    id: "6",
    label: "Play zones",
    desc: "Premium children's play areas & soft surfaces",
    image: "/images/sports/play_zones.png",
    href: "/products?category=play-zones",
    count: "10 products",
    tall: false,
  },
];

function PortfolioCard({ item, className }: { item: any; className: string }) {
  return (
    <Link href={item.href} className={`group relative rounded-[2rem] overflow-hidden flex flex-col ${className}`}>
      {/* Background image */}
      <img src={item.image} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent transition-opacity duration-300 group-hover:from-[#0B0F19]/90" />

      {/* Top Badges */}
      <div className="relative z-10 flex justify-between items-start p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {/* Blue Badge */}
        <div className="bg-[#3B82F6] text-white text-[10px] md:text-[11px] font-bold tracking-widest px-3 py-1.5 md:px-4 rounded-full flex items-center gap-1.5 shadow-sm">
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm" />
          {item.count.toUpperCase()}
        </div>
        
        {/* Top Right Arrow */}
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:border-white/50 group-hover:text-white transition-colors duration-300 bg-white/5 backdrop-blur-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>

      <div className="flex-1" />

      {/* Content */}
      <div className="relative z-10 p-5 md:p-6 pt-0">
        <h3 className="text-2xl md:text-[28px] lg:text-[32px] font-body font-black text-white mb-2 leading-tight tracking-tight capitalize">
          {item.label}
        </h3>
        <p className="text-[13px] md:text-[15px] font-body text-white/80 mb-4 md:mb-5 leading-relaxed line-clamp-2">
          {item.desc}
        </p>
        
        <div className="flex items-center gap-2 text-[#3B82F6] font-[900] tracking-widest text-xs md:text-sm uppercase group-hover:text-blue-400 transition-colors">
          EXPLORE
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProductsGrid() {
  return (
    <section className="section-sm bg-ag-bg border-t border-ag-border">
      <div className="container-retail">
        {/* Section header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-[10px] font-body uppercase tracking-[0.3em] text-ag-text-muted mb-1">Our Portfolio</p>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-ag-text">
              Every Sport, <em className="text-ag-gold font-normal italic">Elevated.</em>
            </h2>
          </div>
          <Link href="/products" className="text-[11px] font-body uppercase tracking-widest text-ag-text-muted hover:text-ag-primary flex items-center gap-1 transition-colors">
            View All <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[250px]">
          {/* Surface sports - Large (Spans 2 rows) */}
          <PortfolioCard item={featured[0]} className="col-span-12 md:col-span-6 row-span-2 h-auto" />

          {/* Water sports - Medium */}
          <PortfolioCard item={featured[1]} className="col-span-12 sm:col-span-6 md:col-span-6 row-span-1 h-[200px] md:h-auto" />

          {/* Small sports - Small */}
          <PortfolioCard item={featured[2]} className="col-span-6 md:col-span-3 row-span-1 h-[200px] md:h-auto" />

          {/* Budget sports - Small */}
          <PortfolioCard item={featured[3]} className="col-span-6 md:col-span-3 row-span-1 h-[200px] md:h-auto" />

          {/* Adventure sports - Wide */}
          <PortfolioCard item={featured[4]} className="col-span-12 md:col-span-8 row-span-1 h-[200px] md:h-auto" />

          {/* Play zones - Medium */}
          <PortfolioCard item={featured[5]} className="col-span-12 md:col-span-4 row-span-1 h-[200px] md:h-auto" />
        </div>

        {/* Trust bar */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            { label: "Certified Quality", sub: "ISO 9001:2015 Approved" },
            { label: "Global Quality Standards", sub: "FIFA & FIBA Approved Specs" },
            { label: "Expert Installation", sub: "Qualified Technical Teams" },
          ].map(({ label, sub }) => (
            <div key={label} className="flex items-center gap-3 p-4 bg-white border border-ag-border">
              <div className="w-8 h-8 rounded-full bg-ag-primary/5 flex items-center justify-center text-ag-primary shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <div>
                <p className="text-xs font-body font-semibold text-ag-text">{label}</p>
                <p className="text-[10px] font-body text-ag-text-muted">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
