"use client";
import Expandable from "./Expandable";

export default function Cordoba() {
  return (
    <section id="cordoba" className="space-y-4">
      <h2 className="section-title">🏛️ Córdoba</h2>

      {/* Dates highlight */}
      <div className="bg-amber-950/30 border border-amber-600/40 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">📅</span>
          <span className="font-bold text-amber-300">You're here March 4–7</span>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">
          Three full days in Argentina's second city. Colonial history, Jesuit architecture, mountain day trips. Different energy from Buenos Aires — slower, more provincial, very university town.
        </p>
      </div>

      {/* What is Córdoba */}
      <div className="card p-4 space-y-3">
        <h3 className="font-bold text-gray-100 flex items-center gap-2 mb-1">
          <span className="text-lg">🏙️</span> What Is Córdoba?
        </h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Argentina's second-largest city (~1.5 million people). Founded in 1573, making it one of the oldest cities in Argentina. Home to the Universidad Nacional de Córdoba — founded 1613, the oldest university in Argentina and one of the first in South America. This university history shapes everything: Córdoba is young, educated, progressive, and a bit proud of itself.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          Córdoba sits at the eastern edge of the Sierras de Córdoba mountains — dramatic landscape visible from the city. It feels different from Buenos Aires: less cosmopolitan, more authentic, decidedly un-touristy. Most visitors are Argentine.
        </p>
        <p className="text-sm text-gray-300 leading-relaxed">
          The local accent — <em>cordobés</em> — is the most distinctive in Argentina. Sing-song cadence, heavily accented vowels. Porteños mock it affectionately. It takes about 10 minutes to get used to and then you start to love it.
        </p>
      </div>

      {/* Jesuit Block */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">⛪</span>
            <div>
              <div className="font-bold text-gray-100">The Jesuit Block</div>
              <div className="text-xs text-amber-400/70">UNESCO World Heritage Site — actually worth your time</div>
            </div>
          </div>
        }
        defaultOpen={true}
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          <p className="text-sm text-gray-300 leading-relaxed">
            The Manzana Jesuítica (Jesuit Block) is a UNESCO World Heritage Site in the center of Córdoba. It includes the Iglesia de la Compañía de Jesús (the Jesuit church), the colegio (college), and the older university buildings — all dating from the 17th and 18th centuries.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The Jesuits were expelled from Spanish territories in 1767 by King Carlos III (they'd become too powerful, too wealthy, too independent). What they left behind in Córdoba is one of the best-preserved examples of colonial Jesuit architecture in South America.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The church interior is stunning — cedar ceiling vaulted in the shape of an inverted ship's hull (the only Jesuit architects available were ship builders, so they built what they knew). The guided tour of the whole block is worth it. 1–2 hours.
          </p>
          <div className="bg-white/3 rounded-lg p-3">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">Also in the Block</div>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• <strong className="text-gray-300">Iglesia Catedral</strong> — on the Plaza San Martín, the main square. Took 200 years to build (started 1577, finally finished in the 1780s).</li>
              <li>• <strong className="text-gray-300">Cabildo</strong> — old colonial government building on the plaza. Museum inside.</li>
              <li>• <strong className="text-gray-300">Plaza San Martín</strong> — the central square. Colonial arcades, shoeshine men, students on lunch break. Sit on a bench for a while.</li>
            </ul>
          </div>
        </div>
      </Expandable>

      {/* Day Trips */}
      <div className="space-y-3">
        <h3 className="font-semibold text-amber-400 text-sm uppercase tracking-wider">Day Trips from Córdoba</h3>

        <Expandable
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg">⭐</span>
              <div>
                <div className="font-bold text-gray-100">Alta Gracia</div>
                <div className="text-xs text-amber-400/70">45 min south — Che Guevara's childhood home</div>
              </div>
            </div>
          }
          accent="red"
        >
          <div className="space-y-3 pt-1">
            <p className="text-sm text-gray-300 leading-relaxed">
              Ernesto "Che" Guevara spent his childhood in Alta Gracia — his family moved there for the dry mountain air to help his asthma. The family home is now the Museo Casa de Ernesto "Che" Guevara: well-done, politically balanced enough to be interesting regardless of your views on the man.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Alta Gracia itself has a gorgeous Jesuit estancia (farm estate) — one of the best-preserved Jesuit rural complexes in Argentina. The estate church predates anything in Córdoba city.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              A half-day trip — combine the Che museum and the Jesuit estancia, have lunch, back to Córdoba by afternoon. Remis from the city is easiest.
            </p>
          </div>
        </Expandable>

        <Expandable
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg">🇩🇪</span>
              <div>
                <div className="font-bold text-gray-100">Villa General Belgrano</div>
                <div className="text-xs text-amber-400/70">1.5 hrs south — Argentine Oktoberfest, German immigrants</div>
              </div>
            </div>
          }
          accent="amber"
        >
          <div className="space-y-3 pt-1">
            <p className="text-sm text-gray-300 leading-relaxed">
              A genuinely strange and charming town: founded by German immigrants (some claim descendants of the crew of the German pocket battleship Graf Spee, scuttled in Montevideo harbor in 1939 — the sailors dispersed across South America). The town has German architecture, German food, German beer, and hosts Argentina's Oktoberfest every year.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Walking down the main street feels like Bavaria accidentally materialized in the Córdoba mountains. The craft beer is excellent. There are strudel shops. It's surreal and worth experiencing once.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed text-xs">
              Full day trip with the mountain scenery. Best combined with other Sierras stops.
            </p>
          </div>
        </Expandable>

        <Expandable
          title={
            <div className="flex items-center gap-2">
              <span className="text-lg">⛰️</span>
              <div>
                <div className="font-bold text-gray-100">Sierras de Córdoba</div>
                <div className="text-xs text-amber-400/70">Mountains, trails, lakes, waterfalls</div>
              </div>
            </div>
          }
          accent="amber"
        >
          <div className="space-y-3 pt-1">
            <p className="text-sm text-gray-300 leading-relaxed">
              The mountain range that runs through Córdoba province offers a genuinely beautiful landscape: green hills (wetter than the Andes), small lakes, rivers, waterfalls, and traditional pueblos. Not dramatic like Patagonia, but beautiful in a gentle way.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "La Cumbrecita", desc: "German-style alpine village in the mountains. No cars allowed in the village center. Very charming, very popular on weekends." },
                { name: "Quebrada del Condorito", desc: "National park. If you want to see Andean condors (largest flying bird in the world, 10-foot wingspan), this is where you go. Accessible from Córdoba city." },
                { name: "Embalse (Carlos Paz area)", desc: "Large reservoir lake popular with Argentines for summer vacation. Speedboats, waterski, families. Fun to observe; maybe not your scene." },
              ].map((place) => (
                <li key={place.name} className="flex gap-2 bg-white/3 rounded-lg p-3">
                  <div className="gold-bar" />
                  <div>
                    <div className="font-semibold text-gray-200 text-sm">{place.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{place.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Expandable>
      </div>

      {/* Food in Córdoba */}
      <div className="card p-4 space-y-3">
        <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-1">🍽️ Food & Wine in Córdoba</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          Córdoba has its own culinary identity — less sophisticated than Buenos Aires, more hearty. It's a university city: good cheap food is everywhere, and the restaurant scene has genuinely improved in the last decade.
        </p>
        <ul className="space-y-2">
          {[
            "Empanadas cordobesas — distinctive style: slightly sweet, with olives and hard-boiled egg in the filling. Worth trying the local version.",
            "Chancho al disco — pork cooked in a plow disc (agricultural equipment repurposed as a giant wok). Rustic, delicious, very Córdoba.",
            "La Nieta (Córdoba city) — excellent contemporary Argentine cuisine, creative takes on regional ingredients.",
            "El Papagayo — classic Córdoba restaurant, good for grilled meats and local atmosphere.",
            "Wine: Mendoza wines dominate everywhere in Argentina. You won't have trouble finding good Malbec in Córdoba — same bottles, same price.",
          ].map((tip, i) => (
            <li key={i} className="flex gap-2 text-sm text-gray-300">
              <span className="text-amber-500 flex-shrink-0">→</span>
              <span className="leading-relaxed text-sm">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Getting around */}
      <div className="card p-4 space-y-3">
        <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-1">🚌 Getting Around Córdoba</h3>
        <div className="space-y-2">
          {[
            { emoji: "✈️", label: "Buenos Aires to Córdoba", desc: "Fly from AEP (Aeroparque) — ~1 hour. Aerolíneas Argentinas and LATAM both fly the route frequently. Domestic flights in Argentina are surprisingly reasonable." },
            { emoji: "🚌", label: "Bus (long-distance)", desc: "The Argentine long-distance bus system is excellent — comfortable cama seats that recline fully, meals included. BA to Córdoba is about 9 hours. Cheaper than flying, more comfortable than most flights." },
            { emoji: "📱", label: "In the city", desc: "Uber works in Córdoba. Remis (ask at hotel). SUBE card works on the local buses if you want to use them. Córdoba's city center is walkable for the main sites." },
            { emoji: "🚗", label: "For day trips", desc: "Rent a car from Córdoba center for mountain day trips — gives you flexibility. Or book a remis for the day (negotiate a daily rate upfront). Your hotel can arrange this." },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 bg-white/3 rounded-lg p-3">
              <span className="text-lg flex-shrink-0">{item.emoji}</span>
              <div>
                <div className="font-semibold text-gray-200 text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
