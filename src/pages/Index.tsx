// import React from 'react';
// import Navigation from '@/components/Navigation';
// import HeroSection from '@/components/HeroSection';
// import AboutSection from '@/components/AboutSection';
// import ServicesSection from '@/components/ServicesSection';
// import VideoSection from '@/components/VideoSection';
// import InstagramEmbed from '@/components/InstagramEmbed';
// import GallerySection from '@/components/GallerySection';
// import ContactSection from '@/components/ContactSection';

// const Index = () => {
//   return (
//     <div className="min-h-screen">
//       <Navigation />
//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <VideoSection />
//       <InstagramEmbed url="https://www.instagram.com/reel/DHRZTOxiH_a/" />
      
//       <GallerySection />
//       <ContactSection />
//     </div>
//   );
// };

// export default Index;


import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import VideoSection from '@/components/VideoSection';
import InstagramEmbed from '@/components/InstagramEmbed';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  // Replace these with the actual URLs of the Instagram Reels you want to display
  const reelUrls = [
    "https://www.instagram.com/reel/DHRZTOxiH_a/", // First Reel URL
    "https://www.instagram.com/p/DPGYoy2jY5W/", // Second Reel URL
    "https://www.instagram.com/reel/DPGdLC9jXcW/", // Third Reel URL
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      
      {/* Add a section for all Instagram Reels */}
      <section id="instagram-reels" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-primary">Our Latest Reels</h2>
            <p className="text-lg text-muted-foreground mt-2">Check out our recent videos directly from Instagram!</p>
          </div>
          
          {/* Loop through the URLs and render InstagramEmbed for each one */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {reelUrls.map((url, index) => (
              // The key is important for React to efficiently manage the list
              <div key={index} className="flex justify-center items-center">
                <InstagramEmbed url={url} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <InstagramEmbed url="https://www.instagram.com/reel/DHRZTOxiH_a/" />  <- Remove this old single embed */}
      
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Index;