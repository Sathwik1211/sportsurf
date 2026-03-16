"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageCurtain() {
  const curtainRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const tl = gsap.timeline();

    tl.to(curtainRef.current, {
      scaleX: 1,
      transformOrigin: "left center",
      duration: 0.55,
      ease: "power3.inOut",
    })
    .to(curtainRef.current, {
      scaleX: 0,
      transformOrigin: "right center",
      duration: 0.45,
      ease: "power3.inOut",
      delay: 0.1,
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 bg-ag-electric z-[9999] scale-x-0 pointer-events-none"
      id="curtain"
    />
  );
}
