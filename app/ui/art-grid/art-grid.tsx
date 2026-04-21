import ArtGridHeader from "./art-grid-header";
import ArtGridTile from "./art-grid-tile";
import { GalleryImageProperties, getImages } from "@/app/lib/gallery";



export default function ArtGrid() {
    const images: GalleryImageProperties[] = getImages();

    return (
        <section id="Gallery">
            <ArtGridHeader/>
            <div className="art-grid mx-16 px-12 " id="gallery-grid">
                {images.map((image: GalleryImageProperties) => {
                    return (
                        <ArtGridTile key={image.id} image={image}/>
                    )
                })}
            </div>
        </section>
        
    );
}