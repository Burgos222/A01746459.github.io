'use client';
import React, { useEffect, useState } from "react";
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from "@/firebase";

export default function Forms() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  async function fetchData() {
    try {
      const docRef = doc(db, 'users', 'master');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const todosData = docSnap.data().todos;
        setTodos(todosData); // Set todos directly without reversing
        setLoading(false);
      }
    } catch (error) {
      setError('Failed to load to do');
      setLoading(false);
    }
  }

  async function HandlerTodo() {
    if (!todo) {
      return;
    }
    const newKey = Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
    const userRef = doc(db, 'users', 'master');
    await setDoc(userRef, {
      todos: {
        [newKey]: todo,
      },
    }, { merge: true });
    setTodo('');
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, []);
    return (
      <main className=" md:max-w-xl max-w-sm flex">
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
              <button onClick={HandlerTodo} type="button" className="border-2 border-black p-2 hover:bg-black hover:text-white duration-300 ease-in-out">Enviar</button>
            </div>
          </div>
          <div className="p-3 m-3 max-w-xl flex flex-col">
            {loading && <span className="">Loading...</span>}
            {error && <span className="text-red-500">Error: {error}</span>}
            {Object.keys(todos).map((todoKey) => {
              const todo = todos[todoKey];
              return (
                <div className="border-2 border-black p-3 mb-3 w-80 flex justify-center" key={todoKey}>
                  {todo}
                </div>
              );
            })}
          </div>
      </main>
      
    )
}