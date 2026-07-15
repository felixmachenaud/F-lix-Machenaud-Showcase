import { IntegrationsWorkTools } from "@/components/IntegrationsWorkTools";
import { ProductionsCategoryTabs } from "@/components/ProductionsCategoryTabs";
import { WHITE_VIOLET_OUTLINE_SHADOW } from "@/lib/site";

export const metadata = {
  title: "Nos productions — WebSite Studio",
  description:
    "Sites web et applications réalisés : démonstrations et présentation des projets WebSite Studio.",
};

/**
 * Le dégradé est fourni par {@link PageBackground} (même source que le viewport entier).
 */
export default function ProductionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-transparent">
      <main className="min-h-[calc(100vh-7rem)] bg-transparent pb-20 pt-4 sm:min-h-[calc(100vh-8rem)] sm:pb-24 sm:pt-6">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos productions
            </h1>
            <p
              className="mt-4 text-[21.6px] font-extrabold leading-snug tracking-tight text-white sm:text-[1.44rem]"
              style={{ textShadow: WHITE_VIOLET_OUTLINE_SHADOW }}
            >
              Aperçu du projet, contexte et chiffres clés — présentation sobre et
              lisible.
            </p>
          </header>

          <ProductionsCategoryTabs />

          {children}

          <IntegrationsWorkTools />
        </div>
      </main>
    </div>
  );
}
