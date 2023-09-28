'use client';
import React from "react";

export default function Navbar() {
    return (
      <main className=''>
        <nav className="border-b-2 border-black ">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-10 ">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <imga className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex">
                    <a href="." className="text-black hover:bg-black hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300 ease-in-out">Portafolio</a>
                    <a href="/curriculum" className="text-black hover:bg-black hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300 ease-in-out">Curriculum</a>
                    <a href="/comentarios" className="text-black hover:bg-black hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300 ease-in-out">Comentarios</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse mr-8">
                <a href="#" className="text-black hover:bg-black hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300 ease-in-out">English</a>
                <a href="." className="text-black hover:bg-black hover:text-white px-3 py-2 text-lg font-medium transition-colors duration-300 ease-in-out">Español</a>
              </div>
            </div>
          </div>
        </nav>
      </main>
    );
  }