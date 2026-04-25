"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
            <nav className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
                <div className="font-serif italic text-2xl text-blue-900">Victoria Printmakers</div>

                <button onClick={toggleMenu} className="text-blue-900 md:hidden">
                    {isOpen ? "✕" : "☰"} {/* Simplified for example */}
                </button>



                <div className="hidden md:flex items-center space-x-10 font-serif text-lg tracking-tight">
                    <Link className="text-blue-900 border-b-2 border-blue-900 pb-1 transition-colors duration-300"
                        href="#About">About</Link>
                    <Link className="text-blue-900 border-b-2 border-blue-900 pb-1 transition-colors duration-300"
                        href="#Gallery">Gallery</Link>
                    <Link className="text-blue-700/60 hover:text-blue-900 transition-colors duration-300"
                        href="#Upcoming">Upcoming Events</Link>
                    <Link className="text-blue-700/60 hover:text-blue-900 transition-colors duration-300"
                        href="#Past">Past Events</Link>
                    <Link className="text-blue-700/60 hover:text-blue-900 transition-colors duration-300"
                        href="#Contact">Contact</Link>
                </div>

            </nav>
            <div className={`
  fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 p-6 
  transition-transform duration-300 ease-in-out
  ${isOpen ? 'translate-x-0' : 'translate-x-full'}
  md:hidden
`}>
                {/* Close Button (Optional, if you want one inside the menu) */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-600"
                >
                    X
                </button>

                {/* Vertical Links */}
                <nav className="mt-12 flex flex-col gap-6">
                    <Link className="text-blue-900 border-b-2 border-blue-900 pb-1 transition-colors duration-300"
                        href="#About">About</Link>
                    <Link className="text-blue-900 border-b-2 border-blue-900 pb-1 transition-colors duration-300"
                        href="#Gallery">Gallery</Link>
                    <Link className="text-blue-700/60 hover:text-blue-900 transition-colors duration-300"
                        href="#Upcoming">Upcoming Events</Link>
                    <Link className="text-blue-700/60 hover:text-blue-900 transition-colors duration-300"
                        href="#Past">Past Events</Link>
                    <Link className="text-blue-700/60 hover:text-blue-900 transition-colors duration-300"
                        href="#Contact">Contact</Link>
                </nav>
            </div>

            {/* Background Dimmer (Overlay) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            
        </header>

    );
}

