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
        setTodos(todosData);
        setLoading(false);
      }
    } catch (error) {
      setError('Failed to load');
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
      <main className=" md:max-w-xl max-w-sm felx md:flex-col md:columns-2">
        <div className="p-3">
          <label htmlFor="website-admin" className=" font-semibold text-black">Nombre / Alias</label>
            <div className="flex">
              <input type="email" className="border-2 p-3 border-black md:w-[65ch] w-[30ch] placeholder:hover:invisible" placeholder="Adrian Bravo"/>
            </div>
          
            <div className="mt-2">
              <label htmlFor="message" className="font-semibold text-black flex">Comentario</label>
              <textarea id="message" rows="4" className="p-3 border-2 md:w-[65ch] w-[30ch] border-black placeholder:hover:invisible"
              placeholder="Deja un mensaje en mi buzón..." 
              value={todo} onChange={(e) => setTodo(e.target.value)}
              />
              <button onClick={HandlerTodo} type="button" className=" flex border-2 border-black p-2 hover:bg-black hover:text-white duration-300 ease-in-out">Enviar</button>
            </div>


            <div className="md:p-3 md:ml-96 md:m-3 mt-3 w-[30] flex flex-col-reverse">
            {loading && <span className="">Loading...</span>}
            {error && <span className="text-red-500 font-bold">Error: {error}</span>}
            {Object.keys(todos).map((todoKey) => {
              const todo = todos[todoKey];
              return (
                <div className=" border-2 border-black p-3 mb-3 md:w-80 w-30 flex justify-center" key={todoKey}>
                  {todo}
                </div>
              );
            })}
          </div>

        </div>
          
      </main>
      
    )
}