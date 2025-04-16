"use client"

import type React from "react"
import { cn } from "@/app/components/utils/lib"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
  }[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10", className)}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className={cn(
              "relative group block h-full w-full cursor-default",
              idx === 0 && "pr-10", // kiri
              idx === 1 && "px-10 border-l border-zinc-700 h-50", // tengah, garis lebih pendek
              idx === 2 && "pl-10 border-l border-zinc-700 h-50" // kanan, garis lebih pendek
            )}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.5,
                    transition: { duration: 0.2 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div className={cn("rounded-2xl h-full w-full p-4 overflow-hidden", className)}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        "text-center text-zinc-100 group-hover:text-orange-500 font-bold tracking-wide mt-4 transition-colors duration-300",
        className
      )}
    >
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 group-hover:text-orange-500 tracking-wide leading-relaxed text-sm transition-colors duration-300 text-justify",
        className
      )}
    >
      {children}
    </p>
  )
}
