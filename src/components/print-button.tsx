"use client";

export function PrintButton({ label = "Print this page" }: { label?: string }) {
  return (
    <button type="button" className="button button-primary" onClick={() => window.print()}>
      {label}
    </button>
  );
}
