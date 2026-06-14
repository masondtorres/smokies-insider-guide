type SiteMarkProps = {
  className?: string;
};

export function SiteMark({ className = "" }: SiteMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="#f7f0df" />
      <path
        d="M5 38c8-1 13-9 20-9 6 0 10 6 15 6 6 0 10-8 19-10v24H5V38Z"
        fill="#6f8791"
      />
      <path
        d="M5 45c9 0 14-8 22-8 7 0 11 7 18 7 5 0 9-4 14-5v12H5V45Z"
        fill="#214433"
      />
      <path
        d="M11 48c8 0 12-4 18-4 7 0 11 5 18 5 3 0 5 0 7-1"
        fill="none"
        stroke="#f7f0df"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <circle cx="49" cy="22" r="4" fill="#6b4f3a" />
    </svg>
  );
}

export function SiteIdentity({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "site-identity site-identity-compact" : "site-identity"}>
      <SiteMark className="site-identity-mark" />
      <span className="site-identity-text">
        <strong>Smokies</strong>
        <small>Insider Guide</small>
      </span>
    </span>
  );
}
