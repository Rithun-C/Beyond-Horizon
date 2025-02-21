"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#EEEEEE] backdrop-blur supports-[backdrop-filter]:bg-[#EEEEEE]/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex px-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">Beyond Horizon</span>
          </Link>
        </div>
        
        <nav className="md:flex md:flex-1 md:items-center md:justify-center">
          <ul className="flex space-x-8">
            {["Chats", "Learn", "Events", "Games"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="text-sm font-medium text-primary transition-colors hover:text-[#9B7EBD]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:flex md:items-center md:space-x-4 px-4">
          <Link href="/login" variant="ghost" size="sm" className="text-primary p-2">
            Login
          </Link>
          <Link href="/signup" size="sm" className="bg-primary text-[#EEEEEE] p-2">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

