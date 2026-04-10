"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Durée pendant laquelle l’encadré actif reste au premier plan avant rotation */
const ROTATE_MS = 8000;

export type TestimonialItem = {
  id: string;
  quote: string;
  firstName: string;
  role: string;
  border: string;
  tint: string;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "marthe",
    quote:
      "J'avais un peu d'appréhension au départ en confiant la refonte de notre site à quelqu'un de plus jeune, et franchement, c'est moi qui avais tort. Dès le premier échange, j'ai été surprise par le sérieux et la clarté avec laquelle tout a été cadré. Il a pris le temps de vraiment comprendre ce qu'on voulait véhiculer, a posé les bonnes questions, et a proposé des directions visuelles auxquelles on n'aurait pas pensé nous-mêmes. Ce qui m'a aussi marquée, c'est la rigueur tout au long du projet : les délais ont été respectés, les retours intégrés rapidement, et on sentait qu'il était investi dans le résultat autant que nous. Quelqu'un d'attentionné, disponible, et qui fait clairement ce métier avec passion. Je recommande sans hésiter.",
    firstName: "Marthe",
    role: "Psychologue",
    border: "#7C3AED",
    tint: "124, 58, 237",
  },
  {
    id: "thomas",
    quote:
      "Je ne connaissais rien au design et j'avais peur de ne pas savoir expliquer ce que je voulais. Il a su décrypter mes idées floues et en faire quelque chose de cohérent et professionnel. Le rendu est au-delà de ce que j'espérais, et tout ça dans des délais vraiment courts. Le contact est simple, direct, agréable, on se sent entre de bonnes mains même quand on n'est pas expert.",
    firstName: "Thomas",
    role: "Architecte",
    border: "#DB2777",
    tint: "219, 39, 119",
  },
  {
    id: "sophie",
    quote:
      "Super expérience du début à la fin. Ce qui m'a vraiment plu c'est son côté méthodique, on sait toujours où on en est, rien n'est laissé au hasard. Et malgré ça, il y a quelque chose de chaleureux dans les échanges qui rend le projet vraiment agréable à mener. Le résultat est propre, moderne, et mes clients l'ont immédiatement remarqué. Encore merci !",
    firstName: "Sophie",
    role: "Start Up Ecommerce",
    border: "#A855F7",
    tint: "168, 85, 247",
  },
  {
    id: "aurelien",
    quote:
      "Rapide, efficace, et vraiment à l'écoute. Le site est exactement ce que j'avais en tête. Je referai appel à lui sans me poser de question.",
    firstName: "Aurélien",
    role: "Particulier",
    border: "#C026D3",
    tint: "192, 38, 211",
  },
];

function cloudBackground(tintRgb: string): CSSProperties {
  return {
    /* Un peu plus opaque qu’avant : le relief « nuage » reste, les encadrés du dessous restent devinables */
    backgroundColor: `rgba(${tintRgb}, 0.11)`,
    backgroundImage: [
      `radial-gradient(ellipse 85% 55% at 18% 28%, rgba(255,255,255,0.5), transparent 52%)`,
      `radial-gradient(ellipse 70% 45% at 82% 72%, rgba(255,255,255,0.36), transparent 48%)`,
      `radial-gradient(ellipse 50% 40% at 50% 50%, rgba(${tintRgb},0.19), transparent 60%)`,
      `linear-gradient(145deg, rgba(${tintRgb},0.22), rgba(255,255,255,0.04))`,
    ].join(", "),
  };
}

type Slot = "left" | "center" | "right" | "hidden";

function slotForItem(i: number, active: number): Slot {
  const n = TESTIMONIALS.length;
  if (i === active) return "center";
  if (i === (active + 1) % n) return "right";
  if (i === (active - 1 + n) % n) return "left";
  return "hidden";
}

const slotMotion: Record<
  Slot,
  { x: string; scale: number; filter: string; opacity: number; zIndex: number }
> = {
  left: {
    x: "-50%",
    scale: 0.78,
    filter: "blur(5px)",
    opacity: 0.78,
    zIndex: 2,
  },
  center: {
    x: "-50%",
    scale: 1,
    filter: "blur(0px)",
    opacity: 1,
    zIndex: 10,
  },
  right: {
    x: "-50%",
    scale: 0.78,
    filter: "blur(5px)",
    opacity: 0.78,
    zIndex: 2,
  },
  hidden: {
    x: "-50%",
    scale: 0.55,
    filter: "blur(8px)",
    opacity: 0,
    zIndex: 0,
  },
};

/** Décalage horizontal depuis le centre du conteneur (carte déjà en left-1/2 + translate -50% sur x de positionnement) */
const slotOffsetX: Record<Slot, string> = {
  left: "calc(-50% - min(38vw, 13.5rem))",
  center: "-50%",
  right: "calc(-50% + min(38vw, 13.5rem))",
  hidden: "-50%",
};

function AvatarOrb({ label, border }: { label: string; border: string }) {
  const initial = label.charAt(0).toUpperCase();
  return (
    <div
      className="mx-auto mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-semibold text-white shadow-inner ring-2 ring-white/50 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-2xl"
      style={{
        background: `linear-gradient(145deg, ${border}, #4c1d95)`,
      }}
      aria-hidden
    >
      {initial}
    </div>
  );
}

function TestimonialCard({
  item,
  slot,
}: {
  item: TestimonialItem;
  slot: Slot;
}) {
  const sm = slotMotion[slot];
  const isCenter = slot === "center";
  const offset = slotOffsetX[slot];

  return (
    <motion.article
      role="group"
      aria-hidden={slot === "hidden"}
      aria-roledescription={
        isCenter ? "Témoignage affiché" : slot === "hidden" ? undefined : "Témoignage en arrière-plan"
      }
      className={`absolute left-1/2 top-1/2 w-[min(92vw,26rem)] sm:w-[min(90vw,28rem)] ${
        slot === "hidden" ? "pointer-events-none" : ""
      } rounded-2xl border-[3px] px-4 py-5 shadow-lg sm:rounded-3xl sm:px-6 sm:py-6 ${
        isCenter ? "" : "pointer-events-none select-none"
      }`}
      style={{
        borderColor: item.border,
        zIndex: sm.zIndex,
        ...cloudBackground(item.tint),
      }}
      initial={false}
      animate={{
        x: offset,
        y: "-50%",
        scale: sm.scale,
        opacity: sm.opacity,
        filter: sm.filter,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
        mass: 0.9,
      }}
    >
      <AvatarOrb label={item.firstName} border={item.border} />
      <blockquote
        className={`text-pretty text-center font-normal leading-relaxed text-gray-800 ${
          isCenter ? "max-h-[min(52vh,22rem)] overflow-y-auto text-sm sm:max-h-[min(50vh,24rem)] sm:text-[0.95rem]" : "text-[0.7rem] sm:text-xs"
        }`}
      >
        <span className="text-gray-500" aria-hidden>
          «{" "}
        </span>
        {item.quote}
        <span className="text-gray-500" aria-hidden>
          {" "}
          »
        </span>
      </blockquote>
      <footer className="mt-5 border-t border-gray-900/10 pt-4 text-center text-sm text-gray-700 sm:text-base">
        <span className="font-bold text-gray-900">{item.firstName}</span>
        {", "}
        {item.role}
      </footer>
    </motion.article>
  );
}

export function TestimonialsShowcase() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="w-full">
      <h2
        id="temoignages-heading"
        className="mx-auto max-w-3xl px-4 pb-10 text-center text-xl font-semibold tracking-tight text-gray-900 sm:pb-12 sm:text-2xl md:text-[1.65rem]"
      >
        Ce qu&apos;ils ont pensé de mon travail
      </h2>

      <div
        className="relative mx-auto flex min-h-[min(78vh,520px)] w-full max-w-5xl justify-center overflow-x-clip px-2 pb-4 sm:min-h-[min(72vh,560px)] sm:px-4"
        aria-live="polite"
        aria-atomic="true"
      >
        {TESTIMONIALS.map((item, i) => {
          const slot = reduceMotion
            ? i === index
              ? "center"
              : "hidden"
            : slotForItem(i, index);
          return <TestimonialCard key={item.id} item={item} slot={slot} />;
        })}
      </div>

      <div className="flex justify-center gap-2 pb-2">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-[#7C3AED]" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Afficher le témoignage ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
