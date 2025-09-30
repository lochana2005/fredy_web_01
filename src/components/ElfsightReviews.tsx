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
    </div>
  );
};

export default ElfsightReviews;