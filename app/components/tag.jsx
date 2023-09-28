'use client';
import React from 'react';
import ImageCarousel from './carousel';

export default function Tag({ images, title, description, linkUrl }) {
  return (
    <main className="mb-3">
      <div className="border-2 border-black p-4 flex items-center justify-center">
        <div className="w-32 h-32">
          <ImageCarousel className="" images={images} />
        </div>

        <div className="p-4 flex-grow">
          <h1 className="text-xl font-semibold text-center p-3 hover:font-bold">{title}</h1>
          <div className="max-w-[1000px]">
            <p className="text-sm text-justify">{description}</p>
          </div>
        </div>
          <a
            href={linkUrl}
            className="px-4 py-24 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
          >
            +
          </a>
      </div>
    </main>
  );
}



