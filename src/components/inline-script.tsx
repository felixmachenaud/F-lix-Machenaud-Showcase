"use client";

/**
 * Inline script that runs during HTML parsing on the server render only.
 * On the client it becomes inert text/plain, which avoids React's dev warning about rendering scripts.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
