"use client";

import { useEffect, useState } from "react";

export default function InitialLoader() {
  const [show, setShow] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.__gameplayzVisited) {
        setShow(false);
        return;
      }
      if (typeof window !== "undefined") {
        window.__gameplayzVisited = true;
      }
    } catch (e) {
      console.warn("window flag unavailable, continuing with animation");
    }

    const VERT_MS = 1500; // increased for 2 spins
    const GAP_MS = 120;
    const HORIZ_MS = 800;
    const FADE_MS = 500;
    const TOTAL_MS = VERT_MS + GAP_MS + HORIZ_MS + 600;

    const revealTimer = setTimeout(() => setReveal(true), 50);
    const fadeTimer = setTimeout(() => setFadeOut(true), TOTAL_MS);
    const hideTimer = setTimeout(() => setShow(false), TOTAL_MS + FADE_MS);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`loader-overlay ${fadeOut ? "fade-out" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 100%)",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3.5rem",
        fontWeight: "bold",
        fontFamily: "system-ui, sans-serif",
        zIndex: 9999,
        overflow: "hidden",
        transition: "opacity 500ms ease-out",
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Rubik+80s+Fade&display=swap');

        .rubik-80s-fade {
          font-family: "Rubik 80s Fade", system-ui;
          font-weight: 400;
          font-style: normal;
          letter-spacing: 0.1px;
        }

        .loader-overlay {
          opacity: 1;
        }
        .loader-overlay.fade-out {
          opacity: 0;
        }

        @keyframes moveUpAndSpin {
          0% {
            transform: translate(-50%, 150%) rotate(0deg) scale(0.85);
            filter: drop-shadow(0 0 0px rgba(161, 67, 244, 0));
          }
          30% {
            filter: drop-shadow(0 0 18px rgba(161, 67, 244, 0.7));
          }
          60% {
            filter: drop-shadow(0 0 20px rgba(161, 67, 244, 0.8));
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) scale(1);
            filter: drop-shadow(0 0 8px rgba(161, 67, 244, 0.4));
          }
        }

        @keyframes slideLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-3.8ch);
          }
        }

        @keyframes fadeInLetter {
          0% {
            opacity: 0;
            transform: translateX(-0.3ch) scale(0.92);
            filter: blur(2px) drop-shadow(0 0 0px rgba(161, 67, 244, 0));
          }
          100% {
            opacity: 1;
            transform: translateX(0.3ch) scale(1);
            filter: blur(0) drop-shadow(0 0 8px rgba(161, 67, 244, 0.5));
          }
        }

        @keyframes fadeInWrapper {
          to {
            opacity: 1;
          }
        }

        .wrapper {
          position: relative;
          display: inline-block;
          animation: fadeInWrapper 200ms ease-out forwards;
          animation-delay: 150ms;
        }

        .g-outer {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, 150%) rotate(0deg) scale(0.85);
          transform-origin: center center;
          will-change: transform, filter;
          animation: moveUpAndSpin 1500ms ease-out forwards;
        }

        .g-inner {
          display: inline-block;
          transform: translateX(0);
          will-change: transform;
          animation: slideLeft 850ms cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
          animation-delay: 1620ms; /* starts after 2 spins complete */
        }

        .g-letter {
          display: inline-block;
          opacity: 1;
        }

        .letters {
          display: inline-block;
        }
        .letter {
          display: inline-block;
          opacity: 0;
          will-change: opacity, transform, filter;
        }

        .reveal .letter {
          animation: fadeInLetter 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .reveal .a  { animation-delay: 1600ms; }
        .reveal .m  { animation-delay: 1700ms; }
        .reveal .e  { animation-delay: 1800ms; }
        .reveal .p  { animation-delay: 1900ms; }
        .reveal .l  { animation-delay: 2000ms; }
        .reveal .a2 { animation-delay: 2100ms; }
        .reveal .y  { animation-delay: 2200ms; }
        .reveal .z  { animation-delay: 2300ms; }
      `}</style>

      <div
        className={`wrapper ${reveal ? "reveal" : ""} rubik-80s-fade`}
        style={{ opacity: 0 }}
      >
        <span className="g-outer" aria-hidden="true">
          <span className="g-inner">
            <span className="g-letter">G</span>
          </span>
        </span>

        <span className="letters" aria-hidden="true">
          <span className="letter a">a</span>
          <span className="letter m">m</span>
          <span className="letter e">e</span>
          <span className="letter p">p</span>
          <span className="letter l">l</span>
          <span className="letter a2">a</span>
          <span className="letter y">y</span>
          <span className="letter z">z</span>
        </span>
      </div>
    </div>
  );
}