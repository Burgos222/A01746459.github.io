'use client';
import React from "react";

export default function Navbar() {
    return (
      <main className=''>
        <nav className="border-b-2 border-black  md:overflow-auto overflow-x-scroll justify-start">
          <div className="mx-auto ">
            <div className="relative flex h-16 items-center justify-10 text-lg">
              <div className="flex flex-1 items-center justify-start ">
                <div className="">
                  <div className="flex md:pl-3">
                    <a href="." className="text-black hover:bg-black hover:text-white px-3 py-2 font-medium transition-colors duration-300 ease-in-out">Portafolio</a>
                    <a href="/curriculum" className="text-black hover:bg-black hover:text-white px-3 py-2 font-medium transition-colors duration-300 ease-in-out">Curriculum</a>
                    <a href="/comentarios" className="text-black hover:bg-black hover:text-white px-3 py-2  font-medium transition-colors duration-300 ease-in-out">Contacto</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse mr-8">
                <a href="#" className="text-black hover:bg-black hover:text-white px-3 py-2  font-medium transition-colors duration-300 ease-in-out">English</a>
                <a href="." className="text-black hover:bg-black hover:text-white px-3 py-2 font-medium transition-colors duration-300 ease-in-out">Español</a>
              </div>
            </div>
          </div>
        </nav>
      </main>
    );
  }