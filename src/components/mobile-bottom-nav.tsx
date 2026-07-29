import Link from "next/link";
import styles from "@/components/mobile-bottom-nav.module.css";

const links = [
  { label: "Go", href: "/go" },
  { label: "Do", href: "/do" },
  { label: "See", href: "/see" },
  { label: "Eat", href: "/eat" },
  { label: "Stay", href: "/stay" },
  { label: "Deals", href: "/deals" },
  { label: "My Plan", href: "/my-plan", plan: true },
];

export function MobileBottomNav() {
  return (
    <div className={styles.shell}>
      <nav className={styles.nav} aria-label="Mobile primary navigation">
        {links.map((link) => (
          <Link
            className={`${styles.link}${link.plan ? ` ${styles.plan}` : ""}`}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className={styles.spacer} aria-hidden="true" />
    </div>
  );
}
