/**
 * Le dégradé est fourni par {@link PageBackground} (même source que le viewport entier).
 */
export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-transparent">{children}</div>
  );
}
