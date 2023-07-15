"use client"
import { createContext, useState } from "react";

const ThemeContext = createContext({})
 
export function AppProviders({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}