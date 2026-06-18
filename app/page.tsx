import Header from "./ui/header";
import Hero from "./ui/hero";
import ArtGrid from "./ui/art-grid/art-grid";
import Events from "./ui/events";
import Contact from "./ui/contact";
import InMemoriam from "./ui/in-memoriam";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <ArtGrid/>
      <Events/>
      <InMemoriam/>
      <Contact/>
     </div>
  );
}
