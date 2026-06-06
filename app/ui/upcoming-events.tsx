import Image from "next/image";
import vp_icon from "../../public/Munns 26 Poster A4 3rd.png";
import munns from "../../public/Munns.jpg";
import Link from "next/link";

 export default function UpcomingEvents() {

    

    return (
        <section id="Upcoming" className="py-32 px-12 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5">
                    <h2 className="font-headline text-5xl mb-8 leading-tight">Recent Event</h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p><b>
                            <Link href="https://graveshamfringe.org/" className="transition-colors duration-300 hover:text-blue-900 text-blue-700/60">
                                Gravesham Fringe Festival
                            </Link>
                        </b></p>
                        <p> We put together an exhibit for the Gravesham Fringe. We were back at Munns , where we also exhibited in 2023.</p>
                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4 text-on-surface">
                                <span className="font-body">
                                    Dates: 30th May to 7th June, 2026</span>
                            </div>
                            <div className="flex items-center gap-4 text-on-surface">
                                <span className="font-body">
                                    Location: Munns of Gravesend, DA12 1AE.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="icon with roller"
                        src={vp_icon} />
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="red ship"
                        src={munns} />
                </div>
            </div>
        </section>
    );
}