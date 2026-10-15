import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  scale?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "pointer-events-none py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <InfiniteSlider gap={72}>
        {logos.map((logo) => {
          const scale = logo.scale || 1;
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={logo.alt}
              className="pointer-events-none h-[calc(2.5rem*var(--logo-scale,1))] w-auto max-w-[calc(12rem*var(--logo-scale,1))] shrink-0 bg-transparent object-contain select-none sm:h-[calc(3rem*var(--logo-scale,1))] md:h-[calc(3.5rem*var(--logo-scale,1))]"
              height={Math.round((logo.height || 56) * scale)}
              key={`logo-${logo.alt}`}
              decoding="async"
              src={logo.src}
              style={{ ["--logo-scale" as string]: String(scale) }}
              width={Math.round((logo.width || 160) * scale)}
            />
          );
        })}
      </InfiniteSlider>
    </div>
  );
}
