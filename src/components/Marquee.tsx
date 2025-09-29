import { cn } from "@/lib/utils"
// Wir behalten den Marquee Import, da Sie die Struktur nicht ändern möchten.
import { Marquee } from "./ui/marquee"
import "../index.css"

// --- HILFSFUNKTIONEN ---

// Funktion zur Kürzung der Review-Texte für die Kartenvorschau.
const truncateReview = (text, maxLength = 120) => {
  if (text.length <= maxLength) {
    return {
      truncatedText: text,
      isTruncated: false
    };
  }
  return {
    truncatedText: text.substring(0, maxLength).trim() + '...',
    isTruncated: true
  };
};

// Funktion für eine runde farbige Kugel als Platzhalter für das Profilbild.
const ProfileImagePlaceholder = ({ className }) => (
  <div className={cn("w-8 h-8 rounded-full", className)}></div>
);


// --- REVIEW-DATEN (Befüllt mit echten Reviews) ---

const reviews = [
  {
    name: "Leonie Seiz",
    username: "4 reviews (Real Estate Agent)",
    body: "I'm absolutely thrilled with Fredy's Flooring! As a real estate agent, I obtained several quotes for renovation work for my clients – including painting and flooring installation. From the very first appointment, Fredy's impressed me with",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWn3h9lu08rZHpGqC-8DHiOQunK4INGQX12GVn8tul8tFNhTGg=w36-h36-p-rp-mo-br100", // Verwenden von Platzhalter-Strings für die Zuordnung
  },
  {
    name: "Hans Peter Popp",
    username: "4 reviews",
    body: "The work was professionally executed, with particular attention to detail and action taken accordingly. The construction site was left tidy and clean. They always communicated proactively, so we knew what was happening at all times. Perfect execution. Thank you very much. We'd be happy to work with them again!",
    img: "https://lh3.googleusercontent.com/a/ACg8ocJMueMySgbfiRpZ4Vtv3S8ZyU3DWHx1m8uhgSeEd6A0-S0o3A=w36-h36-p-rp-mo-br100",
  },
  {
    name: "A.W.",
    username: "5 reviews (NEW)",
    body: "Fredy is a true professional with excellent expertise. He worked very precisely and cleanly – almost a perfectionist – and stayed on budget and on schedule.",
    img: "https://lh3.googleusercontent.com/a/ACg8ocK-v0Qf-yweZbRSkhw9gRmmZpmUjhIEA7VGug8D-jb22cHeow=w36-h36-p-rp-mo-br100",
  },
  {
    name: "novak 92",
    username: "1 review",
    body: "There were a lot of unexpected problems with my floor. Fredy had a solution for everything. His flexible way of working led to top results. I can recommend Fredy to anyone on the subject of soil. Simply great!",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXn8GAlmxKJtM-Xx3FRV2D8h-iqaprQ80rhutimK5bVtY-qPaMy=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Sebastian Teutloff",
    username: "5 reviews",
    body: "Fredy and his team work quickly and thoroughly. I had him sand and oil about 80 square meters of parquet flooring. Excellent quality, would definitely use again.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVFuCT5byCzMvbyPtOfSs9YR0vvHBDBLn_pMqC0OU9kQAo0xEo=w36-h36-p-rp-mo-br100",
  },
  {
    name: "Viktoria Ragonesi",
    username: "Local Guide : 26 review",
    body: "Fredy and his team provided us with unparalleled support during our renovation. We encountered some unexpected difficulties, but his expertise and friendly approach made the job much easier, and now we're enjoying our beautiful floor.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXf4-1DCRNDXXVu2i5Hbzp8MFsQcjbXzxfdXQr_LHJZv5jvpgLm=w36-h36-p-rp-mo-ba3-br100",
  },
  {
    name: "Kerri Lienhard",
    username: "Local Guide : 37 review",
    body: "I am thrilled with my new floor! Fredy takes a lot of pride in his craftsmanship! His pricing is fair and delivered everything he promised he would. He‘s a perfectionist",
    img: "https://lh3.googleusercontent.com/a/ACg8ocKFTk6QPJDp3LH49PXpS2Ml4XEW5RZgve52Wv_ly61vztMosm0=w36-h36-p-rp-mo-ba3-br100",
  },
  {
    name: "J Wc",
    username: "3 reviews",
    body: "How lucky are we to have been recommended Freddy’s company to help us redo all the cosmetics and lay the new flooring of our new home.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUg_vg7B4XAKqjlbQcOnFLpNEI49AbdFdTcmuXj6C4VQpuou5M=w36-h36-p-rp-mo-br100",
  },
]

// Farben für die Placeholders, um eine Vielfalt zu zeigen
const colorClasses = [
  "bg-red-400/50",
  "bg-blue-400/50",
  "bg-green-400/50",
  "bg-yellow-400/50",
  "bg-indigo-400/50",
  "bg-pink-400/50",
  "bg-purple-400/50",
  "bg-teal-400/50",
];

// Die Aufteilung in zwei Reihen ist erforderlich für die Marquee-Komponente
const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2))
const secondRow = reviews.slice(Math.ceil(reviews.length / 2))

// --- REVIEW CARD KOMPONENTE (Design-Update) ---

const ReviewCard = ({
  name,
  username,
  body,
  index // Index wird benötigt, um die Farbe zuzuweisen
}: {
  img: string // 'img' ist hier noch im Typ, wird aber nicht zum Rendern verwendet
  name: string
  username: string
  body: string
  index: number
}) => {

  // Textkürzung anwenden
  const { truncatedText, isTruncated } = truncateReview(body);
  const colorClass = colorClasses[index % colorClasses.length];

  return (
    <figure
      className={cn(
        "relative h-full w-96 cursor-pointer overflow-hidden rounded-xl border p-6 bg-white shadow-md transition-all duration-300",
        // Neues Design-Styling
        "border-gray-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        {/* Hier wird der farbige Platzhalter verwendet */}
        <ProfileImagePlaceholder className={colorClass} />
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-gray-900 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs text-gray-500 dark:text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        {truncatedText}
        {/* Mehr lesen Link */}
        {isTruncated && (
          <button
            className="text-blue-600 hover:text-blue-800 font-medium text-sm ml-1 focus:outline-none"
            onClick={() => console.log("Modal/Volle Review Ansicht für:", name)}
          >
            <a href="https://www.google.com/search?sxsrf=AE3TifNOuHHpEPrZ30A-0cHWPfcy0vi9iw:1759182298785&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ew59b-dCwi8mvhKC-gnmD9mqKokjMdG4vChfQvvDtJf1UhsCuW84TMEAV35KHnmK5EYBbauiIcB8yK758DfYsFchju7zIyD9MGSU6Hi3-xS0SVqcQw%3D%3D&q=Fredy%27s+Bodenbel%C3%A4ge+Reviews" target="_blank" rel="noopener noreferrer">Mehr lesen</a>
          </button>
        )}
      </blockquote>
    </figure>
  )
}


// --- HAUPTKOMPONENTE (MarqueeDemo) ---

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center py-12 overflow-hidden " >

      {/* Optional: Header-Sektion hier einfügen, wenn gewünscht */}
      <header className="text-center mb-12 max-w-4xl px-4">
        <h3 className="text-3xl font-bold mb-5 text-center text-primary">Kundenstimmen & Google Bewertungen</h3>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Hören Sie, was unsere zufriedenen Kunden über Fredy und sein Team sagen – **„Qualität, die überzeugt“**.
        </p>
      </header>

      {/* Erste Reihe Marquee */}
      <Marquee pauseOnHover className="[--duration:30s] mb-4">
        {firstRow.map((review, index) => (
          <ReviewCard key={review.name} {...review} index={index} />
        ))}
      </Marquee>

      {/* Zweite Reihe Marquee (in umgekehrter Richtung) */}
       <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((review, index) => (
          // Der Index der zweiten Reihe muss relativ zur Gesamtlänge sein,
          // um die korrekte Farbe zu erhalten.
          <ReviewCard key={review.name} {...review} index={index + firstRow.length} />
        ))}
      </Marquee>

      {/* Fades (Gradienten an den Seiten) - Beibehalten, um die Marquee-Optik zu erhalten */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50 dark:from-gray-950 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent"></div>

      {/* Google Link Button mit neuem Design */}
      <div className="text-center mt-12">
        <a
          href="https://www.google.com/search?sxsrf=AE3TifNOuHHpEPrZ30A-0cHWPfcy0vi9iw:1759182298785&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-Ew59b-dCwi8mvhKC-gnmD9mqKokjMdG4vChfQvvDtJf1UhsCuW84TMEAV35KHnmK5EYBbauiIcB8yK758DfYsFchju7zIyD9MGSU6Hi3-xS0SVqcQw%3D%3D&q=Fredy%27s+Bodenbel%C3%A4ge+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          // Imitiert den gelb-goldenen Button aus dem Bild
          className="inline-block text-gray-900 font-semibold px-10 py-4 rounded-full transition duration-300 shadow-xl hover:shadow-2xl"
          style={{
            background: 'linear-gradient(to bottom, #fde047, #f59e0b)', // Gelb/Gold Verlauf
            boxShadow: '0 4px 10px rgba(245, 158, 11, 0.5)'
          }}
        >
          Alle Bewertungen auf Google lesen
        </a>
      </div>
    </div>
  )
}