import React, { useState, useEffect } from 'react';

// 1. EXPLICITLY IMPORT EACH IMAGE
import image1 from '@/assets/gallery/slider/1.jpg';
import image2 from '@/assets/gallery/slider/2.jpg';
import image3 from '@/assets/gallery/slider/3.jpg';
import image4 from '@/assets/gallery/slider/4.jpg';
import image5 from '@/assets/gallery/slider/5.jpg';
// ... you will need to import image3, image4, and image5 too,
// even if they point to the same file, for clarity.

// Use the imported variables (which are the final URL strings)
const galleryImages = [
    // 2. Use the imported variables instead of the raw string path
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 }, // Using image1 again
    { id: 4, url: image4 }, // Using image2 again
    { id: 5, url: image5 }, // Using image1 again
];


const ImageAccordionSlider = () => {
    // State to track which panel is currently expanded (active)
    const [activeIndex, setActiveIndex] = useState(1);
    // State to track if the user has manually clicked a panel
    const [isUserActive, setIsUserActive] = useState(false);

    // Effect for the AUTO-SLIDE functionality
    useEffect(() => {
        // If the user has clicked, we temporarily disable auto-slide for a few seconds
        if (isUserActive) {
            const resetTimeout = setTimeout(() => {
                setIsUserActive(false);
            }, 8000); // 8 seconds delay before auto-sliding resumes
            return () => clearTimeout(resetTimeout);
        }

        // Auto-slide logic (only runs if isUserActive is false)
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => 
                (prevIndex % galleryImages.length) + 1 
            );
        }, 4000); // Auto-slide every 4 seconds

        return () => clearInterval(interval);
    }, [isUserActive]); // Re-run effect when isUserActive changes

    // Handle when a user clicks a panel
    const handlePanelClick = (id: number) => {
        setActiveIndex(id);
        setIsUserActive(true); // Indicate user interaction
    };

    return (
        
        <div className="accordion-slider-container ">
            

            {galleryImages.map(image => (
                <div 
                    key={image.id}
                    className={`slider-panel ${activeIndex === image.id ? 'active' : ''}`}
                    onClick={() => handlePanelClick(image.id)}
                    style={{ backgroundImage: `url(${image.url})` }}
                >
                    {/* <div className="panel-content">
                        <h3>{image.title}</h3>
                    </div> */}
                </div>
            ))}
        </div>
    );
};

export default ImageAccordionSlider;