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
      <main className="flex flex-col md:flex-row">
        <div className="p-3 md:w-1/2">
          <label htmlFor="website-admin" className="font-semibold text-black">Nombre / Alias</label>
          <div className="flex">
            <input
              type="email"
              className="border-2 p-3 border-black md:w-[65ch] w-[40ch] placeholder:hover:invisible"
              placeholder="Adrian Bravo"
            />
          </div>

          <div className="mt-2">
            <label htmlFor="message" className="font-semibold text-black flex">Comentario</label>
            <textarea
              id="message"
              rows="4"
              className="p-3 border-2 md:w-[65ch] w-[33.5ch] border-black placeholder:hover:invisible"
              placeholder="Deja un mensaje en mi buzón..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              onClick={HandlerTodo}
              type="button"
              className="flex border-2 border-black p-2 hover:bg-black hover:text-white duration-300 ease-in-out"
            >
              Enviar
            </button>
          </div>
        </div>

        <div className="md:mt-6 md:w-1/2 mt-3 p-3 md:p-3">
          <div className="grid md:grid-cols-2">
            {loading && <span className="">Loading...</span>}
            {error && <span className="text-red-500 font-bold">Error: {error}</span>}
            {Object.keys(todos).map((todoKey) => {
              const todo = todos[todoKey];
              return (
                <div className="mb-3 p-3 md:mr-3  border-2 text-white bg-black hover:bg-white hover:text-black border-black justify-center" key={todoKey}>
                  {todo}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    )
  }