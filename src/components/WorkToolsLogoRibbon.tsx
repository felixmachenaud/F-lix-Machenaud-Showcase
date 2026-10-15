import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { INTEGRATION_LOGOS } from "@/lib/integrations";

export function WorkToolsLogoRibbon() {
  return (
    <section
      aria-labelledby="outils-conciergerie-heading"
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 px-4 py-16 sm:py-20 md:py-24"
    >
      <h2
        id="outils-conciergerie-heading"
        className="text-center text-base font-semibold tracking-tight text-gray-900 sm:text-lg"
      >
        Travaillez vos outils
      </h2>
      <LogoCloud className="mt-8" logos={INTEGRATION_LOGOS} />
    </section>
  );
}
