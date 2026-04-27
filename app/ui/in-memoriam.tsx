import Image from "next/image";
import windmill from "../../public/Meopham-Windmill-Cex.jpg";
import train from "../../public/Beamish-Tram114-2.jpg";

 export default function InMemoriam() {

    

    return (
        <section id="InMemoriam" className="py-32 px-12 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-12">
                    <h2 className="font-headline text-5xl mb-8 leading-tight">In Memoriam</h2>
                    <div className="space-y-6 font-body text-lg text-on-surface-variant leading-relaxed">
                        <p>Honouring members who passed away recently. We want to acknowledge and thank them for having been part of our community.</p>
                    </div>
                </div>
                <div className="lg:col-span-6">
                        <p><b>Christine Elander</b></p>
                        <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="icon with roller" src={windmill} />
                </div>
                <div className="lg:col-span-6">
                        <p><b>Pauline Cunningham</b></p>
                        <Image className="w-full aspect-[4/5] object-cover rounded-none" alt="icon with roller" src={train} />
                </div>
            </div>
        </section>
    );
}
