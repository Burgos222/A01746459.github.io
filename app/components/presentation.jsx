'use client';
import React from "react";

export default function Presentation({ imageSrc, name, carrer }) {
    return (
    <main className=" hover:bg-black hover:text-white transition-all duration-500">
       
    <div className=" md: p-6 border-2 border-black  hover:text-white  ">
        <h1 className="mb-1 font-semibold tracking-tight hover:text-white hover:font-bold ease-in-out">Sebastian Burgos Alanís</h1>
        <p className="mb-1 font-norma  hover:text-white ">Ingeniero en Tecnologías Computacionales</p>
        <a href="https://tec.mx/es" className="mb-1 hover:text-blue-600 hover:font-bold ease-in-out">Tecnológico de Monterrey</a>
        <a href="curriculum" className="flex flex-row-reverse">
        <span className=" px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out">
         +
        </span>
        </a>
    </div>

    </main>
    );

}