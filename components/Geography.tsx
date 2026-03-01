"use client";
import Expandable from "./Expandable";

const REGIONS = [
  {
    id: "pampas",
    emoji: "🌾",
    name: "The Pampas",
    tagline: "You are here.",
    provinces: "Buenos Aires · La Pampa · Santa Fe · Entre Ríos · Córdoba south",
    climate: "Temperate humid · 10–28°C year-round · Fertile flatlands",
    marchTemp: "22–28°C (72–82°F), humid",
    highlight: true,
    badge: "You're traveling here",
    badgeColor: "bg-amber-500/20 text-amber-300",
    wildlife: [
      { icon: "🦚", name: "Rhea", desc: "South America's ostrich. Giant flightless bird that runs across pampas fields like it owns the place." },
      { icon: "🦔", name: "Armadillo", desc: "Everywhere, though nocturnal. Roll-up defense mechanism that hasn't stopped evolution from making them extremely vulnerable to cars." },
      { icon: "🦦", name: "Capybara", desc: "World's largest rodent. Harmless, social, inexplicably chill. Common near rivers and wetlands." },
      { icon: "🦩", name: "Flamingos", desc: "Pink colonies near coastal wetlands. An unexpected sight on the edge of one of the world's great cities." },
    ],
    culture: "Buenos Aires = porteños (\"people of the port\") — intensely Italian in ancestry, proudly Argentine in attitude. Soccer is religion. Tango was born here in the working-class conventillos of La Boca. Mate is not optional. Asado is the social contract. Most of Argentina's population and economic output flows through the Pampas — it's the country's beating heart.",
    surprise: "Argentina has more psychoanalysts per capita than any country on earth. Buenos Aires has 4x more psychiatrists than New York City. The Pampas produced a culture that apparently needs to talk about itself a lot. Relatedly: Borges was from here.",
  },
  {
    id: "patagonia",
    emoji: "🧊",
    name: "Patagonia",
    tagline: "The end of the world. Literally.",
    provinces: "Río Negro · Chubut · Santa Cruz · Tierra del Fuego",
    climate: "Cold, dry, ferocious wind · 0–15°C in south even in summer · Frost year-round in Tierra del Fuego",
    marchTemp: "10–15°C south, slightly warmer north — but wind makes it feel 10° colder",
    highlight: false,
    badge: "Far south",
    badgeColor: "bg-blue-500/20 text-blue-300",
    wildlife: [
      { icon: "🐧", name: "Magellanic Penguins", desc: "Over 1 million at Punta Tombo colony (Chubut). They ignore you completely — unbothered by the concept of humans." },
      { icon: "🦙", name: "Guanaco", desc: "Wild ancestor of the llama. Roam freely across steppe in herds. Excellent at looking majestic against Andes backdrops." },
      { icon: "🦅", name: "Andean Condor", desc: "10-foot wingspan. Rides thermals for hours without flapping. One of the largest flying birds on earth." },
      { icon: "🐋", name: "Southern Right Whale", desc: "Valdés Peninsula calving ground — mothers and calves in July-Nov. Orca also hunt the shallows here." },
    ],
    culture: "Welsh settler communities in Chubut — yes, Welsh. In 1865, 153 Welsh settlers landed in Patagonia fleeing British cultural assimilation. Their descendants still speak Welsh, still hold eisteddfods (bardic festivals), still serve Welsh tea. The town of Gaiman has more tea houses per capita than Wales. It's one of history's stranger outcomes.",
    surprise: "Perito Moreno Glacier is one of the few glaciers in the world that's NOT retreating. It advances ~2m per day, then periodically ruptures in a massive collapse into Lago Argentino. Entirely spontaneous. They rope off viewing areas and people just… wait.",
  },
  {
    id: "cuyo",
    emoji: "🍷",
    name: "Cuyo / Andean West",
    tagline: "Malbec's homeland. Aconcagua's shadow.",
    provinces: "Mendoza · San Juan · Neuquén",
    climate: "Dry, continental, extreme sun · 30–40°C summers · Desert-like, but Andes snowmelt feeds the vineyards",
    marchTemp: "30–35°C, very low humidity — intense sun, big temperature swings at night",
    highlight: false,
    badge: "Wine country",
    badgeColor: "bg-purple-500/20 text-purple-300",
    wildlife: [
      { icon: "🦁", name: "Puma", desc: "Present but rarely seen. The Andes corridor is one of the last strongholds. More tracks than sightings." },
      { icon: "🦅", name: "Andean Condor", desc: "More reliably seen here than almost anywhere. Thermals off the mountain faces — look up when you're near ridges." },
      { icon: "🐾", name: "Vizcacha", desc: "Looks like a rabbit-chinchilla crossover. Sits on rocks looking philosophical. Technically a rodent." },
      { icon: "🦜", name: "Flamingos", desc: "In the high-altitude salt lakes at 4,000m. Bright pink colonies at altitude. Absurdly photogenic." },
    ],
    culture: "Mendoza is the Malbec capital of the world — period. The grape arrived from France in the 1850s and promptly became more Argentinian than anything it ever produced in Bordeaux. Hard-working agricultural culture, less cosmopolitan than BA, deeply proud of it. Also: Vaca Muerta shale formation (Neuquén) is one of the largest unconventional oil reserves on earth. Argentina's economic future is probably getting pumped out of the ground here.",
    surprise: "Aconcagua, at 6,961m, is the highest peak in the Americas, the highest outside Asia, and the highest anywhere you can technically reach without crampons via the normal route (if you're fit, acclimatized, and slightly unhinged). No ropes, no technical climbing — just an extreme altitude slog.",
  },
  {
    id: "northwest",
    emoji: "🏔️",
    name: "Northwest / Altiplano",
    tagline: "Pre-Columbian Argentina. Inca roads still here.",
    provinces: "Salta · Jujuy · Tucumán · Catamarca",
    climate: "High altitude dry · 3,500–4,500m in places · Cold nights even in summer · Rainy season March (ending now)",
    marchTemp: "20–28°C days, 5–10°C nights at altitude — layer aggressively",
    highlight: false,
    badge: "Indigenous heartland",
    badgeColor: "bg-orange-500/20 text-orange-300",
    wildlife: [
      { icon: "🦙", name: "Vicuña", desc: "Wild relative of the llama — smaller, faster, impossibly graceful. Critically endangered for most of the 20th century. Recovering now." },
      { icon: "🦩", name: "Andean Flamingo", desc: "Three flamingo species nest in the high-altitude salt lakes. Surreal pink colonies at 4,000m above sea level." },
      { icon: "🦙", name: "Llama", desc: "Domestic everywhere — pack animals, wool, status symbols in indigenous communities. They spit at you if you deserve it." },
      { icon: "🦅", name: "Condor", desc: "The northwest is condor territory. Watch thermals above canyon walls in Quebrada de Humahuaca." },
    ],
    culture: "The strongest surviving pre-Columbian culture in Argentina. Quechua and Aymara heritage — language, textiles, markets, festivals. The Inca road system (Qhapaq Ñan, UNESCO heritage) passes through here. Carnival in Humahuaca (Jujuy) is unlike anything else in the country — drums, masks, chicha, a full week of ceremony that predates Spanish arrival. Completely different world from European-influenced Buenos Aires.",
    surprise: "Jujuy's Quebrada de Humahuaca has mountains that are literally rainbow-colored — reds, yellows, purples, greens — due to mineral deposits laid down over 10 million years. The Cerro de los Siete Colores (Hill of Seven Colors) in Purmamarca is not enhanced. That's just what it looks like.",
  },
  {
    id: "mesopotamia",
    emoji: "🌿",
    name: "Mesopotamia / Litoral",
    tagline: "Subtropical. Jaguars. Iguazú.",
    provinces: "Misiones · Corrientes · Entre Ríos",
    climate: "Subtropical, humid, hot · 20–35°C · High rainfall · Lush and green year-round",
    marchTemp: "28–34°C with very high humidity — feels like a greenhouse",
    highlight: false,
    badge: "Subtropical jungle",
    badgeColor: "bg-green-500/20 text-green-300",
    wildlife: [
      { icon: "🐊", name: "Caiman", desc: "The Iberá Wetlands have them everywhere. Reasonably safe to observe from boats. Less safe to wade near." },
      { icon: "🐆", name: "Jaguar", desc: "Rare, recovering. Iberá Wetlands reintroduction project has brought them back from extinction here. Low odds of seeing one, high odds of finding tracks." },
      { icon: "🦦", name: "Giant River Otter", desc: "1.8m long. Loud. Territorial. Travel in family groups along river channels. One of the rarest mammals in South America." },
      { icon: "🦜", name: "Toucan", desc: "More common here than a pigeon in New York. Rainbow-billed, ridiculous-looking, completely at home in the canopy." },
    ],
    culture: "Guaraní indigenous influence is strong — language words show up everywhere (\"Argentina\" itself has debated origins, but most of the animal and plant names come from Guaraní). The Jesuits built a network of missions (reducciones) here in the 1600s — the Ruinas Jesuíticas are UNESCO heritage. Chamamé, an accordion-based folk music from Corrientes, is also UNESCO heritage. Mate is deeply serious here — not a trend, a practice.",
    surprise: "Iguazú Falls (Misiones, on the Brazil border) is wider than Victoria Falls, taller than Niagara, and the most water-volume waterfall in the world by peak flow. Eleanor Roosevelt visited in 1944, saw it, and allegedly said 'Poor Niagara.' Argentina owns the better side.",
  },
  {
    id: "chaco",
    emoji: "🌵",
    name: "The Chaco",
    tagline: "Argentina's hot, forgotten interior.",
    provinces: "Chaco · Formosa · Santiago del Estero",
    climate: "Hottest region in the country · 40–45°C in summer · Dry scrubland · Floods in rainy season",
    marchTemp: "38–45°C · Oppressive · Bring water",
    highlight: false,
    badge: "Off the beaten path",
    badgeColor: "bg-red-500/20 text-red-300",
    wildlife: [
      { icon: "🐆", name: "Jaguar", desc: "The Gran Chaco is the last viable jaguar corridor in South America outside the Amazon. Rarely seen but genuinely present." },
      { icon: "🐜", name: "Giant Anteater", desc: "1.2m long tongue. Eats 35,000 ants per day. Moves slow until it doesn't — they can be aggressive if cornered." },
      { icon: "🐗", name: "Peccary", desc: "Wild pigs that travel in aggressive herds. Two species in the Chaco. Both would prefer you back up." },
      { icon: "🐍", name: "Boa Constrictor", desc: "Common in the quebracho forest. Not a reason not to go — a reason to watch where you step." },
    ],
    culture: "Indigenous Qom and Wichí communities — the most economically marginalized region of Argentina. Very little tourism infrastructure. The quebracho (iron wood) tree was so hard it nearly destroyed every saw sent to cut it, and powered Argentina's tannin industry for a century. The Chaco remains poor, hot, and largely bypassed by the country's economic narrative. Honest travel here is genuinely off-map.",
    surprise: "The Gran Chaco is the second-largest forest in South America after the Amazon — but almost nobody knows it exists. It's being deforested at one of the fastest rates in the world, largely for soy farming. By the time most people hear about it, a significant percentage of it will already be gone.",
  },
];

const SEASONS = [
  {
    label: "Now — Late Summer",
    months: "Dec–Mar",
    icon: "☀️",
    active: true,
    regions: [
      { name: "Buenos Aires", temp: "22–28°C", note: "Hot, humid, afternoon storms" },
      { name: "Patagonia", temp: "10–20°C", note: "Best time to visit. Windy." },
      { name: "Northwest", temp: "20–28°C days", note: "Rainy season winding down" },
      { name: "Mendoza", temp: "30–35°C", note: "Harvest season — vineyards active" },
    ],
  },
  {
    label: "Autumn",
    months: "Apr–May",
    icon: "🍂",
    active: false,
    regions: [
      { name: "Buenos Aires", temp: "15–22°C", note: "Best weather of the year" },
      { name: "Patagonia", temp: "5–12°C", note: "Getting cold. Wind intensifies." },
      { name: "Northwest", temp: "15–22°C", note: "Dry season begins. Clear skies." },
      { name: "Mendoza", temp: "20–28°C", note: "Peak wine tourism season" },
    ],
  },
  {
    label: "Winter",
    months: "Jun–Aug",
    icon: "❄️",
    active: false,
    regions: [
      { name: "Buenos Aires", temp: "10–15°C", note: "Mild, grey, rainy sometimes" },
      { name: "Patagonia", temp: "-5–5°C", note: "Harsh. Tierra del Fuego freezes." },
      { name: "Northwest", temp: "10–18°C days", note: "Cold nights, clear days, dry" },
      { name: "Mendoza", temp: "5–15°C", note: "Ski season in the Andes" },
    ],
  },
  {
    label: "Spring",
    months: "Sep–Nov",
    icon: "🌸",
    active: false,
    regions: [
      { name: "Buenos Aires", temp: "15–25°C", note: "Jacaranda bloom. Excellent." },
      { name: "Patagonia", temp: "8–18°C", note: "Warming up. Less wind." },
      { name: "Northwest", temp: "18–28°C", note: "Dry, clear, pre-rainy season" },
      { name: "Mendoza", temp: "20–30°C", note: "Warming fast. Wildflowers." },
    ],
  },
];

export default function Geography() {
  return (
    <section id="geography" className="space-y-6">
      <h2 className="section-title">🗺️ Geography</h2>

      {/* WHERE YOU ARE — hero callout */}
      <div className="card p-4">
        <div className="flex items-start gap-3 mb-4">
          <div className="text-3xl">🌎</div>
          <div className="flex-1">
            <div className="text-xs text-amber-400/70 uppercase tracking-wider font-semibold mb-1">The basics</div>
            <h3 className="text-lg font-black text-white leading-tight">Where You Are</h3>
          </div>
        </div>

        <div className="bg-amber-950/30 border border-amber-700/30 rounded-lg p-3 mb-4">
          <p className="text-sm text-amber-200 leading-relaxed">
            <strong className="text-amber-300">Southern Hemisphere.</strong> Seasons are reversed — you're arriving in late summer (March), not late winter. Pack for hot and humid, not cold.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {[
            { icon: "📐", label: "1.07M sq mi", sub: "8th largest country on earth" },
            { icon: "👥", label: "46M people", sub: "90% live in cities" },
            { icon: "🌡️", label: "March now", sub: "= late summer. Hot." },
          ].map((item) => (
            <div key={item.label} className="bg-white/3 rounded-lg p-2.5 text-center">
              <div className="text-xl mb-1">{item.icon}</div>
              <div className="text-xs font-bold text-gray-100 leading-tight">{item.label}</div>
              <div className="text-xs text-gray-500 mt-0.5 leading-tight">{item.sub}</div>
            </div>
          ))}
        </div>

        {/* BA → Córdoba journey */}
        <div className="flex items-center gap-2 bg-white/3 rounded-lg p-3">
          <div className="flex-1 text-center">
            <div className="text-base font-bold text-gray-100">Buenos Aires</div>
            <div className="text-xs text-gray-400 mt-0.5">Coastal · Flat · Humid</div>
            <div className="pill bg-amber-500/20 text-amber-300 text-xs mt-1.5">22–28°C in March</div>
          </div>
          <div className="text-center px-2">
            <div className="text-lg">✈️</div>
            <div className="text-xs text-gray-500">700km</div>
          </div>
          <div className="flex-1 text-center">
            <div className="text-base font-bold text-gray-100">Córdoba</div>
            <div className="text-xs text-gray-400 mt-0.5">Inland · Sierras · Drier</div>
            <div className="pill bg-orange-500/20 text-orange-300 text-xs mt-1.5">25–35°C in March</div>
          </div>
        </div>
      </div>

      {/* CITY MAPS */}
      <div className="space-y-4">
        {/* Buenos Aires Map */}
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-gray-100">Buenos Aires</h3>
              <p className="text-xs text-gray-500 mt-0.5">Fierro Hotel · Palermo Hollywood</p>
            </div>
            <span className="pill bg-amber-500/20 text-amber-300 text-xs">You're staying here</span>
          </div>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-58.5312%2C-34.7050%2C-58.3312%2C-34.5050&layer=mapnik&marker=-34.6037%2C-58.3816"
            style={{ border: 0, borderRadius: 12, width: "100%", height: 220 }}
            loading="lazy"
            title="Buenos Aires map — Palermo Hollywood"
          />
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            The pin marks central BA. Fierro Hotel is in Palermo Hollywood — the cluster of streets northwest of the marker. Flat, walkable, the best base in the city.
          </p>
        </div>

        {/* Córdoba Map */}
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-bold text-gray-100">Córdoba</h3>
              <p className="text-xs text-gray-500 mt-0.5">700km northwest · Córdoba Sierras</p>
            </div>
            <span className="pill bg-orange-500/20 text-orange-300 text-xs">Mar 4–7</span>
          </div>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-64.2800%2C-31.4900%2C-64.0800%2C-31.2900&layer=mapnik&marker=-31.4201%2C-64.1888"
            style={{ border: 0, borderRadius: 12, width: "100%", height: 220 }}
            loading="lazy"
            title="Córdoba city map"
          />
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Córdoba sits at the foot of the Sierras. Unlike BA, you'll notice the city has topography — hills visible from most of the city center. 25–35°C in March, much less humidity than BA.
          </p>
        </div>
      </div>

      {/* CÓRDOBA DEEP DIVE */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">🏛️</span>
            <div>
              <div className="font-bold text-gray-100">Córdoba — The City</div>
              <div className="text-xs text-amber-400/70">Your second stop, deep dive</div>
            </div>
          </div>
        }
        defaultOpen={true}
        accent="amber"
      >
        <div className="space-y-3 pt-1">
          <div className="bg-amber-950/30 border border-amber-700/30 rounded-lg p-3">
            <p className="text-sm text-amber-200 leading-relaxed">
              Argentina's 3rd-largest city (1.5M people). Set at the edge of the Córdoba Sierras — a low mountain range that maxes out around 2,800m. <strong className="text-amber-300">Not flat like Buenos Aires.</strong> You'll see hills from anywhere in the city.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: "🌡️", label: "March Climate", desc: "25–35°C, low humidity. Much drier than BA. Afternoon storms possible — usually dramatic and brief." },
              { icon: "🎓", label: "University Town", desc: "Home to Argentina's oldest university (1613). Younger, more bohemian energy than BA." },
              { icon: "🗣️", label: "The Accent", desc: "Cordobés accent is famously sing-songy — 'cantito' — and lovingly mocked by porteños. You'll notice it immediately." },
              { icon: "🫙", label: "The Empanadas", desc: "Same asado culture as BA, but Córdoba's empanadas are different: cumin-heavy, spicier, smaller. A regional point of pride." },
            ].map((item) => (
              <div key={item.label} className="bg-white/3 rounded-lg p-3">
                <div className="text-xl mb-1.5">{item.icon}</div>
                <div className="text-xs font-bold text-gray-100 mb-1">{item.label}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Wildlife in the Sierras</div>
            {[
              { icon: "🦁", name: "Puma", desc: "In the sierra range — unlikely to see one in the city, but they're out there. More puma habitat than most people realize." },
              { icon: "🐊", name: "Vizcacha", desc: "Rocky-ground rodent that looks like a cartoon rabbit-rat hybrid. Common in the boulder fields above the city." },
              { icon: "🦅", name: "Eagles & Hawks", desc: "Multiple raptor species circle the sierra thermals. Look up when you're at any elevation." },
              { icon: "🦎", name: "Lizards", desc: "Various species sunning on rocks throughout the Sierras. Common, harmless, and deeply committed to their rock." },
            ].map((w) => (
              <div key={w.name} className="flex gap-2 bg-white/3 rounded-lg p-2.5">
                <span className="text-lg flex-shrink-0">{w.icon}</span>
                <div>
                  <span className="text-xs font-bold text-gray-200">{w.name}</span>
                  <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-950/30 border border-blue-800/30 rounded-lg p-3">
            <p className="text-xs text-blue-300 leading-relaxed">
              <strong className="text-blue-200">Political context:</strong> Córdoba is more Milei-friendly than Buenos Aires. The city voted strongly libertarian in 2023. Conversations about politics will run different here than in BA — worth knowing before you end up in one.
            </p>
          </div>
        </div>
      </Expandable>

      {/* 6 REGIONS */}
      <div className="space-y-2">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1 mb-3">Argentina's 6 Major Regions</div>

        {REGIONS.map((region) => (
          <Expandable
            key={region.id}
            title={
              <div className="flex items-center gap-2 flex-1">
                <span className="text-xl">{region.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-gray-100">{region.name}</span>
                    <span className={`pill text-xs ${region.badgeColor}`}>{region.badge}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5 truncate">{region.tagline}</div>
                </div>
              </div>
            }
            defaultOpen={region.highlight}
            accent="amber"
          >
            <div className="space-y-3 pt-1">
              {/* Climate strip */}
              <div className="flex gap-2">
                <div className="flex-1 bg-white/3 rounded-lg p-2.5">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Climate</div>
                  <p className="text-xs text-gray-300 leading-relaxed">{region.climate}</p>
                </div>
                <div className="bg-amber-950/20 border border-amber-700/20 rounded-lg p-2.5 flex-shrink-0 text-center min-w-[90px]">
                  <div className="text-xs text-amber-400/70 uppercase tracking-wider mb-1">March</div>
                  <p className="text-xs text-amber-300 leading-relaxed font-semibold">{region.marchTemp}</p>
                </div>
              </div>

              {/* Provinces */}
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Provinces</div>
                <p className="text-xs text-gray-400">{region.provinces}</p>
              </div>

              {/* Wildlife */}
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Wildlife you can actually see</div>
                <div className="grid grid-cols-2 gap-2">
                  {region.wildlife.map((w) => (
                    <div key={w.name} className="bg-white/3 rounded-lg p-2.5">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-base">{w.icon}</span>
                        <span className="text-xs font-bold text-gray-200">{w.name}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Culture */}
              <div className="bg-white/3 rounded-lg p-3">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">Culture</div>
                <p className="text-xs text-gray-300 leading-relaxed">{region.culture}</p>
              </div>

              {/* Surprise fact */}
              <div className="bg-amber-950/20 border border-amber-700/20 rounded-lg p-3">
                <div className="text-xs text-amber-400/70 uppercase tracking-wider mb-1">Weird fact</div>
                <p className="text-xs text-amber-200 leading-relaxed">{region.surprise}</p>
              </div>
            </div>
          </Expandable>
        ))}
      </div>

      {/* SEASONS GRID */}
      <div className="card p-4">
        <h3 className="font-bold text-gray-100 mb-1">Seasons — Flipped</h3>
        <p className="text-xs text-gray-400 mb-4 leading-relaxed">
          Southern Hemisphere means opposite seasons. When it's summer in Texas, Argentina is in winter. You're visiting in late summer.
        </p>

        <div className="space-y-3">
          {SEASONS.map((season) => (
            <div
              key={season.label}
              className={`rounded-lg border p-3 ${
                season.active
                  ? "border-amber-700/40 bg-amber-950/20"
                  : "border-white/5 bg-white/2"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{season.icon}</span>
                <div>
                  <span className={`text-sm font-bold ${season.active ? "text-amber-300" : "text-gray-300"}`}>
                    {season.label}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">{season.months}</span>
                </div>
                {season.active && (
                  <span className="pill bg-amber-500/20 text-amber-300 text-xs ml-auto">You're here</span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {season.regions.map((r) => (
                  <div key={r.name} className="bg-white/3 rounded p-1.5">
                    <div className="text-xs font-semibold text-gray-300">{r.name}</div>
                    <div className="text-xs text-amber-300/80">{r.temp}</div>
                    <div className="text-xs text-gray-500 leading-tight mt-0.5">{r.note}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PACKING CALLOUT */}
      <div className="card p-4">
        <h3 className="font-bold text-gray-100 mb-3">What This Means for Packing</h3>
        <div className="space-y-2">
          {[
            { icon: "👕", tip: "Buenos Aires in March: light clothes, breathable fabrics. It's summer. Humidity hits hard." },
            { icon: "⛈️", tip: "Afternoon thunderstorms are common in March. Brief but heavy. Light jacket or packable rain layer." },
            { icon: "🌞", tip: "Córdoba: hotter, drier, intense sun. SPF matters more than in BA. A hat is not optional." },
            { icon: "🥾", tip: "If you venture into the Sierras outside Córdoba: closed shoes or light hiking boots. The terrain is rocky." },
            { icon: "🌡️", tip: "Temperature swings between cities: BA is 22–28°C, Córdoba can hit 35°C. Pack for variance." },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 bg-white/3 rounded-lg p-2.5">
              <span className="text-base flex-shrink-0">{item.icon}</span>
              <p className="text-xs text-gray-300 leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
