import { ServicesVioletPanel } from "@/components/ServicesVioletPanel";

export const metadata = {
  title: "Nos services — WebSite Studio",
  description: "Services web sur mesure.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-[calc(100vh-7rem)] flex-col bg-white lg:min-h-[calc(100vh-8rem)] lg:flex-row">
      {/* Moitié gauche : vide, blanche */}
      <div className="hidden min-h-[calc(100vh-7rem)] w-1/2 shrink-0 bg-white lg:block" />

      {/* Moitié droite : bande violette (bord gauche au milieu de page) */}
      <div className="w-full shrink-0 lg:w-1/2">
        <ServicesVioletPanel />
      </div>
    </main>
  );
}
