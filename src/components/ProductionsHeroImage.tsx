"use client";

import Image from "next/image";
import { useState } from "react";
import { PRODUCTIONS_HERO_SOURCES } from "@/lib/productions";

/**
 * Zone photo minimaliste — essaie plusieurs extensions pour « productions-hero ».
 */
export function ProductionsHeroImage() {
  const [index, setIndex] = useState(0);
  const exhausted = index >= PRODUCTIONS_HERO_SOURCES.length;
  const src = PRODUCTIONS_HERO_SOURCES[index] ?? PRODUCTIONS_HERO_SOURCES[0];

  if (exhausted) {
    return (
      <div className="flex min-h-[240px] w-full max-w-2xl items-center justify-center rounded-lg border border-dashed border-gray-200 bg-gray-50/80 px-6 py-16 text-center text-sm text-gray-500">
        <p>
          Ajoutez votre image dans{" "}
          <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">
            public/images/
          </code>{" "}
          sous le nom{" "}
          <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">
            productions-hero.png
          </code>{" "}
          (ou .jpg / .jpeg / .webp)
        </p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative aspect-[4/3] w-full sm:aspect-[3/2]">
        <Image
          src={src}
          alt=""
          fill
          className="object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 960px"
          priority
          onError={() => setIndex((i) => i + 1)}
        />
      </div>
    </div>
  );
}
