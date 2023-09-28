'use client';
import React from 'react';
import ImageCarousel from './carousel';

export default function Tag({ title, description, linkUrl }) {
  const images = [
    { src: 'resources/python.png', alt: 'Image 1' },
    { src: 'resources/firebase.png', alt: 'Image 2' },
    { src: 'resources/mongodb.png', alt: 'Image 3' },
    
  ];
  return (
    <main className="mb-3 ">
      <div className="border-2 border-black p-4 flex">
      <div className="w-32 h-32">
        <ImageCarousel images={images} />
      </div>
        

      <div className="p-4 flex-grow">
        <h1 className="text-xl font-semibold text-center p-3">{title}</h1>
        <div className=" ml-3 max-w-[1000px] max-h-[200px] overflow-auto">
        <p className="text-sm text-justify">
        {description}
        </p>
        </div>
      </div>
      

        <span className="">
        <a href={linkUrl} className=" px-2 py-2 hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
          Link
        </a>
        </span>
      </div>
    </main>
  );
}


