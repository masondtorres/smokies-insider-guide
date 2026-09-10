"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/components/mobile-bottom-nav.module.css";

const links = [
  { label: "Today", href: "/today" },
  { label: "Plan", href: "/start-planning" },
  { label: "Do", href: "/do" },
  { label: "Eat", href: "/eat" },
  { label: "My Plan", href: "/my-plan", plan: true },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className={styles.shell}>
      <nav className={styles.nav} aria-label="Mobile primary navigation">
        {links.map((link) => {
          const current = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              className={`${styles.link}${link.plan ? ` ${styles.plan}` : ""}${current ? ` ${styles.current}` : ""}`}
              href={link.href}
              key={link.href}
              aria-current={current ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <div className={styles.spacer} aria-hidden="true" />
    </div>
  );
}
