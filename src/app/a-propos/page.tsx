import { AboutHero } from "@/components/AboutHero";
import { AboutNarrative } from "@/components/AboutNarrative";

export const metadata = {
  title: "À propos — WebSite Studio",
  description:
    "Félix Machenaud — création de sites web modernes pour entreprises et indépendants.",
};

export default function AProposPage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1600px]">
        <AboutHero />
        <div className="mx-auto max-w-3xl px-5 pb-20 pt-2 sm:px-6 sm:pb-28 lg:px-8">
          <AboutNarrative />
        </div>
      </div>
    </main>
  );
}
