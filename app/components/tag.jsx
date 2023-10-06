'use client';
import React from 'react';
import ImageCarousel from './carousel';

export default function Tag({ images, title, description, linkUrl }) {
  return (
    <main className="mb-3 hover:bg-black hover:text-white transition-all duration-500">
  <div className="border-2  border-black p-2  md:w-full md:h-[250px]  flex flex-col md:flex-row items-center justify-center text-center">
    <div className="md:w-32 md:mb-4 md:mt-0 mt-2 w-28 h-28 md:mr-12">
      <ImageCarousel className="" images={images} />
    </div>

    <div className="md:w-3/4 p-4">
      <h1 className="text-xl font-semibold p-3 hover:font-bold">{title}</h1>
      <div className="max-w-full">
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>

    <a
      href={linkUrl}
      className="px-4 py-3 md:ml-6 mt-4 md:mt-0 hover:bg-white hover:text-black transition-colors ease-in-out"
    >
      +
    </a>
  </div>
</main>



  );
}



