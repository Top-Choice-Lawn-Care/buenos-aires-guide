"use client";
import Expandable from "./Expandable";

export default function Food() {
  return (
    <section id="food" className="space-y-4">
      <h2 className="section-title">🥩 Food</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        Argentina takes its food seriously. The beef is genuinely exceptional. Eat a lot of it.
      </p>

      {/* Critical timing info */}
      <div className="bg-red-950/40 border border-red-700/40 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">🕙</span>
          <span className="font-bold text-red-300">Critical: Dinner Timing</span>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed">
          Nobody eats dinner until 9 PM. Restaurants are literally empty and sometimes closed at 7 PM. A 7:30 PM reservation puts you in a dining room with other tourists. If you want to eat like a porteño, show up at 9:30 or 10 PM. Kitchen doesn't close until midnight or later.
        </p>
        <p className="text-sm text-gray-400 mt-2 leading-relaxed">
          Lunch is 1–3 PM and is taken seriously. It is not a meal you skip.
        </p>
      </div>

      {/* Asado */}
      <Expandable
        title={
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <div>
              <div className="font-bold text-gray-100">Asado Culture</div>
              <div className="text-xs text-amber-400/70">The Argentine BBQ — except more sacred</div>
            </div>
          </div>
        }
        defaultOpen={true}
        accent="red"
      >
        <div className="space-y-3 pt-1">
          <p className="text-sm text-gray-300 leading-relaxed">
            Asado is not a cooking method. It is a social institution. It is what happens on Sunday afternoons when family gathers. It is the reason someone needs to be in charge (the asador — a role of genuine responsibility) and everyone else is supposed to relax.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            The asado is cooked over wood coals, never gas. The fire is built first, then the coals are moved under the parrilla (grill). The asador controls the heat by adjusting the grill height, not by adjusting a knob. This takes skill and time. A full asado takes 2–3 hours.
          </p>
          <div className="bg-white/3 rounded-lg p-3">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">What Gets Grilled</div>
            <ul className="space-y-1.5 text-sm text-gray-300">
              {[
                { item: "Tira de asado", desc: "Short ribs, Argentine style (cut across the bone, not parallel)" },
                { item: "Vacío", desc: "Flank steak. Fatty, flavorful. One of the better cuts." },
                { item: "Bife de chorizo", desc: "Sirloin. Classic. Not what you think — no sausage involved." },
                { item: "Costilla", desc: "Rib chop. Rich, fatty, excellent." },
                { item: "Mollejas", desc: "Sweetbreads (thymus gland). Order them. Do not ask what they are first." },
                { item: "Chorizos", desc: "Pork sausages. First course. Eaten in bread as a choripán." },
                { item: "Morcilla", desc: "Blood sausage. Earthy, rich. Also a first-course item." },
              ].map((item) => (
                <li key={item.item} className="flex gap-2">
                  <span className="text-amber-500 font-semibold flex-shrink-0 min-w-[110px] text-xs">{item.item}</span>
                  <span className="text-xs text-gray-400">{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/3 rounded-lg p-3">
            <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-2">Etiquette</div>
            <ul className="space-y-1 text-sm text-gray-400">
              {[
                "Don't hover over the asador giving suggestions. Let them cook.",
                "Chimichurri (herb sauce) and salsa criolla are always present. Use them.",
                "Don't ask for well-done. Argentines cook their beef medium to medium-rare by default.",
                "The asado is a long, slow afternoon event. Plan 3+ hours.",
                "If invited to someone's asado, it's a genuine honor. Show up with wine.",
              ].map((tip, i) => (
                <li key={i} className="flex gap-2 text-xs">
                  <span className="text-red-400 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Expandable>

      {/* Top Parrillas */}
      <div className="card p-4 space-y-3">
        <h3 className="font-bold text-amber-400 text-sm uppercase tracking-wider mb-2">🏆 Top Parrillas in Buenos Aires</h3>
        {[
          {
            name: "Don Julio",
            neighborhood: "Palermo",
            reputation: "World-class",
            desc: "The most acclaimed parrilla in Buenos Aires. 50 Best Restaurants in the World alum. Consistently excellent beef, exceptional wine list, iconic tile floor. Book at least a week ahead — reservations fill fast. Order the bife de chorizo and a bottle of Catena.",
            book: true,
          },
          {
            name: "La Cabrera",
            neighborhood: "Palermo",
            reputation: "Beloved institution",
            desc: "Famous for its enormous portions and the tiny side dishes that arrive with your main. Chorizo, sweetbreads, massive steaks. Always busy, lively atmosphere. Book ahead but easier than Don Julio. The ojo de bife (ribeye) is outstanding.",
            book: true,
          },
          {
            name: "El Preferido de Palermo",
            neighborhood: "Palermo",
            reputation: "Local institution",
            desc: "More casual, very Argentine. Old school bodegón (tavern) vibes. Excellent empanadas, good steaks, cheaper than Don Julio. Lunch here is a Buenos Aires rite of passage. No need to book.",
            book: false,
          },
          {
            name: "El Federal",
            neighborhood: "San Telmo",
            reputation: "Historic",
            desc: "Bar and restaurant since 1864. Not purely a parrilla but one of the oldest eating establishments in BA. Good steaks, matambre a la pizza, great atmosphere. Order the Malbec from the Mendoza list.",
            book: false,
          },
        ].map((r) => (
          <div key={r.name} className="flex gap-3 bg-white/3 rounded-lg p-3">
            <span className="text-lg flex-shrink-0">🥩</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-gray-100 text-sm">{r.name}</span>
                <span className="text-xs text-gray-500">{r.neighborhood}</span>
                {r.book && (
                  <span className="pill bg-red-500/20 text-red-300 text-xs">Book ahead</span>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Essential foods */}
      <div className="space-y-3">
        {[
          {
            name: "Empanadas",
            emoji: "🫔",
            content: "Half-moon pastries, baked or fried, filled with various things. This is Argentine fast food — sold everywhere, eaten with hands. What to order: carne (beef, classic), humita (corn and cheese), caprese (tomato and cheese), picante (spicy beef if available). Saltenas (Bolivian style) are smaller and juicier — worth finding. Tucumán province is considered the empanada capital. In Buenos Aires, look for signs saying 'empanadas tucumanas.'",
          },
          {
            name: "Medialunas",
            emoji: "🥐",
            content: "Argentina's answer to the croissant, except better. Smaller, slightly sweet, brushed with sugar syrup, pillowy interior. The morning ritual: media luna with café con leche at a café bar. Do this every morning. Non-negotiable. Find a neighborhood café (not a tourist café) and sit at the bar like a local. It will cost almost nothing and start the day correctly.",
          },
          {
            name: "Dulce de Leche",
            emoji: "🍮",
            content: "Caramelized milk spread. It is in everything: breakfast pastries, alfajores (the national cookie — two shortbread rounds sandwiching dulce de leche), ice cream, cakes, on toast. Don't resist it. Argentina is the world capital of dulce de leche and they take pride in it. Havanna is the classic alfajor brand — buy a box at the airport on the way out.",
          },
          {
            name: "Mate",
            emoji: "🧉",
            content: "Technically an infused drink, culturally a social institution. Yerba mate leaves are packed into a gourd (also called a mate), hot water is added from a thermos, and the drink is sipped through a metal straw (bombilla) that filters out the leaves. The ritual: one person (the cebador) prepares and passes the mate, everyone shares the same gourd in turn. When offered: accept it. Don't say thank you until you want to stop ('gracias' signals you're done). You'll see people carrying mate thermoses everywhere — on the street, at parks, in offices. It's as much about the social connection as the caffeine.",
          },
        ].map((item) => (
          <div key={item.name} className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{item.emoji}</span>
              <span className="font-bold text-gray-100">{item.name}</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
