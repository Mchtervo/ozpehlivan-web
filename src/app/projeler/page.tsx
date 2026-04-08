import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projeler",
  description: `${SITE_NAME} tamamlanan ve devam eden konut, ticari ve arsa projeleri.`,
};

export default function ProjectsPage() {
  return (
    <div className="bg-background">
      {/* ── Hero header ── */}
      <section className="noise-overlay relative overflow-hidden bg-[#0d0d0b] pt-40 pb-20 sm:pt-48 sm:pb-24">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-bronze/8 blur-[100px]" aria-hidden />
        <Section className="reveal-on-scroll">
          <p className="label-tag text-bronze/70">Portföy</p>
          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Tüm{" "}
            <span className="text-gradient-bronze">Projeler</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/45">
            Konut, ticari ve arsa geliştirmelerinde öne çıkan projelerimizi
            inceleyin. Detay sayfalarında özellikler ve teknik bilgilere
            ulaşabilirsiniz.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-black text-gradient-bronze tabular-nums">{projects.length}</span>
            <span className="text-sm font-medium text-white/35 uppercase tracking-widest">Toplam Proje</span>
          </div>
        </Section>
      </section>

      {/* ── Grid ── */}
      <Section className="py-20 sm:py-28">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.slug}
              className="reveal-on-scroll"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
