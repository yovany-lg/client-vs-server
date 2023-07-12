"use client"
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState<string>('');
  return (
    <div className="container">
      <h1>Sign in</h1>
      <input className="p-2 border rounded" type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
      <button className="ml-2 p-2 border rounded">Sign In</button>
    </div>
  )
}