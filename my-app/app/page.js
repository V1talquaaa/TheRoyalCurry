import { About } from "@/components/About";
import { Feedback } from "@/components/Feedback";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Preferences } from "@/components/Preferences";
import { Samples } from "@/components/Samples";

export default function Home() {
  return (
    <>
      <Hero />
      <Samples />
      <About />
      <Preferences />
      <Menu />
      <Feedback />
      <Gallery />
    </>
  )
}
