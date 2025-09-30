import { useEffect, useRef } from 'react';

interface ElfsightReviewsProps {
  appId?: string;
  className?: string;
}

const ElfsightReviews: React.FC<ElfsightReviewsProps> = ({ 
  // appId = 'c8b1d534-dbca-43c0-900a-359592294e5e',
  appId = '3bb71364-1ea4-4db5-bc1a-e2bd68bf972e',
  className = ''
}) => {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Check if script is already loaded
    if (scriptLoaded.current) return;

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    
    // Add script to document
    document.body.appendChild(script);
    scriptLoaded.current = true;

    // Cleanup function
    return () => {
    
    };
  }, []);

  return (
    <div className={`elfsight-reviews-container ${className}`}>
      <div 
        className={`elfsight-app-${appId}`} 
        data-elfsight-app-lazy
      />

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

    
  );
};

export default ElfsightReviews;