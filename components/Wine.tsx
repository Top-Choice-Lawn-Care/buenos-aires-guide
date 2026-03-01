"use client";
import Expandable from "./Expandable";

const REGIONS = [
  {
    name: "Mendoza",
    desc: "The heart of Argentine wine. At the foot of the Andes, 3,000+ feet elevation. Produces ~70% of Argentina's wine. Think Napa Valley — the prestige address, the famous producers, the serious terroir. Sub-regions like Luján de Cuyo and Uco Valley are where the top bottles come from.",
    highlight: true,
  },
  {
    name: "Salta (Cafayate)",
    desc: "The extreme north. Vineyards at 5,000-9,000 feet — among the highest in the world. Produces excellent Torrontés (the floral white) and concentrated Malbec. Smaller scale, more artisanal.",
  },
  {
    name: "Patagonia (Neuquén, Río Negro)",
    desc: "The cold, wind-swept south. Produces elegant, aromatic wines — more European in style. Pinot Noir does well here. Chardonnay and Sauvignon Blanc too. Less known, increasingly excellent.",
  },
  {
    name: "San Juan",
    desc: "North of Mendoza, warmer and drier. More Bonarda and Syrah than Malbec. Historically the bulk wine region — that reputation is changing as quality producers move in.",
  },
];

const PRODUCERS = [
  {
    name: "Catena Zapata",
    tier: "Prestige",
    price: "$$$",
    emoji: "👑",
    desc: "The family that put Argentine Malbec on the world map. Nicolás Catena Zapata was the first to pursue high-altitude viticulture. Adrianna Vineyard is one of the great vineyard sites in the world. Their Adrianna and Nicasia bottles are world-class. Their standard Catena Malbec is excellent and more accessible.",
  },
  {
    name: "Zuccardi",
    tier: "Prestige",
    price: "$$$",
    emoji: "🏆",
    desc: "Currently one of the most exciting estates in South America. Valle de Uco focus. Their Valle de Uco bottlings are exceptional; Zuccardi Valle de Uco is among the best wines made in Argentina. Family-owned, relentlessly quality-focused. Their Valle de Uco Malbec regularly appears on 'best in the world' lists.",
  },
  {
    name: "Achaval-Ferrer",
    tier: "Premium",
    price: "$$",
    emoji: "🍇",
    desc: "Elegant, complex Malbecs. Their 'Finca' single-vineyard wines are the headliners. Excellent balance of fruit and structure. Won't disappoint at a restaurant.",
  },
  {
    name: "Clos de los Siete",
    tier: "Premium",
    price: "$$",
    emoji: "🇫🇷",
    desc: "A project by Michel Rolland (the famous Bordeaux consultant) with French partners. Malbec-dominant blend. Silky, internationally styled, easy to love. Good mid-range choice at a restaurant.",
  },
  {
    name: "Trapiche Broquel",
    tier: "Everyday",
    price: "$",
    emoji: "💯",
    desc: "Trapiche is one of Argentina's largest producers. Their Broquel line is the sweet spot — serious quality at accessible prices. On almost every restaurant wine list in Buenos Aires. Order this confidently.",
  },
  {
    name: "Luigi Bosca",
    tier: "Mid-range",
    price: "$$",
    emoji: "🎯",
    desc: "Luján de Cuyo estate, family-owned since 1901. Their De Sangre Malbec is a step up from the standard. Reliable, often excellent value in restaurants.",
  },
];

const PAIRINGS = [
  { wine: "Malbec", food: "Asado (grilled beef)", note: "This is not a pairing suggestion. This is the law." },
  { wine: "Malbec", food: "Empanadas de carne", note: "A lighter pour of Broquel works here." },
  { wine: "Torrontés", food: "Empanadas de humita (corn) or cheese", note: "The floral notes play well with mild, creamy flavors." },
  { wine: "Torrontés", food: "Seafood (river fish, trout)", note: "At altitude, the acidity cuts through. Great in Salta restaurants." },
  { wine: "Cabernet Sauvignon (Mendoza)", food: "Thick-cut ribeye, bife de chorizo", note: "When the steak is serious, upgrade the wine to match." },
];

export default function Wine() {
  return (
    <section id="wine" className="space-y-4">
      <h2 className="section-title">🍷 Malbec & Wine</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        Argentine wine is one of the great underrated stories in the wine world. The altitude, sun, and soil of the Andes produce Malbec unlike anything from France.
      </p>

      {/* The Malbec story */}
      <div className="card p-4 space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-amber-500 text-lg">🇫🇷</span>
          <h3 className="font-bold text-gray-100">Argentine vs. French Malbec</h3>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          Malbec is originally a French grape from Cahors in southwest France. In France it produces a rustic, tannic, dark wine that can be almost brutal when young. France barely uses it anymore.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Argentine immigrants brought cuttings to Mendoza in the 19th century. The Andes changed everything. At 3,000-5,000 feet, the intense sun (thin atmosphere at altitude) ripens the grapes fully while cool nights preserve acidity. The result: Malbec transformed into something entirely different — plump, velvety, full of dark fruit (blackberry, plum, violet), with a softness that makes it immediately approachable.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Argentine Malbec is bigger, fruitier, and more lush than its French ancestor. Some wine geeks prefer the European austerity. Most people who are drinking wine because they enjoy it prefer the Argentine version.
        </p>
      </div>

      {/* Wine Regions */}
      <Expandable
        title={<span className="font-bold text-gray-100">🗺️ Wine Regions</span>}
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          {REGIONS.map((r) => (
            <div key={r.name} className={`flex gap-3 rounded-lg p-3 ${r.highlight ? "bg-amber-950/30 border border-amber-700/20" : "bg-white/3"}`}>
              <div className={r.highlight ? "gold-bar" : "red-bar"} />
              <div>
                <div className="font-semibold text-gray-200 text-sm">{r.name} {r.highlight && <span className="text-amber-400 text-xs ml-1">★ Main region</span>}</div>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      {/* Producers */}
      <Expandable
        title={<span className="font-bold text-gray-100">🏆 Producers to Look For</span>}
        defaultOpen={true}
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          {PRODUCERS.map((p) => (
            <div key={p.name} className="flex gap-3 bg-white/3 rounded-lg p-3">
              <span className="text-lg flex-shrink-0">{p.emoji}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-gray-100 text-sm">{p.name}</span>
                  <span className={`pill text-xs ${
                    p.tier === "Prestige" ? "bg-amber-500/20 text-amber-300" :
                    p.tier === "Premium" ? "bg-blue-500/20 text-blue-300" :
                    p.tier === "Everyday" ? "bg-green-500/20 text-green-300" :
                    "bg-gray-500/20 text-gray-300"
                  }`}>{p.tier}</span>
                  <span className="text-xs text-gray-500 font-mono">{p.price}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Expandable>

      {/* Malbec vs Torrontés */}
      <div className="card p-4">
        <h3 className="font-bold text-amber-400 mb-3 text-sm uppercase tracking-wider">Malbec vs. Torrontés</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-950/30 rounded-lg p-3">
            <div className="font-semibold text-red-300 text-sm mb-1">🍷 Malbec</div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Dark red, full-bodied</li>
              <li>• Blackberry, plum, violet</li>
              <li>• Velvety tannins</li>
              <li>• With beef — always</li>
            </ul>
          </div>
          <div className="bg-amber-950/20 rounded-lg p-3">
            <div className="font-semibold text-amber-300 text-sm mb-1">🥂 Torrontés</div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Argentina's white grape</li>
              <li>• Floral, aromatic</li>
              <li>• Light and refreshing</li>
              <li>• Hot day, seafood, lunch</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3 leading-relaxed">
          When to order Torrontés: When it's hot, when you're eating fish or light food, when lunch is going long. When to order Malbec: Always, for dinner, with steak, when in doubt.
        </p>
      </div>

      {/* How to order */}
      <div className="card p-4">
        <h3 className="font-bold text-amber-400 mb-3 text-sm uppercase tracking-wider">How to Order Wine in BA</h3>
        <ul className="space-y-2">
          {[
            "Most restaurants have a carta de vinos (wine list). Ask for it — 'La carta de vinos, por favor.'",
            "By-the-glass options are usually limited. Argentines mostly order by the bottle.",
            "A bottle of solid Malbec in a good restaurant: $15-30 USD at current rates. This is extraordinary value.",
            "If the list is overwhelming, ask: '¿Qué Malbec me recomienda?' — 'What Malbec do you recommend?' They'll point you somewhere good.",
            "Vino de la casa (house wine) is almost always decent in Argentina. Not embarrassing to order.",
          ].map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300">
              <span className="text-amber-500 flex-shrink-0">→</span>
              <span className="leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pairings */}
      <Expandable
        title={<span className="font-bold text-gray-100">🥩 Food Pairings</span>}
        accent="amber"
      >
        <div className="space-y-2 pt-1">
          {PAIRINGS.map((p, i) => (
            <div key={i} className="bg-white/3 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-amber-400">{p.wine}</span>
                <span className="text-gray-600">×</span>
                <span className="text-xs font-semibold text-gray-300">{p.food}</span>
              </div>
              <p className="text-xs text-gray-500 italic">{p.note}</p>
            </div>
          ))}
        </div>
      </Expandable>
    </section>
  );
}
