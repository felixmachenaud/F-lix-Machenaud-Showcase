"use client";

import { useId } from "react";

type Item = {
  id: string;
  title: string;
  children: React.ReactNode;
};

type LegalAccordionProps = {
  items: Item[];
};

export function LegalAccordion({ items }: LegalAccordionProps) {
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const panelId = `${baseId}-${item.id}`;
        const headerId = `${baseId}-${item.id}-h`;
        return (
          <details
            key={item.id}
            className="group rounded-2xl border border-gray-200/90 bg-gray-50/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition open:border-gray-200 open:bg-white"
          >
            <summary
              id={headerId}
              className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left sm:px-5 sm:py-4 [&::-webkit-details-marker]:hidden"
              aria-controls={panelId}
            >
              <span className="text-[15px] font-semibold leading-snug text-gray-900 sm:text-base">
                {item.title}
              </span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200/80 bg-white text-gray-600 transition group-open:rotate-180"
                aria-hidden
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </summary>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="border-t border-gray-100 px-4 pb-5 pt-0 sm:px-5"
            >
              <div className="pt-4 text-[15px] leading-relaxed text-gray-600 sm:text-base [&_a]:font-medium [&_a]:text-gray-900 [&_a]:underline-offset-2 [&_a]:hover:underline [&_li]:mt-2 [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_p+p]:mt-3 [&_strong]:font-semibold [&_strong]:text-gray-800 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                {item.children}
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
