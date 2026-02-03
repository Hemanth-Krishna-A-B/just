"use client";

import { useMemo } from "react";

export default function MobileView() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        left: Math.random() * 100,
        duration: 6 + Math.random() * 6,
        size: 18 + Math.random() * 14,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <main className="scene">
      <div className="hearts">
        {hearts.map((h, i) => (
          <span
            key={i}
            style={{
              left: `${h.left}%`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              fontSize: `${h.size}px`,
            }}
          >
            💗
          </span>
        ))}
      </div>

      <div className="center-text">
        <h1>Open this on Desktop, my Cutiee Pie 💖</h1>
        <p>For the full experience ✨</p>
      </div>

      {/* GLOBAL RESET */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          width: 100%;
          height: 100%;
          overflow: hidden;
          font-family: "Poppins", sans-serif;
        }
      `}</style>

      {/* COMPONENT STYLES */}
      <style jsx>{`
        .scene {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background: radial-gradient(circle at center, #0f1220, #05060a);
          position: relative;
          font-family: "Poppins", sans-serif;
        }

        .hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .hearts span {
          position: absolute;
          bottom: -30px;
          animation: floatUp linear infinite;
          opacity: 0.8;
        }

        @keyframes floatUp {
          from {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translateY(-120vh) scale(1.5);
            opacity: 0;
          }
        }

        .center-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #ffffff;
          z-index: 10;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }

        .center-text h1 {
          font-size: 28px;
          font-weight: 700;
        }

        .center-text p {
          margin-top: 10px;
          font-size: 16px;
          opacity: 0.8;
        }
      `}</style>
    </main>
  );
}
