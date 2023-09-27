'use client';
import React from "react";

export default function Navbar() {
    return (
      <main className=''>
        <nav className="bg-blue-900">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-10">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <imga className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-3">
                    <a href="." className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Portafolio</a>
                    <a href="/curriculum" className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Curriculum</a>
                    <a href="/comentarios" className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Comentarios</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse mr-8">
                <a href="#" className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-4">English</a>
                <a href="." className="text-gray-300 hover:bg-blue-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Español</a>
              </div>
            </div>
          </div>
        </nav>
      </main>
    );
  }