import React from 'react';

// --- Helper Components (Star Icon) ---

// Assuming you have an SVG or component for a star icon
const StarIcon = ({ className = 'w-5 h-5 fill-yellow-500 text-yellow-500' }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"/>
  </svg>
);

// Function to render star icons based on rating
const renderStars = (rating) => {
  const stars = [];
  // Render 5 stars, filled for the rating value
  for (let i = 0; i < 5; i++) {
    stars.push(<StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-300 text-gray-300'}`} />);
  }
  return <div className="flex justify-center mb-3">{stars}</div>;
};

// --- Review Data ---

const googleReviews = [
  {
    id: 1,
    name: "Anna M.",
    rating: 5,
    review: "Herr Fredy hat hervorragende Arbeit geleistet. Er war pünktlich, sehr sauber und das Parkett sieht fantastisch aus. Absolut empfehlenswert!",
    date: "vor 2 Wochen"
  },
];


// --- Main Component ---

const GoogleReviewsSection = () => {
  return (
    <div className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold mb-8 text-center text-primary">Kundenstimmen & Google Bewertungen</h3>
      <p className="text-lg mb-10 text-center text-gray-700">
        Hören Sie, was unsere zufriedenen Kunden über Fredy und sein Team sagen – **Qualität, die überzeugt**.
      </p>

      <br /><br />
      
      {/* Review Slider/Scroller Container */}
      <div 
        // This container enables the horizontal sliding/scrolling effect.
        // flex: Sets up the flex layout.
        // overflow-x-auto: Allows horizontal scrolling when content is too wide.
        // whitespace-nowrap: Prevents review cards from wrapping to the next line.
        // space-x-6: Adds space between the cards.
        className="flex overflow-x-auto whitespace-nowrap space-x-6 pb-6 pt-2"
        style={{ 'WebkitOverflowScrolling': 'touch' }} // Improve scroll feel on iOS
      >
        {googleReviews.map((review) => (
          <div 
            key={review.id} 
            // Card styling: 
            // inline-block/flex-none: Essential to keep cards on a single line.
            // min-w-[320px]: Ensures the card is a good size for viewing/scrolling.
            className="inline-block flex-none min-w-[320px] max-w-sm bg-white p-6 rounded-xl shadow-xl border border-gray-100 transition-shadow duration-300 hover:shadow-2xl"
          >
            <div className="text-center">
              {/* Star Rating */}
              {renderStars(review.rating)}
              
              {/* Review Text */}
              <p className="text-lg italic text-gray-700 mb-4 whitespace-normal line-clamp-4">
                "{review.review}"
              </p>
              
              {/* Reviewer Info */}
              <p className="text-base font-semibold text-primary">
                {review.name}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {review.date}
              </p>
            </div>
          </div>
        ))}
      </div>

<br />
      <div className="text-center mt-8">
        <a 
          href="https://share.google/iGNOgfEVyJraszUH8" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-gold transition duration-300"
        >
          Alle 5-Sterne Bewertungen lesen
        </a>
      </div>
    </div>
  );
};

export default GoogleReviewsSection;    