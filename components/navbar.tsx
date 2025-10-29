"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleGetStarted = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">ShopVerse</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-foreground hover:text-primary transition">
              Features
            </Link>
            <Link href="#showcase" className="text-foreground hover:text-primary transition">
              Showcase
            </Link>
            <Link href="#download" className="text-foreground hover:text-primary transition">
              Download
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link href="#features" className="block text-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#showcase" className="block text-foreground hover:text-primary">
              Showcase
            </Link>
            <Link href="#download" className="block text-foreground hover:text-primary">
              Download
            </Link>
            <div className="flex gap-2 pt-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
