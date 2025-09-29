import React, { useState, useMemo, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// ----------------------------------------------------
// I. UTILITY HOOK: useResolvedImages
// ----------------------------------------------------

/**
 * Custom hook to dynamically import a list of images (Promises) and resolve them into URL strings.
 * @param {Array<Promise>} imageImports - Array of Promises returned by import() calls.
 * @returns {{resolvedImages: string[], isLoading: boolean}}
 */
const useResolvedImages = (imageImports) => {
    const [resolvedImages, setResolvedImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Stop if there are no imports (e.g., modal is closed)
        if (!imageImports || imageImports.length === 0) {
            setResolvedImages([]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        const resolvePromises = async () => {
            try {
                // Await all the dynamic imports (which are Promises)
                const modules = await Promise.all(imageImports);

                // Map to extract the final image URL string
                const urls = modules.map(module => module.default || module);

                setResolvedImages(urls);
            } catch (error) {
                console.error("Failed to load gallery images:", error);
                setResolvedImages([]);
            } finally {
                setIsLoading(false);
            }
        };

        resolvePromises();
    }, [imageImports]); // The imageImports array reference is now stable (thanks to useMemo below)

    return { resolvedImages, isLoading };
};


// ----------------------------------------------------
// II. LIGHTBOX MODAL COMPONENT
// ----------------------------------------------------

const GalleryModal = ({ isOpen, onClose, images, isLoading, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Reset index when the modal opens with a new set of images
    useEffect(() => {
        setCurrentIndex(0);
    }, [isOpen, images]);

    if (!isOpen) return null;

    // Loading/Placeholder screen while dynamic imports resolve
    if (isLoading || images.length === 0) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
                <div
                    className="relative max-w-xl w-full p-8 bg-white rounded-lg shadow-2xl text-center"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-4 text-primary font-medium">Bilder werden geladen...</p>
                </div>
            </div>
        );
    }

    const currentImage = images[currentIndex];
    const totalImages = images.length;

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
            <div
                className="relative max-w-6xl w-full max-h-[95vh] bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/70 rounded-full text-lg font-bold hover:bg-white transition text-primary"
                >
                    &times;
                </button>

                {/* Modal Header */}
                <div className="p-4 border-b">
                    <h3 className="text-xl font-semibold text-primary">{title} ({currentIndex + 1} / {totalImages})</h3>
                </div>

                {/* Image Content and Navigation */}
                <div className="flex flex-grow items-center justify-center relative p-4 bg-gray-100">

                    {/* Previous Button */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-4 z-10 p-3 bg-white/70 rounded-full shadow-lg hover:bg-white transition text-xl font-bold"
                        disabled={totalImages <= 1}
                    >
                        {'<'}
                    </button>

                    {/* Image */}
                    <div className="h-full w-full flex justify-center items-center">
                        <img
                            src={currentImage}
                            alt={`${title} image ${currentIndex + 1}`}
                            className="max-h-[80vh] max-w-full object-contain"
                        />
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-4 z-10 p-3 bg-white/70 rounded-full shadow-lg hover:bg-white transition text-xl font-bold"
                        disabled={totalImages <= 1}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </div>
    );
};


// ----------------------------------------------------
// III. IMAGE DATA AND IMPORTS
// ----------------------------------------------------

// Dynamic Imports (Promises) - used by the modal
const novilonImages = [
    import('@/assets/gallery/Novilon/1.jpg'),
    import('@/assets/gallery/Novilon/2.jpg'),
    import('@/assets/gallery/Novilon/3.jpg'),
    import('@/assets/gallery/Novilon/4.jpg'),
    import('@/assets/gallery/Novilon/5.jpg'),
    import('@/assets/gallery/Novilon/6.jpg'),
    import('@/assets/gallery/Novilon/7.jpg'),
    import('@/assets/gallery/Novilon/8.jpg'),
    import('@/assets/gallery/Novilon/9.jpg'),
    import('@/assets/gallery/Novilon/10.jpg'),
    import('@/assets/gallery/Novilon/11.jpg'),
    import('@/assets/gallery/Novilon/12.jpg'),
    import('@/assets/gallery/Novilon/13.jpg'),
];

const treppenImages = [
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/1.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/2.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/3.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/4.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/5.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/6.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/7.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/8.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/9.jpg'),
    import('@/assets/gallery/Treppenverkleidung_mit_Parkett/10.jpg'),
];

const parkettMusterImages = [
    import('@/assets/gallery/Parkett_Muster/1.jpg'),
    import('@/assets/gallery/Parkett_Muster/2.jpg'),
    import('@/assets/gallery/Parkett_Muster/3.jpg'),
    import('@/assets/gallery/Parkett_Muster/4.jpg'),
    import('@/assets/gallery/Parkett_Muster/5.jpg'),
    import('@/assets/gallery/Parkett_Muster/6.jpg'),
    import('@/assets/gallery/Parkett_Muster/7.jpg'),

];



const beforeAfterImages = [
    import('@/assets/gallery/Before _After/1.jpg'),
    import('@/assets/gallery/Before _After/3.jpg'),
    import('@/assets/gallery/Before _After/2.jpg'),
    import('@/assets/gallery/Before _After/5.jpg'),



    import('@/assets/gallery/Before _After/9.jpg'),
    import('@/assets/gallery/Before _After/11.jpg'),
    import('@/assets/gallery/Before _After/7.jpg'),
    import('@/assets/gallery/Before _After/6.jpg'),

    import('@/assets/gallery/Before _After/8.jpg'),

    import('@/assets/gallery/Before _After/10.jpg'),

];

// Map linking titles to the dynamic import arrays
const galleryDataMap = {
    'Novilon Elastische Beläge': novilonImages,
    'Treppenverkleidung mit Parkett': treppenImages,
    'Parkett Muster': parkettMusterImages,
    'Before / After': beforeAfterImages,
};

// Synchronous Placeholder/First Image Imports (for the cards)
// IMPORTANT: These must be standard imports to load the card image immediately.
import novilonPlaceholder from '@/assets/gallery/Novilon/1.jpg';
import treppenPlaceholder from '@/assets/gallery/Treppenverkleidung_mit_Parkett/1.jpg';
import parkettMusterPlaceholder from '@/assets/gallery/Parkett_Muster/1.jpg';
import beforeAfterPlaceholder from '@/assets/gallery/Before _After/1.jpg';


// ----------------------------------------------------
// IV. GALLERY SECTION COMPONENT
// ----------------------------------------------------

const GallerySection = () => {
    // --- State for Modal ---
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // --- Featured Items Data (Stabilized with useMemo) ---
    const featuredItems = useMemo(() => [
        {
            title: 'Novilon Elastische Beläge',
            description: 'Hochwertige elastische Bodenbeläge für alle Anwendungsbereiche',
            category: 'Novilon',
            image: novilonPlaceholder,
            count: novilonImages.length,
        },
        {
            title: 'Treppenverkleidung mit Parkett',
            description: 'Professionelle Treppenverkleidung aus hochwertigen Parkettmaterialien',
            category: 'Treppen',
            image: treppenPlaceholder,
            count: treppenImages.length,
        },
        {
            title: 'Parkett Muster',
            description: 'Vielfältige Parkett-Muster und Holzarten zur Auswahl',
            category: 'Parkett',
            image: parkettMusterPlaceholder,
            count: parkettMusterImages.length,
        },
        {
            title: 'Before / After',
            description: 'Beeindruckende Vorher-Nachher Transformationen unserer Projekte',
            category: 'Projekte',
            image: beforeAfterPlaceholder,
            count: beforeAfterImages.length,
        }
    ], []);

    // **FIX FOR THE INFINITE LOOP:** Use useMemo to stabilize the promise array.
    const modalImagePromises = useMemo(() => {
        return selectedCategory ? galleryDataMap[selectedCategory.title] : [];
    }, [selectedCategory]);

    // Resolve the image Promises into an array of string URLs
    const { resolvedImages: modalImages, isLoading: isModalLoading } = useResolvedImages(modalImagePromises);


    // Calculate total images from the arrays
    const totalImages = featuredItems.reduce((sum, item) => sum + item.count, 0);

    // --- Click Handlers ---
    const handleCardClick = (item) => {
        setSelectedCategory(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // We do NOT set setSelectedCategory(null) here, 
        // as the useMemo depends on it to trigger the image loading when needed.
        // It will be set when a new card is clicked.
    };


    return (
        <section id="gallery" className="py-20 bg-background bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-primary">Unsere Arbeiten & Materialien</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Entdecken Sie unsere umfangreiche Materialauswahl und professionellen Arbeiten. Von hochwertigen Musterkollektionen bis hin zu fertigen Installationen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredItems.map((item, index) => (
                        <Card
                            key={index}
                            className="group hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                            onClick={() => handleCardClick(item)}
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                <div className="absolute top-4 right-4 bg-gold text-white px-2 py-1 text-xs rounded-full font-medium">
                                    {item.count} Bilder
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="bg-gold text-white px-3 py-1 text-xs rounded-full font-medium">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-gold text-gold hover:bg-gold hover:text-white"
                        asChild
                    >
                        <Link to="/gallery">
                            <p>Alle Kategorien anzeigen ({totalImages} Bilder)</p>
                        </Link>
                    </Button>
                </div>
            </div>

            {/* The Gallery Modal Component */}
            <GalleryModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                images={modalImages}
                isLoading={isModalLoading}
                title={selectedCategory?.title || 'Gallery'}
            />
        </section>
    );
};

export default GallerySection;