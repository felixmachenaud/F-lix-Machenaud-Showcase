"use client";

import { motion } from "framer-motion";
import { ProductionShowcaseCard } from "@/components/ProductionShowcaseCard";
import type { ProductionShowcase } from "@/lib/productions";

type Props = {
  showcases: ProductionShowcase[];
};

const slideUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
};

export function ProductionShowcaseAnimatedGrid({ showcases }: Props) {
  return (
    <div className="mx-auto mt-10 w-full max-w-5xl overflow-visible pl-2.5 sm:pl-3 md:mt-12">
      {showcases.map((showcase, i) => (
        <motion.div
          key={showcase.id}
          {...slideUp}
          transition={{
            duration: 0.55,
            delay: 0.06 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full"
        >
          <ProductionShowcaseCard showcase={showcase} />
        </motion.div>
      ))}
    </div>
  );
}
