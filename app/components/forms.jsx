'use client';
import React from "react";

export default function Forms() {
    return (
      <main className=" max-w-xl">
        <label htmlFor="website-admin" className=" font-semibold text-black">Username</label>
          <div className="flex">
            <input type="email" className="border-2 p-3 border-black w-[65ch] placeholder:hover:invisible" placeholder="adrianbravo@gmail.com"/>
          </div>
          
          <div className="mt-2">
          <label htmlFor="message" className="font-semibold text-black">Comentario</label>
          <textarea id="message" rows="4" className="border-2 p-3 border-black w-[62.4ch] placeholder:hover:invisible" placeholder="Deja un mensaje en mi buzón..."></textarea>
          <button type="button" className="border-2 border-black p-2 hover:bg-black hover:text-white duration-300 ease-in-out">submit</button>
          </div>

      </main>
      
    );}