"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface FloatCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function FloatCard({ children, className, delay = 0 }: FloatCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // T3 - Magnetic Hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.12;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.12;

      gsap.to(card, {
        x,
        y,
        rotateX: -y * 0.3,
        rotateY: x * 0.3,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-panel p-8 animate-float ${className || ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
