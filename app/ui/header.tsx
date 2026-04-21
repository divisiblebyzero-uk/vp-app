import Link from "next/link";

export default function Header() {

  return (
        <header
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
        <nav className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
            <div className="font-serif italic text-2xl text-blue-900 dark:text-blue-50">Victoria Printmakers</div>
            <div className="hidden md:flex items-center space-x-10 font-serif text-lg tracking-tight">
                <Link className="text-blue-900 dark:text-blue-100 border-b-2 border-blue-900 dark:border-blue-300 pb-1 transition-colors duration-300"
                    href="#About">About</Link>
                <Link className="text-blue-900 dark:text-blue-100 border-b-2 border-blue-900 dark:border-blue-300 pb-1 transition-colors duration-300"
                    href="#Gallery">Gallery</Link>
                <Link className="text-blue-700/60 dark:text-blue-400/60 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-300"
                    href="#Upcoming">Upcoming Events</Link>
                <Link className="text-blue-700/60 dark:text-blue-400/60 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-300"
                    href="#Past">Past Events</Link>
                <Link className="text-blue-700/60 dark:text-blue-400/60 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-300"
                    href="#Contact">Contact</Link>
            </div>

        </nav>
    </header>

  );
}

