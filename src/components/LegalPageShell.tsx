export function LegalPageShell({
  title,
  lead,
  children,
}: {
  title: string;
  lead?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-0 flex-1 bg-white">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h1>
        {lead ? (
          <div className="mt-6 text-[15px] leading-relaxed text-gray-600 sm:text-base">
            {lead}
          </div>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </main>
  );
}
