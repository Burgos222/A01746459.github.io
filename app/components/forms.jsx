import React from "react";
import { useRouter } from 'next/navigation';


export default function Forms() {
    return (
        <main className=" max-w-xl">
            <button className="text-white p-5">{"<-"}</button>
        <div className="bg-white mx-12 rounded-md pl-5">
        <label className=" text-sm font-medium">
          Nombre
        </label>
        <input type="text" className="m-5"/>
        <label className="flex">
          Comentario
        </label>
        <input type="text" className="m-5"/>
        </div>
        </main>
        
        
    );}