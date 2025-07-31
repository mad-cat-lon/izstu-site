'use client';

import { useEffect, useState } from 'react';

export default function StoryboardGallery() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const container = document.getElementById('storyboard-container');
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const imageWidth = 272; // 256px + 16px gap
      const currentIndex = Math.round(scrollLeft / imageWidth);
      setCurrentPage(Math.min(currentIndex + 1, 49));
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const scrollAmount = e.deltaY * 2; // Adjust sensitivity
      container.scrollLeft += scrollAmount;
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative">

        {/* Storyboard Container */}
        <div className="relative overflow-x-auto overflow-y-hidden">
          <div className="flex gap-4" id="storyboard-container">
            {/* Storyboard Images */}
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S1 1.png" alt="Storyboard 1" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S1 2.png" alt="Storyboard 2" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S2.png" alt="Storyboard 3" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S3 1.png" alt="Storyboard 4" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S3 2.png" alt="Storyboard 5" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S4.png" alt="Storyboard 6" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S5 1.png" alt="Storyboard 7" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S5 2.png" alt="Storyboard 8" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S5 3.png" alt="Storyboard 9" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S1S5 4.png" alt="Storyboard 10" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S1 1.png" alt="Storyboard 11" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S1 2.png" alt="Storyboard 12" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S2 1.png" alt="Storyboard 13" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S2 2.png" alt="Storyboard 14" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S3.png" alt="Storyboard 15" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S4.png" alt="Storyboard 16" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S5.png" alt="Storyboard 17" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S6.png" alt="Storyboard 18" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S7.png" alt="Storyboard 19" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S8 1.png" alt="Storyboard 20" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S8 2.png" alt="Storyboard 21" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S8 3.png" alt="Storyboard 22" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S9 1.png" alt="Storyboard 23" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S9 2.png" alt="Storyboard 24" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S10.png" alt="Storyboard 25" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S11 1.png" alt="Storyboard 26" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S11 2.png" alt="Storyboard 27" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S11 3.png" alt="Storyboard 28" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S2S11 4.png" alt="Storyboard 29" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S1 1.png" alt="Storyboard 30" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S1 2.png" alt="Storyboard 31" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S1 3.jpg" alt="Storyboard 32" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S1 4.png" alt="Storyboard 33" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S1 5.png" alt="Storyboard 34" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S2.png" alt="Storyboard 35" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S3 1.png" alt="Storyboard 36" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S3 2.png" alt="Storyboard 37" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S4 1.png" alt="Storyboard 38" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S4 2.png" alt="Storyboard 39" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S4 3.png" alt="Storyboard 40" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S5 1.png" alt="Storyboard 41" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S5 2.png" alt="Storyboard 42" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S5 3.png" alt="Storyboard 43" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S6 1.png" alt="Storyboard 44" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S6 2.png" alt="Storyboard 45" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S6 3.png" alt="Storyboard 46" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S6 4.png" alt="Storyboard 47" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S6 5.png" alt="Storyboard 48" className="w-full h-full object-cover rounded" />
            </div>
            <div className="flex-shrink-0 w-64 h-48">
              <img src="/he-is-king/storyboard/S3S6 6.png" alt="Storyboard 49" className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>

        {/* Page Indicator */}
        <div className="text-right mt-4">
          <span className="text-lg font-bold">{currentPage}</span>
        </div>
      </div>
    </div>
  );
} 