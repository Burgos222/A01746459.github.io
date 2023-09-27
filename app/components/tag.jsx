'use client';
import React from 'react';

export default function Tag({ imageSrc, title, description, linkUrl, customClasses }) {
  const containerClasses = `max-w-md mx-auto ${customClasses || 'text-white'}`;

  return (
    <main className={containerClasses}>
      <div className="flex flex-col dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden relative">
        <div className="transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <div className="Image">
            <img
              className="w-full h-64 object-cover"
              src={imageSrc}
              alt="Card Image"
            />
          </div>
        </div>

        <div className="p-4 flex-grow">
          <h1 className="text-xl  font-semibold text-center p-3">{title}</h1>
          <p className="text-white text-justify mb-3">{description}</p>
        </div>
        <a href={linkUrl} className="text-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Link
        </a>
      </div>
    </main>
  );
}


