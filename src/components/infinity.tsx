export const INFINITY_PATH =
  "M380 150 C 300 40, 110 30, 110 150 C 110 270, 300 260, 380 150 C 460 40, 650 30, 650 150 C 650 270, 460 260, 380 150 Z";

export function InfinityMark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="90 20 580 260" fill="none" aria-hidden="true">
      <path d={INFINITY_PATH} stroke="currentColor" strokeWidth="34" strokeLinecap="round" />
    </svg>
  );
}
