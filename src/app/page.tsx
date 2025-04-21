import Image from "next/image"
import Navbar from "./resizable-navbar-demo"
import TypewriterEffect from "./typewriter-effect-demo-1"
import  BackgroundBeams from "./background-beams-demo"
import  HoverEffect  from "./card-hover-effect-demo"
import BentoGridItem  from "./bento-grid-demo"
import { InfiniteMovingCardsDemo } from "./infinite-moving-cards-demo"
import FocusCardsDemo from "./focus-cards-demo"
import { BackgroundGradientDemo } from "./background-gradient-demo"

export default function Home() {
  return (
    <>
      <BackgroundBeams />
      <Navbar />
      <TypewriterEffect />
      <HoverEffect/>
      <BentoGridItem/>
      <BackgroundGradientDemo/>
      <FocusCardsDemo/>
      <InfiniteMovingCardsDemo/>
    </>
  )
}

