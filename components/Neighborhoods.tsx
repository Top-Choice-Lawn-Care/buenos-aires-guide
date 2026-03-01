"use client";
import Expandable from "./Expandable";

const NEIGHBORHOODS = [
  {
    name: "Palermo",
    emoji: "🌿",
    tagline: "The Brooklyn of Buenos Aires",
    vibe: "Green, trendy, international. Buenos Aires's largest neighborhood, split into sub-barrios each with distinct personality. Where expats live, craft cocktail bars multiply, and everyone is conspicuously cool.",
    subNeighborhoods: [
      { name: "Palermo Soho", desc: "The hip epicenter — boutique shopping, design stores, weekend fairs (Feria de Palermo on Plaza Serrano). Sunday artisan market at Plaza Cortázar." },
      { name: "Palermo Hollywood", desc: "A few blocks north — TV studios, low-key neighborhood vibe, excellent restaurants without the tourist markup. More residential, less selfie-sticks." },
      { name: "Las Cañitas", desc: "Upscale, polo-adjacent. Near the horse track. Great for a nicer dinner — Báez street has wall-to-wall restaurant options. The neighborhood that knows it's expensive and owns it." },
    ],
    topThree: [
      "Wander Plaza Serrano on a Sunday — artisans, food trucks, completely chaotic, totally fun",
      "MALBA (Latin American Art Museum) — genuinely excellent, small enough to not be exhausting",
      "Rosedal in Parque Tres de Febrero — rose garden, lake, joggers, good for clearing your head",
    ],
    restaurant: "Don Julio (parrilla, world-famous — book ahead) or El Preferido de Palermo for a casual asado lunch",
    skip: "The 'authentic tango shows' marketed near Palermo. Overpriced, staged for tourists. Real tango is in San Telmo.",
    safety: "safe",
  },
  {
    name: "Recoleta",
    emoji: "🏛️",
    tagline: "Old Money. Evita. Gothic Mausoleums.",
    vibe: "The most European-feeling neighborhood in a city that already looks like Paris. Wide boulevards, Belle Époque architecture, embassies, grand cafés. Old aristocratic money, or what's left of it. You're walking through early-20th-century Argentina at its most ambitious.",
    topThree: [
      "Cementerio de la Recoleta — don't skip this. Not morbid: genuinely stunning. Gothic mausoleums, marble statues, carved stone. Eva Perón is here (follow the crowds to find her tomb). The architecture rivals any church in Europe.",
      "Café La Biela — across from the cemetery. Order a cortado, watch Buenos Aires walk by. Established 1850.",
      "MNBA (Museo Nacional de Bellas Artes) — free, excellent European + Argentine collection. Skip if you're museumed out.",
    ],
    restaurant: "El Sanjuanino on Posadas — best empanadas in the neighborhood, cheap, always packed. Order the humita and picante.",
    skip: "The weekend craft fair near the cemetery is fine but overpriced. Everything adjacent to the cemetery is tourist-taxed.",
    safety: "safe",
    highlight: "Eva Perón's tomb: She died in 1952. For 24 years after the coup that ousted Perón, her embalmed body was hidden by the military — moved across Europe, buried under a false name in Italy. Finally returned to Argentina in 1976. Now in a glass case in her family's mausoleum. The flowers are always fresh. Go see it.",
  },
  {
    name: "San Telmo",
    emoji: "💃",
    tagline: "Cobblestones, Tango, and Time",
    vibe: "BA's oldest neighborhood and still one of its most atmospheric. Yellow fever epidemic in the 1870s drove out the wealthy; immigrants moved in. Now it's a mix of artists, tango culture, antique dealers, and tourists who all coexist in the same crumbling colonial buildings. The cobblestones are real. The tango is real.",
    topThree: [
      "Feria de San Telmo (Sunday only) — the antique market on Plaza Dorrego. All day. Vintage leather goods, old maps, Argentine curiosities, street tango performances. Come late morning, stay for lunch.",
      "Milonga at El Viejo Almacén or La Catedral — actual tango, not tourist tango. La Catedral is in a converted warehouse, totally unpretentious. Shows start after 10 PM (obviously).",
      "Bar Sur or Bar Británico — just sit and drink. These are old man bars that have been the same since 1930 and are not apologizing for it.",
    ],
    restaurant: "El Federal — corner bar that's been serving food since 1864. Order the matambre a la pizza (thin steak with cheese and tomato). Cash only, no English menu, perfect.",
    skip: "Packaged 'tango dinner shows' anywhere in San Telmo. You'll be seated next to a busload of cruise ship passengers. Real tango is a milonga — a social dance event. Ask your hotel for a recommendation.",
    safety: "Generally fine during the day. Get cautious after midnight in the quieter streets.",
  },
  {
    name: "Puerto Madero",
    emoji: "🌉",
    tagline: "Modern BA — Easiest Landing Zone",
    vibe: "Reclaimed waterfront, converted brick warehouses, Calatrava's famous Woman Bridge (Puente de la Mujer). It's Buenos Aires's newest neighborhood — only developed in the 1990s. Feels more Miami than BA. Prices are high, atmosphere is low. But: it's very safe, it's walkable, and it's where you'll land if you're smart about your airport transfer.",
    topThree: [
      "Puente de la Mujer — the rotating footbridge by Santiago Calatrava. Worth seeing once, free to walk.",
      "Walk the Costanera Sur Ecological Reserve — unexpected nature oasis minutes from downtown. Wetlands, birds, surreal.",
      "Faena Hotel lobby bar — even if you're not staying. Have a drink, feel briefly rich.",
    ],
    restaurant: "Cabana Las Lilas — the classic Puerto Madero steakhouse. Expensive, touristy, but the beef is genuinely exceptional. Consider it for a splurge dinner.",
    skip: "Trying to use Puerto Madero as a base for everything. It's an island between the city and the river — great for a walk or a dinner, but not where the city's soul is.",
    safety: "Very safe — best neighborhood for safety in BA.",
    highlight: "From EZE airport: If you're taking a remis or Uber, you'll cross through Puerto Madero on your way to most hotels. It's the first real view of the city.",
  },
  {
    name: "La Boca / Caminito",
    emoji: "🎨",
    tagline: "Colorful, Chaotic, Genuinely Worth One Visit",
    vibe: "Working-class port neighborhood turned tourist spectacle. Genovese immigrants painted their houses with leftover boat paint — whatever color was available. Now Caminito street is the Instagram bait of Buenos Aires: bright blues, reds, yellows, tango dancers posing for photos, empanada women leaning out of balconies. Completely artificial at this point, but the bones of the story are real.",
    topThree: [
      "Walk Caminito — do it once, mid-morning. 30 minutes is enough. Bring cash for the photo-ops with costumed tango dancers (it's how they earn a living — give them a peso).",
      "La Bombonera (Boca Juniors stadium) — the cathedral of Argentine football. If there's a match, go. If not, the museum tour is decent.",
      "Street art murals around the neighborhood — better than the touristy strip, genuinely excellent art.",
    ],
    restaurant: "Il Materello — Italian, old school, wildly good pasta. Beloved by locals who know where to eat in La Boca despite the tourist traps everywhere else.",
    skip: "Going at night. Seriously. Stay on the main tourist strip during daylight, leave before dark.",
    safety: "⚠️ Daytime only, stay on main streets. La Boca is a genuinely rough neighborhood two blocks off Caminito. Don't wander. Keep your phone in your pocket.",
  },
  {
    name: "Belgrano",
    emoji: "🏡",
    tagline: "Local Life, Less Touristy",
    vibe: "Residential, leafy, a little boring in the best way. Where Buenos Aires families actually live — good schools, parks, cafés with locals not tourists. Has a small but real Chinatown (Barrio Chino) that's worth a walk-through for the novelty. The Belgrano R train station has beautiful tile work.",
    topThree: [
      "Barrio Chino (Chinatown) — just explore. Bubble tea, dim sum, Chinese supermarkets. Feels genuinely incongruous and somehow charming.",
      "Museo de Arte Español Enrique Larreta — Spanish colonial art and architecture, peaceful garden, off the beaten path.",
      "Sunday market on Av. Cabildo — local flea market, less curated than San Telmo, more interesting for it.",
    ],
    restaurant: "Siamo nel Forno — wood-fired Neapolitan pizza. Sounds weird in BA but Argentina has a massive Italian heritage and this is legitimately excellent pizza.",
    skip: "Nothing specific to warn about — this is just a normal pleasant neighborhood. Don't make a special trip unless you want to see how Buenos Aires actually lives.",
    safety: "Very safe.",
  },
  {
    name: "Microcentro / Centro",
    emoji: "🏦",
    tagline: "Power, History, and the Heart of the Republic",
    vibe: "This is where Argentina's history happened. Financial district by day, ghost town by night. Casa Rosada (the Pink House — yes, that pink), Plaza de Mayo, the Obelisco. Grandiose public architecture built during the Golden Age by a country that thought it was becoming the next United States. Didn't quite work out that way, but the buildings are magnificent.",
    topThree: [
      "Plaza de Mayo — the political center of Argentina for 200 years. Casa Rosada faces it. The Mothers of Plaza de Mayo marched here every Thursday for years demanding information about their disappeared children. Still happening, every Thursday at 3:30 PM. Attendance is free.",
      "Teatro Colón — one of the great opera houses of the world. Built 1908, acoustics still legendary. Take the guided tour if you can't get tickets to a show.",
      "Calle Florida (pedestrian shopping street) — chaotic, touristy, but you'll walk it anyway. Keep your phone in your pocket.",
    ],
    restaurant: "Café Tortoni on Av. de Mayo — established 1858. Expensive for what you get, but historically important. Order an alfajor and a café con leche and sit in the old room.",
    skip: "Microcentro after 7 PM on a weekday — it empties out fast. Not dangerous, just dead.",
    safety: "Use normal urban awareness. Calle Florida specifically: pickpockets target tourists.",
  },
];

export default function Neighborhoods() {
  return (
    <section id="neighborhoods" className="space-y-4">
      <h2 className="section-title">🏘️ Neighborhoods</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        Buenos Aires is a city of barrios — each one its own world. Tap any to expand.
      </p>
      <div className="space-y-3">
        {NEIGHBORHOODS.map((n) => (
          <Expandable
            key={n.name}
            title={
              <div className="flex items-start gap-2">
                <span className="text-lg">{n.emoji}</span>
                <div>
                  <div className="font-bold text-gray-100">{n.name}</div>
                  <div className="text-xs text-amber-400/80 font-normal">{n.tagline}</div>
                </div>
              </div>
            }
            accent={n.safety === "safe" ? "amber" : "red"}
          >
            <div className="space-y-4 pt-1">
              {/* Safety badge */}
              {n.safety !== "safe" && (
                <div className="flex items-center gap-2 bg-red-950/40 border border-red-800/40 rounded-lg p-3">
                  <span className="text-red-400 text-lg">⚠️</span>
                  <span className="text-red-300 text-sm font-medium">Safety note — read below</span>
                </div>
              )}

              {/* Vibe */}
              <p className="text-gray-300 text-sm leading-relaxed">{n.vibe}</p>

              {/* Sub-neighborhoods */}
              {n.subNeighborhoods && (
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Sub-Neighborhoods</div>
                  {n.subNeighborhoods.map((sub) => (
                    <div key={sub.name} className="flex gap-2 bg-white/3 rounded-lg p-3">
                      <div className="gold-bar" />
                      <div>
                        <div className="text-sm font-semibold text-gray-200">{sub.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">{sub.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Special highlight */}
              {n.highlight && (
                <div className="bg-amber-950/30 border border-amber-700/30 rounded-lg p-3">
                  <div className="text-xs font-semibold text-amber-400 mb-1 uppercase tracking-wider">Worth knowing</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{n.highlight}</p>
                </div>
              )}

              {/* Top 3 */}
              <div>
                <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">Top 3 Things</div>
                <ul className="space-y-2">
                  {n.topThree.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-300">
                      <span className="text-amber-500 font-bold flex-shrink-0">{i + 1}.</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Restaurant */}
              <div className="flex gap-2 bg-white/3 rounded-lg p-3">
                <span className="text-lg flex-shrink-0">🍽️</span>
                <div>
                  <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">Eat here</div>
                  <p className="text-sm text-gray-300 leading-relaxed">{n.restaurant}</p>
                </div>
              </div>

              {/* Skip */}
              <div className="flex gap-2 bg-white/3 rounded-lg p-3">
                <span className="text-lg flex-shrink-0">🚫</span>
                <div>
                  <div className="text-xs font-semibold text-red-400/80 uppercase tracking-wider mb-1">Skip this</div>
                  <p className="text-sm text-gray-400 leading-relaxed">{n.skip}</p>
                </div>
              </div>

              {/* Safety detail */}
              {n.safety !== "safe" && (
                <div className="flex gap-2 bg-red-950/40 rounded-lg p-3">
                  <span className="text-lg flex-shrink-0">🔐</span>
                  <div>
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Safety</div>
                    <p className="text-sm text-red-300 leading-relaxed">{n.safety}</p>
                  </div>
                </div>
              )}
            </div>
          </Expandable>
        ))}
      </div>
    </section>
  );
}
