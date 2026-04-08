import Image from "next/image";
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="noise-overlay relative overflow-hidden border-t border-white/8 bg-[#0d0d0b]">
      <div className="pointer-events-none absolute -top-32 right-1/4 h-64 w-64 rounded-full bg-bronze/5 blur-[80px]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt={`${SITE_NAME} logosu`}
                width={180}
                height={44}
                className="h-10 w-auto brightness-200 saturate-0 invert"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/35">
              Konut, ticari ve arsa projelerinde planlama, uygulama ve teslim
              süreçlerinde şeffaf ve güvenilir iş ortağınız.
            </p>
            {/* Social / contact pill */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/50 transition hover:border-bronze/30 hover:text-bronze-light"
              >
                {PHONE_DISPLAY}
              </a>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/50 transition hover:border-bronze/30 hover:text-bronze-light"
              >
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">Sayfalar</p>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { href: "/", label: "Ana Sayfa" },
                  { href: "/projeler", label: "Projeler" },
                  { href: "/hakkimizda", label: "Hakkımızda" },
                  { href: "/#iletisim", label: "İletişim" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-white/40 transition hover:text-bronze-light">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">Hizmetler</p>
              <ul className="mt-4 space-y-3 text-sm">
                {["Konut", "Ticari Alan", "Arsa & Villa", "Proje Yönetimi"].map((s) => (
                  <li key={s}>
                    <Link href="/projeler" className="text-white/40 transition hover:text-bronze-light">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/6 pt-8 sm:flex-row">
          <p className="text-xs text-white/20">
            © {year} {SITE_NAME}. Tüm hakları saklıdır.
          </p>
          <a
            href="https://maps.google.com/?q=Mustafa+Kemal+mah.+İnönü+Cad.+No:23/B+Yenikent+Sincan/Ankara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-white/30 transition hover:text-bronze-light"
            title="Haritada görüntüle"
          >
            <svg className="shrink-0 text-bronze/50" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <span className="text-center sm:text-right">
              Mustafa Kemal mah. İnönü Cad. No:23/B<br className="sm:hidden" /> Yenikent Sincan / ANKARA
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
