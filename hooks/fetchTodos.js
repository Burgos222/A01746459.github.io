import React, {useState, useEffect, useRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';

export default function useFetchTodos() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    async function fetchData() {
      try{
        const docRef  = doc(db, 'users', 'master')
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setTodos(docSnap.data().todos)
        }
      } catch(error){
        setError('failed to load to do')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return {loading, error, todos}
}
