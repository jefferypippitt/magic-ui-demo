"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/about",
    label: "about",
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="py-4">
      <nav className="container flex justify-between items-center">
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                className={`${
                  pathname === link.href
                    ? "text-black dark:text-neutral-200"
                    : "text-neutral-500 dark:text-neutral-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
