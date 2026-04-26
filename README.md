## Victoria Printmaker Website


To the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding new images to the gallery

Two things need to be done:

1. Add the actual image to the ```public/``` folder
2. Reference the image in ```app/lib/gallery.tsx```

The structure of the reference is as follows:

```
    id: unique number,
    filename: as referenced by the website (so prefix with /, do not include the public folder)
    alt: alt text (typically '<title> by <artist>')
    title: the display title
    lines: Up to three strings of text to appear under the title, eg:
        line1: Technical Description (eg Drypoint etching)
        line2: Dimension, print run and price
        line3: Optional framed dimension
    artist: the artist
    width: width of the file in pixels
    height: height of the file in pixels
```

The width / height can be determined by inspecting the file prior to writing the reference in the gallery file.
