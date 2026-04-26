"use client";
import { useState } from "react";
import Link from "next/link";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const activeId = useActiveSection();
    const toggleMenu = () => setIsOpen(!isOpen);

    const NAV_LINKS: { id: string; label: string }[] = [
        { id: 'About', label: 'About' },
        { id: 'Gallery', label: 'Gallery' },
        { id: 'Upcoming', label: 'Upcoming Events' },
        { id: 'Past', label: 'Past Events' },
        { id: 'InMemoriam', label: 'In Memoriam' },
        { id: 'Contact', label: 'Contact' },
    ];

    // Reusable link that handles its own "active" logic
    const NavItem = ({ link, activeId, onClick }: { link: { id: string; label: string }; activeId: string; onClick?: () => void }) => (
        <Link
            href={`#${link.id}`}
            onClick={onClick}
            className={`transition-colors duration-300 hover:text-blue-900 ${activeId === link.id
                    ? "text-blue-900 underline underline-offset-8 decoration-2" // Increased offset for better look
                    : "text-blue-700/60"
                }`}
        >
            {link.label}
        </Link>
    );

    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
            <nav className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
                <div className="font-headline italic text-2xl text-blue-900">Victoria Printmakers</div>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10 font-body text-lg tracking-tight">
                    {NAV_LINKS.map((link) => (
                        <NavItem key={link.id} link={link} activeId={activeId} />
                    ))}
                </div>



                <button onClick={toggleMenu} className="text-blue-900 md:hidden">
                    {isOpen ? "✕" : "☰"} {/* Simplified for example */}
                </button>
            </nav>
            <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl z-50 p-6 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close Button (Optional, if you want one inside the menu) */}
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-600">X</button>

                {/* Vertical Links */}
                <nav className="mt-16 flex flex-col gap-8 text-xl font-body">
                    {NAV_LINKS.map((link) => (
                        <NavItem
                            key={link.id}
                            link={link}
                            activeId={activeId}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
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

