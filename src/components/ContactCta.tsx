import Link from "next/link";
import { Section } from "@/components/Section";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/site";

export function ContactCta() {
  return (
    <Section id="iletisim" className="reveal-on-scroll py-20 sm:py-24" as="div">
      <div className="noise-overlay relative overflow-hidden rounded-3xl bg-[#0d0d0b] px-8 py-16 text-center sm:px-16 sm:py-20">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-bronze/15 blur-[80px]" aria-hidden />
        <div className="pointer-events-none absolute -bottom-20 left-1/4 h-56 w-56 rounded-full bg-bronze/8 blur-[60px]" aria-hidden />

        <div className="relative z-10">
          <p className="label-tag justify-center text-bronze/70">İletişim</p>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projenizi birlikte{" "}
            <span className="text-gradient-bronze">planlayalım</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/45">
            Satış ve proje bilgisi için bizi arayın veya WhatsApp üzerinden
            hızlıca ulaşın.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-foreground transition hover:bg-white/90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.1 11.74 19.79 19.79 0 011.02 3.1 2 2 0 013 .92h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {PHONE_DISPLAY}
            </a>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-bronze/40 hover:bg-bronze/10 hover:text-bronze-light"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.098 1.524 5.82L.057 23.857 6.23 22.42A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.006-1.373l-.36-.213-3.715.973.991-3.62-.234-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              WhatsApp
            </Link>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="https://maps.google.com/?q=Mustafa+Kemal+mah.+İnönü+Cad.+No:23/B+Yenikent+Sincan/Ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-left gap-3 text-sm text-white/50 transition hover:text-bronze-light"
            >
              <svg className="shrink-0 text-bronze/70" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              </svg>
              <span>Mustafa Kemal mah. İnönü Cad. No:23/B<br className="sm:hidden" /> Yenikent Sincan / ANKARA</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
