"use client";
import Expandable from "./Expandable";

const TIMELINE = [
  {
    era: "Pre-Colonial",
    years: "before 1536",
    emoji: "🏹",
    content: `The Pampas were home to several indigenous groups, most notably the Querandí — seminomadic hunter-gatherers who lived off the vast grasslands and the Río de la Plata estuary. No cities, no agriculture in the European sense. They hunted rhea and guanaco, fished, and moved with the seasons.

When the Spanish arrived, they initially underestimated the Querandí, who had no gold and no interest in subjugation. Early conflict was immediate. Pedro de Mendoza's men were harassed relentlessly in the first settlement.

The Mapuche (from what is now Chile/Patagonia) were the dominant resistance force further south — formidable warriors who remained un-conquered well into the 1800s. Argentina's "Conquest of the Desert" (1878-1885) — its euphemistic genocide — effectively ended indigenous resistance and opened Patagonia to European settlement.`,
  },
  {
    era: "Spanish Colonization",
    years: "1536 — 1816",
    emoji: "⚓",
    content: `Pedro de Mendoza founded Buenos Aires in 1536 — and it immediately failed. The Querandí fought back, food ran short, and the settlement was abandoned in 1541. The city was re-founded permanently in 1580 by Juan de Garay.

For most of the colonial period, Buenos Aires was a backwater. Lima (Peru) was the seat of Spanish power in South America, and Buenos Aires was little more than a smuggling port — officially prohibited from direct trade with Spain (everything was supposed to go through Lima), which meant everyone smuggled everything anyway. This established an Argentine tradition of working around rules that continues to this day.

The Viceroyalty of the Río de la Plata was created in 1776, finally giving Buenos Aires its own administrative status. When British forces invaded in 1806 and 1807 — the Reconquista and Defensa — local militias drove them out without help from Spain. The porteños (port people) realized they could defend themselves. That seed of self-reliance planted the idea of independence.`,
  },
  {
    era: "Independence",
    years: "1816",
    emoji: "🎆",
    content: `Argentina declared independence from Spain on July 9, 1816 in Tucumán — not in Buenos Aires. This matters culturally. The interior of the country always had an uneasy relationship with the capital city.

The decades after independence were messy: civil wars between Unitarians (centralists, Buenos Aires-based) and Federalists (provincial powers). This tension between Buenos Aires and "the interior" runs through all of Argentine history. It's still there today.

José de San Martín is the national hero — the general who liberated Argentina, Chile, and Peru. He's treated the way George Washington is treated in the US, except with more dramatic facial hair.`,
  },
  {
    era: "The Golden Age",
    years: "1880 — 1930",
    emoji: "✨",
    content: `This is the key to understanding Argentina. For fifty years, Argentina was one of the wealthiest countries on Earth.

The Pampas are among the most fertile grasslands in the world. As Europe industrialized and needed food, Argentina exported beef, wheat, and wool in staggering quantities. By 1900, Argentina had the highest per-capita GDP in Latin America — and ranked among the top 10 globally. Ahead of Germany. Ahead of France.

European immigration flooded in — 6 million people between 1880 and 1930, mostly Italians and Spanish, but also British, Germans, Jews from Eastern Europe, Ottomans. Buenos Aires became a genuinely cosmopolitan city. The elites built boulevards to rival Paris (they literally hired Hausmann's students to design them), opera houses, grand cafés, Belle Époque apartment buildings.

The Teatro Colón opened in 1908. The Avenida de Mayo was modeled on Madrid's Gran Vía. The Recoleta neighborhood was built entirely during this period. You are walking through the physical evidence of a country that believed, with complete justification, that it was going to become a world power.

Then came 1929. The global depression collapsed commodity prices. The model that had worked so well — export primary goods, import finished products — suddenly stopped working. Argentina never really recovered the confidence of those years. Everything since has been a story of a country trying to figure out why it stopped ascending.`,
  },
  {
    era: "The Perón Era",
    years: "1946 — 1955 & 1973 — 1974",
    emoji: "⭐",
    content: `Juan Domingo Perón is the central figure of modern Argentina. You cannot understand the country without him. He came to power in 1946 as a military colonel who had studied Mussolini's Italy and genuinely tried to build an Argentine version of fascist-style populism — except for the working class instead of against them.

Perón nationalized industries (railways, utilities), created strong unions, expanded workers' rights, and built a welfare state. His second wife, Eva Perón — "Evita" — became the human face of Peronism. She was from the provinces, illegitimate, working-class. She made herself into an icon before dying of cancer at 33 in 1952. The grief in Buenos Aires was extraordinary.

The economics of Peronism: Perón financed his welfare state by taxing agricultural exports — the very engine that had made Argentina rich — and redistributing to industrial workers. It worked politically and badly economically. Argentina began its inflation spiral during this period.

The military coup in 1955 ousted Perón and banned Peronism — which predictably made it more powerful. Perón lived in exile for 18 years (mostly in Franco's Spain). In 1973, with Argentina in chaos, he was allowed to return. He won the election with 62% of the vote. He died in office in 1974.

His third wife, Isabel Martínez de Perón, became president — the first female head of state in the world. She was spectacularly unqualified. The country descended into chaos between left-wing guerrillas and right-wing death squads. The stage was set for what came next.`,
  },
  {
    era: "Military Dictatorship & The Dirty War",
    years: "1976 — 1983",
    emoji: "💀",
    content: `On March 24, 1976, the military seized power in a coup. What followed was one of the most brutal state terror campaigns in Latin American history.

The junta — led initially by General Jorge Rafael Videla — waged what they called a "Dirty War" against "subversion." In practice, this meant the systematic kidnapping, torture, and murder of anyone suspected of leftist sympathies: students, professors, journalists, psychologists, lawyers, priests, trade unionists, sometimes just people who knew someone who knew someone.

The disappeared — los desaparecidos — numbered approximately 30,000. They were taken in the night, held in secret detention centers (hundreds operated across the country, including one at the Navy Mechanics School in Buenos Aires, still visible from the highway), tortured, and killed. Bodies were dumped at sea or in mass graves.

The Mothers of the Plaza de Mayo began marching in 1977 — women whose children had been taken, demanding information. The military didn't know what to do with old women marching in circles wearing white headscarves. The marches became a symbol of resistance that the regime couldn't crush without global outrage. The Mothers still march every Thursday at 3:30 PM.

Babies born to pregnant prisoners were taken from their mothers (who were then killed) and given to military families to raise. Over 500 such "appropriated" children have been identified; the search continues.

The dictatorship ended in 1983, humiliated by the Falklands War and collapsing economy. The transition to democracy came with the election of Raúl Alfonsín. The junta leaders were eventually tried and convicted — rare in Latin America. Videla died in prison in 2013.`,
  },
  {
    era: "Falklands War (Malvinas)",
    years: "1982",
    emoji: "⚔️",
    content: `In April 1982, the military dictatorship — desperate to distract from its economic failures and brutality — invaded the Falkland Islands (Las Malvinas), a British territory in the South Atlantic claimed by Argentina.

It was a political calculation that Argentina would seize the islands, Britain wouldn't respond militarily (too far away, not worth the cost), and the junta would get a nationalist victory. Margaret Thatcher responded militarily.

Britain retook the islands in 73 days. Argentina lost approximately 650 soldiers; Britain around 250. The defeat shattered the military's legitimacy. Within a year they had handed power back to civilians.

For Argentines, "Las Malvinas son argentinas" remains a genuinely felt conviction across the political spectrum — the one thing Peronists and anti-Peronists agree on. Don't bring it up unless you want a long conversation.`,
  },
  {
    era: "Hyperinflation",
    years: "1989",
    emoji: "📉",
    content: `By 1989, Argentina's inflation hit 3,079% annually. Three thousand percent. Prices were changing multiple times a day. Workers would cash their paychecks and immediately spend everything before the money lost more value.

This moment is burned into Argentine cultural memory. It explains the national obsession with the dollar (a stable store of value), the deep distrust of banks and peso savings, and the coping mechanism of treating economic collapse as an expected background condition rather than a crisis.

President Raúl Alfonsín resigned six months early — the humiliation of economic failure on top of the democratic transition he had managed. Carlos Menem came in, pegged the peso 1:1 to the USD, privatized everything, and created the illusion of stability. That illusion lasted a decade.`,
  },
  {
    era: "2001 Collapse",
    years: "2001 — 2002",
    emoji: "🔥",
    content: `Argentina's 2001 economic crisis remains the template for what a total sovereign debt meltdown looks like.

The peso-dollar peg that Menem had created in 1991 worked until it didn't. By 2001, Argentina's debt was unserviceable. When capital started fleeing, the government imposed the "corralito" — freezing bank accounts, limiting withdrawals to $250/week. People's savings were suddenly inaccessible.

The resulting chaos: supermarket looting, middle-class people banging pots in the streets (cacerolazos), police crackdowns killing dozens. Five presidents in two weeks — each one resigned under pressure. Fernando de la Rúa fled the Casa Rosada by helicopter while the crowd burned things below.

Argentina defaulted on $132 billion in debt — the largest sovereign default in history at the time. The peso, unpegged, lost two-thirds of its value in weeks. The middle class was wiped out. People with dollar savings in Argentine banks found them forcibly converted to pesos at disadvantageous rates ("pesification").

This is why Argentines are obsessed with keeping dollars in cash, outside the banking system. Not paranoia — lived memory.`,
  },
  {
    era: "Kirchner Era",
    years: "2003 — 2015",
    emoji: "🔄",
    content: `Néstor Kirchner won a fragmented election in 2003 and presided over Argentina's recovery. He benefited from high commodity prices, restructured the debt at huge discounts to creditors, expanded social programs, and brought Argentina back from the abyss.

When Néstor died suddenly in 2010, his wife Cristina Fernández de Kirchner (who had already been president since 2007) continued in power until 2015. The Kirchner period saw genuine economic recovery and expansion, but also increasing interventionism, currency controls, manipulation of inflation statistics, and the nationalization of YPF (the oil company) and Aerolíneas Argentinas.

By the end of Cristina's second term, inflation was accelerating again, reserves were depleted, and the fiscal situation was deteriorating. Mauricio Macri (center-right) won in 2015. He inherited a mess, couldn't fix it, and lost to Alberto Fernández (with Cristina as VP) in 2019. The cycle continued.`,
  },
  {
    era: "Javier Milei & Today",
    years: "2023 — present",
    emoji: "⚡",
    content: `Javier Milei won the 2023 presidential election running on the most radical libertarian platform in Argentine history. An economist and TV pundit known for chainsaw metaphors about the state, he promised to eliminate the central bank, dollarize the economy, slash government spending, and defund the "political caste."

He has partially delivered. In his first year: a massive fiscal adjustment (the largest primary surplus in Argentine history), elimination of thousands of government positions, removal of energy subsidies, and a sharp devaluation of the peso. Inflation, which hit 211% in 2023, began declining in 2024 as the fiscal adjustment took hold. By late 2024 it had fallen to under 100% annually — still catastrophic by global standards, but a genuine improvement.

The cost: a recession, rising poverty rates, and brutal cuts to public universities, science funding, and social programs. Whether this is a necessary (if painful) restructuring or a doctrinaire experiment that will collapse like all the others is the central Argentine question of this moment. Milei is genuinely popular with young people who see him as a break from the system that failed them.`,
  },
];

const ECON_EXPLAINERS = [
  {
    title: "The Blue Dollar",
    emoji: "💵",
    content: `Argentina has multiple exchange rates — a reflection of currency controls that have existed in various forms for decades.

The **official rate**: Set by the government. Highly unfavorable. This is what you get at a bank or airport. Avoid.

The **blue dollar (dólar blue)**: The informal/black market rate. Significantly better. As of early 2026, the gap has narrowed under Milei (who has been gradually unifying rates), but bringing USD cash and exchanging at casas de cambio still typically yields a better rate than official channels.

**Practical implication**: Bring US dollar bills. Clean, unfolded, post-2013 (they prefer newer bills). $100 bills get the best rates. Exchange at casas de cambio (legal money exchange houses) or ask your hotel. Do not exchange at the airport.

**What this means for you**: Everything is cheaper in Argentina than it looks on paper. Restaurant meals that would be $80 in the US cost $15-25. This is a great place to eat and drink well.`,
  },
  {
    title: "Why Does Argentina Keep Collapsing?",
    emoji: "🤔",
    content: `This is the great Argentine question. A country with extraordinary natural resources — fertile Pampas, oil in Patagonia, lithium in the northwest, fisheries, forestry — has experienced serial economic crises for 75 years.

Several overlapping explanations:

**The primary goods trap**: Argentina got rich exporting beef and wheat. This created no incentive to develop industrial capacity or technological sophistication. When commodity prices fall, the whole economy falls.

**Political economy of Peronism**: Perón built a coalition of urban workers and unions who benefit from inflation (wages can be indexed, capital cannot) and state spending. This coalition is powerful enough to prevent the fiscal discipline that would stop inflation, but not powerful enough to build a long-term growth model.

**The inflation spiral**: Once people expect inflation, they demand wage increases to compensate, which causes inflation, which causes more wage demands. Breaking this spiral requires credibility — which Argentina's government has repeatedly lost. Every attempt at stabilization (the convertibility, the corralito) has ultimately failed, which makes the next attempt even harder.

**Chronic fiscal deficits**: Argentina's governments have consistently spent more than they collect. The political cost of raising taxes or cutting spending exceeds the political cost of printing money — until the printing causes a crisis, at which point the same cycle begins again.

**Distrust of institutions**: Because the government has confiscated savings (1989, 2002), Argentines rationally hold dollars in cash and distrust the banking system. This makes monetary policy harder, which makes crises more likely.

The tragedy is that Argentina's underlying resources are genuinely extraordinary. The country should be wealthy. The question is whether any political formation can generate the institutional trust and long-term stability to actually use them.`,
  },
];

export default function History() {
  return (
    <section id="history" className="space-y-4">
      <h2 className="section-title">📜 History & Economics</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        Argentina's story is one of extraordinary peaks and catastrophic collapses. Walk these streets knowing what happened here.
      </p>

      {/* Timeline */}
      <div className="space-y-3">
        {TIMELINE.map((item, idx) => (
          <Expandable
            key={item.era}
            title={
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.emoji}</span>
                <div>
                  <div className="font-bold text-gray-100 text-sm">{item.era}</div>
                  <div className="text-xs text-amber-400/70">{item.years}</div>
                </div>
              </div>
            }
            accent={idx < 3 ? "amber" : "red"}
          >
            <div className="space-y-3 pt-1">
              {item.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-gray-300 leading-relaxed">{para}</p>
              ))}
            </div>
          </Expandable>
        ))}
      </div>

      {/* Economics explainers */}
      <div className="mt-6 space-y-3">
        <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
          <span>💰</span> Economics Explainers
        </h3>
        {ECON_EXPLAINERS.map((item) => (
          <Expandable
            key={item.title}
            title={
              <div className="flex items-center gap-2">
                <span className="text-lg">{item.emoji}</span>
                <span className="font-bold text-gray-100">{item.title}</span>
              </div>
            }
            accent="amber"
          >
            <div className="space-y-3 pt-1">
              {item.content.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm text-gray-300 leading-relaxed">
                  {para.split("**").map((part, j) =>
                    j % 2 === 1 ? (
                      <strong key={j} className="text-amber-300 font-semibold">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              ))}
            </div>
          </Expandable>
        ))}
      </div>
    </section>
  );
}
