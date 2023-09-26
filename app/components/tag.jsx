import React from "react";

export default function Tag() {
    return (
      <main className=''>
        <div className="max-w-md mx-auto mt-5">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
            <div className="transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
              <img
                className="w-full h-64 object-cover"
                src="https://via.placeholder.com/800x400" // Replace with your image URL
                alt="Card Image"
              />
            </div>
            
            <div className="p-4">
              <h1 className="text-xl font-semibold">Card Title</h1>
              <p className="text-gray-700 text-justify mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <a href="#" className="bg-blue-700 flex justify-center text-white hover:scale-110 hover:bg-blue-800 p-1">Link</a>
          </div>
        </div>
      </main>
    );
}