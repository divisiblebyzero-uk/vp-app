import Image from "next/image";
import Header from "./ui/header";
import Hero from "./ui/hero";
import ArtGrid from "./ui/art-grid/art-grid";
import UpcomingEvents from "./ui/upcoming-events";
import PastEvents from "./ui/past-events";
import Contact from "./ui/contact";
import InMemoriam from "./ui/in-memoriam";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <ArtGrid/>
      <UpcomingEvents/>
      <PastEvents/>
      <InMemoriam/>
      <Contact/>
     </div>
  );
}
