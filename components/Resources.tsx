"use client";

const ARTICLES = [
  {
    title: "The Weight of Money",
    publication: "The New Yorker",
    desc: "Jon Lee Anderson's masterful long-form piece on Argentina's economic psychology — why the country keeps failing despite its gifts. Essential reading.",
    url: "https://www.newyorker.com/magazine/2013/03/11/the-weight-of-money",
    emoji: "📰",
  },
  {
    title: "Argentina's Eternal Crisis",
    publication: "The Economist",
    desc: "The Economist has covered Argentina obsessively for decades. Their archive on Argentina's economy is the best quick-read resource for understanding the cycles.",
    url: "https://www.economist.com/the-americas/argentina",
    emoji: "📊",
  },
  {
    title: "In Buenos Aires, Tango Is Timeless",
    publication: "NYT Travel",
    desc: "New York Times travel piece on Buenos Aires as a destination — neighborhoods, food, culture. Good overview.",
    url: "https://www.nytimes.com/2019/01/09/travel/buenos-aires-argentina.html",
    emoji: "🗺️",
  },
  {
    title: "What to Do in Buenos Aires",
    publication: "The Guardian",
    desc: "The Guardian's Buenos Aires city guide — regularly updated, practical, good on neighborhoods.",
    url: "https://www.theguardian.com/travel/buenos-aires",
    emoji: "🌍",
  },
  {
    title: "Argentina's Javier Milei: The Economist Explains",
    publication: "The Economist",
    desc: "Who is Milei, what is he actually doing, and why does it matter. Good explainer for the current moment.",
    url: "https://www.economist.com/the-americas/2024/01/11/javier-milei-is-implementing-the-most-radical-economic-reform-in-argentinas-history",
    emoji: "⚡",
  },
  {
    title: "The Dirty War — Human Rights Watch Archive",
    publication: "Human Rights Watch / CONADEP",
    desc: "CONADEP (Argentina's truth commission) published Nunca Más (Never Again) in 1984 — the definitive document of the disappeared. Parts are available online.",
    url: "https://www.hrw.org/reports/argentina",
    emoji: "📖",
  },
];

const PODCASTS = [
  {
    name: "Revolutions — Series 12: Argentina",
    host: "Mike Duncan",
    desc: "Mike Duncan's Revolutions podcast covers the 1976 coup and the Dirty War in meticulous, narrative detail. Excellent historical foundation. Start here if you want to understand what happened.",
    platform: "All podcast apps",
    emoji: "🎙️",
    url: "https://revolutionspodcast.com",
  },
  {
    name: "The Indicator from Planet Money — Argentina episodes",
    host: "NPR Planet Money team",
    desc: "Short daily economics explainers. Search 'Argentina' in the feed — they've covered the blue dollar, Milei, the 2001 crisis, and inflation extensively. Each episode is 8–10 minutes.",
    platform: "All podcast apps",
    emoji: "📈",
    url: "https://www.npr.org/podcasts/510325/the-indicator-from-planet-money",
  },
  {
    name: "How to Save a Planet / Throughline — Argentina episodes",
    host: "NPR",
    desc: "Throughline episode on Perón and Evita is particularly excellent historical context.",
    platform: "All podcast apps",
    emoji: "🌎",
    url: "https://www.npr.org/podcasts/510333/throughline",
  },
  {
    name: "EconTalk — Argentina",
    host: "Russ Roberts",
    desc: "Several episodes on Argentine economics and Milei's reforms. Search 'Argentina' at econtalk.org. More technical but very good.",
    platform: "All podcast apps",
    emoji: "🎧",
    url: "https://www.econtalk.org",
  },
];

const BOOKS = [
  {
    title: "The Tango War",
    author: "Mary Jo McConahay",
    desc: "The untold story of WWII in South America — German and Allied intelligence operations in Argentina. Gripping.",
    emoji: "📚",
  },
  {
    title: "Argentina, 1516–1987",
    author: "David Rock",
    desc: "The comprehensive political history. Dense, serious, excellent. Read the sections on Perón and the dictatorship.",
    emoji: "📚",
  },
  {
    title: "The Real Argentina",
    author: "Jimmy Burns",
    desc: "More accessible political and cultural history by a journalist who lived there. Good companion for a trip.",
    emoji: "📚",
  },
];

export default function Resources() {
  return (
    <section id="resources" className="space-y-4">
      <h2 className="section-title">📚 Articles & Podcasts</h2>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">
        Curated reading and listening for before, during, or after Argentina.
      </p>

      {/* Articles */}
      <div className="space-y-3">
        <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
          <span>📰</span> Long Reads
        </h3>
        {ARTICLES.map((article) => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 block hover:border-amber-500/40 transition-colors"
          >
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">{article.emoji}</span>
              <div>
                <div className="flex items-start gap-2 flex-wrap">
                  <span className="font-semibold text-gray-100 text-sm leading-tight">{article.title}</span>
                </div>
                <div className="text-xs text-amber-400/70 mt-0.5 mb-1">{article.publication}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{article.desc}</p>
                <div className="mt-2 text-xs text-amber-500 flex items-center gap-1">
                  <span>Read →</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Podcasts */}
      <div className="space-y-3 mt-2">
        <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
          <span>🎙️</span> Podcasts
        </h3>
        {PODCASTS.map((pod) => (
          <a
            key={pod.name}
            href={pod.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-4 block hover:border-amber-500/40 transition-colors"
          >
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">{pod.emoji}</span>
              <div>
                <div className="font-semibold text-gray-100 text-sm">{pod.name}</div>
                <div className="text-xs text-amber-400/70 mt-0.5 mb-1">{pod.host} · {pod.platform}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{pod.desc}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Books */}
      <div className="space-y-3 mt-2">
        <h3 className="text-base font-bold text-amber-400 flex items-center gap-2">
          <span>📖</span> Books Worth Reading
        </h3>
        {BOOKS.map((book) => (
          <div key={book.title} className="card p-4">
            <div className="flex gap-3">
              <span className="text-xl flex-shrink-0">{book.emoji}</span>
              <div>
                <div className="font-semibold text-gray-100 text-sm">{book.title}</div>
                <div className="text-xs text-amber-400/70 mt-0.5 mb-1">by {book.author}</div>
                <p className="text-xs text-gray-400 leading-relaxed">{book.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
