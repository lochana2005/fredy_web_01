import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// --- Helper Components ---

// Star Icon Component
const StarIcon = ({ className = 'w-5 h-5 fill-yellow-500 text-yellow-500' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z" />
  </svg>
);

// Function to render 5 filled stars
const renderStars = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<StarIcon key={i} />);
  }
  return <div className="flex justify-center mb-3">{stars}</div>;
};

// --- Dummy Data (ඔබගේ API වෙතින් ලැබෙන සැබෑ දත්ත මෙහිදී ආදේශ කළ යුතුය) ---
const googleReviews = [
  {
    id: 1,
    name: "Anna M.",
    review: "Herr Fredy hat hervorragende Arbeit geleistet. Er war pünktlich, sehr sauber und das Parkett sieht fantastisch aus. Absolut empfehlenswert!",
    date: "vor 2 Wochen"
  },
  {
    id: 2,
    name: "B. Schneider",
    review: "Professionelle Beratung und tadellose Ausführung der Bodenbeläge in unserer gesamten Wohnung. Die Kommunikation war stets freundlich und unkompliziert.",
    date: "vor 1 Monat"
  },
  {
    id: 3,
    name: "Luca F.",
    review: "Schnell, effizient und qualitativ sehr hochwertig. Auch kleine Zusatzwünsche wurden ohne Probleme umgesetzt. Fünf Sterne sind verdient!",
    date: "vor 3 Monaten"
  },
  {
    id: 4,
    name: "Sabrina T.",
    review: "Wir sind begeistert von unserem neuen Vinylboden. Fredy ist ein echter Experte, der sein Handwerk versteht. Vielen Dank für die tolle Arbeit!",
    date: "vor 4 Monaten"
  },
  {
    id: 5,
    name: "Thomas W.",
    review: "Gute Arbeit, der Teppich ist perfekt verlegt. Kleinere Verzögerung beim Start, aber das Ergebnis zählt. Gerne wieder.",
    date: "vor 5 Monaten"
  },
];


// --- Main Carousel Component ---
const GoogleReviewsSection = () => {
  // Autoplay settings: scroll every 3.5 seconds without stopping on user drag
  const autoplayOptions = React.useRef({ delay: 3500, stopOnInteraction: false });

  // Initialize Embla Carousel with Autoplay plugin
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
    slidesToScroll: 1,
  }, [Autoplay(autoplayOptions.current)]);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-3 text-center text-primary">Kundenstimmen & Google Bewertungen</h3>
        <p className="text-lg mb-12 text-center max-w-3xl mx-auto text-gray-700">
          Hören Sie, was unsere zufriedenen Kunden über Fredy und sein Team sagen – **Qualität, die überzeugt**.
        </p>

        {/* Embla Carousel Container (See CSS in globals.css for 'embla' class) */}
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">

            {googleReviews.map((review) => (
              <div
                key={review.id}
                /* CRUCIAL WIDTH CHANGE for slider effect: 
                   Mobile: min-w-[90%] (shows one card fully)
                   Desktop: lg:min-w-[40%] (shows two cards prominently) */
                className="embla__slide min-w-[90%] md:min-w-[50%] lg:min-w-[40%] px-3"
                style={{ position: 'relative' }}
              >
                {/* Review Card - Modern & Attractive Design */}
                <div
                  className="bg-white h-full p-8 rounded-2xl shadow-xl border border-gray-100 
                             transition-transform duration-300 hover:scale-[1.02] transform hover:shadow-2xl"
                >
                  <div className="text-center">
                    {/* Star Rating */}
                    {renderStars()}

                    {/* Review Text */}
                    <p className="text-lg italic text-gray-700 mb-6 whitespace-normal line-clamp-5">
                      "{review.review}"
                    </p>

                    {/* Reviewer Info */}
                    <div className="border-t pt-4 mt-4">
                      <p className="text-base font-bold text-primary">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://link-zu-ihren-google-bewertungen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-gold transition duration-300 shadow-lg"
          >
            Alle Bewertungen auf Google lesen
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsSection;