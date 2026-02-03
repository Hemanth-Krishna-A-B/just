"use client";

import { useState, useMemo } from "react";

export default function DesktopView() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [celebrate, setCelebrate] = useState(false);
  const [heart, setHeart] = useState("💗");
  const [data, setData] = useState("Anagha,\nwill you be my Valentine? 💘");
  // Generate hearts only once


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

  const moveNoButton = () => {
    if (celebrate) return; // stop moving after yes click

    const buttonWidth = 120;
    const buttonHeight = 50;

    const maxX = window.innerWidth / 2 - buttonWidth / 2;
    const maxY = window.innerHeight / 2 - buttonHeight / 2;

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 200;

    let x = Math.cos(angle) * distance;
    let y = Math.sin(angle) * distance;

    x = Math.max(-maxX, Math.min(maxX, x));
    y = Math.max(-maxY, Math.min(maxY, y));

    setPos({ x, y });
  };

  const handleYesClick = () => {
    setHeart("🩵 💞 💚 ❤️ 💕 💜")
    setData("Yeah!!!!!!! 😍")
    setCelebrate(true);
  };

  return (
    <main className={`container ${celebrate ? "celebrate" : ""}`}>
      {/* Floating hearts */}
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
            {heart}
          </span>
        ))}
      </div>

      <h1 className="title">
        {data.split("\n").map((line, index) => (
          <span key={index} className="line">
            {line}
          </span>
        ))}
      </h1>


      {/* Celebration GIF */}
      {celebrate && (
        <div className="gif-container">
          <img src="/1.gif" alt="Celebration GIF" />
        </div>
      )}

      {/* Buttons */}
      {!celebrate && (
        <div className="buttons">
          <button className="yes" onClick={handleYesClick}>
            Yes 💖
          </button>

          <button
            className="no"
            onMouseMove={moveNoButton}
            style={{
              transform: `translate(${pos.x}px, ${pos.y}px)`,
            }}
          >
            No 🥺
          </button>
        </div>
      )}
  
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

      <style jsx>{`
        .container {
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #fad0c4 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Fireworks overlay */
        .celebrate::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 2%, transparent 2%) 0 0 / 10px 10px;
          animation: fireworks 0.6s linear infinite;
        }

        .title {
          font-size: 3rem;
          color: #fff;
          margin-bottom: 20px;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          animation: fadeIn 1.2s ease;
        }

        .gif-container {
          margin-top: 20px;
          animation: fadeIn 1s ease forwards;
        }

        .gif-container img {
          width: 300px;
          max-width: 80vw;
          border-radius: 20px;
        }

        .buttons {
          position: relative;
          width: 320px;
          height: 120px;
          margin-top: 40px;
        }

        button {
          padding: 16px 36px;
          font-size: 22px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          position: absolute;
          transition: transform 0.15s ease, box-shadow 0.2s ease;
        }

        .yes {
          left: 0;
          background: linear-gradient(135deg, #ff4d6d, #ff758f);
          color: #fff;
          box-shadow: 0 12px 35px rgba(255, 77, 109, 0.6);
          animation: pulse 1.8s infinite;
        }

        .yes:hover {
          transform: scale(1.1);
          box-shadow: 0 18px 45px rgba(255, 77, 109, 0.8);
        }

        .no {
          right: 0;
          background: rgba(0, 0, 0, 0.45);
          color: #fff;
          backdrop-filter: blur(6px);
          cursor: not-allowed;
          transition: transform 0.08s linear;
        }

        /* Floating hearts */
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

        @keyframes pulse {
          50% {
            transform: scale(1.08);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fireworks {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 10px 10px;
          }
        }
      `}</style>
    </main>
  );
}
