import Image from 'next/image';

export default function Hero() {
    return (        
        <section id="About" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image className="w-full h-full object-cover opacity-90 brightness-[0.85]"
                    alt="Close-up of a vintage heavy iron printing press"
                    src="/vintage-press.png" 
                    width={500}
                    height={500}
                    />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-screen-2xl mx-auto px-12 w-full">
                <div className="max-w-2xl">
                    <span className="font-label text-sm uppercase tracking-[0.3em] text-primary mb-6 block">Est. 2015</span>
                    <h1 className="font-headline text-7xl md:text-8xl leading-tight text-on-surface mb-8"><i>The Art of the
                            Printmaker</i></h1>
                    <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
                        The Victoria Printmakers are a group of Kent based artists who meet regularly to explore
                        printmaking techniques, exchange ideas and enjoy mutual support.
                        Our work uses a wide range of printmaking techniques from traditional etchings, drypoint,
                        linocuts, collagraphs and more.
                    </p>
                    <div className="flex gap-6">

                    </div>
                </div>
            </div>
        </section>
    );
}