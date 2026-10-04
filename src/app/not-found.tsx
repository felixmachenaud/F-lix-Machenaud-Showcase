import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <p className="big">404</p>
        <h1 className="h-section">
          Oups, j&apos;ai dû oublier <span className="serif">de coder cette page.</span>
        </h1>
        <p>Promis, ça ne m&apos;arrive jamais sur les sites de mes clients. — Félix</p>
        <Link href="/" className="btn btn-primary">
          Revenir à l&apos;accueil <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
