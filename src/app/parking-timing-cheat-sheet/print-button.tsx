"use client";

export function PrintButton() {
  return (
    <button className="cheat-print-button" type="button" onClick={() => window.print()}>
      Print or Save as PDF
    </button>
  );
}
