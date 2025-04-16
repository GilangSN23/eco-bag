import { HoverEffect } from "@/app/components/ui/card-hover-effect"

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects.slice(0, 3)} />
    </div>
  )
}

export const projects = [
  {
    title: "Stripe",
    description: "A technology company that builds economic infrastructure for the internet.",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "Google",
    description: "A multinational technology company that specializes in Internet-related services and products.",
  },
]
