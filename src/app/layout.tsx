import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Poppins } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { site } from "@/lib/data";
import "./globals.css";
import "./pages.css";
import "./color.css";
import "./premium.css";
import "./buttons.css";
import "./polish.css";
import "./calm.css";
import "./clean.css";

const jakarta = Poppins({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.owner}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "./" },
  keywords: ["création site web", "site vitrine", "développeur web freelance", "refonte site internet", "SEO", "WebSite Studio"],
  authors: [{ name: site.owner }],
  creator: site.owner,
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — ${site.owner}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${instrument.variable}`} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          // Structured data for search engines: who the studio is and how to reach it.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.name,
              url: site.url,
              email: site.email,
              telephone: site.phone,
              founder: { "@type": "Person", name: site.owner },
              areaServed: "FR",
              description: site.description,
              sameAs: [site.linkedin],
            }),
          }}
        />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
