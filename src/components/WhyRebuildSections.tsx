import { WHY_REBUILD_SECTIONS } from "@/lib/whyRebuildContent";
import { SectionBulletIcon } from "@/components/WhyRebuildSectionIcons";

export function WhyRebuildSections() {
  return (
    <div className="mx-auto max-w-3xl space-y-16 px-5 pb-24 pt-4 sm:px-6 sm:pb-28 sm:pt-6 lg:px-8">
      {WHY_REBUILD_SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="scroll-mt-28 border-b border-violet-100/80 pb-16 last:border-b-0 last:pb-0"
          aria-labelledby={`heading-${section.id}`}
        >
          <h2
            id={`heading-${section.id}`}
            className="text-balance text-xl font-bold tracking-tight text-gray-900 sm:text-2xl"
          >
            {section.title}
          </h2>

          <ul className="mt-6 flex flex-col gap-4">
            {section.bullets.map((b) => (
              <li key={b.text} className="flex gap-3 text-[15px] leading-relaxed text-gray-700 sm:text-base">
                <span className="mt-0.5" aria-hidden>
                  <SectionBulletIcon icon={b.icon} />
                </span>
                <span>{b.text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-sm leading-relaxed text-gray-600">
            <span className="font-medium text-gray-800">À retenir :</span> {section.statNote}{" "}
            <a
              href={section.statSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-violet-700 underline decoration-violet-300 underline-offset-2 transition hover:text-violet-900"
            >
              {section.statSourceLabel}
            </a>
            .
          </p>
        </section>
      ))}
    </div>
  );
}
