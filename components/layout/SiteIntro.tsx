"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";

const INTRO_SEEN_KEY = "shefa-intro-seen";

export default function SiteIntro() {
  const [phase, setPhase] = useState<"hidden" | "enter" | "exit">("enter");
  const [visible, setVisible] = useState(false);

  const finishIntro = () => {
    document.body.classList.add("site-ready");
    sessionStorage.setItem(INTRO_SEEN_KEY, "1");
    setPhase("exit");
    window.setTimeout(() => setVisible(false), 600);
  };

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const alreadySeen = sessionStorage.getItem(INTRO_SEEN_KEY);

    if (reducedMotion || alreadySeen) {
      document.body.classList.add("site-ready");
      setVisible(false);
      setPhase("hidden");
      return;
    }

    document.body.classList.remove("site-ready");
    setVisible(true);

    const exitTimer = window.setTimeout(finishIntro, 2200);

    return () => window.clearTimeout(exitTimer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`site-intro ${phase === "exit" ? "site-intro-exit" : ""}`}
      role="presentation"
      aria-hidden={phase === "exit"}
      onClick={finishIntro}
      onKeyDown={(e) => e.key === "Escape" && finishIntro()}
    >
      <div className="site-intro-content">
        <Image
          src="/images/shefa-logo.png"
          alt=""
          width={360}
          height={104}
          priority
          className="site-intro-logo h-auto max-h-28 w-auto object-contain sm:max-h-32"
        />
        <p className="site-intro-tagline">
          Strategic Connections. Sustainable Growth.
        </p>
        <div className="site-intro-line" aria-hidden />
      </div>
      <p className="site-intro-skip">Click to skip</p>
    </div>
  );
}
