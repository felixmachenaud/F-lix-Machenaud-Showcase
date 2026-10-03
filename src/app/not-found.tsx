import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <p className="big">404</p>
        <h1 className="h-section">
          Cette page s&apos;est perdue <span className="serif">dans l&apos;infini.</span>
        </h1>
        <p>Elle a peut-être été déplacée, ou l&apos;adresse contient une faute de frappe.</p>
        <Link href="/" className="btn btn-primary">
          Revenir à l&apos;accueil <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
