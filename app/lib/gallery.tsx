export interface GalleryImageProperties {
    id: number;
    filename: string;
    alt: string;
    title: string;
    lines: string[];
    artist: string;
    width: number;
    height: number;
}

export function getImages(): GalleryImageProperties[] {

    return [
        {
            id: 0,
            filename: "/5edcfe566e95f5b219be85e0_Dream21-RM.jpg",
            alt: "Dream 21 by Richard Moss",
            title: "Dream 21",
            lines: [
                "2 colour reduction linocut (edition of 14)",
                "Framed 31cm x 39cm £50",
                "Unframed 15cm x 21cm £40"
            ],
            artist: "Richard Moss",
            width: 599,
            height: 768
        },
        {
            id: 1,
            filename: "/5edcfe568ee4fecc0f948f87_Blackthornsx.jpg",
            alt: "Blackthorns by Richard Moss",
            title: "Blackthorns",
            lines: [
                "3 colour linocut (edition of 15)",
                "Framed 25cm x 30cm £45",
                "Unframed 15cm x 20cm £35"
            ],
            artist: "Richard Moss",
            width: 537,
            height: 768
        },
        {
            id: 2,
            filename: "/Amsterdam---CCx.jpg",
            alt: "Amsterdam by Christine Copps",
            title: "Amsterdam",
            lines: [
                "Etching and Aquatint (edition of 10)",
                "Unframed 15cm x 20cm £30"
            ],
            artist: "Christine Copps",
            width: 1366,
            height: 1116
        },
        {
            id: 3,
            filename: "/Away-from-it-all-on-the-Norfolk-Broads---KCx.jpg",
            alt: "Away from it all on the Norfolk Broads by Kevan Claydon",
            title: "Away from it all on the Norfolk Broads",
            lines: [
                "Etching on plastic (edition of 10)",
                "Framed 35cm x 30cm Not for sale",
                "Unframed 30.5cm x 25.5cm Not for sale"
            ],
            artist: "Kevan Claydon",
            width: 897,
            height: 768
        },
    ];
}
