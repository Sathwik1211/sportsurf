"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
}

function Counter({ end, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={elementRef}>
      <span className="font-heading font-bold text-ag-primary text-3xl md:text-4xl leading-none">
        {count}{suffix}
      </span>
    </div>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 18, suffix: "+", label: "States Served" },
  { value: 200, suffix: "+", label: "Institutional Clients" },
  { value: 10, suffix: "+", label: "Years of Trust" },
];

export default function StatsCounter({ settings }: { settings: any }) {
  let dynamicStats = stats;
  try {
    if (settings?.statsJson) dynamicStats = JSON.parse(settings.statsJson);
  } catch (err) {
    console.error("Failed to parse statsJson:", err);
  }

  return (
    <section className="bg-ag-primary py-8 border-t border-b border-ag-primary">
      <div className="container-retail">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-x divide-white/10">
          {dynamicStats.map((stat: any, i: number) => (
            <div key={stat.label} className={`flex flex-col items-center text-center py-1 ${i > 0 ? "pl-6" : ""}`}>
              <div className="text-ag-gold">
                <span className="font-heading font-bold text-3xl md:text-4xl leading-none text-white">
                  {stat.value}{stat.suffix || "+"}
                </span>
              </div>
              <span className="font-body text-white/60 text-[10px] uppercase tracking-[0.2em] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
