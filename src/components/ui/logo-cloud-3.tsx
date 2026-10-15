import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className,
      )}
    >
      <InfiniteSlider gap={56} reverse duration={36} durationOnHover={72}>
        {logos.map((logo) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={logo.alt}
            className="pointer-events-none h-8 w-auto max-w-[7.5rem] shrink-0 select-none object-contain sm:h-9 md:h-10"
            height={logo.height || 40}
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || 120}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
