export default function Contact() {
    return (
        <footer id="Contact"
            className="w-full mt-24 bg-slate-50 dark:bg-slate-950 font-sans text-sm tracking-wide text-blue-900 dark:text-blue-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-12 py-16 max-w-screen-2xl mx-auto">

                <div className="space-y-6">
                    <div className="font-serif text-xl text-blue-900 dark:text-blue-50">Victoria Printmakers</div>
                    <p className="text-blue-800/70 dark:text-blue-400/60 leading-relaxed max-w-xs">
                        Dedicated to supporting Kentish printmakers. VictoriaPrintmakers@gmail.com.
                    </p>
                    <p className="font-label text-xs opacity-50 uppercase tracking-widest">© 2026 Victoria Printmakers</p>
                </div>
                <div className="grid grid-cols-2 gap-8">

                    <div className="space-y-4">
                        <h5 className="font-bold text-blue-900 dark:text-blue-200">Connect</h5>
                        <ul className="space-y-2">
                            <li><a className="text-blue-800/70 dark:text-blue-400/70 hover:text-blue-900 dark:hover:text-blue-100 transition-opacity"
                                    href="https://www.instagram.com/victoriaprintmakers/">Instagram</a></li>
                            <li><a className="text-blue-800/70 dark:text-blue-400/70 hover:text-blue-900 dark:hover:text-blue-100 transition-opacity"
                                    href="https://www.facebook.com/graveshamprintmakers">Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}