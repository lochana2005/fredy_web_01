import React from 'react';
import { Button } from '@/components/ui/button';
import fredyLogo from '@/assets/fredy-logo.png';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-black/60 p-8 rounded-2xl backdrop-blur-sm">
            <div className="mb-6">
              <img
                src={fredyLogo}
                alt="Fredy's Bodenbeläge Logo"
                className="w-32 h-32 mx-auto mb-4 rounded-3xl"
              />
            </div>

            <h1 className="text-5xl font-bold text-white mb-2">
              Fredy's
            </h1>
            <h2 className="text-3xl font-bold text-gold mb-6">
              BODENBELÄGE
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Professionelle Boden- und Wandbeläge aus einer Hand.
              Qualität, Handwerk und Service seit Jahren in der Schweiz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="default"
                size="lg"
                className="bg-gold hover:bg-gold-dark text-white font-semibold"
                asChild
              >
                <a href="tel:+41798703420">📞 079 870 34 20</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-white/10 text-white hover:bg-white hover:text-primary font-semibold backdrop-blur-sm"
                asChild
              >
                <a href="mailto:Info@fredys-bodenbelaege.ch">📧 Info@fredys-bodenbelaege.ch</a>
              </Button>
            </div>

            <div className="flex items-center justify-center text-white/80 space-x-2">
              <span>📍 Dielsdorf, Schweiz</span>
              <span className="text-gold">•</span>
              <span>Kostenlose Beratung & Offerten</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;