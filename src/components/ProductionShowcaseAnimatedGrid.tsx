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
    <div className="mt-10 grid grid-cols-1 gap-6 overflow-visible pl-2.5 sm:pl-3 md:mt-12 md:grid-cols-2 md:gap-6 lg:gap-8">
      {showcases.map((showcase, i) => (
        <motion.div
          key={showcase.id}
          {...slideUp}
          transition={{
            duration: 0.55,
            delay: 0.06 + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full"
        >
          <ProductionShowcaseCard showcase={showcase} />
        </motion.div>
      ))}
    </div>
  );
}
