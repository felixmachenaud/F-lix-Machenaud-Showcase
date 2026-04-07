import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageBackground } from "@/components/PageBackground";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "WebSite Studio — Félix Machenaud",
  description: "Création de sites web sur mesure.",
};

/** Permet d’utiliser `env(safe-area-inset-*)` sur iPhone / encoches. */
export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={jakarta.variable}>
      <body className="relative flex min-h-screen min-h-[100dvh] flex-col font-body antialiased text-gray-900">
        <PageBackground />
        <Header />
        <div className="relative z-10 flex flex-1 flex-col pt-28 sm:pt-32">
          <div className="flex min-h-0 flex-1 flex-col">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
