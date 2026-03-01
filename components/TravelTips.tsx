"use client";
import Expandable from "./Expandable";

const PHRASES = [
  { es: "Por favor / Gracias", en: "Please / Thank you", note: "Non-negotiable. Use them constantly." },
  { es: "¿Cuánto cuesta?", en: "How much does it cost?", note: "Market, taxi, anything." },
  { es: "¿Dónde está el baño?", en: "Where is the bathroom?", note: "Critical." },
  { es: "Una mesa para dos, por favor", en: "A table for two, please", note: "Add 'afuera' for outside." },
  { es: "La cuenta, por favor", en: "The check, please", note: "Waiters don't bring it automatically." },
  { es: "¿Tiene efectivo o tarjeta?", en: "Do you take cash or card?", note: "Many places prefer cash." },
  { es: "No entiendo / No hablo español", en: "I don't understand / I don't speak Spanish", note: "Disarming. People are usually kind." },
  { es: "¿Me puede ayudar?", en: "Can you help me?", note: "Works everywhere." },
  { es: "Boludo", en: "(roughly) dude / idiot", note: "Ubiquitous Argentine slang. Context-dependent from term of endearment to insult. Don't lead with it." },
  { es: "Che", en: "Hey / listen", note: "Argentine filler word. 'Che, mirá esto.' Yes, Che Guevara's nickname came from this." },
];

export default function TravelTips() {
  return (
    <section id="tips" className="space-y-4">
      <h2 className="section-title">💡 Travel Tips</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        Practical things that will make Buenos Aires easier and cheaper.
      </p>

      {/* Currency */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">💵</span>
            <div>
              <div className="font-bold text-gray-100">Currency & The Dollar</div>
              <div className="text-xs text-amber-400/70">The most important section to read</div>
            </div>
          </div>
        }
        defaultOpen={true}
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          <div className="bg-amber-950/30 border border-amber-700/30 rounded-lg p-3">
            <p className="text-sm text-amber-200 font-semibold leading-relaxed">
              Bring USD cash. Clean, unfolded bills. Post-2013 preferred. $100 bills get the best rates. This is how you save 30–50% on everything.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {[
              {
                label: "Official Rate",
                color: "bg-red-950/40 border-red-800/30",
                badge: "Avoid",
                badgeColor: "bg-red-500/20 text-red-300",
                desc: "What banks and ATMs give you. Highly unfavorable. Airport exchange is even worse.",
              },
              {
                label: "Blue Dollar Rate",
                color: "bg-green-950/40 border-green-800/30",
                badge: "Use this",
                badgeColor: "bg-green-500/20 text-green-300",
                desc: "Informal market rate. Under Milei the gap has narrowed but you still get a better rate at casas de cambio (money exchange houses). Ask your hotel which one they recommend — it's completely common to do this.",
              },
            ].map((item) => (
              <div key={item.label} className={`rounded-lg p-3 border ${item.color}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-gray-200">{item.label}</span>
                  <span className={`pill text-xs ${item.badgeColor}`}>{item.badge}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <ul className="space-y-2">
            {[
              "Do NOT exchange money at EZE airport — worst possible rate",
              "Ask your hotel for a recommended casa de cambio (legal exchange houses near Florida St. downtown are common)",
              "Current approximate rate: check xe.com or the blue rate — always compare before exchanging",
              "Cards work at restaurants and shops but you get the official rate. Cash at the casa de cambio, then spend pesos everywhere",
              "ATMs in Argentina dispense pesos at terrible rates and charge high fees. Not recommended.",
            ].map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="text-amber-500 flex-shrink-0">→</span>
                <span className="leading-relaxed text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Expandable>

      {/* Safety */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">🔒</span>
            <div className="font-bold text-gray-100">Safety</div>
          </div>
        }
        accent="red"
      >
        <div className="space-y-3 pt-1">
          <p className="text-sm text-gray-300 leading-relaxed">
            Buenos Aires is a large Latin American city with the associated crime patterns. It is not especially dangerous by global standards, but tourist-targeted theft (phone snatching, pickpocketing) is common in specific contexts.
          </p>
          <ul className="space-y-2">
            {[
              { icon: "📱", tip: "Keep your phone in your pocket on the street, especially in tourist areas. Calle Florida, the touristy strip of San Telmo, and around La Boca are prime pickpocket zones." },
              { icon: "💰", tip: "Don't carry large amounts of cash at once. Exchange in batches." },
              { icon: "🌙", tip: "La Boca: daytime only, main tourist street only. Do not wander after dark." },
              { icon: "🚕", tip: "Use Uber (the app works; drivers sometimes ask you to sit in front to look less like a driver-passenger situation) or remis (private car service, ask hotel). Regular street taxis are generally fine but Uber is safer." },
              { icon: "👀", tip: "Trust your instincts. If a street feels sketchy at night, it probably is. The core tourist neighborhoods (Palermo, Recoleta, San Telmo) are generally fine with normal awareness." },
              { icon: "💳", tip: "Use a money belt or neck pouch if carrying significant cash for exchange." },
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-300">
                <span className="flex-shrink-0 text-base">{item.icon}</span>
                <span className="leading-relaxed">{item.tip}</span>
              </li>
            ))}
          </ul>
          <div className="bg-green-950/30 border border-green-800/30 rounded-lg p-3">
            <p className="text-xs text-green-300 leading-relaxed">
              Overall: Buenos Aires is very livable and navigable. Millions of tourists visit annually without incident. Normal urban awareness goes a long way.
            </p>
          </div>
        </div>
      </Expandable>

      {/* Getting Around */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">🚇</span>
            <div className="font-bold text-gray-100">Getting Around</div>
          </div>
        }
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          {[
            {
              mode: "Uber",
              emoji: "📱",
              desc: "Works and is the recommended option for tourists. The app works normally. Drivers sometimes ask you to sit in the front seat (to avoid looking like a driver with a passenger — legal grey area). Just do it. Safe and reliable.",
            },
            {
              mode: "Remis",
              emoji: "🚗",
              desc: "Private car services — like a premium taxi. Your hotel can call one. Fixed price negotiated upfront. Good for longer trips or airport transfers.",
            },
            {
              mode: "Subte (Subway)",
              emoji: "🚇",
              desc: "Six lines covering central neighborhoods. Cheap, fast, often crowded. Get a SUBE card (rechargeable transit card) from any kiosk or tobacco shop. Works on subte and buses. Card costs ~$1 USD, recharge in cash.",
            },
            {
              mode: "Colectivos (Buses)",
              emoji: "🚌",
              desc: "Extensive city bus network. Cheap. Confusing for tourists. App 'Moovit' will route you. Accept SUBE card. Good if you're in BA long enough to figure it out.",
            },
            {
              mode: "Walking",
              emoji: "🚶",
              desc: "Palermo, Recoleta, and San Telmo are all walkable neighborhoods. Microcentro and Puerto Madero are a Uber ride away. Most tourist activities happen in a relatively compact area.",
            },
          ].map((item) => (
            <div key={item.mode} className="flex gap-3 bg-white/3 rounded-lg p-3">
              <span className="text-lg flex-shrink-0">{item.emoji}</span>
              <div>
                <div className="font-semibold text-gray-200 text-sm">{item.mode}</div>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      {/* Airports */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">✈️</span>
            <div className="font-bold text-gray-100">EZE vs AEP — Two Airports</div>
          </div>
        }
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                code: "EZE",
                name: "Ministro Pistarini (Ezeiza)",
                desc: "International airport. 45 min–1 hour from downtown. Where you arrive from the US. Transfer: Manuel Tienda León shuttle bus (~$15–20 USD, comfortable, departs frequently, drops at key downtown hotels) or Uber (~$15–25 depending on destination). Do NOT take unlicensed taxis from outside arrivals.",
                highlight: true,
              },
              {
                code: "AEP",
                name: "Jorge Newbery (Aeroparque)",
                desc: "Domestic airport. Basically inside the city — 15 min from Palermo. This is where you fly TO CÓRDOBA from. Easy to get to by Uber. Much more manageable than EZE.",
                highlight: false,
              },
            ].map((airport) => (
              <div key={airport.code} className={`rounded-lg p-3 border ${airport.highlight ? "bg-amber-950/30 border-amber-700/30" : "bg-white/3 border-white/5"}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`font-bold text-lg ${airport.highlight ? "text-amber-400" : "text-gray-300"}`}>{airport.code}</span>
                  <span className="text-xs text-gray-500">{airport.name}</span>
                  {airport.highlight && <span className="pill bg-amber-500/20 text-amber-300 text-xs">You arrive here</span>}
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{airport.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-950/30 border border-blue-800/30 rounded-lg p-3">
            <p className="text-xs text-blue-300 leading-relaxed">
              <strong className="text-blue-200">Manuel Tienda León:</strong> The official airport transfer service. Buy tickets at their booth in arrivals at EZE. Reliable, air-conditioned, no haggling. Best option for the first arrival when you're jet-lagged and don't want friction.
            </p>
          </div>
        </div>
      </Expandable>

      {/* Spanish phrases */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">🗣️</span>
            <div className="font-bold text-gray-100">10 Spanish Phrases That Matter</div>
          </div>
        }
        accent="amber"
      >
        <div className="space-y-2 pt-1">
          <p className="text-xs text-gray-500 mb-3">Note: Argentine Spanish uses 'vos' instead of 'tú' and has a distinctive Italian-influenced cadence. Buenos Aires Spanish sounds like nowhere else in the world.</p>
          {PHRASES.map((phrase, i) => (
            <div key={i} className="flex gap-3 bg-white/3 rounded-lg p-3">
              <span className="text-amber-500 font-bold text-xs flex-shrink-0 w-4">{i + 1}</span>
              <div className="flex-1">
                <div className="font-semibold text-gray-100 text-sm">{phrase.es}</div>
                <div className="text-xs text-amber-300/70 mt-0.5">{phrase.en}</div>
                {phrase.note && <div className="text-xs text-gray-500 mt-0.5 italic">{phrase.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      {/* Other tips */}
      <div className="card p-4 space-y-3">
        <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider">Quick Reference</h3>
        <div className="space-y-2">
          {[
            { emoji: "💡", label: "Tipping", tip: "10–15% at restaurants. Not mandatory but appreciated. Leave cash if possible." },
            { emoji: "🔌", label: "Power Outlets", tip: "Argentina uses Type C and I (220V). US plugs need an adapter. Most electronics handle dual voltage — check yours. Buy a universal adapter before you leave." },
            { emoji: "📶", label: "SIM/Data", tip: "Buy a local SIM at the airport or a phone shop for cheap data. Claro and Personal are the main carriers. Or use your carrier's international plan." },
            { emoji: "🕐", label: "Time Zone", tip: "Argentina is GMT-3. No daylight saving time adjustments (they don't observe DST). Austin is GMT-6 in winter, so Argentina is 3 hours ahead." },
            { emoji: "🧾", label: "Receipts", tip: "Ask for a factura (receipt/invoice) at restaurants if you want one. Some establishments will offer you a choice — always take the official factura." },
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
