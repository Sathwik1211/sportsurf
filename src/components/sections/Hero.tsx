"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px] overflow-hidden bg-ag-bg flex flex-col justify-end pt-[152px]">
      {/* Background Image - Premium Sports Infrastructure */}
      <img
        src="/images/sports/premium_sports_hero.png"
        alt="Premium Indian Sports Infrastructure"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Subtle Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-[100px]">
        {/* Main Headline */}
        <h1 
          className="font-body font-black text-white leading-[1.1] tracking-tight mb-4"
          style={{ 
            fontSize: "clamp(2rem, 5vw, 4.5rem)", 
            textShadow: "0 2px 10px rgba(0,0,0,0.5)" 
          }}
        >
          YOUR COMPLETE GUIDE TO<br />
          SPORTS INFRASTRUCTURE
        </h1>

        {/* Sub-headline */}
        <p 
          className="font-body font-bold text-white tracking-widest uppercase"
          style={{ 
            fontSize: "clamp(0.9rem, 1.5vw, 1.25rem)",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)" 
          }}
        >
          SURFACES + EQUIPMENT
        </p>
      </div>
    </section>
  );
}
