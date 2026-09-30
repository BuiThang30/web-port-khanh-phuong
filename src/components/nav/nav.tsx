"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./nav.module.css";

type SubLink = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  minWidth?: number;
  sub?: SubLink[];
};

const LINKS: NavItem[] = [
  { label: "home", href: "/" },
  {
    label: "needle of care",
    href: "/needle-of-care",
    sub: [
      { label: "Achievements", href: "/needle-of-care#achievement" },
      { label: "Research", href: "/needle-of-care#research" },
      { label: "Community", href: "/needle-of-care#community" },
      { label: "Internship", href: "/needle-of-care#internship" },
    ],
  },
  {
    label: "mesh of code",
    href: "/mesh-of-code",
    sub: [
      { label: "Achievements", href: "/mesh-of-code#achievement" },
      { label: "Research projects", href: "/mesh-of-code#research" },
      { label: "Community", href: "/mesh-of-code#community" },
      { label: "Internship", href: "/mesh-of-code#internship" },
    ],
  },
  {
    label: "global fabric",
    href: "/global-fabric",
    minWidth: 197,
    sub: [
      { label: "Model United Nations", href: "/global-fabric#model-united-nations" },
      { label: "International Science Youth Forum", href: "/global-fabric#international-science-youth-forum" },
      { label: "ASEAN Scholars", href: "/global-fabric#asean-scholars" },
      { label: "Community Service", href: "/global-fabric#community-service" },
    ],
  },
  { label: "entrepreneurial loom", href: "/entrepreneurial-loom" },
  {
    label: "creative thread",
    href: "/creative-thread",
    sub: [
      { label: "Embroidery", href: "/creative-thread#embroidery" },
      { label: "Videography", href: "/creative-thread#videography" },
      { label: "Sports", href: "/creative-thread#sports" },
      { label: "Choir", href: "/creative-thread#choir" },
    ],
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Hàm xử lý khi click vào bất kỳ link nào
  const handleLinkClick = () => {
    setIsOpen(false); // Đóng menu trên mobile
    // Ép phần tử hiện tại mất focus (blur) để tắt dropdown trên desktop ngay lập tức
    if (typeof document !== "undefined" && document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <Link className={styles.brand} href="/" onClick={handleLinkClick}>
          PHUONG NGUYEN
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}></span>
        </button>

        <nav className={`${styles.links} ${isOpen ? styles.active : ""}`} aria-label="Main">
          {LINKS.map(({ label, href, minWidth, sub }) => (
            <div
              key={href}
              className={styles.item}
              style={minWidth ? { minWidth } : undefined}
            >
              <Link
                href={href}
                className={styles.link}
                onClick={handleLinkClick}
              >
                {label}
              </Link>

              {sub && (
                <div className={styles.dropdown}>
                  {sub.map((s) => (
                    <Link 
                      key={s.href} 
                      href={s.href} 
                      className={styles.subLink} 
                      onClick={handleLinkClick}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}