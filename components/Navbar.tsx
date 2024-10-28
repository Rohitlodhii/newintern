"use client"

import Link from 'next/link'

import { ModeToggle } from './mode-toggle'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

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
           <DropdownMenu>
            <DropdownMenuTrigger>
              <div className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 px-2 py-1'>Join Us!</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLScBavdoSJLo9-i1MVAlHLWE62X1jy1q6Ky5Z9-umYIR3GMcpQ/viewform">
              <DropdownMenuItem>Intership</DropdownMenuItem>
              </Link >
              <DropdownMenuItem>Check Intern</DropdownMenuItem>
            </DropdownMenuContent>
           </DropdownMenu>
            <ModeToggle/>
          </div>
        </div>
      </div>
    </nav>
  )
}