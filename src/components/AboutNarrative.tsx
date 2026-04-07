"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND_VIOLET, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const block = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const socialPill =
  "inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm transition hover:border-gray-400 hover:shadow-md";

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
        J&apos;accompagne les entreprises et les indépendants qui veulent un site web à la hauteur
        de leur activité :{" "}
        <span className="font-medium text-gray-900">clair, professionnel, pensé pour convertir</span>{" "}
        et pour être trouvé par vos clients. L&apos;objectif est simple : transformer votre message
        en une expérience en ligne crédible et efficace.
      </motion.p>

      <motion.div
        custom={2}
        variants={block}
        className="mt-10 border-l-2 border-gray-900 pl-6"
      >
        <p className="text-[15px] leading-[1.75] sm:text-base md:text-[17px]">
          Mon travail repose sur une approche technique solide et une méthode de projet structurée :
          cadrage des besoins, proposition claire des livrables, échanges réguliers et exécution
          soignée. Les outils actuels — y compris l&apos;intelligence artificielle lorsque c&apos;est
          pertinent — servent à{" "}
          <span className="font-medium text-gray-900">
            gagner en efficacité et en clarté, sans rogner sur la qualité ni sur le contrôle humain
          </span>{" "}
          sur votre contenu et votre image.
        </p>
        <p className="mt-5 text-[15px] leading-[1.75] sm:text-base md:text-[17px]">
          Vous savez à quoi vous attendre : délais et périmètre sont explicités dès le départ, les
          étapes sont visibles, et vous gardez la main sur les arbitrages importants. Cette
          transparence fait partie du service — elle évite les mauvaises surprises et sécurise votre
          investissement.
        </p>
      </motion.div>

      <motion.div custom={3} variants={block} className="mt-10">
        <p className="text-[15px] leading-[1.75] sm:text-base md:text-[17px]">
          Chaque mission est traitée comme une collaboration : écoute, réactivité et exigence sur
          le détail. Mon rôle est de vous livrer un site dont vous pouvez être fier, aligné sur vos
          objectifs business et prêt à évoluer avec vous.
        </p>
      </motion.div>

      <motion.div
        custom={4}
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

      <motion.div custom={5} variants={block} className="mt-10 flex flex-wrap gap-3">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={socialPill}
        >
          LinkedIn — Félix Machenaud
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={socialPill}
        >
          GitHub — felixmachenaud
        </a>
      </motion.div>
    </motion.div>
  );
}
