"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
     
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* OUTER RING */}
      <div
        className="fixed w-10 h-10 rounded-full border border-blue-500/50 pointer-events-none z-[9998] shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* INNER DOT */}
      <div
        className="fixed w-3 h-3 rounded-full bg-blue-500 pointer-events-none z-[9999] shadow-[0_0_30px_rgba(59,130,246,0.9)]"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}