import StickyNav from "@/components/StickyNav";
import Neighborhoods from "@/components/Neighborhoods";
import History from "@/components/History";
import Wine from "@/components/Wine";
import Food from "@/components/Food";
import TravelTips from "@/components/TravelTips";
import Cordoba from "@/components/Cordoba";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#09090d" }}>
      <StickyNav />

      {/* Hero */}
      <div className="relative px-4 pt-6 pb-8 overflow-hidden">
        {/* Background accent */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background:
              "radial-gradient(ellipse at top, #f59e0b22 0%, transparent 60%), radial-gradient(ellipse at bottom right, #dc262611 0%, transparent 50%)",
          }}
        />
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">🇦🇷</span>
            <div
              className="h-0.5 flex-1 opacity-30"
              style={{
                background: "linear-gradient(to right, #74b9e7, #ffffff, #74b9e7)",
              }}
            />
          </div>
          <h1 className="text-3xl font-black text-white leading-tight mb-1">
            Buenos Aires
          </h1>
          <h2 className="text-lg font-semibold" style={{ color: "#f59e0b" }}>
            & Córdoba — Nolan's Guide
          </h2>

          {/* Trip timeline */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {[
              { date: "Mar 2", label: "Arrive BA", icon: "✈️", active: true },
              { date: "Mar 2–3", label: "Buenos Aires", icon: "🏙️", active: true },
              { date: "Mar 4", label: "→ Córdoba", icon: "🛫", active: false },
              { date: "Mar 4–7", label: "Córdoba", icon: "🏛️", active: false },
            ].map((stop) => (
              <div
                key={stop.date}
                className={`flex-shrink-0 rounded-xl px-3 py-2 border ${
                  stop.active
                    ? "border-amber-500/50 bg-amber-950/30"
                    : "border-white/10 bg-white/3"
                }`}
              >
                <div className="text-lg">{stop.icon}</div>
                <div
                  className={`text-xs font-bold mt-0.5 ${
                    stop.active ? "text-amber-300" : "text-gray-400"
                  }`}
                >
                  {stop.date}
                </div>
                <div className="text-xs text-gray-500">{stop.label}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            A personal guide built for a specific trip by someone who wanted to know the real story — not just where to eat, but why this country is the way it is.
          </p>
        </div>
      </div>

      {/* Argentina flag stripe */}
      <div className="flex h-1 mb-2">
        <div className="flex-1" style={{ background: "#75AADB" }} />
        <div className="flex-1" style={{ background: "#ffffff" }} />
        <div className="flex-1" style={{ background: "#75AADB" }} />
      </div>

      {/* Main content */}
      <main className="px-4 pb-20 space-y-12 max-w-2xl mx-auto">
        <Neighborhoods />
        <History />
        <Wine />
        <Food />
        <TravelTips />
        <Cordoba />
        <Resources />
      </main>

      {/* Footer */}
      <footer className="text-center py-8 px-4 border-t border-white/5">
        <div className="text-2xl mb-2">🇦🇷</div>
        <p className="text-xs text-gray-600">Built for Nolan's Argentina trip, March 2026</p>
        <p className="text-xs text-gray-700 mt-1">¡Buen viaje!</p>
      </footer>
    </div>
  );
}
