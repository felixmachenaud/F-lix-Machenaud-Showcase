"use client";

import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DesktopOnly, MobileOnly } from "@/components/ResponsiveView";
import {
  INTEGRATION_FAN,
  INTEGRATION_LOGO_EXTENSIONS,
  type IntegrationFanItem,
} from "@/lib/integrations";

function IntegrationLogo({ item }: { item: IntegrationFanItem }) {
  const [extIdx, setExtIdx] = useState(0);
  const [dead, setDead] = useState(false);

  const onError = useCallback(() => {
    setExtIdx((i) => {
      if (i < INTEGRATION_LOGO_EXTENSIONS.length - 1) {
        return i + 1;
      }
      setDead(true);
      return i;
    });
  }, []);

  if (dead) {
    return (
      <div
        className="flex h-full w-full select-none items-center justify-center rounded-[1.15rem] bg-gradient-to-br from-gray-100 to-gray-50 text-xl font-bold uppercase tracking-wide text-gray-400 sm:text-2xl md:text-3xl"
        aria-hidden
      >
        {item.label.slice(0, 2)}
      </div>
    );
  }

  const ext = INTEGRATION_LOGO_EXTENSIONS[extIdx];
  const fileName = `${item.file}.${ext}`;
  const src = `/images/integrations/${encodeURIComponent(fileName)}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- fichiers locaux /public/images/integrations
    <img
      key={src}
      src={src}
      alt=""
      width={512}
      height={512}
      className="h-full w-full object-contain p-3 sm:p-4 md:p-5"
      loading="lazy"
      decoding="async"
      onError={onError}
    />
  );
}

export function IntegrationsWorkTools() {
  const reduceMotion = useReducedMotion();
  const featured = INTEGRATION_FAN.find((x) => x.featured);

  return (
    <motion.section
      className="relative mx-auto mt-12 w-full max-w-[90rem] px-4 sm:mt-16 sm:px-6 lg:mt-20 lg:px-10"
      initial={reduceMotion ? false : { opacity: 0, y: 64 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
      }
    >
      <div className="flex min-h-[50vh] flex-col justify-center rounded-[2rem] border border-gray-100 bg-gradient-to-b from-gray-50/90 to-white py-14 shadow-[0_24px_80px_-32px_rgba(15,23,42,0.12)] sm:min-h-[52vh] sm:rounded-[2.25rem] sm:py-16 md:min-h-[55vh] md:py-20 lg:py-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-2">
          <h2 className="text-balance text-center text-[clamp(2rem,5.5vw,4rem)] font-bold leading-[1.08] tracking-tight text-gray-900">
            Intégrez vos outils de travail
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center text-[clamp(1.05rem,2.4vw,1.4rem)] leading-relaxed text-gray-500">
            Connectez vos outils habituels en quelques secondes.
          </p>

          <div className="relative mt-16 w-full max-w-5xl sm:mt-20 md:mt-24">
            <MobileOnly>
              <div className="flex flex-col items-center gap-8">
                {INTEGRATION_FAN.map((item) => (
                  <div key={item.id} className="flex flex-col items-center">
                    <div
                      className={`flex items-center justify-center overflow-hidden rounded-[1.35rem] border border-gray-200/80 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18),0_8px_24px_-12px_rgba(15,23,42,0.1)] ${
                        item.featured
                          ? "h-[7.5rem] w-[7.5rem]"
                          : "h-[6.5rem] w-[6.5rem]"
                      }`}
                    >
                      <IntegrationLogo item={item} />
                    </div>
                  </div>
                ))}
              </div>
              {featured?.featuredTitle ? (
                <div className="mt-10 text-center">
                  <p className="text-xl font-semibold tracking-tight text-gray-900">
                    {featured.featuredTitle}
                  </p>
                  {featured.featuredSubtitle ? (
                    <p className="mt-3 text-base text-gray-500">{featured.featuredSubtitle}</p>
                  ) : null}
                </div>
              ) : null}
            </MobileOnly>

            <DesktopOnly>
              <div className="flex items-end justify-center gap-2 sm:gap-5 md:gap-7 lg:gap-10">
                {INTEGRATION_FAN.map((item) => (
                  <div
                    key={item.id}
                    className="flex shrink-0 flex-col items-center"
                    style={{
                      transform: `rotate(${item.rotateDeg}deg) translateY(${item.liftPx}px)`,
                    }}
                  >
                    <div
                      className={`flex items-center justify-center overflow-hidden rounded-[1.35rem] border border-gray-200/80 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18),0_8px_24px_-12px_rgba(15,23,42,0.1)] sm:rounded-[1.5rem] ${
                        item.featured
                          ? "h-[7.5rem] w-[7.5rem] sm:h-[9rem] sm:w-[9rem] md:h-[10.5rem] md:w-[10.5rem] lg:h-[11.5rem] lg:w-[11.5rem]"
                          : "h-[6.5rem] w-[6.5rem] sm:h-[7.75rem] sm:w-[7.75rem] md:h-[8.75rem] md:w-[8.75rem] lg:h-[9.5rem] lg:w-[9.5rem]"
                      }`}
                    >
                      <IntegrationLogo item={item} />
                    </div>
                  </div>
                ))}
              </div>

              {featured?.featuredTitle ? (
                <div className="pointer-events-none absolute -bottom-1 left-1/2 w-[min(100%,24rem)] -translate-x-1/2 translate-y-full text-center md:w-[28rem]">
                  <p className="text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl md:text-3xl">
                    {featured.featuredTitle}
                  </p>
                  {featured.featuredSubtitle ? (
                    <p className="mt-3 text-base text-gray-500 sm:text-lg md:text-xl">
                      {featured.featuredSubtitle}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </DesktopOnly>
          </div>

          <div className="h-24 sm:h-32 md:h-36 lg:h-40" aria-hidden />
        </div>
      </div>
    </motion.section>
  );
}
