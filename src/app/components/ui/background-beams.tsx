"use client";

import * as React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const paths = [
    "M-384 1280L240 0",
    "M-192 1280L384 0",
    "M0 1280L576 0",
    "M192 1280L720 0",
    "M384 1280L864 0",
    "M576 1280L1008 0",
    "M768 1280L1152 0",
    "M960 1280L1296 0",
    "M1152 1280L1440 0",
    "M1344 1280L1584 0",
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {paths.map((path, index) => (
          <motion.path
            key={`beam-${index}`}
            d={path}
            stroke="#ffffff"
            strokeOpacity="0.04"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.05,
            }}
          />
        ))}
      </g>
    </svg>
  );
};
