import Image from "next/image"
import NavbarDemo from "./components/props/resizable-navbar-demo";
import TypewriterEffectSmoothDemo from "./components/props/typewriter-effect-demo";
import LayananKami from "./components/props/layananKami";
import KategoriSection from "./components/props/kategorisection";
import {SejarahSection } from "./components/props/sejarah";
import {KontakSection } from "./components/props/kontak";
import { Footer } from "./components/props/footer";
import {TimelineDemo} from "./components/props/timeline-demo";
import {LayoutGridDemo} from "./components/props/layout-grid-demo";
import {AnimatedTestimonialsDemo} from "./components/props/animated-testimonials-demo";
export default function Home() {
  return (
    <>
      <NavbarDemo />
      <TypewriterEffectSmoothDemo />
      <LayananKami/>
      <KategoriSection />
      <LayoutGridDemo />
      <TimelineDemo />
      <AnimatedTestimonialsDemo/>
      <SejarahSection />
      <KontakSection />
      <Footer />
    </>
  )
}

