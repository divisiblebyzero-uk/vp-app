export default function ArtGridHeader() {
    return (
        <div className="mb-16 mx-16 px-12 ">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                    <span
                        className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-4 block">Summer
                        Series 2024</span>
                    <h2 className="font-headline text-display-lg md:text-6xl tracking-tighter leading-tight mb-6">Current
                        Collection</h2>
                    <p className="text-body-lg text-on-surface-variant max-w-md leading-relaxed">
                        A curated selection of contemporary works exploring the intersection of light, architecture, and
                        digital silence.
                    </p>
                </div>
            </div>
        </div>
    );
}