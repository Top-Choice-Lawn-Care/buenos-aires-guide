"use client";
import { useState, useEffect } from "react";

const SECTIONS = [
  { id: "neighborhoods", label: "Barrios", emoji: "🏘️" },
  { id: "history", label: "History", emoji: "📜" },
  { id: "wine", label: "Wine", emoji: "🍷" },
  { id: "food", label: "Food", emoji: "🥩" },
  { id: "tips", label: "Tips", emoji: "💡" },
  { id: "cordoba", label: "Córdoba", emoji: "🏛️" },
  { id: "resources", label: "Reads", emoji: "📚" },
];

export default function StickyNav() {
  const [active, setActive] = useState("neighborhoods");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky-nav">
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3 pb-1">
        <div className="flex items-center gap-2">
          <span className="text-xl">🇦🇷</span>
          <span className="font-bold text-amber-400 text-sm tracking-wide">NOLAN'S GUIDE</span>
        </div>
        <div className="text-xs text-gray-500 font-medium">Mar 2–7, 2026</div>
      </div>
      {/* Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide pb-2 px-2 gap-1">
        {SECTIONS.map(({ id, label, emoji }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              setActive(id);
            }}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              active === id
                ? "bg-amber-500 text-gray-900"
                : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
            }`}
          >
            <span>{emoji}</span>
            <span>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
