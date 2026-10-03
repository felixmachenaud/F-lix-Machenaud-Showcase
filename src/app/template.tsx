"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { INFINITY_PATH } from "@/components/infinity";

// The very first page load already has its own intro; the curtain only plays on client navigations.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  // Server render and first hydration never show it; later client navigations do.
  const [curtain] = useState(() => typeof window !== "undefined" && hasNavigated);
  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <>
      {curtain && (
        <motion.div
          className="curtain"
          aria-hidden="true"
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 100% 0%)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.svg viewBox="80 10 600 280" fill="none" initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
            <path d={INFINITY_PATH} stroke="#fff" strokeWidth="10" strokeLinecap="round" />
          </motion.svg>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: curtain ? 40 : 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: curtain ? 0.35 : 0, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
