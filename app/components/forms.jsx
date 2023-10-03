'use client';
import React, { useEffect, useState } from "react";
import { doc, setDoc } from 'firebase/firestore';
import { db } from "@/firebase";
import useFetchTodos from "@/hooks/fetchTodos";

export default function Forms() {

  const [todo, setTodo] = useState([])
  const {todos, loading, error} = useFetchTodos()

  async function HandlerTodo() {
    if (!todo) { return }
    const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1
    setTodo({...todos, [newKey]: todo })
    setTodo('')
    const userRef = doc(db, 'users', 'master')
    await setDoc(userRef, {
      'todos': {
        [newKey]: todo
      }
    }, {merge:true})


  }

    return (
      <main className=" max-w-xl flex">
        <div className="p-3">
          <label htmlFor="website-admin" className=" font-semibold text-black">Nombre / Alias</label>
            <div className="flex">
              <input type="email" className="border-2 p-3 border-black w-[65ch] placeholder:hover:invisible" placeholder="Adrian Bravo"/>
            </div>
          
            <div className="mt-2 max-lg:">
              <label htmlFor="message" className="font-semibold text-black">Comentario</label>
              <textarea id="message" rows="4" className="border-2 p-3 border-black w-[65ch] placeholder:hover:invisible"
              placeholder="Deja un mensaje en mi buzón..." 
              value={todo} onChange={(e) => setTodo(e.target.value)}
              ></textarea>
              <button onClick={HandlerTodo} type="button" className="border-2 border-black p-2 hover:bg-black hover:text-white duration-300 ease-in-out">submit</button>
            </div>
          </div>
          <div className="p-3 m-3 max-w-xl flex flex-col">
            {(loading) && (<span className="">loading...</span>)}
              {Object.keys(todos).map((todo, i) => {
                return(
                  <div className="border-2 border-black p-3 mb-3 w-80 flex justify-center" key={i}>
                    {todos[todo]}
                  </div>
                )
              })}
          </div>
      </main>
      
    );}