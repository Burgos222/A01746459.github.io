'use client';
import React, { useState } from 'react';

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const previousSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="relative">
        <button
          className="absolute top-1/2 left-4 transform-translate-y-1/2 text-white text-2xl focus:outline-none"
          onClick={previousSlide}
        >
          &#8249;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl focus:outline-none"
          onClick={nextSlide}
        >
          &#8250;
        </button>
        <div className="flex justify-center items-center">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full max-w-lg" />
        </div>
      </div>
    );
  }
  
  export default ImageCarousel;
  