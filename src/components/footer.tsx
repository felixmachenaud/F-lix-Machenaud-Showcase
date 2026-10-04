import Link from "next/link";
import { site } from "@/lib/data";
import Image from "next/image";
import { InfinityDraw } from "./effects";
import { FadeIn } from "./reveal";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-night">
        <InfinityDraw className="footer-inf" />
        <div className="wrap">
          <div className="footer-top">
            <FadeIn as="p" className="footer-big">
              Construisons
              <br />
              <span className="serif">l&apos;infini.</span>
            </FadeIn>
            <FadeIn delay={0.15} className="footer-contact">
              <Link href="/rendez-vous" className="btn btn-primary" style={{ marginBottom: 18 }}>
                Prendre rendez-vous <span className="arrow">→</span>
              </Link>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </FadeIn>
          </div>
          <div className="footer-row">
            <Link href="/" className="brand">
              <Image src="/images/logo.webp" alt="" width={40} height={30} className="brand-logo" priority />
              WebSite Studio
            </Link>
            <nav aria-label="Informations légales">
              <Link href="/confidentialite">Confidentialité</Link>
              <Link href="/conditions-generales-vente">CGV</Link>
              <Link href="/politique-cookies">Cookies</Link>
            </nav>
            <p className="copy">
              © {new Date().getFullYear()} {site.name} · {site.owner}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
