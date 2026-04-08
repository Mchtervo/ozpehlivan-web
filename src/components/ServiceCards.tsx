import { Section } from "@/components/Section";
import Link from "next/link";

const services = [
  {
    num: "01",
    label: "Konut",
    title: "Fonksiyonel\nKonut Tasarımı",
    body: "Aile yaşamına uygun plan çözümleri, gün ışığı dengesi ve uzun ömürlü malzeme seçimiyle değerini koruyan konutlar hayata geçiriyoruz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 9.5L12 3l9 6.5V21H3V9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 21v-7h6v7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "02",
    label: "Ticari",
    title: "Ticari Alan\nGeliştirme",
    body: "Vitrin değeri, erişim ve kira potansiyeli odaklı ticari yapılarda yatırımın uzun vadeli getirisini ön planda tutuyoruz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="7" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "03",
    label: "Arsa & Villa",
    title: "Arsa ve\nVilla Oturumu",
    body: "Hazır altyapı, güvenlik ve peyzajla çevrelenmiş doğa içi yaşam parselleri; sürdürülebilir site yönetim anlayışıyla.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 10v11M20 10v11M8 14v7M12 14v7M16 14v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "04",
    label: "Yönetim",
    title: "Proje Yönetimi\nve Teslim",
    body: "Şeffaf takvim, saha kalite denetimi ve anahtar teslim süreçleriyle sözleşmeden teslimata tüm adımlarda yanınızdayız.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ServiceCards() {
  return (
    <section className="noise-overlay relative overflow-hidden bg-[#0d0d0b] py-24 sm:py-32">
      {/* Decorative glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-bronze/8 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-bronze/5 blur-[100px]" aria-hidden />

      <Section>
        {/* Header */}
        <div className="reveal-on-scroll flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-tag text-bronze/80">Hizmetler</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Baştan sona{" "}
              <span className="text-gradient-bronze">tek elden</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/45 sm:text-right">
            Planlamadan anahtar teslime, her adımda şeffaf ve güvenilir proje ortaklığı.
          </p>
        </div>

        {/* Divider line */}
        <div className="reveal-on-scroll mt-10 h-px w-full bg-white/8" />

        {/* Cards grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, idx) => (
            <article
              key={s.num}
              className="glow-card reveal-on-scroll group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-white/6 bg-[#161614] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-[0_20px_40px_-15px_rgba(184,134,11,0.15)]"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Dev Filigran */}
              <span className="pointer-events-none absolute -bottom-6 -right-2 text-[120px] font-black leading-none text-white/[0.02] transition-all duration-500 group-hover:text-bronze/5 group-hover:scale-110">
                {s.num}
              </span>

              {/* Top row */}
              <div className="relative flex items-start justify-between z-10">
                <span className="text-5xl font-black leading-none text-gradient-bronze opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  {s.num}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/50 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:border-bronze/40 group-hover:bg-bronze/10 group-hover:text-bronze-light group-hover:shadow-[0_0_20px_rgba(184,134,11,0.4)]">
                  {s.icon}
                </span>
              </div>

              <div className="relative z-10 flex flex-col flex-1 gap-6 mt-2">
                {/* Label */}
                <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/40 w-fit transition-colors group-hover:border-bronze/20 group-hover:text-bronze-light/70">
                  {s.label}
                </span>

                {/* Title */}
                <h3 className="whitespace-pre-line text-xl font-black leading-snug text-white">
                  {s.title}
                </h3>

                {/* Body */}
                <p className="flex-1 text-sm leading-relaxed text-white/45 group-hover:text-white/60 transition-colors">
                  {s.body}
                </p>

                {/* CTA */}
                <Link
                  href="/projeler"
                  className="flex w-fit items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/30 transition-colors duration-300 group-hover:text-bronze-light"
                >
                  Projeleri Gör
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </section>
  );
}
