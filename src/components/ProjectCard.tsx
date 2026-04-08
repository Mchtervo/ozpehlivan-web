import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type Props = { project: Project; index?: number };

const categoryLabel: Record<Project["category"], string> = {
  konut: "Konut",
  ticari: "Ticari",
  arsa: "Arsa / Villa",
};

export function ProjectCard({ project, index = 0 }: Props) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-black"
      aria-label={project.title}
    >
      {/* ── Image ── */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover object-center brightness-[0.72] saturate-75 transition-all duration-700 group-hover:scale-[1.08] group-hover:brightness-[0.45]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Permanent bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

        {/* Big decorative number */}
        <span
          className="absolute right-4 top-4 select-none font-black leading-none text-white/5 transition-all duration-700 group-hover:text-bronze/15 group-hover:scale-110 drop-shadow-xl"
          style={{ fontSize: "clamp(4rem, 10vw, 7rem)" }}
          aria-hidden
        >
          {num}
        </span>

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm">
            {categoryLabel[project.category]}
          </span>
        </div>

        {/* ── Static bottom info ── */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-700 ease-out group-hover:translate-y-8 group-hover:opacity-0">
          <p className="text-2xl font-black leading-tight text-white drop-shadow-md">{project.title}</p>
          <p className="mt-2 text-sm font-medium text-white/60 drop-shadow-sm">{project.tagline}</p>
        </div>

        {/* ── Hover Glass Pane ── */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 opacity-0 translate-y-8 backdrop-blur-2xl bg-[#0d0d0b]/60 border-t border-white/10 transition-all duration-[600ms] ease-out group-hover:opacity-100 group-hover:translate-y-0 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-bronze-light mb-3">
            {categoryLabel[project.category]}
          </p>
          <h3 className="text-3xl font-black leading-tight text-white mb-3">{project.title}</h3>
          <p className="text-sm leading-relaxed text-white/70 line-clamp-2">{project.excerpt}</p>

          {/* Specs */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.specs.slice(0, 2).map((s) => (
              <span
                key={s}
                className="relative flex items-center gap-2 rounded-lg border border-white/15 border-b-white/5 border-r-white/5 bg-gradient-to-br from-white/10 to-transparent px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
              >
                <span className="h-3 w-[1.5px] rounded-full bg-bronze shadow-[0_0_8px_rgba(184,134,11,0.6)]" aria-hidden />
                <span className="opacity-95">{s}</span>
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex items-center gap-2 text-xs font-bold text-bronze-light">
            Projeyi İncele
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">
              <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
