"use client";

import { Component, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shown instead of the canvas when WebGL is not available. */
export function WebGLFallback({ className, message }: { className?: string; message: string }) {
  return (
    <div className={cn("grid place-items-center p-6 text-center text-sm opacity-70", className)} role="note">
      {message}
    </div>
  );
}

/** Catches errors thrown while mounting the WebGL scene and renders the fallback instead. */
export class WebGLErrorBoundary extends Component<{ fallback: ReactNode; children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
