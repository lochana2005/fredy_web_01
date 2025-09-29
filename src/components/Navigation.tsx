import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import fredyLogo from '@/assets/fredy-logo.png';
// You might need to install and import an icon library like lucide-react 
// if you want a cleaner "hamburger" icon than the text '☰' or 'X'.

const Navigation = () => {
  // State to track whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Close the menu after a link is clicked on mobile
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-4">
            <img src={fredyLogo} alt="Fredy's Bodenbeläge Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Fredy's</h1>
              <p className="text-sm text-gold font-medium">BODENBELÄGE</p>
            </div>
          </div>

          {/* Desktop Navigation Links (Visible only on medium screens and up) */}
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

          {/* Mobile Menu Button (Hamburger/Close Icon) (Visible only on mobile) */}
          <div className="flex items-center md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menü öffnen/schließen">
              {/* Use a simple text icon, or replace with an SVG/Icon component */}
              <span className="text-xl">{isMenuOpen ? '✕' : '☰'}</span>
            </Button>
          </div>

          {/* Desktop Contact Info (Visible only on large screens and up) */}
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

        {/* Mobile Menu Dropdown (Shown when isMenuOpen is true, hidden on medium screens and up) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-start pt-2 pb-4 space-y-2 border-t mt-2">
            <Button variant="ghost" onClick={() => scrollToSection('home')} className="w-full justify-start">Home</Button>
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="w-full justify-start">Über mich</Button>
            <Button variant="ghost" onClick={() => scrollToSection('services')} className="w-full justify-start">Dienstleistungen</Button>
            <Button variant="ghost" onClick={() => scrollToSection('gallery')} className="w-full justify-start">Bilder</Button>
            <Button variant="ghost" onClick={() => scrollToSection('videos')} className="w-full justify-start">Videos</Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')} className="w-full justify-start">Kontakt</Button>
            {/* Optional: Add contact buttons to the mobile menu for easy access */}
            <hr className="w-full border-t border-gray-200" />
            <a href="tel:+41798703420" className="w-full px-4 py-2 text-sm text-primary hover:bg-gray-50 flex items-center gap-2">
              📞 079 870 34 20
            </a>
            <a href="mailto:Info@fredys-bodenbelaege.ch" className="w-full px-4 py-2 text-sm bg-gold text-white font-semibold hover:bg-gold-dark flex items-center gap-2 rounded-md">
              📧 Info@fredys-bodenbelaege.ch
            </a>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navigation;