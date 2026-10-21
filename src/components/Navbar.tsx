"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/favorites", label: "Favorites" },
  { href: "/profile", label: "Profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-foreground/15 bg-background font-sans">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <Link
          href="/"
          className="w-fit rounded-sm text-lg font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          Wanderlust Explorer
        </Link>
        <ul className="grid min-w-0 grid-cols-2 gap-2 min-[360px]:grid-cols-4 sm:flex sm:items-center">
          {links.map(({ href, label }) => {
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));

            return (
              <li key={href} className="min-w-0">
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-11 items-center justify-center rounded-md px-2 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:px-3 ${
                    isActive
                      ? "bg-foreground font-semibold text-background"
                      : "text-foreground/75 hover:bg-foreground/10 hover:text-foreground"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}