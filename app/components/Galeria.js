"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import Masonry from "react-masonry-css";
import Image from "next/image";
import { 
  XMarkIcon, 
  ArrowLeftIcon, 
  ArrowRightIcon,
  MagnifyingGlassIcon,
  PhotoIcon
} from "@heroicons/react/24/outline";

function Galeria({ data }) {
  const searchParams = useSearchParams();
  const value = searchParams.get('value');

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const garages = [
    "Nowoczesne garaże",
    "Garaże z bramą segmentową",
    "Schowki ogrodowe",
    "Nowoczesne garaże z wiatą",
    "Wiaty śmietnikowe",
  ];

  const [active, setActive] = useState(value || garages[0]);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const galeria = data[0].acf.photo_gallery;
  const [currentGallery, setCurrentGallery] = useState([]);
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    if (active === garages[0]) {
      setCurrentGallery(galeria.nowoczesne_garaze[0]);
    } else if (active === garages[1]) {
      setCurrentGallery(galeria.garaze_z_brama[1]);
    } else if (active === garages[2]) {
      setCurrentGallery(galeria.schowki_ogrodowe[2]);
    } else if (active === garages[3]) {
      setCurrentGallery(galeria.nowoczesne_garaze_z_wiata[3]);
    } else if (active === garages[4]) {
      setCurrentGallery(galeria.wiaty_smietnikowe[4]);
    }
    
    setIsLoading(true);
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [active, value, galeria]);

  useEffect(() => {
    if (value) {
      setActive(value);
    }
  }, [value]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxImage(currentGallery[index].full_image_url);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction) => {
    const newIndex = lightboxIndex + direction;
    if (newIndex >= 0 && newIndex < currentGallery.length) {
      setLightboxIndex(newIndex);
      setLightboxImage(currentGallery[newIndex].full_image_url);
    }
  };

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, lightboxIndex, currentGallery]);

  return (
    <div className="relative pb-16">
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            
            {/* Navigation buttons */}
            {lightboxIndex > 0 && (
              <button 
                onClick={() => navigateLightbox(-1)}
                className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Previous image"
              >
                <ArrowLeftIcon className="w-8 h-8" />
              </button>
            )}
            
            {lightboxIndex < currentGallery.length - 1 && (
              <button 
                onClick={() => navigateLightbox(1)}
                className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Next image"
              >
                <ArrowRightIcon className="w-8 h-8" />
              </button>
            )}
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
              {lightboxIndex + 1} / {currentGallery.length}
            </div>
            
            {/* Image */}
            <Image
              src={lightboxImage}
              width={1920}
              height={1080}
              className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
              onClick={closeLightbox}
              alt={`Zdjęcie ${lightboxIndex + 1} z ${currentGallery.length}`}
              priority
            />
          </div>
        </div>
      )}

      {/* Filter tabs */}
      <div className=" z-30 bg-white shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center overflow-x-auto py-4 px-4">
            {garages.map((garage, index) => (
              <button
                key={index}
                onClick={() => setActive(garage)}
                className={`
                  px-4 py-2 mx-1 my-1 rounded-full text-sm font-medium transition-all duration-300
                  ${active === garage 
                    ? "bg-sky-500 text-white shadow-md" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                `}
              >
                {garage}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery header */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{active}</h2>
        <p className="text-gray-600 mb-8">
          Przeglądaj nasze realizacje w kategorii {active.toLowerCase()}. Kliknij na zdjęcie, aby zobaczyć je w pełnym rozmiarze.
        </p>
      </div>

      {/* Loading state */}
      {isLoading ? (
        <div className="container mx-auto px-4 py-12 flex justify-center items-center">
          <div className="animate-pulse flex flex-col items-center">
            <PhotoIcon className="w-16 h-16 text-sky-500 mb-4" />
            <p className="text-gray-500">Ładowanie galerii...</p>
          </div>
        </div>
      ) : (
        // Masonry grid
        <div className="container mx-auto px-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex -ml-4 w-auto"
            columnClassName="pl-4 bg-clip-padding"
          >
            {currentGallery.map((image, index) => (
              <div 
                key={index} 
                className="mb-4 relative overflow-hidden rounded-lg group"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="relative">
                  <Image
                    src={image.full_image_url}
                    width={600}
                    height={400}
                    className={`
                      w-full h-auto rounded-lg shadow-md transition-all duration-500
                      ${isHovered === index ? 'scale-105 brightness-90' : 'scale-100 brightness-100'}
                    `}
                    alt={`Zdjęcie ${index + 1} z kategorii ${active}`}
                  />
                  
                  {/* Overlay with zoom icon */}
                  <div 
                    className={`
                      absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center
                      transition-opacity duration-300 rounded-lg
                      ${isHovered === index ? 'opacity-100' : 'opacity-0'}
                    `}
                    onClick={() => openLightbox(index)}
                  >
                    <div className="bg-white bg-opacity-80 p-3 rounded-full">
                      <MagnifyingGlassIcon className="w-6 h-6 text-sky-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      )}
    </div>
  );
}

export default Galeria;
