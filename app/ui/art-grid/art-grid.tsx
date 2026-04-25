import ArtGridHeader from "./art-grid-header";
import ArtGridTile from "./art-grid-tile";
import { GalleryImageProperties, getImages } from "@/app/lib/gallery";



export default function ArtGrid() {
    const images: GalleryImageProperties[] = getImages();

    return (
        <section id="Gallery" className="py-12">
            <ArtGridHeader/>
            <div className="art-grid px-12 " id="gallery-grid">
                {images.map((image: GalleryImageProperties) => {
                    return (
                        <ArtGridTile key={image.id} image={image}/>
                    )
                })}
            </div>
        </section>
        
    );
}