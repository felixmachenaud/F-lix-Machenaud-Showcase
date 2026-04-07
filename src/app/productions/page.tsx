import { IntegrationsWorkTools } from "@/components/IntegrationsWorkTools";
import { ProductionShowcaseAnimatedGrid } from "@/components/ProductionShowcaseAnimatedGrid";
import { productionShowcases } from "@/lib/productions";
import { WHITE_VIOLET_OUTLINE_SHADOW } from "@/lib/site";

export const metadata = {
  title: "Nos productions — WebSite Studio",
  description:
    "Sites web réalisés : démonstrations et présentation des projets WebSite Studio.",
};

export default function ProductionsPage() {
  return (
    <main className="min-h-[calc(100vh-7rem)] bg-transparent pb-20 pt-4 sm:min-h-[calc(100vh-8rem)] sm:pb-24 sm:pt-6">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos productions
          </h1>
          <p
            className="mt-4 text-[21.6px] font-extrabold leading-snug tracking-tight text-white sm:text-[1.44rem]"
            style={{ textShadow: WHITE_VIOLET_OUTLINE_SHADOW }}
          >
            Chaque projet est présenté comme une unité : démonstration vidéo du
            parcours utilisateur, puis contexte et chiffres clés.
          </p>
        </header>

        <ProductionShowcaseAnimatedGrid showcases={productionShowcases} />

        <IntegrationsWorkTools />
      </div>
    </main>
  );
}
