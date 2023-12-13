import { About } from "@/components/About";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { Preferences } from "@/components/Preferences";
import { Samples } from "@/components/Samples";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Samples />
      <About />
      <Preferences />
      <Menu />
      <Feedback />
      <Gallery />
      <Footer />
    </main>
  )
}
