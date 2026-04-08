import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";
import { ContactCta } from "@/components/ContactCta";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda | 1993'ten Bugüne Güven ve Kalite",
  description: `${SITE_NAME} — 1993 yılından günümüze Ankara'da en iyi inşaat firması, lüks konut, satılık daire ve ticari proje geliştirme anlayışımız.`,
};

const values = [
  {
    num: "01",
    title: "Şeffaflık",
    body: "Her aşamada müşteriyle açık iletişim; takvim, maliyet ve kalite raporlarında gizli bilgi olmaz.",
  },
  {
    num: "02",
    title: "Kalite",
    body: "Seçilen her malzeme, her işçilik kalemi uzun ömürlü yapı ve yüksek yatırım değeri odağıyla belirlenir.",
  },
  {
    num: "03",
    title: "Güvenlik",
    body: "Şantiyeden teslim sonrasına, 7/24 kamera sistemi ve güvenlik donatılarıyla sakinlerin huzurunu önceliklendiririz.",
  },
  {
    num: "04",
    title: "Sürdürülebilirlik",
    body: "Çevre duyarlılığı ve verimli enerji kullanımı; hem gezegenimize hem gelecek nesillere saygı.",
  },
];

const timeline = [
  { year: "1993", event: "Sektöre adım atılması, temel değerlerin inşası ve köklü güvenin başlangıcı" },
  { year: "2015", event: "Sincan ve Etimesgut bölgesinde ardışık elit konut projeleri" },
  { year: "2018", event: "Bulvar Yenikent — 48 daireli prestijli lüks konut kompleksi" },
  { year: "2020", event: "Ayaş Orman Evleri arsa projesi, yatırımlık doğa içi villa parselleri" },
  { year: "2024", event: "30+ tamamlanan proje, Ankara'nın en güvenilen firmalarından biri olma tescili" },
];

export default function AboutPage() {
  return (
    <div className="bg-background">

      {/* ── Hero: koyu, bold ── */}
      <section className="noise-overlay relative overflow-hidden bg-[#0d0d0b] pt-40 pb-24 sm:pt-48 sm:pb-32">
        {/* Yavaş hareket eden aurora efekti */}
        <div className="pointer-events-none absolute left-1/4 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/10 blur-[150px] float-anim" aria-hidden />
        <div className="pointer-events-none absolute right-1/4 top-20 h-[500px] w-[500px] translate-x-1/2 rounded-full border border-bronze/5 bg-[#0d0d0b]/50 blur-[100px] float-anim" style={{ animationDirection: "reverse", animationDuration: "10s" }} aria-hidden />

        <Section>
          <div className="reveal-on-scroll max-w-4xl">
            <p className="label-tag text-bronze/70">Kurumsal</p>
            <h1 className="mt-4 sm:mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] sm:leading-[1.0] tracking-tight text-white drop-shadow-lg">
              Ankara&apos;da inşa,<br />
              <span className="text-gradient-bronze">geleceğe yatırım</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/45">
              <strong>1993 yılından bugüne</strong> edindiği köklü tecrübeyle {SITE_NAME}, en çok tercih edilen 
              lüks konut, ticari gayrimenkul ve yatırım projelerinde güvenin 
              merkezidir. Ankara genelinde planlamadan teslimata tüm süreci yönetiriz.
            </p>
          </div>

          {/* Stats row */}
          <div className="reveal-on-scroll mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { num: "+30", label: "Tamamlanan Proje" },
              { num: "+1000", label: "Mutlu Müşteri" },
              { num: "7/24", label: "Güvenlik" },
              { num: "100%", label: "Anahtar Teslim" },
            ].map((s) => (
              <div key={s.num} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:-translate-y-2 hover:border-bronze/30 hover:shadow-2xl hover:shadow-bronze/10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-bronze/20 blur-[30px] transition-all duration-500 group-hover:bg-bronze/40 group-hover:blur-[40px]" aria-hidden />
                <div className="relative">
                  <p className="text-4xl font-black tracking-tight text-gradient-bronze sm:text-5xl">{s.num}</p>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* ── Değerlerimiz ── */}
      <Section className="py-24 sm:py-32">
        <div className="reveal-on-scroll mb-14">
          <p className="label-tag">Değerlerimiz</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Bizi tanımlayan{" "}
            <span className="text-gradient-bronze">ilkeler</span>
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.num}
              className="reveal-on-scroll group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:border-bronze/40 hover:shadow-[0_20px_40px_-15px_rgba(184,134,11,0.15)]"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="pointer-events-none absolute -bottom-6 -right-2 text-[120px] font-black leading-none text-foreground/[0.03] transition-all duration-500 group-hover:text-bronze/5 group-hover:scale-110">
                {v.num}
              </span>
              <div className="relative">
                <span className="inline-block text-4xl font-black text-gradient-bronze opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                  {v.num}
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Timeline ── */}
      <section className="noise-overlay relative overflow-hidden bg-[#0d0d0b] py-24 sm:py-32">
        <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-bronze/6 blur-[100px]" aria-hidden />
        <Section>
          <div className="reveal-on-scroll mb-14">
            <p className="label-tag text-bronze/70">Tarihçe</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Yıllar içinde{" "}
              <span className="text-gradient-bronze">büyüyen iz</span>
            </h2>
          </div>
          <div className="relative space-y-0">
            {/* Vertical line (glow fade) */}
            <div className="absolute left-[3.5rem] top-4 bottom-4 w-px bg-gradient-to-b from-bronze via-white/15 to-transparent hidden sm:block" aria-hidden />

            {timeline.map((t, i) => {
              const isLast = i === timeline.length - 1;
              return (
                <div
                  key={t.year}
                  className="reveal-on-scroll group flex items-start gap-8 py-10 border-b border-white/6 last:border-0 relative"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-14 shrink-0 text-right mt-0.5">
                    <span className="text-xl font-black text-gradient-bronze tabular-nums transition-all duration-300 group-hover:brightness-125">
                      {t.year}
                    </span>
                  </div>
                  {/* Dot */}
                  <div className="relative hidden sm:flex h-full items-start pt-2">
                    {/* Ring for last active year */}
                    {isLast ? (
                      <div className="relative flex h-4 w-4 items-center justify-center -ml-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bronze opacity-50" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-bronze bg-white" />
                      </div>
                    ) : (
                      <div className="h-2 w-2 rounded-full border-2 border-[#1c1a16] bg-[#0d0d0b] -ml-1 transition-all duration-300 group-hover:scale-150 group-hover:border-bronze group-hover:bg-bronze" />
                    )}
                  </div>
                  <p className="flex-1 text-base leading-relaxed text-white/55 transition-colors group-hover:text-white mt-0.5">
                    {t.event}
                  </p>
                </div>
              );
            })}
          </div>
        </Section>
      </section>

      {/* ── Metin & Görsel Galerisi ── */}
      <Section className="reveal-on-scroll py-24 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Asymetrical Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-subtle hover:border-bronze/20 transition-colors">
                <Image src="/images/projects/bulvar-yenikent.png" alt="Özpehlivan İnşaat Mimari 1" fill className="object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-subtle hover:border-bronze/20 transition-colors">
                <Image src="/images/projects/prestijli-ticari-alan.png" alt="Özpehlivan İnşaat Mimari 2" fill className="object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border-subtle hover:border-bronze/20 transition-colors">
                <Image src="/images/projects/ayas-orman-evleri.png" alt="Özpehlivan İnşaat Mimari 3" fill className="object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Her projede öncelikle lokasyonu, ulaşımı ve çevre dinamiklerini
                değerlendiriyor; kullanıcı deneyimini merkeze alan plan çözümleriyle
                yaşam ve yatırım potansiyelini güçlendiriyoruz.
              </p>
              <p>
                Konut projelerinde ferahlık ve güvenlik donatıları; ticari projelerde
                vitrin ve erişim; arsa ve villa oturumlarında altyapı ve peyzaj
                bütünlüğü odağımızdır.
              </p>
              <p>
                Sözleşmeden şantiye disiplinine, teslim sonrası iletişime kadar tüm
                süreçlerde net takvim ve raporlanabilir kalite anlayışıyla çalışıyoruz.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/projeler"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background transition hover:bg-bronze hover:scale-105"
              >
                Projeleri İncele
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </Link>
              <Link
                href="/#iletisim"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 px-8 py-4 text-sm font-bold text-foreground transition hover:border-bronze hover:text-bronze"
              >
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <ContactCta />
    </div>
  );
}
