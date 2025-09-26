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
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VideoSection />
      <InstagramEmbed url="https://www.instagram.com/reel/DHRZTOxiH_a/" />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Index;