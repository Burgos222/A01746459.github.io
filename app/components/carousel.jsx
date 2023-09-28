'use client';
import React, { useState, useEffect } from 'react';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative overflow-hidden w-full max-w-md mx-auto">
      <div
        className="transition-transform duration-500 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex-grow-0"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;

