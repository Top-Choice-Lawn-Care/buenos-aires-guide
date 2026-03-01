"use client";
import Expandable from "./Expandable";

export default function Hotel() {
  return (
    <section id="hotel" className="space-y-4">
      <h2 className="section-title">🏨 Your Hotel</h2>

      {/* Hotel header card */}
      <div className="card p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="text-xs text-amber-400/70 uppercase tracking-wider font-semibold mb-1">Where you're staying</div>
            <h3 className="text-xl font-black text-white leading-tight">Fierro Hotel Boutique</h3>
            <p className="text-sm text-gray-400 mt-0.5">Soler 5862 · Palermo Hollywood · Buenos Aires</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="pill bg-green-500/20 text-green-300 text-xs">9.6 / 10 on Booking</span>
              <span className="pill bg-amber-500/20 text-amber-300 text-xs">Location 9.3/10</span>
            </div>
          </div>
          <div className="text-4xl">🏩</div>
        </div>

        {/* Quick facts row */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[
            { icon: "🏊", label: "Rooftop Pool", sub: "Heated, outdoor" },
            { icon: "🍽️", label: "UCO Restaurant", sub: "On-site, acclaimed" },
            { icon: "🌿", label: "Garden Patio", sub: "Breakfast al fresco" },
          ].map((item) => (
            <div key={item.label} className="bg-white/3 rounded-lg p-2.5 text-center">
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="text-xs font-semibold text-gray-200 leading-tight">{item.label}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-tight">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Merlin recommends it */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">🧙</span>
            <div>
              <div className="font-bold text-gray-100">Why This Hotel</div>
              <div className="text-xs text-amber-400/70">Merlin's take</div>
            </div>
          </div>
        }
        defaultOpen={true}
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          <div className="bg-amber-950/30 border border-amber-700/30 rounded-lg p-3">
            <p className="text-sm text-amber-200 leading-relaxed">
              Fierro is what a boutique hotel should be: <strong className="text-amber-300">small (27 rooms), genuinely excellent, and in the right neighborhood.</strong> It's been setting the standard in Palermo Hollywood since 2010 and still earns it.
            </p>
          </div>
          <ul className="space-y-2">
            {[
              { icon: "📍", tip: "Palermo Hollywood is the best base in Buenos Aires. Leafy streets, walkable, safe, loaded with restaurants and bars. You can explore on foot and be in the thick of it." },
              { icon: "🛏️", tip: "All rooms are suites with balconies. Big, modern, well-furnished. Rainfall showers. No bathtubs (just noting it)." },
              { icon: "🏊", tip: "Rooftop heated pool. In early March, Buenos Aires is late summer — hot. This is a feature you'll actually use." },
              { icon: "🥩", tip: "Don Julio — arguably the best parrilla (steakhouse) in the city — is 15 min on foot or a $3 Uber from your door. That's not an accident. You're in steak country." },
              { icon: "☕", tip: "Ask for breakfast in the garden patio when weather allows. It's a private courtyard — unusually calm for the middle of a city." },
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="flex-shrink-0 text-base">{item.icon}</span>
                <span className="leading-relaxed">{item.tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Expandable>

      {/* UCO Restaurant */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">🍽️</span>
            <div className="font-bold text-gray-100">UCO Restaurant (on-site)</div>
          </div>
        }
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          <p className="text-sm text-gray-300 leading-relaxed">
            UCO is Fierro's in-house restaurant and it punches well above the typical "hotel restaurant" category. Argentine wine-focused, seasonal menu, good breakfast service.
          </p>
          <ul className="space-y-2">
            {[
              { label: "Breakfast", desc: "Worth having here at least once — especially in the garden. Included or add-on depending on your rate." },
              { label: "Dinner", desc: "Good but optional — you're in one of the best restaurant neighborhoods in the city. Use it as a backup when you're tired, not as the default plan." },
              { label: "Wine list", desc: "Argentina-forward, which is the right call. Malbec, Torrontés, Bonarda. Use it to explore if you haven't already (more in the Wine section)." },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 bg-white/3 rounded-lg p-3">
                <div className="flex-shrink-0">
                  <span className="pill bg-amber-500/20 text-amber-300 text-xs">{item.label}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </ul>
        </div>
      </Expandable>

      {/* Neighborhood context */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <div className="font-bold text-gray-100">Palermo Hollywood — Your Neighborhood</div>
          </div>
        }
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          <p className="text-sm text-gray-300 leading-relaxed">
            Palermo is the largest neighborhood in Buenos Aires, and it's divided into sub-barrios. You're in <strong className="text-gray-100">Palermo Hollywood</strong> (north section), named after the TV production companies that set up here in the 90s.
          </p>
          <div className="grid grid-cols-1 gap-2">
            {[
              {
                name: "Palermo Hollywood",
                icon: "📍",
                color: "border-amber-700/40 bg-amber-950/20",
                badge: "You're here",
                badgeColor: "bg-amber-500/20 text-amber-300",
                desc: "Bohemian, street-art-covered, restaurant-packed. Safe to walk at night. The kind of neighborhood that's legitimately cool without trying hard about it.",
              },
              {
                name: "Palermo Soho",
                icon: "🛍️",
                color: "border-white/10 bg-white/3",
                badge: "10 min south",
                badgeColor: "bg-gray-500/20 text-gray-400",
                desc: "Boutique shops, design stores, more cafés and restaurants. Worth a walk. More touristy than Hollywood but still excellent.",
              },
              {
                name: "Recoleta",
                icon: "⚰️",
                color: "border-white/10 bg-white/3",
                badge: "20 min Uber",
                badgeColor: "bg-gray-500/20 text-gray-400",
                desc: "Old-money neighborhood. Evita's tomb. Beautiful architecture. Worth a half-day visit.",
              },
            ].map((area) => (
              <div key={area.name} className={`rounded-lg p-3 border ${area.color}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">{area.icon}</span>
                  <span className="font-semibold text-gray-200 text-sm">{area.name}</span>
                  <span className={`pill text-xs ${area.badgeColor}`}>{area.badge}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-950/30 border border-blue-800/30 rounded-lg p-3">
            <p className="text-xs text-blue-300 leading-relaxed">
              <strong className="text-blue-200">Hotel tip:</strong> Ask the front desk for their recommended casa de cambio (money exchange). Fierro staff know the neighborhood and will point you somewhere reputable. This is completely normal to ask.
            </p>
          </div>
        </div>
      </Expandable>

      {/* Practical details */}
      <div className="card p-4 space-y-3">
        <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider">Practical Info</h3>
        <div className="space-y-2">
          {[
            { emoji: "📅", label: "Check-in / Check-out", tip: "In: Feb 3 (that's March 2, 2026) · Out: April 3 (that's April 3, 2026) — per the reservation. Confirm times with the hotel directly." },
            { emoji: "📞", label: "Hotel Phone", tip: "+54 11 3220-6800 · Website: fierrohotel.com" },
            { emoji: "🗺️", label: "Address", tip: "Soler 5862, Palermo, Buenos Aires C1425BYJ · Tell Uber exactly this." },
            { emoji: "🚕", label: "From EZE Airport", tip: "~40–50 min by Uber or $20–25 USD. Remis (hotel car) is ~$30–35 USD but zero stress. Ask the hotel to arrange one if you want." },
            { emoji: "💵", label: "Cash Exchange", tip: "Ask front desk for their recommended casa de cambio. This is completely normal and they'll know a good one nearby." },
            { emoji: "🏊", label: "Rooftop Pool", tip: "Heated outdoor pool on the roof terrace. Early March in BA = late summer, high 70s/low 80s°F. You'll want to go up." },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 bg-white/3 rounded-lg p-3">
              <span className="text-lg flex-shrink-0">{item.emoji}</span>
              <div>
                <div className="font-semibold text-gray-200 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
