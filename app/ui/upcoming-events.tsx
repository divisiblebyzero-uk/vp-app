import Image from "next/image";
import vp_icon from "../../public/vp_icon.png";
import munns from "../../public/Munns.jpg";

 export default function UpcomingEvents() {

    

    return (
        <section id="Upcoming" className="py-32 px-12 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-5">
                    <h2 className="font-headline text-5xl mb-8 leading-tight">Upcoming Events</h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p><b>Gravesend Fringe Festival</b></p>
                        <p> We are putting together an exhibit for the upcoming Fringe. We exhibited in 2023 and will be
                            back at Munns again this year.</p>
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