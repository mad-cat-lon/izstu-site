'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const showcatImages = [
  '/showcat/set_002_01_X1_0004.png',
  '/showcat/IMG_0845.PNG',
  '/showcat/20250417_190136.jpg',
  '/showcat/IMG_0777.PNG',
  '/showcat/IMG_0531.PNG',
  '/showcat/IMG_0844.PNG',
  '/showcat/20250417_203354.jpg',
  '/showcat/IMG_0547.PNG',
  '/showcat/20250417_185840.jpg',
  '/showcat/IMG_0778.PNG',
  '/showcat/20250328_183030.jpg',
  '/showcat/IMG_0540.PNG',
  '/showcat/20250417_203204.jpg',
  '/showcat/20250328_172646.jpg',
  '/showcat/20250417_164951.jpg',
  '/showcat/20250329_112844.jpg',
  '/showcat/IMG_0331.PNG',
  '/showcat/20250417_185834.jpg',
  '/showcat/20250329_112851.jpg',
  '/showcat/20250328_171253.jpg',
  '/showcat/20250328_135701.jpg',
  '/showcat/20250417_180201.jpg',
  '/showcat/20250417_203213.jpg',
  '/showcat/IMG_0775.PNG',
];

export default function ShowcatCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === showcatImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleClick = () => {
    router.push('/showcat');
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? showcatImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => 
      prevIndex === showcatImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div 
      className="hand-drawn-border h-96 bg-gray-100 flex items-center justify-center overflow-hidden relative cursor-pointer group"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image 
        src={showcatImages[currentIndex]}
        alt={`SHOWCAT image ${currentIndex + 1}`}
        width={400}
        height={300}
        className="w-full h-full object-cover rounded transition-opacity duration-300"
        priority={currentIndex === 0}
      />
      
      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
        aria-label="Previous image"
      >
        ←
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
        aria-label="Next image"
      >
        →
      </button>
      
      {/* Image counter */}
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
        {currentIndex + 1} / {showcatImages.length}
      </div>
      
      {/* Click hint */}
      <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        Click to view project
      </div>
    </div>
  );
} 