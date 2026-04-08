import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/ContactCta";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Section } from "@/components/Section";
import {
  getAllSlugs,
  getProjectBySlug,
  type Project,
} from "@/data/projects";
import { PHONE_DISPLAY, PHONE_TEL, SITE_NAME, WHATSAPP_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Proje bulunamadı" };
  return {
    title: project.title,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} | ${SITE_NAME}`,
      description: project.excerpt,
    },
  };
}

const categoryLabel: Record<Project["category"], string> = {
  konut: "Konut",
  ticari: "Ticari",
  arsa: "Arsa / Villa",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <div className="pt-[6rem]">
        {/* Hero Image Container */}
        <div className="group relative h-[min(70vh,600px)] w-full overflow-hidden bg-[#0d0d0b] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
          <Image
            src={project.heroImage}
            alt={`${project.title} görseli`}
            fill
            className="object-cover object-center brightness-[0.6] transition-transform duration-[3s] ease-out group-hover:scale-[1.03]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-black/10" aria-hidden />
          
          <div className="absolute inset-0 flex flex-col justify-end px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-6xl reveal-on-scroll">
              <Link
                href="/projeler"
                className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 pr-4 pl-2 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50 backdrop-blur-md transition-all hover:border-bronze/30 hover:bg-bronze/10 hover:text-bronze-light"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white" aria-hidden>
                  ←
                </span>
                Tüm Projeler
              </Link>
              <h1 className="mt-5 sm:mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white drop-shadow-xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-white/70 drop-shadow-md">
                {project.tagline}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Section className="py-20 sm:py-24">
        <div className="reveal-on-scroll grid gap-16 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="label-tag">Proje Özeti</p>
            <h2 className="mt-4 text-3xl font-black text-foreground sm:text-4xl">
              Geleceği tasarlayan{" "}
              <span className="text-gradient-bronze">çizgiler</span>
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              <li className="rounded-full border border-bronze/10 bg-bronze/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-bronze-dark backdrop-blur-md">
                {categoryLabel[project.category]} Projesi
              </li>
              {project.specs.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-border-subtle bg-surface px-4 py-2 text-xs font-bold text-muted shadow-sm transition hover:border-bronze hover:text-bronze"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted">
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <aside className="reveal-on-scroll h-fit rounded-2xl border border-border-subtle bg-surface p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              İletişim
            </p>
            <p className="mt-3 text-sm text-muted">
              Bu proje hakkında bilgi ve randevu için arayın.
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-4 block text-xl font-semibold text-foreground hover:text-bronze"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-bronze px-4 py-3 text-sm font-semibold text-white transition hover:bg-bronze-dark"
            >
              WhatsApp ile yazın
            </Link>
          </aside>
        </div>

        <div className="reveal-on-scroll mt-16">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Öne çıkan özellikler
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex gap-3 rounded-xl border border-border-subtle bg-background px-4 py-3 text-sm text-foreground"
              >
                <span
                  className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-bronze"
                  aria-hidden
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Galeri ── */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="noise-overlay relative overflow-hidden bg-[#0d0d0b] py-20 sm:py-28">
          <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-bronze/5 blur-[100px]" aria-hidden />
          <Section>
            <div className="reveal-on-scroll mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="label-tag text-bronze/70">Galeri</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Proje{" "}
                  <span className="text-gradient-bronze">fotoğrafları</span>
                </h2>
              </div>
              <span className="text-4xl font-black tabular-nums text-gradient-bronze leading-none">
                {String(project.gallery.length).padStart(2, "0")}
              </span>
            </div>
            <div className="reveal-on-scroll">
              <ProjectGallery images={project.gallery} title={project.title} />
            </div>
          </Section>
        </section>
      )}

      <ContactCta />
    </>
  );
}
