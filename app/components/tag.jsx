'use client';
import React from 'react';

export default function Tag({ imageSrc, title, description, linkUrl, customClasses }) {
  // You can define a custom class for the component and merge it with the default classes.
  const containerClasses = `max-w-md mx-auto mt-5 ${customClasses || ''}`;

  return (
    <main className={containerClasses}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
        <div className="transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <div className="Image">
            <img
              className="w-full h-64 object-cover"
              src={imageSrc}
              alt="Card Image"
            />
          </div>
        </div>

        <div className="p-4">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-gray-700 text-justify mb-3">{description}</p>
        </div>
        <a href={linkUrl} className="bg-blue-700 flex justify-center text-white hover:scale-110 hover:bg-blue-800 p-1">
          Link
        </a>
      </div>
    </main>
  );
}
