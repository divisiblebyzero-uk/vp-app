import Image from "next/image";
import flyer from "../../public/flyer2025.jpg";
import lv1 from "../../public/LV1_drama.jpg";
import gloria from "../../public/Gloria-Holden-City-Ghosts.jpg";
import dickens from "../../public/Neil-Mattingly-The-Mystery-of-Edwin-Drood-Cover.jpg";

export default function PastEvents() {
    return (
        <section id="Past" className="py-32 px-12 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5">
                    <h2 className="font-headline text-5xl mb-8 leading-tight">Past Events</h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p><b>Print Exhibtions:</b></p>
                        <p>In 2025 our summer exhibition was held at the St Andrews Art Centre on the Thames at
                            Gravesend.</p>
                        <p>In 2022 we held 'Art on the Rails', exhibiting our work in front of the LV1 lightship, moored
                            next to the Arts Centre.</p>
                    </div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="Ghosts in a dark street"
                        src={flyer} />
                    <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="Book cover"
                        src={lv1} />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-16">
                <div className="lg:col-span-5">
                    <h2 className="font-headline text-5xl mb-8 leading-tight"></h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p><b>Dickens 150:</b></p>
                        <p>We were well represented at the 2020 Rochester Art Gallery 'Dickens 150 Open Call'
                            competition and we came away with two winning entries.</p>
                        <p>'City Ghosts' by Gloria Holden (etching with aquatint) won the Dickens and the Victorian Way
                            of Death category, and
                            Neil Mattingly was winner of the Cover Design category with 'The Mystery of Edwin Drood'
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