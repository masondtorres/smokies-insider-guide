type SiteMarkProps = {
  className?: string;
};

export function SiteMark({ className = "" }: SiteMarkProps) {
  return (
    <svg className={className} viewBox="0 0 96 96" aria-hidden="true" role="img">
      <rect width="96" height="96" rx="20" fill="#f3ebd6" />
      <circle cx="70" cy="28" r="9" fill="#c49a3c" />
      <path d="M8 64 28 42l16 14 14-22 22 24v22H8Z" fill="#2a5340" />
      <path d="M8 72c18-10 34-12 50-6 12 4 22 10 30 18v4H8Z" fill="#1c3a2c" />
      <path
        d="M18 78c16-8 28-10 42-4"
        fill="none"
        stroke="#f3ebd6"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
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
