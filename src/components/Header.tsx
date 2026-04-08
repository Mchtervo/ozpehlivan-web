"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projeler", label: "Projeler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/#iletisim", label: "İletişim" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const onDark = isHome && !scrolled && !open;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Responsive grid: Mobilde 2 sütun (logo, burger), Masaüstünde 3 sütun */}
      <div className="mx-auto grid w-full grid-cols-2 md:grid-cols-3 items-center px-4 sm:px-6 lg:px-8" style={{ height: "6rem" }}>

        {/* ── Sol: Logo ── */}
        <div className="flex items-center">
          <Link href="/" aria-label="Özpehlivan İnşaat ana sayfa">
            <Image
              src="/images/logo.png"
              alt="Özpehlivan İnşaat logosu"
              width={360}
              height={90}
              className="h-16 w-auto sm:h-20"
              priority
            />
          </Link>
        </div>

        {/* ── Orta: Nav pill ── */}
        <nav
          aria-label="Ana menü"
          className={`hidden md:flex items-center justify-center gap-1 justify-self-center rounded-full px-3 py-2.5 text-sm font-medium transition-all duration-300 ${
            scrolled || !onDark
              ? "border border-white/15 bg-[#0d0d0b]/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
              : "border border-white/25 bg-white/10 shadow-lg shadow-black/20 backdrop-blur-xl"
          }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-6 py-3 text-[14px] font-semibold transition-all duration-200 ${
                pathname === item.href
                  ? "bg-white/15 text-white shadow-inner"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── Sağ: Mobil hamburger ── */}
        <div className="flex justify-end md:hidden">
          <button
            type="button"
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
              scrolled || open || !onDark
                ? "border-white/15 bg-[#0d0d0b]/80 text-white shadow-[0_5px_15px_rgba(0,0,0,0.3)]"
                : "border-white/25 bg-white/10 text-white"
            }`}
            aria-expanded={open}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            )}
          </button>
        </div>

        {/* Masaüstü sağ sütun — boş (denge için) */}
        <div className="hidden md:block" />
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="mx-4 mt-2 overflow-hidden rounded-[24px] border border-white/10 bg-[#0d0d0b]/95 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-3xl md:hidden origin-top animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col p-3 gap-1.5" aria-label="Mobil menü">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center justify-between rounded-xl px-5 py-4 text-sm font-bold tracking-wide transition-all ${
                    isActive
                      ? "bg-bronze/15 text-bronze-light border border-bronze/20 shadow-[inset_0_0_20px_rgba(184,134,11,0.1)]"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="flex h-2 w-2 rounded-full bg-bronze shadow-[0_0_10px_rgba(184,134,11,0.8)]" aria-hidden />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Decorative Bottom Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
        </div>
      )}
    </header>
  );
}
