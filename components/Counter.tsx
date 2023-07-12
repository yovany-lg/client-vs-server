"use client"
import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
          <h2>Counter: {count}</h2>
          <button className="p-2 border rounded" type="button" onClick={() => setCount(prev => prev + 1)}>Plus 1</button>
        </div>
    )
}