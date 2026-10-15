import { Poppins } from "next/font/google";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { INTEGRATION_LOGOS } from "@/lib/integrations";

const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

const fadeLine =
  "h-px bg-gray-200 [mask-image:linear-gradient(to_right,transparent,black,transparent)]";

export function WorkToolsLogoRibbon() {
  return (
    <section
      aria-labelledby="outils-conciergerie-heading"
      className="relative w-full px-2 py-16 sm:px-0 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="outils-conciergerie-heading"
          className={`${poppinsBold.className} text-center text-xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl`}
        >
          Intégrez vos outils
        </h2>
        <div className={`mx-auto my-6 max-w-sm ${fadeLine}`} />
        <LogoCloud logos={INTEGRATION_LOGOS} />
        <div className={`mt-6 ${fadeLine}`} />
      </div>
    </section>
  );
}
