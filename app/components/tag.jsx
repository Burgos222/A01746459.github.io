'use client';
import React from 'react';
import ImageCarousel from './carousel';

export default function Tag({ images, title, description, linkUrl, git }) {
  return (
    <main className="mb-3 hover:bg-black hover:text-white transition-all duration-500">
      <div className="border-2 border-black p-4 flex items-center justify-center">
        <div className="md:w-32 w-18 h-32">
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
            className="px-4 py-3  hover:bg-white hover:text-black transition-colors  ease-in-out"
          >
            +
          </a>
      </div>
    </main>
  );
}



