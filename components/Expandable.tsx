"use client";
import { useState, useRef, useEffect } from "react";

interface ExpandableProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accent?: "amber" | "red";
  className?: string;
  headerClassName?: string;
}

export default function Expandable({
  title,
  children,
  defaultOpen = false,
  accent = "amber",
  className = "",
  headerClassName = "",
}: ExpandableProps) {
  const [open, setOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(defaultOpen ? "auto" : "0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [open]);

  const barColor = accent === "red" ? "bg-red-600" : "bg-amber-500";

  return (
    <div className={`card ${className}`}>
      <button
        className={`w-full text-left p-4 flex items-center gap-3 expandable-header ${headerClassName}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className={`${barColor} w-1 self-stretch rounded-full flex-shrink-0`} />
        <span className="flex-1 font-semibold text-gray-100">{title}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        style={{ maxHeight: height, opacity: open ? 1 : 0 }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef} className="px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
