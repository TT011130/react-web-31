'use client'
import {useState} from 'react';
export default function Counter() {
  const [count, setCount] = useState(0);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Counter</h1>
        <button className="up" onClick ={() => setCount(count + 1)}>+</button>
        <p className="result">{count}</p>
        <button className="down" onClick ={() => setCount(count - 1)}>-</button>
      </main>
    )
  }