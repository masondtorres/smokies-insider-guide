type SiteMarkProps = {
  className?: string;
};

export function SiteMark({ className = "" }: SiteMarkProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" aria-hidden="true" role="img">
      <rect width="96" height="96" rx="18" fill="#16352a" />
      <path d="M0 58c18-9 28-16 48-8 14 6 24 4 48-8v54H0Z" fill="#2f6a4c" />
      <path d="M0 70c20-14 34-10 49-2 16 8 28 6 47-10v38H0Z" fill="#0f241c" />
      <circle cx="72" cy="26" r="10" fill="#e3b23c" />
      <path d="M8 54 30 30l18 18 12-20 28 28" fill="none" stroke="#f4ead3" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M14 78c16-7 30-8 46-2" fill="none" stroke="#d7b56a" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function SiteIdentity({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "site-identity site-identity-compact" : "site-identity"}>
      <SiteMark className="site-identity-mark" />
      <span className="site-identity-text" aria-label="Smokies Insider">
        Smokies Insider
      </span>
    </span>
  );
}
