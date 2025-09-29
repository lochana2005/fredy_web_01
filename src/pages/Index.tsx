import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import VideoSection from '@/components/VideoSection';
import InstagramEmbed from '@/components/InstagramEmbed';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

import ImageAccordionSlider from '@/components/ImageAccordionSlider';

const Index = () => {
  // Replace these with the actual URLs of the Instagram Reels you want to display
  // I've updated the last one to be a different example URL for the four-column view
  const reelUrls = [
    "https://www.instagram.com/reel/DHRZTOxiH_a/", // First Reel URL
    "https://www.instagram.com/p/DPGYoy2jY5W/", // Second Reel URL
    "https://www.instagram.com/reel/DPGdLC9jXcW/", // Third Reel URL
    "https://www.instagram.com/p/CgK756yv8J9/", // Fourth Reel URL (New example)
  ];

  return (
    <div className="">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VideoSection />

      {/* Add a section for all Instagram Reels */}
      <section id="instagram-reels" className="py-16 bg-muted/50 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 ">
            <h2 className="text-4xl font-extrabold text-primary">Our Latest Reels</h2>
            <p className="text-lg text-muted-foreground mt-2">Check out our recent videos directly from Instagram!</p>
          </div>

          {/* *** MODIFICATION HERE: Change lg:grid-cols-3 to lg:grid-cols-4 ***
            This ensures that on large screens (lg), the layout uses 4 columns.
            It will still use 1 column on small screens (default) and 2 columns on medium screens (md).
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {reelUrls.map((url, index) => (
              // The key is important for React to efficiently manage the list
              <div key={index} className="flex justify-center items-center">
                <InstagramEmbed url={url} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      <div className="text-center mb-16 ">
        <br /><br /><br />
        <h2 className="text-4xl font-bold mb-10 text-primary ">Aktuelle Projektfotos </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Hier präsentieren wir Ihnen frische Einblicke in die sorgfältige Verlegung unserer hochwertigen Bodenbeläge.
          Jede Aufnahme zeugt von unserer präzisen Handwerkskunst und dem Einsatz ausgewählter Materialien.
          Wir legen Wert auf jedes Detail, um eine perfekte,
          langlebige Oberfläche zu schaffen.
          Lassen Sie sich von unseren aktuellen Projekten inspirieren!
        </p>

        <br />

        <ImageAccordionSlider />
        <br />
      </div>

      <div className="bg-muted/50 ">
        <br /> <br />
        <ContactSection />
      </div>


    </div>
  );
};

export default Index;