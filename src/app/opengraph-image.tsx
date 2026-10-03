import { ImageResponse } from "next/og";

export const alt = "WebSite Studio — Construisons l'infini.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(ellipse at 50% 45%, #EFE8FF 0%, #FAF8FF 45%, #FFFFFF 80%)",
          color: "#16121F",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="420" height="166" viewBox="90 20 580 260" style={{ position: "absolute", top: 150 }}>
          <path
            d="M380 150 C 300 40, 110 30, 110 150 C 110 270, 300 260, 380 150 C 460 40, 650 30, 650 150 C 650 270, 460 260, 380 150 Z"
            fill="none"
            stroke="#6D45F0"
            strokeWidth="3"
          />
        </svg>
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -4 }}>Construisons</div>
        <div style={{ fontSize: 100, fontStyle: "italic", color: "#6D45F0", letterSpacing: -3, marginTop: -10 }}>
          l&apos;infini.
        </div>
        <div style={{ marginTop: 40, fontSize: 28, color: "#5B5670" }}>WebSite Studio · Félix Machenaud</div>
      </div>
    ),
    size,
  );
}
