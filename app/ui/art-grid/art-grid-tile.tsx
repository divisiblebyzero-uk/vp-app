import { GalleryImageProperties } from "@/app/lib/gallery";
import Image from "next/image";


export default function ArtGridTile({image}: {image: GalleryImageProperties}) {

    const ratio = image.width / image.height;
    const aspectClass = ratio > 1 ? "aspect-[4/3]" : "aspect-[3/4]";
    //const aspectClass = "aspect-[16/9]";

    return (
            <div className="art-item group" id="image-{image.id}">
                <div className={`bg-surface-container-low ${aspectClass} overflow-hidden mb-4`}>
                    <Image alt="{image.alt}"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src={image.filename}
                        width={image.width}
                        height={image.height} />
                </div>
                <div className="px-1">
                    <p className="font-label text-[10px] tracking-[0.1em] uppercase font-bold text-on-surface mb-1">{image.title}</p>
                    {image.lines.map((line, id) => {
                        return (
                            <p key={`line-${id}`} className="font-headline italic text-on-surface-variant text-sm mb-1">{line}</p>
                        )
                    })}
                    <p className="font-label text-[10px] tracking-[0.1em] uppercase font-bold text-outline">{image.artist}</p>
                </div>
            </div>
    );
}
