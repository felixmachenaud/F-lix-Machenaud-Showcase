"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND_VIOLET, LINKEDIN_URL } from "@/lib/site";

const block = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function AboutNarrative() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col gap-0 text-gray-900"
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : 0.07,
            delayChildren: reduceMotion ? 0 : 0.05,
          },
        },
      }}
    >
      <motion.p
        custom={0}
        variants={block}
        className="text-[1.05rem] font-medium leading-relaxed sm:text-lg md:text-xl"
      >
        Aujourd&apos;hui, la présence en ligne n&apos;est plus une option,{" "}
        <span className="relative inline-block">
          <span
            className="relative z-10"
            style={{ boxShadow: "inset 0 -0.35em 0 0 rgba(17, 24, 39, 0.12)" }}
          >
            c&apos;est une nécessité
          </span>
        </span>
        .
      </motion.p>

      <motion.p
        custom={1}
        variants={block}
        className="mt-8 text-[15px] leading-[1.75] text-gray-900 sm:text-base md:text-[17px]"
      >
        C&apos;est pour cela que j&apos;ai choisi d&apos;accompagner les entreprises et les
        indépendants dans la création de sites web{" "}
        <span className="font-medium text-gray-900">modernes, efficaces et visibles</span>.
      </motion.p>

      <motion.div
        custom={2}
        variants={block}
        className="mt-10 border-l-2 border-gray-900 pl-6"
      >
        <p className="text-[15px] leading-[1.75] sm:text-base md:text-[17px]">
          Je m&apos;appelle <span className="font-semibold">Félix</span>, et je suis passionné par
          le code et les usages du web, aussi bien pour les particuliers que pour les entreprises.
        </p>
        <p className="mt-5 text-[15px] leading-[1.75] sm:text-base md:text-[17px]">
          Au fil de mes études et grâce aux nouvelles possibilités offertes par l&apos;intelligence
          artificielle, j&apos;ai développé une approche{" "}
          <span className="font-medium text-gray-900">rapide, structurée et orientée résultats</span>
          .
        </p>
      </motion.div>

      <motion.div custom={3} variants={block} className="mt-10">
        <p className="text-[15px] leading-[1.75] sm:text-base md:text-[17px]">
          Mon objectif est simple : comprendre vos besoins, traduire vos idées sur un site clair et
          professionnel, et vous livrer un résultat de qualité en quelques jours seulement{" "}
          <span className="whitespace-nowrap rounded-full border border-gray-300 bg-gray-50 px-3 py-1 text-sm font-semibold text-gray-900">
            en moyenne 6 jours
          </span>
          .
        </p>
      </motion.div>

      <motion.p
        custom={4}
        variants={block}
        className="mt-8 text-[15px] leading-[1.75] sm:text-base md:text-[17px]"
      >
        Chaque projet est pour moi une collaboration : j&apos;accorde une grande importance à
        l&apos;écoute, à la réactivité et à la précision dans l&apos;exécution.
      </motion.p>

      <motion.div
        custom={5}
        variants={block}
        className="mt-12 rounded-2xl border border-gray-200/90 bg-white px-6 py-7 shadow-[0_2px_0_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,0,0,0.14),0_24px_48px_-16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.95)] sm:px-8 sm:py-8"
      >
        <p className="text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
          Je serai ravi d&apos;échanger avec vous sur votre projet.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
            style={{ backgroundColor: BRAND_VIOLET }}
          >
            Me contacter
          </Link>
          <Link
            href="/rendez-vous"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:border-gray-400 hover:bg-gray-50"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </motion.div>

      <motion.div custom={6} variants={block} className="mt-10">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:border-gray-400 hover:shadow-md"
        >
          LinkedIn — Félix Machenaud
        </a>
      </motion.div>
    </motion.div>
  );
}
