"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ProductionShowcaseCard } from "@/components/ProductionShowcaseCard";
import type { ProductionShowcase } from "@/lib/productions";

type Props = {
  showcases: ProductionShowcase[];
  /** Inserté après la première carte (bandeau outils, etc.) */
  afterFirst?: ReactNode;
};

const slideUp = {
  initial: { opacity: 0, y: 48 },
  animate: { opacity: 1, y: 0 },
};

function ShowcaseList({
  items,
  delayOffset = 0,
}: {
  items: ProductionShowcase[];
  delayOffset?: number;
}) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 overflow-visible pl-2.5 sm:gap-14 sm:pl-3">
      {items.map((showcase, i) => (
        <motion.div
          key={showcase.id}
          {...slideUp}
          transition={{
            duration: 0.55,
            delay: 0.06 + (delayOffset + i) * 0.12,
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

export function ProductionShowcaseAnimatedGrid({
  showcases,
  afterFirst,
}: Props) {
  if (showcases.length === 0) {
    return (
      <p
        role="status"
        className="mx-auto mt-10 max-w-lg text-center text-sm text-gray-600 sm:mt-12 sm:text-base"
      >
        Aucun projet dans cette catégorie pour le moment.
      </p>
    );
  }

  const [first, ...rest] = showcases;

  return (
    <div className="mx-auto mt-10 w-full md:mt-12">
      <ShowcaseList items={[first]} />
      {afterFirst}
      {rest.length > 0 ? <ShowcaseList items={rest} delayOffset={1} /> : null}
    </div>
  );
}
