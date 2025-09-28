import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// Only need the basic Dialog imports for a simple view
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import Navigation from '@/components/Navigation';
import { ArrowLeft, X } from 'lucide-react'; // Only need X for closing
import { Link } from 'react-router-dom';




// Import all images (Imports remain the same)
import novilon1 from '@/assets/gallery/Novilon/1.jpg';
import novilon2 from '@/assets/gallery/Novilon/2.jpg';
import novilon3 from '@/assets/gallery/Novilon/3.jpg';
import novilon4 from '@/assets/gallery/Novilon/4.jpg';
import novilon5 from '@/assets/gallery/Novilon/5.jpg';
import novilon6 from '@/assets/gallery/Novilon/6.jpg';
import novilon7 from '@/assets/gallery/Novilon/7.jpg';
import novilon8 from '@/assets/gallery/Novilon/8.jpg';
import novilon9 from '@/assets/gallery/Novilon/9.jpg';
import novilon10 from '@/assets/gallery/Novilon/10.jpg';
import novilon11 from '@/assets/gallery/Novilon/11.jpg';
import novilon12 from '@/assets/gallery/Novilon/12.jpg';
import novilon13 from '@/assets/gallery/Novilon/13.jpg';

import treppenPlaceholder from '@/assets/gallery/Treppenverkleidung_mit_Parkett/1.jpg';
import treppenPlaceholder2 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/2.jpg';
import treppenPlaceholder3 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/3.jpg';
import treppenPlaceholder4 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/4.jpg';
import treppenPlaceholder5 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/5.jpg';
import treppenPlaceholder6 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/6.jpg';
import treppenPlaceholder7 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/7.jpg';
import treppenPlaceholder8 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/8.jpg';
import treppenPlaceholder9 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/9.jpg';
import treppenPlaceholder10 from '@/assets/gallery/Treppenverkleidung_mit_Parkett/10.jpg';

import parkettMusterPlaceholder from '@/assets/gallery/Parkett_Muster/1.jpg';
import parkettMusterPlaceholder2 from '@/assets/gallery/Parkett_Muster/2.jpg';
import parkettMusterPlaceholder3 from '@/assets/gallery/Parkett_Muster/3.jpg';
import parkettMusterPlaceholder4 from '@/assets/gallery/Parkett_Muster/4.jpg';
import parkettMusterPlaceholder5 from '@/assets/gallery/Parkett_Muster/5.jpg';
import parkettMusterPlaceholder6 from '@/assets/gallery/Parkett_Muster/6.jpg';
import parkettMusterPlaceholder7 from '@/assets/gallery/Parkett_Muster/7.jpg';
import parkettMusterPlaceholder8 from '@/assets/gallery/Parkett_Muster/8.jpg';

import beforafter1 from '@/assets/gallery/Before _After/1.jpg';
import beforafter2 from '@/assets/gallery/Before _After/2.jpg';
import beforafter3 from '@/assets/gallery/Before _After/3.jpg';
import beforafter5 from '@/assets/gallery/Before _After/5.jpg';
import beforafter6 from '@/assets/gallery/Before _After/6.jpg';
import beforafter7 from '@/assets/gallery/Before _After/7.jpg';
import beforafter8 from '@/assets/gallery/Before _After/8.jpg';
import beforafter9 from '@/assets/gallery/Before _After/9.jpg';
import beforafter10 from '@/assets/gallery/Before _After/10.jpg';
import beforafter11 from '@/assets/gallery/Before _After/11.jpg';
import beforafter12 from '@/assets/gallery/Before _After/12.jpg';
import beforafter13 from '@/assets/gallery/Before _After/13.jpg';

import viny1 from '@/assets/gallery/Vinyl_Muster/1.jpg';
import viny2 from '@/assets/gallery/Vinyl_Muster/2.jpg';
import viny3 from '@/assets/gallery/Vinyl_Muster/3.jpg';
import viny4 from '@/assets/gallery/Vinyl_Muster/4.jpg';
import viny5 from '@/assets/gallery/Vinyl_Muster/5.jpg';

import park1 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/1.jpg';
import park2 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/2.jpg';
import park3 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/3.jpg';
import park4 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/4.jpg';
import park5 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/5.jpg';
import park6 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/6.jpg';
import park7 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/7.jpg';
import park8 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/8.jpg';
import park9 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/9.jpg';
import park10 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/10.jpg';
import park11 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/11.jpg';
import park12 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/12.jpg';
import park13 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/13.jpg';
import park14 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/14.jpg';
import park15 from '@/assets/gallery/Parkett_Schleifen_Versiegeln _olen/15.jpg';

import boden1 from '@/assets/gallery/Boden_Nivellieren/1.jpg';
import boden2 from '@/assets/gallery/Boden_Nivellieren/2.jpg';
import boden3 from '@/assets/gallery/Boden_Nivellieren/3.jpg';
import boden4 from '@/assets/gallery/Boden_Nivellieren/4.jpg';
import boden5 from '@/assets/gallery/Boden_Nivellieren/5.jpg';
import boden6 from '@/assets/gallery/Boden_Nivellieren/6.jpg';
import boden7 from '@/assets/gallery/Boden_Nivellieren/7.jpg';
import boden8 from '@/assets/gallery/Boden_Nivellieren/8.jpg';

import Linoleum1 from '@/assets/gallery/Linoleum/1.jpg';
import Linoleum2 from '@/assets/gallery/Linoleum/2.jpg';

import pvc1 from '@/assets/gallery/pvc/1.jpg';
import pvc2 from '@/assets/gallery/pvc/2.jpg';
import pvc3 from '@/assets/gallery/pvc/3.jpg';
import pvc4 from '@/assets/gallery/pvc/4.jpg';

import wan1 from '@/assets/gallery/Wandverkleidung/1.jpg';
import wan2 from '@/assets/gallery/Wandverkleidung/2.jpg';
import wan3 from '@/assets/gallery/Wandverkleidung/3.jpg';
import wan4 from '@/assets/gallery/Wandverkleidung/4.jpg';
import wan5 from '@/assets/gallery/Wandverkleidung/5.jpg';
import wan6 from '@/assets/gallery/Wandverkleidung/6.jpg';
import wan7 from '@/assets/gallery/Wandverkleidung/7.jpg';

// Define the structure for an image item
interface GalleryImage {
  title: string;
  description: string;
  category: string;
  image: string;
  placeholder: boolean;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  // Reverted to tracking the selected image object
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // Function to handle image click and open the modal
  const handleImageClick = (image: GalleryImage) => {
    setActiveImage(image);
  };

  // --- Image and Category Data Definitions (Used useMemo for stability) ---
  const { categories, totalImages } = useMemo(() => {
    const novilonImages = [
      novilon1, novilon2, novilon3, novilon4, novilon5, novilon6,
      novilon7, novilon8, novilon9, novilon10, novilon11, novilon12, novilon13
    ];
    const Treppenverkleidungimg = [
      treppenPlaceholder, treppenPlaceholder2, treppenPlaceholder3, treppenPlaceholder4, treppenPlaceholder5, treppenPlaceholder6,
      treppenPlaceholder7, treppenPlaceholder8, treppenPlaceholder9, treppenPlaceholder10
    ];
    const parkettMusterPlaceholderimg = [
      parkettMusterPlaceholder, parkettMusterPlaceholder2, parkettMusterPlaceholder3, parkettMusterPlaceholder4, parkettMusterPlaceholder5, parkettMusterPlaceholder6,
      parkettMusterPlaceholder7, parkettMusterPlaceholder8
    ];
    const beforeAfterPlaceholderimg = [
      beforafter1,beforafter3, beforafter2,beforafter5, 
      beforafter7,beforafter6, beforafter8,beforafter10, beforafter9, beforafter11,beforafter12, beforafter13
    ];
    const vinylMusterPlaceholder = [
      viny1, viny2, viny3, viny4, viny5
    ];
    const Parkettimg = [
      park1, park2, park3, park4, park5, park6, park7, park8, park9, park10, park11, park12, park13, park14, park15
    ];
    const bordenimg = [
      boden1, boden2, boden3, boden4, boden5, boden6, boden7, boden8
    ];
    const Linoleumimg = [
      Linoleum1, Linoleum2
    ];
    const pvcimg = [
      pvc1, pvc2, pvc3, pvc4
    ];
    const Wandverkleidungimg = [
      wan1, wan2, wan3, wan4, wan5, wan6, wan7
    ];

    const allCategories = [
      {
        name: 'Novilon (Elastische Beläge)',
        count: novilonImages.length,
        image: novilonImages[0],
        images: novilonImages.map((img, index) => ({
          title: `Novilon Installation ${index + 1}`,
          description: `Professionelle Verlegung von Novilon - Bild ${index + 1}`,
          category: 'Novilon (Elastische Beläge)',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Treppenverkleidung mit Parkett',
        count: Treppenverkleidungimg.length,
        image: Treppenverkleidungimg[0],
        images: Treppenverkleidungimg.map((img, index) => ({
          title: `Treppenverkleidung ${index + 1}`,
          description: `Professionelle Treppenverkleidung mit Parkett - Bild ${index + 1}`,
          category: 'Treppenverkleidung mit Parkett',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Parkett Muster',
        count: parkettMusterPlaceholderimg.length,
        image: parkettMusterPlaceholderimg[0],
        images: parkettMusterPlaceholderimg.map((img, index) => ({
          title: `Parkett Muster ${index + 1}`,
          description: `Beispiele für Parkett-Verlegemuster - Bild ${index + 1}`,
          category: 'Parkett Muster',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Before / After',
        count: beforeAfterPlaceholderimg.length,
        image: beforeAfterPlaceholderimg[0],
        images: beforeAfterPlaceholderimg.map((img, index) => ({
          title: `Vorher/Nachher ${index + 1}`,
          description: `Erfolgreiche Bodenrenovierung im Vorher/Nachher-Vergleich - Bild ${index + 1}`,
          category: 'Before / After',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Vinyl Muster',
        count: vinylMusterPlaceholder.length,
        image: vinylMusterPlaceholder[0],
        images: vinylMusterPlaceholder.map((img, index) => ({
          title: `Vinyl Muster ${index + 1}`,
          description: `Beispiele für Vinyl-Bodenbeläge - Bild ${index + 1}`,
          category: 'Vinyl Muster',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Parkett Schleifen Versiegeln / Ölen',
        count: Parkettimg.length,
        image: Parkettimg[0],
        images: Parkettimg.map((img, index) => ({
          title: `Parkettbearbeitung ${index + 1}`,
          description: `Parkett abschleifen und neu versiegeln oder ölen - Bild ${index + 1}`,
          category: 'Parkett Schleifen Versiegeln / Ölen',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Boden Nivellieren',
        count: bordenimg.length,
        image: bordenimg[0],
        images: bordenimg.map((img, index) => ({
          title: `Boden Nivellieren ${index + 1}`,
          description: `Professionelle Bodenvorbereitung und Nivellierung - Bild ${index + 1}`,
          category: 'Boden Nivellieren',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Linoleum',
        count: Linoleumimg.length,
        image: Linoleumimg[0],
        images: Linoleumimg.map((img, index) => ({
          title: `Linoleum Verlegung ${index + 1}`,
          description: `Verlegung von hochwertigem Linoleum - Bild ${index + 1}`,
          category: 'Linoleum',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'PVC (Industrie Beläge)',
        count: pvcimg.length,
        image: pvcimg[0],
        images: pvcimg.map((img, index) => ({
          title: `PVC Installation ${index + 1}`,
          description: `Verlegung von robusten PVC Industriebelägen - Bild ${index + 1}`,
          category: 'PVC (Industrie Beläge)',
          image: img,
          placeholder: false,
        })),
      },
      {
        name: 'Wandverkleidung',
        count: Wandverkleidungimg.length,
        image: Wandverkleidungimg[0],
        images: Wandverkleidungimg.map((img, index) => ({
          title: `Wandverkleidung ${index + 1}`,
          description: `Professionelle Verkleidung von Wänden - Bild ${index + 1}`,
          category: 'Wandverkleidung',
          image: img,
          placeholder: false,
        })),
      }
    ];

    const total = allCategories.reduce((sum, cat) => sum + cat.count, 0);
    return { categories: allCategories, totalImages: total };
  }, []);

  const selectedCategoryData = categories.find(cat => cat.name === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/">
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Hauptseite
              </Button>
            </Link>
            {selectedCategory && (
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => setSelectedCategory(null)}
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zu Kategorien
              </Button>
            )}
          </div>

          {!selectedCategory ? (
            // --- Category View ---
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 text-primary">Bildergalerie Kategorien</h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Entdecken Sie unsere {totalImages} Bilder aufgeteilt in {categories.length} verschiedene Kategorien.
                  Klicken Sie auf eine Kategorie, um alle Bilder dieser Kategorie zu sehen.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={category.image}
                        alt={category.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                      <div className="absolute top-4 right-4 bg-gold text-white px-3 py-2 rounded-full font-medium">
                        {category.count} Bilder
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">{category.name}</h3>
                      <p className="text-muted-foreground">
                        Klicken Sie hier, um alle {category.count} Bilder dieser Kategorie anzuzeigen
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            // --- Image Grid View ---
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6 text-primary">{selectedCategory}</h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  {selectedCategoryData?.count} Bilder in dieser Kategorie. Klicken Sie auf ein Bild, um es in voller Größe anzuzeigen.
                </p>
                {selectedCategoryData?.images[0]?.placeholder && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Platzhalter-Bilder - Sie können diese später durch Ihre eigenen Bilder ersetzen
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedCategoryData?.images.map((item, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    // Updated click handler to pass the full image object
                    onClick={() => handleImageClick(item)}
                  >
                    <div className="aspect-square overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                      {item.placeholder && (
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                          Platzhalter
                        </div>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-primary mb-1 text-sm">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </main>



      {/* Image Modal (Dialog) Component - Simple, Centered View (80% Max Size) */}
      <Dialog open={!!activeImage} onOpenChange={() => setActiveImage(null)}>
        <DialogContent className="
          fixed left-[50%] top-[50%] z-50 
          w-full translate-x-[-50%] translate-y-[-50%] 
          gap-4 border bg-background p-0 shadow-2xl 
          sm:max-w-4xl sm:rounded-lg md:w-full 
          max-w-[95vw] max-h-[95vh] overflow-hidden
        ">

          {/* Custom Close Button */}
          <DialogPrimitive.Close asChild>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-4 rounded-full z-50 transition-colors bg-background/70 hover:bg-background"
              aria-label="Close Modal"
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogPrimitive.Close>

          {activeImage && (
            <div className="flex flex-col h-full">
              {/* Header (Title and Description) */}
              <DialogHeader className="p-4 pb-2 border-b flex-shrink-0">
                <h2 className="text-xl font-bold text-primary truncate leading-tight">
                  {activeImage.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-tight">
                  {activeImage.description}
                </p>
              </DialogHeader>

              {/* Main Image Area - Restricted to 80% of the modal's space */}
              <div className="flex-grow flex items-center justify-center relative p-2 md:p-4 overflow-hidden">
                {/* The new 'max-w-[80%] max-h-[80%]' ensures the image stays small */}
                <img
                  src={activeImage.image}
                  alt={activeImage.title}
                  className="
                    max-h-full max-w-full 
                    h-auto w-auto object-contain 
                    // *** CRITICAL CHANGE: Limit image size to 80% of its container
                    max-w-[100%] max-h-[100%] mx-auto
                  "
                />
              </div>

              {/* Footer (Category) */}
              {/* <div className="p-4 pt-2 border-t text-sm text-muted-foreground flex-shrink-0">
                Kategorie: <span className="font-medium text-primary">{activeImage.category}</span>
              </div> */}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;