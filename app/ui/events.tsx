import Image from "next/image";
import flyer from "../../public/flyer2025.jpg";
import gloria from "../../public/Gloria-Holden-City-Ghosts.jpg";
import dickens from "../../public/Neil-Mattingly-The-Mystery-of-Edwin-Drood-Cover.jpg";
import vp_icon from "../../public/Munns 26 Poster A4 3rd.png";
import munns from "../../public/Munns.jpg";
import clubbs26 from "../../public/2026ClubbsYardFlyer.jpg";
import Link from "next/link";

export default function Events() {
    return (
        <section id="Events" className="py-32 px-12 max-w-screen-2xl mx-auto">

             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-16">
                <div className="lg:col-span-5">
                    <h2 className="font-headline text-5xl mb-8 leading-tight">Upcoming Event</h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p><b>
                            <Link href="https://www.opennorthfleet.co.uk/" className="transition-colors duration-300 hover:text-blue-900 text-blue-700/60">
                                Open Northfleet
                            </Link>
                        </b></p>
                        <p> A pop-up exhibition.</p>
                        <div className="space-y-4 mb-10">
                            <div className="flex items-center gap-4 text-on-surface">
                                <span className="font-body">
                                    Dates: 3rd October 2026</span>
                            </div>
                            <div className="flex items-center gap-4 text-on-surface">
                                <span className="font-body">
                                    Location: Clubbs Yard, Northfleet, DA11 8RH.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="Second 2026 event flyer"
                        src={clubbs26} />

                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-16">
                <div className="lg:col-span-5">
                    <h2 className="font-headline text-5xl mb-8 leading-tight">Past Events</h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p><b>Print Exhibtions:</b></p>
                        <p> In 2026 we had an exhibition for the Gravesham Fringe. We were back at Munns, where we also exhibited in 2023.</p>
                        <p>In 2025 our summer exhibition was held at the St Andrews Art Centre on the Thames at
                            Gravesend.</p>
                        <p>In 2022 we held &apos;Art on the Rails&apos;, exhibiting our work in front of the LV1 lightship, moored
                            next to the Arts Centre.</p>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="2025 events flyer"
                        src={flyer} />
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="First 2026 event flyer"
                        src={vp_icon} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-16">
                <div className="lg:col-span-5">
                    <h2 className="font-headline text-5xl mb-8 leading-tight"></h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p><b>Dickens 150:</b></p>
                        <p>We were well represented at the 2020 Rochester Art Gallery &apos;Dickens 150 Open Call&apos;
                            competition and we came away with two winning entries.</p>
                        <p>&apos;City Ghosts&apos; by Gloria Holden (etching with aquatint) won the Dickens and the Victorian Way
                            of Death category, and
                            Neil Mattingly was winner of the Cover Design category with &apos;The Mystery of Edwin Drood&apos;
                            (linocut). </p>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="Ghosts in a dark street"
                        src={gloria} />
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="Book cover"
                        src={dickens} />
                </div>
            </div>
        </section>
    );
}