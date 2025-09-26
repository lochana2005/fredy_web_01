import React from 'react';
import fredyPortrait from '@/assets/fredy-portrait.png';

const AboutSection = () => {
  const partners = [
    'Cabana AG',
    'Belcolor AG', 
    'Bauwerk AG',
    'Enia AG',
    'HGC AG',
    'Fabromont AG'
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Fredy's profile image at the top */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <img 
              src={fredyPortrait} 
              alt="Fredy - Ihr Spezialist für Bodenbeläge" 
              className="w-64 h-64 mx-auto rounded-full shadow-2xl border-8 border-gold/30 object-cover"
            />
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-gold text-white px-8 py-3 rounded-full font-semibold text-xl shadow-lg">
                Fredy - Ihr Experte
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-8 text-primary">Über mich</h2>
            
            <div className="space-y-8 text-lg text-center max-w-4xl mx-auto">
              <p className="text-2xl leading-relaxed">
                <strong className="text-gold">Hallo, ich bin Fredy</strong> – Ihr Spezialist für hochwertige Bodenbeläge und Innenraumlösungen.
              </p>
              
              <p className="text-xl leading-relaxed">
                Mit über <strong>20 Jahren praktischer Erfahrung</strong> hatte ich das Privileg, unzähligen Kunden dabei zu helfen, ihre Räume in etwas ganz Besonderes zu verwandeln.
              </p>
              
              <p className="text-lg leading-relaxed">
                Von Parkett, Vinyl & Linoleum, Laminat & Kork, Teppich & Kautschuk bis hin zu Stein- & Keramikplatten biete ich das komplette Spektrum an Bodenbelagsarbeiten. Doch meine Arbeit endet nicht beim Boden – ich kümmere mich auch um Wandschutz, Sockel- & Silikonarbeiten sowie zuverlässige Reparaturen, damit jedes Projekt bis ins kleinste Detail perfekt abgeschlossen ist.
              </p>
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto">
              <h3 className="text-3xl font-semibold mb-8 text-center text-primary">Was macht meinen Ansatz besonders?</h3>
              <div className="space-y-6 text-lg text-center">
                <p className="leading-relaxed">
                  Ich bin überzeugt: <strong>Jedes Projekt ist persönlich.</strong> Deshalb nehme ich mir die Zeit, Ihre Wünsche, Ihren Lebensstil und Ihre Bedürfnisse genau zu verstehen. Durch die Kombination von traditionellem Handwerk und modernen Techniken entstehen Ergebnisse, die nicht nur langlebig, sondern auch stilvoll und individuell auf Sie zugeschnitten sind.
                </p>
                
                <p className="leading-relaxed">
                  Für mich geht es um mehr als nur um das Verlegen von Böden – es geht darum, Wohn- und Arbeitsräume zu schaffen, die komfortabel, funktional und ästhetisch ansprechend sind und an denen Sie viele Jahre Freude haben werden.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">Qualität durch starke Partnerschaften</h3>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            Wir arbeiten mit großen Lieferanten in der Schweiz zusammen und verwenden ausschließlich hochwertige Materialien von renommierten Unternehmen:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card p-4 rounded-lg text-center font-medium text-primary border">
                {partner}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-xl font-semibold text-primary mb-4">
              Wenn Sie nach Erfahrung, Präzision und einem Partner suchen, dem das Ergebnis wirklich am Herzen liegt, dann sind Sie hier genau richtig.
            </p>
            <p className="text-lg text-gold font-medium">
              Lassen Sie uns Ihr Projekt gemeinsam verwirklichen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;