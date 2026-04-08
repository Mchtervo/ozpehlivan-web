import Link from "next/link";
import Image from "next/image";
import { ContactCta } from "@/components/ContactCta";
import { HeroSlider } from "@/components/HeroSlider";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { projects } from "@/data/projects";

const ticker = [
  "Konut Projeleri", "●", "Ticari Alanlar", "●", "Arsa & Villa", "●",
  "Ankara & Çevresi", "●", "Anahtar Teslim", "●", "+30 Tamamlanan Proje", "●",
  "7/24 Güvenlik", "●", "Lüks Yaşam", "●",
];

const stats = [
  { num: "+30", label: "Tamamlanan\nProje" },
  { num: "+1000", label: "Mutlu\nMüşteri" },
  { num: "7/24", label: "Güvenlik\nSistemi" },
  { num: "100%", label: "Anahtar\nTeslim" },
];

export default function HomePage() {
  const [feat, ...rest] = projects;
  const side = rest.slice(0, 2);

  return (
    <>
      <HeroSlider />

      {/* ── Marquee ticker ── */}
      <div className="relative flex overflow-hidden border-y border-border-subtle bg-background py-4">
        <div className="marquee-track shrink-0 whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className={`mx-6 inline-block text-[11px] font-bold uppercase tracking-[0.25em] ${
                item === "●" ? "text-bronze" : "text-foreground/35"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hizmetler ── */}
      <ServiceCards />

      {/* ── Projeler — editorial grid ── */}
      <section className="noise-overlay relative overflow-hidden bg-[#0d0d0b] py-24 sm:py-32">
        <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-bronze/5 blur-[120px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-bronze/4 blur-[80px]" aria-hidden />

        <Section>
          {/* Section header */}
          <div className="reveal-on-scroll flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="label-tag text-bronze/70">Projeler</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Öne çıkan<br />
                <span className="text-gradient-bronze">projelerimiz</span>
              </h2>
            </div>
            <div className="hidden sm:flex flex-col items-end gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25">Toplam</span>
              <span className="text-5xl font-black text-gradient-bronze tabular-nums leading-none">{String(projects.length).padStart(2,"0")}</span>
              <Link
                href="/projeler"
                className="mt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/35 transition hover:text-bronze-light"
              >
                Tümünü Gör
                <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Editorial grid: big left + 2 stacked right */}
          <div className="reveal-on-scroll grid gap-4 lg:grid-cols-5 lg:grid-rows-2">

            {/* Featured — large card, spans 3 cols + 2 rows */}
            <Link
              href={`/projeler/${feat.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-black lg:col-span-3 lg:row-span-2"
              aria-label={feat.title}
            >
              <div className="relative h-[360px] lg:h-full lg:min-h-[620px] overflow-hidden">
                <Image
                  src={feat.coverImage}
                  alt={feat.title}
                  fill
                  className="object-cover object-center brightness-[0.65] saturate-75 transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-[0.45]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                {/* Gradients */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

                {/* Top badges */}
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/70 backdrop-blur-sm">
                    Konut
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white/40 backdrop-blur-sm">
                    Tamamlandı
                  </span>
                </div>

                {/* Big decorative 01 */}
                <span
                  className="absolute right-5 top-5 select-none font-black leading-none text-white/6 transition-opacity duration-500 group-hover:text-white/4"
                  style={{ fontSize: "clamp(5rem,14vw,10rem)" }}
                  aria-hidden
                >
                  01
                </span>

                {/* Bottom content — static */}
                <div className="absolute bottom-0 left-0 right-0 p-7 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-light/80 mb-2">Öne Çıkan</p>
                  <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">{feat.title}</h3>
                  <p className="mt-2 text-base text-white/50">{feat.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {feat.specs.slice(0, 3).map((s) => (
                      <span key={s} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium text-white/65 backdrop-blur-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover reveal */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-light mb-2">Proje Detayı</p>
                  <h3 className="text-3xl font-black leading-tight text-white sm:text-4xl">{feat.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/55 max-w-md">{feat.excerpt}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {feat.specs.map((s) => (
                      <span key={s} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-bronze px-5 py-2.5 text-sm font-bold text-white">
                      Projeyi İncele
                      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                        <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Side cards — 2 cols + 1 row each */}
            {side.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projeler/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-black lg:col-span-2"
                aria-label={p.title}
              >
                <div className="relative h-[260px] lg:h-full lg:min-h-[300px] overflow-hidden">
                  <Image
                    src={p.coverImage}
                    alt={p.title}
                    fill
                    className="object-cover object-center brightness-[0.65] saturate-75 transition-all duration-700 group-hover:scale-[1.07] group-hover:brightness-[0.4]"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />

                  {/* Top: category */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-black/50 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/60 backdrop-blur-sm">
                      {p.category === "arsa" ? "Arsa / Villa" : p.category === "ticari" ? "Ticari" : "Konut"}
                    </span>
                  </div>

                  {/* Number */}
                  <span
                    className="absolute right-4 top-3 select-none font-black leading-none text-white/8"
                    style={{ fontSize: "4rem" }}
                    aria-hidden
                  >
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  {/* Static info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                    <h3 className="text-xl font-black leading-tight text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/45">{p.tagline}</p>
                  </div>

                  {/* Hover reveal */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-bronze-light mb-2">
                      {p.category === "arsa" ? "Arsa / Villa" : p.category === "ticari" ? "Ticari" : "Konut"}
                    </p>
                    <h3 className="text-xl font-black leading-tight text-white">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">{p.excerpt}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.specs.slice(0, 2).map((s) => (
                        <span key={s} className="rounded-full border border-white/12 bg-white/8 px-2.5 py-0.5 text-[9px] font-medium text-white/60">
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="mt-4 flex items-center gap-1.5 text-[11px] font-bold text-bronze-light">
                      İncele <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile: all projects button */}
          <div className="reveal-on-scroll mt-8 flex justify-center sm:hidden">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-bronze/40 hover:bg-bronze/10"
            >
              Tüm Projeleri Gör
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </Link>
          </div>

          {/* Desktop: bottom CTA strip */}
          <div className="reveal-on-scroll mt-6 hidden sm:flex items-center justify-between border-t border-white/6 pt-6">
            <p className="text-sm text-white/25">
              <span className="font-bold text-white/40">{projects.length}</span> projeden 3 tanesi gösteriliyor
            </p>
            <Link
              href="/projeler"
              className="flex items-center gap-3 text-sm font-bold text-white/40 transition hover:text-bronze-light"
            >
              Tüm projeleri gör
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </Link>
          </div>
        </Section>
      </section>

      {/* ── Hakkımızda — koyu, dramatik ── */}
      <section className="noise-overlay relative overflow-hidden bg-background py-24 sm:py-32 border-t border-border-subtle">
        <Section>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="reveal-on-scroll">
              <p className="label-tag">Hakkımızda</p>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Güvenilir teslim,<br />
                <span className="text-gradient-bronze">şeffaf süreç</span>
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
                <strong>1993 yılından bugüne</strong> çeyrek asrı aşan tecrübemizle, Ankara&apos;da 
                lüks konut projeleri, yatırımlık arsa, ticari gayrimenkul ve villa 
                yapımlarında lider konumdayız. En çok aranan güvenceyi, anahtar teslim ve şeffaf 
                süreçlerimizle siz değerli yatırımcılarımıza sunuyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition hover:bg-bronze"
              >
                Kurumsal sayfamız
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </Link>
            </div>

            <div className="reveal-on-scroll grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="group glow-card relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-7 transition hover:-translate-y-2 hover:shadow-2xl hover:border-bronze/40"
                >
                  <div className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-bronze/40 group-hover:bg-bronze transition-colors" aria-hidden />
                  <p className="text-4xl font-black leading-none text-gradient-bronze sm:text-5xl">{s.num}</p>
                  <p className="mt-3 whitespace-pre-line text-sm font-medium leading-snug text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </section>

      <ContactCta />
    </>
  );
}
