"use client"
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-background border-b">
      <nav className="container h-14 flex gap-x-5 text-sm">
        <div className={classNames("flex items-center", pathname === "/products" && "border-b-2 border-sky-400")}>
          <Link href="/products">Products</Link>
        </div>
        <div className={classNames("flex items-center", pathname === "/signin" && "border-b-2 border-sky-400")}>
          <Link href="/signin">Sign in</Link>
          </div>
      </nav>
    </header>
  )
}