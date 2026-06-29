"use client";

import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  if (reducedMotion) {
    return (
      <div
        className="hero-animate hero-animate-delay-1 absolute inset-0 bg-navy-900"
        aria-hidden
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="hero-animate hero-animate-delay-1 absolute inset-0 h-full w-full object-cover"
      aria-hidden
    >
      <source src="/videos/animate_it.mp4" type="video/mp4" />
    </video>
  );
}
