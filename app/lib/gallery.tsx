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
{ id: 1, filename: "/After-You----LKx-.jpg", alt: "After You by Elizabeth A Kelleher", title: "After You", lines: ["Lino cut (edition of 30)", "Unframed 15cm x 20cm £30", "Framed price available upon request"], artist: "Elizabeth A Kelleher",  width: 584,  height: 768 },
{ id: 2, filename: "/Amsterdam---CCx.jpg", alt: "Amsterdam by Christine Copps", title: "Amsterdam", lines: ["Etching and Aquatint (edition of 10)", "Unframed 15cm x 20cm £30", ""], artist: "Christine Copps",  width: 1366,  height: 1116 },
{ id: 3, filename: "/Away-from-it-all-on-the-Norfolk-Broads---KCx.jpg", alt: "Away from it all on the Norfolk Broads by Kevan Claydon", title: "Away from it all on the Norfolk Broads", lines: ["Engraving on plastic (edition of 10)", "Not for sale", ""], artist: "Kevan Claydon",  width: 897,  height: 768 },
{ id: 4, filename: "/Dream-of-the-Thames-shoreline---Esx.jpg", alt: "Banks of the Thames. A Dreamscape by Eliza Straupmane", title: "Banks of the Thames. A Dreamscape", lines: ["Drypoint. First print", "Framed  40cm x 40cm  £55", ""], artist: "Eliza Straupmane",  width: 768,  height: 768 },
{ id: 5, filename: "/Beamish-Tram114-2.jpg", alt: "Beamish Museum Tram 114 by Kevan Claydon", title: "Beamish Museum Tram 114", lines: ["Drypoint hand tinted (edition of 5)", "Not for sale", ""], artist: "Kevan Claydon",  width: 1057,  height: 1366 },
{ id: 6, filename: "/Beetle-Awx.jpg", alt: "Beetle by Adrian Whiteing", title: "Beetle", lines: ["Drypoint", "Unframed 26cm x 31cm £35", ""], artist: "Adrian Whiteing",  width: 766,  height: 768 },
{ id: 7, filename: "/Belgium-Beers--CCx.jpg", alt: "Belgium Beers by Christine Copps", title: "Belgium Beers", lines: ["Etching and Aquatint (edition of 7)", "Unframed 25cm x 20cm £20", ""], artist: "Christine Copps",  width: 922,  height: 768 },
{ id: 8, filename: "/Biker-Vicar---MSx.jpg", alt: "Biker Vicar by Martin Sutherland", title: "Biker Vicar", lines: ["Drypoint Etching", "Framed 31cm x 39cm £40", ""], artist: "Martin Sutherland",  width: 637,  height: 768 },
{ id: 9, filename: "/Birds-in-flight---Esx.jpg", alt: "Birds in Flight by Eliza Straupmane", title: "Birds in Flight", lines: ["Linocut 1 of 1", "Framed 35cm  x 30cm £30", ""], artist: "Eliza Straupmane",  width: 768,  height: 768 },
{ id: 10, filename: "/5edcfe568ee4fecc0f948f87_Blackthornsx.jpg", alt: "Blackthorns by Richard Mott", title: "Blackthorns", lines: ["3 colour linocut (edition of 15)", "Framed 25cm x 30cm £45", "Unframed 15cm x 20cm £35"], artist: "Richard Mott",  width: 537,  height: 768 },
{ id: 11, filename: "/Brussels---CCx.jpg", alt: "Brussels by Christine Copps", title: "Brussels", lines: ["Etching and Aquatint (edition of 7)", "Unframed 15cm x 20cm £30", ""], artist: "Christine Copps",  width: 603,  height: 768 },
{ id: 12, filename: "/Bulls-Eye---MSx.jpg", alt: "Bulls Eye by Martin Sutherland", title: "Bulls Eye", lines: ["Linocut (on newsprint)", "Framed 31cm x  39cm £35.00", "Unframed 29cm x 37cm £25.00"], artist: "Martin Sutherland",  width: 617,  height: 768 },
{ id: 14, filename: "/Cornish-Skies--LKx.jpg", alt: "Cornish Skies by Elizabeth A Kelleher", title: "Cornish Skies", lines: ["Etching with aquatint (edition of 15)", "Unframed 20cm x 25 cm £40", "Framed price available upon request"], artist: "Elizabeth A Kelleher",  width: 974,  height: 768 },
{ id: 15, filename: "/Crooked-House---PGx.jpg", alt: "Crooked House by ‍Pam Goodwin", title: "Crooked House", lines: ["2  colour linocut (edition of 6)", "Unframed 15cm x 17.5cm £10", ""], artist: "‍Pam Goodwin",  width: 401,  height: 768 },
{ id: 18, filename: "/Down-River-SLx.jpg", alt: "Down River by Sue Long", title: "Down River", lines: ["Etching a/p", "Unframed 20cm x 15cm £30", ""], artist: "Sue Long",  width: 1366,  height: 1018 },
{ id: 19, filename: "/5edcfe566e95f5b219be85e0_Dream21-RM.jpg", alt: "Dream 21 by Richard Mott", title: "Dream 21", lines: ["2 colour reduction linocut (edition of 14)", "Framed 31cm x 39cm £50", "Unframed 15cm x 21cm £40"], artist: "Richard Mott",  width: 599,  height: 768 },
{ id: 22, filename: "/First-delivery--Esx.jpg", alt: "First Delivery by Eliza Straupmane", title: "First Delivery", lines: ["Drypoint etching 1 of 1", "Framed  30cm x 28cm £40", ""], artist: "Eliza Straupmane",  width: 614,  height: 768 },
{ id: 23, filename: "/Fishing-Boats---PGx.jpg", alt: "Fishing Boats by Pam Goodwin", title: "Fishing Boats", lines: ["2  colour linocut (edition of 10)", "Unframed 20cm x 15cm £15.00", ""], artist: "Pam Goodwin",  width: 1366,  height: 1025 },
{ id: 24, filename: "/Ghent---CCx.jpg", alt: "Ghent by Christine Copps", title: "Ghent", lines: ["Etching and Aquatint (edition of 7)", "Unframed 15cm x 20cm £30", ""], artist: "Christine Copps",  width: 594,  height: 768 },
{ id: 25, filename: "/Golden-Birds---Esx.jpg", alt: "Gold Birds by Eliza Straupmane", title: "Gold Birds", lines: ["Linocut 1 of 1", "Framed 30cm x 24cm £30", ""], artist: "Eliza Straupmane",  width: 768,  height: 768 },
{ id: 26, filename: "/Gravesend-Clocktower---RMx.jpg", alt: "Gravesend Clocktower by Richard Mott", title: "Gravesend Clocktower", lines: ["2 colourlinocut (edition of 8)", "Framed 31cm x 39cm £35", "Unframed 15cm x 20cm £25"], artist: "Richard Mott",  width: 604,  height: 768 },
{ id: 27, filename: "/Great-Britain---RMx.jpg", alt: "Great Eastern by Richard Mott", title: "Great Eastern", lines: ["2 colour reduction linocut (edition of 10)", "Framed 31cm x 39cm £40", "Unframed 24cm x 32cm £30"], artist: "Richard Mott",  width: 584,  height: 768 },
{ id: 28, filename: "/5eda49cc800a231539641b36_Harvest-Time-LKx.jpg", alt: "Harvest Time by Elizabeth A Kelleher", title: "Harvest Time", lines: ["Drypoint etching  (edition of 10)", "Each print 10cmx40cm / Unframed set of three: £90 ", "Framed price available upon request / Can be sold individually"], artist: "Elizabeth A Kelleher",  width: 735,  height: 768 },
{ id: 29, filename: "/Herdwick-Sheep-Awx.jpg", alt: "Herdwick Sheep by Adrian Whiteing", title: "Herdwick Sheep", lines: ["Drypoint", "Unframed 30.5cm x 25.5cm £35", ""], artist: "Adrian Whiteing",  width: 995,  height: 768 },
{ id: 30, filename: "/Ightham-Mote---CCx.jpg", alt: "Ightham Mote by Christine Copps", title: "Ightham Mote", lines: ["Etching and aquatint", "Unframed 15cm x 20cm £30", ""], artist: "Christine Copps",  width: 620,  height: 768 },
{ id: 33, filename: "/Jelly-Fish---CCx.jpg", alt: "Jellyfish by Christine Copps", title: "Jellyfish", lines: ["Etching and Aquatint (edition of 10)", "Unframed 15cm x 20cm £30", ""], artist: "Christine Copps",  width: 1366,  height: 1105 },
{ id: 34, filename: "/5eda49cb2cbafcb69c97baff_Keeping-Safe--LKx-.jpg", alt: "Keeping Safe by Elizabeth A Kelleher", title: "Keeping Safe", lines: ["Drypoint etching  (edition of 15)", "Unframed 10cm x 15 cm £40", "Framed price available upon request"], artist: "Elizabeth A Kelleher",  width: 677,  height: 768 },
{ id: 35, filename: "/Koi-Awx.jpg", alt: "Koi by Adrian Whiteing", title: "Koi", lines: ["4 colour linocut", "Unframed 28cm x 36cm £40", ""], artist: "Adrian Whiteing",  width: 425,  height: 768 },
{ id: 36, filename: "/Last-Watch-Herene-Bay---GHx.jpg", alt: "Last Watch, Herne Bay by Gloria Holden", title: "Last Watch, Herne Bay", lines: ["Etching with aquatint (3/20)", "26cm x 26cm Framed £75 / Unframed £55", ""], artist: "Gloria Holden",  width: 746,  height: 768 },
{ id: 37, filename: "/Launching-SLx.jpg", alt: "Launching by Sue Long", title: "Launching", lines: ["Etching a/p", "Unframed 18cm x 13cm £30", ""], artist: "Sue Long",  width: 1366,  height: 979 },
{ id: 38, filename: "/Lighthouse-Awx.jpg", alt: "Lighthouse by Adrian Whiteing", title: "Lighthouse", lines: ["Drypoint", "Unframed 28cm x 36cm £50", ""], artist: "Adrian Whiteing",  width: 352,  height: 768 },
{ id: 41, filename: "/LV21-at-Gravesend---KCx.jpg", alt: "LV21 at Gravesend by Kevan Claydon", title: "LV21 at Gravesend", lines: ["Drypoint hand tinted (edition of 6)", "Not for sale", ""], artist: "Kevan Claydon",  width: 981,  height: 768 },
{ id: 43, filename: "/Magpie---RMx.jpg", alt: "Magpie by Richard Mott", title: "Magpie", lines: ["2 colour linocut (edition of 6)", "Framed 31cm x 39cm £40", "Unframed 15cm x 20cm £30"], artist: "Richard Mott",  width: 591,  height: 768 },
{ id: 44, filename: "/mannequin---MSx.jpg", alt: "Mannequin by Martin Sutherland", title: "Mannequin", lines: ["Aquatint Etching", "Framed 43cm x 53cm £45", ""], artist: "Martin Sutherland",  width: 629,  height: 768 },
{ id: 46, filename: "/Moonlight-Poppy---GHx.jpg", alt: "Moonlight Poppy by Gloria Holden", title: "Moonlight Poppy", lines: ["Etching with aquatint (1/20)", "40m x 40cm Framed £70 /Unframed £50", ""], artist: "Gloria Holden",  width: 761,  height: 768 },
{ id: 48, filename: "/Octopus---CCx.jpg", alt: "Octopus by Christine Copps", title: "Octopus", lines: ["Etching and Aquatint (edition of 10)", "Unframed 15cm x 20cm £30", ""], artist: "Christine Copps",  width: 1366,  height: 1080 },
{ id: 49, filename: "/Over-the-Fields-SLx.jpg", alt: "Over the Fields by Sue Long", title: "Over the Fields", lines: ["Linocut a/p", "Unframed 20cm x 27cm £30", ""], artist: "Sue Long",  width: 560,  height: 768 },
{ id: 50, filename: "/paris-tree-in-blue--JRx.jpg", alt: "Paris Tree in Blue by Jennifer Rampling", title: "Paris Tree in Blue", lines: ["Etching (edition 25)", "Unframed 10cm x 15cm £25", ""], artist: "Jennifer Rampling",  width: 523,  height: 768 },
{ id: 54, filename: "/Red-Birds--Estx.jpg", alt: "Red Birds by Eliza Straupmane", title: "Red Birds", lines: ["Linocut 1 of 1", "Framed  30cm x 24cm £30", ""], artist: "Eliza Straupmane",  width: 768,  height: 768 },
{ id: 55, filename: "/Save-Our-Reef-SLx.jpg", alt: "Save Our Reef by Sue Long", title: "Save Our Reef", lines: ["Collagraph  (edition of 10)", "Unframed 19cm x 16cm £30", ""], artist: "Sue Long",  width: 825,  height: 768 },
{ id: 56, filename: "/Scattered-Seeds---GHx.jpg", alt: "Scattered Seeds - Autumn by Gloria Holden", title: "Scattered Seeds - Autumn", lines: ["Collagraph with gold leaf (1/1)", "40cm x 40cm Framed £95 / Unframed £70", ""], artist: "Gloria Holden",  width: 747,  height: 768 },
{ id: 57, filename: "/Seedheads-SLx.jpg", alt: "Seed Heads by Sue Long", title: "Seed Heads", lines: ["Linocut a/p", "Unframed 30cm x 15cm £30", ""], artist: "Sue Long",  width: 1366,  height: 1008 },
{ id: 58, filename: "/Seven-Sisters-SLx.jpg", alt: "Seven Sisters by Sue Long", title: "Seven Sisters", lines: ["Linocut a/p", "Unframed 20cm x 15cm £30", ""], artist: "Sue Long",  width: 1366,  height: 1018 },
{ id: 59, filename: "/5eda49cbe219c87d5c00d0c2_Shell-Prints-LKx-.jpg", alt: "Shell Prints by Elizabeth A Kelleher", title: "Shell Prints", lines: ["Drypoint etching  (edition of 15)", "Unframed 15cm x 20cm £40", "Framed price available upon request"], artist: "Elizabeth A Kelleher",  width: 558,  height: 768 },
{ id: 60, filename: "/Dream-of-the-universe---Esx.jpg", alt: "Space (Black Velvet) by Eliza Straupmane", title: "Space (Black Velvet)", lines: ["Aquatint 1 of 5", "Framed 30cm x 24cm £35", ""], artist: "Eliza Straupmane",  width: 768,  height: 768 },
{ id: 61, filename: "/Kevan-Spitfire-2.jpg", alt: "Spitfires at Headcorn by Kevan Claydon", title: "Spitfires at Headcorn", lines: ["Wood Engraving (edition of 7)", "Not for sale", "Unframed 41cm x 30cm Not for sale"], artist: "Kevan Claydon",  width: 1366,  height: 1052 },
{ id: 62, filename: "/Succulence---LKx.jpg", alt: "Succulence by Elizabeth A Kelleher", title: "Succulence", lines: ["Drypoint etching, hand coloured (edition of 20)", "Unframed 17cm x 19cm £40", "Framed price available upon request."], artist: "Elizabeth A Kelleher",  width: 684,  height: 768 },
{ id: 63, filename: "/Sun-Pier-Swans--RMx2.jpg", alt: "Sun Pier Swans by Richard Mott", title: "Sun Pier Swans", lines: ["3 colour linocut (edition of 8)", "Framed 33cm x 53cm £80", "Unframed 20cm x 40cm £70"], artist: "Richard Mott",  width: 408,  height: 768 },
{ id: 64, filename: "/Swallows--AW.jpg", alt: "Swallows by Adrian Whiteing", title: "Swallows", lines: ["Linocut", "Unframed 38cm x 30cm £55", ""], artist: "Adrian Whiteing",  width: 771,  height: 768 },
{ id: 66, filename: "/The-Boathouse-at-Broadstairs---PGx.jpg", alt: "The Boathouse at Broadstairs by Pam Goodwin", title: "The Boathouse at Broadstairs", lines: ["3  colour linocut (edition of 10)", "Unframed 20cm x 15cm £15.00", ""], artist: "Pam Goodwin",  width: 576,  height: 768 },
{ id: 67, filename: "/open-door--JRx.jpg", alt: "The Open Door by Jennifer Rampling", title: "The Open Door", lines: ["Hand–coloured etching (variable edition 25)", "Unframed 10cm x 15cm £35", ""], artist: "Jennifer Rampling",  width: 517,  height: 768 },
{ id: 69, filename: "/The-Pear-Tree---Esx.jpg", alt: "The Pear Tree by Eliza Straupmane", title: "The Pear Tree", lines: ["Drypoint Etching 1 of 5", "Not for Sale", ""], artist: "Eliza Straupmane",  width: 919,  height: 768 },
{ id: 70, filename: "/southern-tree--JRx.jpg", alt: "The Southern Tree by Jennifer Rampling", title: "The Southern Tree", lines: ["Etching with gold detail (edition 25)", "Unframed 10cm x 15cm £30", ""], artist: "Jennifer Rampling",  width: 517,  height: 768 },
{ id: 71, filename: "/The-Sun-has-got-his-hat-on-Esx.jpg", alt: "The Sun has got his hat on… by Eliza Straupmane", title: "The Sun has got his hat on…", lines: ["Drypoint Etching 1 of 3", "Framed 31.5cm x 24cm £30", ""], artist: "Eliza Straupmane",  width: 1000,  height: 1280 },
{ id: 72, filename: "/tall-tree-in-blue--JRx.jpg", alt: "The Tall Tree in Blue by Jennifer Rampling", title: "The Tall Tree in Blue", lines: ["Etching with drypoint (edition 25)", "Not for sale", ""], artist: "Jennifer Rampling",  width: 576,  height: 768 },
{ id: 74, filename: "/Tides-Out-SLx.jpg", alt: "Tides Out by Sue Long", title: "Tides Out", lines: ["Etching a/p", "Unframed 24.5cm x 20cm £30", ""], artist: "Sue Long",  width: 922,  height: 768 },
{ id: 75, filename: "/Trottiscliffe-Church---RMx.jpg", alt: "Trottiscliffe Church by Richard Mott", title: "Trottiscliffe Church", lines: ["Linocut (edition of 6)", "Framed 25cm x 30cm £35", "Unframed 15cm x 20cm £25"], artist: "Richard Mott",  width: 601,  height: 768 },
{ id: 76, filename: "/Twilight-Woods---GHx.jpg", alt: "Twilight Woods by Gloria Holden", title: "Twilight Woods", lines: ["Etching with aquatint (1/20)", "28cm x 38cm Framed £80 / Unframed £60", ""], artist: "Gloria Holden",  width: 493,  height: 768 },
{ id: 77, filename: "/5eda49cc75910456a1d4cd7c_Unfurling-Fern-LKx-.jpg", alt: "Unfurling Ferns by Elizabeth A Kelleher", title: "Unfurling Ferns", lines: ["Drypoint etching (edition of 20)", "Unframed 10cm x 14cm £40", "Framed price available upon request"], artist: "Elizabeth A Kelleher",  width: 622,  height: 768 },
{ id: 79, filename: "/Westmister-Bridge---RMx.jpg", alt: "Westminster Bridge by Richard Mott", title: "Westminster Bridge", lines: ["2 colour linocut (edition of 10)", "Framed 31cm x 39cm £40", "Unframed 15cm x 20cm £30"], artist: "Richard Mott",  width: 585,  height: 768 },
{ id: 80, filename: "/Windy-Day-SLx.jpg", alt: "Windy Day by Sue Long", title: "Windy Day", lines: ["Etching a/p", "Unframed 18cm x 12.5cm £30", ""], artist: "Sue Long",  width: 1366,  height: 948 },
{ id: 81, filename: "/Winter-Fields---PGx.jpg", alt: "Winter Fields by Pam Goodwin", title: "Winter Fields", lines: ["2  colour linocut (edition of 8)", "Unframed 22cm x 14cm £15.00", ""], artist: "Pam Goodwin",  width: 472,  height: 768 },

    ]


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
        {
            id: 4,
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
            id: 5,
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
            id: 6,
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
            id: 7,
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
