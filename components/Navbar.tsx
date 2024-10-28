"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ModeToggle } from './mode-toggle'

export default function Navbar() {
  return (
    <nav className="w-full fixed z-10 h-12 bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Aibytes
            </Link>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              Contact Us
            </Button>
            <ModeToggle/>
          </div>
        </div>
      </div>
    </nav>
  )
}