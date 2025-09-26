import React from 'react';
import { Button } from '@/components/ui/button';
import fredyLogo from '@/assets/fredy-logo.png';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={fredyLogo} alt="Fredy's Bodenbeläge Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Fredy's</h1>
              <p className="text-sm text-gold font-medium">BODENBELÄGE</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" onClick={() => scrollToSection('home')}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              Über mich
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')}>
              Dienstleistungen
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('gallery')}>
              Bilder
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('videos')}>
              Videos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              Kontakt
            </Button>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4 text-sm">
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:bg-gold/10"
              asChild
            >
              <a href="tel:+41798703420" className="flex items-center gap-2">
                📞 079 870 34 20
              </a>
            </Button>
            <Button
              variant="default"
              size="sm"
              className="bg-gold hover:bg-gold-dark text-white font-semibold px-4 py-2"
              asChild
            >
              <a href="mailto:Info@fredys-bodenbelaege.ch" className="flex items-center gap-2">
                📧 Info@fredys-bodenbelaege.ch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;