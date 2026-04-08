"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

const INTERVAL_MS = 3500;

const slides = projects.map((p) => ({
  src: p.heroImage,
  alt: `${p.title} projesi görseli`,
  title: p.title,
  tagline: p.tagline,
  slug: p.slug,
  status: p.status,
  specs: p.specs.slice(0, 3),
}));

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => { setIndex(i); startInterval(); };
  const prev = () => goTo((index - 1 + slides.length) % slides.length);
  const next = () => goTo((index + 1) % slides.length);

  const active = slides[index];
  const nextSlide = slides[(index + 1) % slides.length];

  return (
    <div className="relative min-h-svh w-full overflow-hidden bg-[#0d0d0b]">

      {/* ── Görseller — Ken Burns zoom ── */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        >
          <Image
            src={slide.src}
            alt=""
            fill
            className={`object-cover object-center brightness-[0.68] saturate-90 transition-none ${
              i === index ? "animate-ken-burns" : ""
            }`}
            sizes="100vw"
            priority={i === 0}
          />
          {/* Sol koyu gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-transparent" />
          {/* Alt fade */}
          <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/15" />
        </div>
      ))}

      {/* ── Büyük dekoratif numara ── */}
      <div
        key={`num-${index}`}
        className="absolute right-6 bottom-20 select-none font-sans text-[clamp(8rem,25vw,22rem)] font-black leading-none text-white/4 animate-fade-in-slow sm:right-12 lg:right-20"
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* ── Top progress bar ── */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[2px] bg-white/10">
        <div
          key={`prog-${index}`}
          className="h-full bg-bronze origin-left animate-progress-bar"
          style={{ animationDuration: `${INTERVAL_MS}ms` }}
        />
      </div>

      {/* ── İçerik — stagger animasyonu ── */}
      <div className="relative z-10 flex min-h-svh flex-col px-6 pb-12 pt-28 sm:px-10 lg:px-16">
        <div key={`content-${index}`} className="flex flex-1 flex-col justify-center w-full max-w-2xl">

          {/* Etiket */}
          <div
            className="mb-5 flex items-center gap-3 opacity-0"
            style={{ animation: "slideUpFade 0.5s ease forwards", animationDelay: "0ms" }}
          >
            <span className="h-px w-8 bg-bronze" aria-hidden />
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/55">
              Öne çıkan proje
            </p>
          </div>

          {/* Başlık */}
          <h1
            className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight text-white opacity-0"
            style={{ animation: "slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) forwards", animationDelay: "80ms" }}
          >
            {active.title}
          </h1>

          {/* Tagline */}
          <p
            className="mt-4 text-lg font-medium text-white/70 opacity-0 sm:text-xl"
            style={{ animation: "slideUpFade 0.6s cubic-bezier(0.22,1,0.36,1) forwards", animationDelay: "160ms" }}
          >
            {active.tagline}
          </p>

          {/* Spec etiketleri */}
          <div
            className="mt-5 flex flex-wrap gap-2.5 opacity-0"
            style={{ animation: "slideUpFade 0.6s ease forwards", animationDelay: "240ms" }}
          >
            {active.specs.map((s) => (
              <span
                key={s}
                className="group/spec relative flex items-center gap-2.5 rounded-xl border border-white/20 border-b-white/5 border-r-white/5 bg-gradient-to-br from-white/10 to-transparent px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-transform hover:-translate-y-0.5"
              >
                <span className="h-3.5 w-0.5 rounded-full bg-bronze transition-all shadow-[0_0_8px_rgba(184,134,11,0.8)] group-hover/spec:bg-bronze-light group-hover/spec:shadow-[0_0_12px_rgba(184,134,11,1)]" aria-hidden />
                <span className="opacity-95">{s}</span>
              </span>
            ))}
          </div>

          {/* Butonlar */}
          <div
            className="mt-10 flex flex-wrap items-center gap-4 opacity-0"
            style={{ animation: "slideUpFade 0.6s ease forwards", animationDelay: "320ms" }}
          >
            <Link
              href={`/projeler/${active.slug}`}
              className="group/btn shimmer-btn relative overflow-hidden inline-flex items-center gap-4 rounded-full bg-linear-to-r from-bronze to-bronze-dark pl-7 pr-2 py-2 text-sm font-bold text-white shadow-[0_0_20px_rgba(160,132,74,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(160,132,74,0.6)]"
            >
              Hemen İncele
              <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 group-hover/btn:rotate-45 group-hover/btn:bg-white text-white group-hover/btn:text-bronze">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                </svg>
              </span>
            </Link>
            <Link
              href="/projeler"
              className="group/btn relative inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 pl-7 pr-2 py-2 text-sm font-semibold text-white backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all hover:bg-white/10"
            >
              Tüm projeler
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover/btn:translate-x-1">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                  <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* ── Alt kontrol + next preview ── */}
        <div className="relative flex items-center justify-center gap-4">
          {/* Ok + Noktalar */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Önceki"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </button>

            <div className="flex items-center gap-2" role="tablist">
              {slides.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={s.title}
                  onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-400 ${
                    i === index ? "h-2 w-10 bg-bronze" : "h-2 w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Sonraki"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 active:scale-95"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </button>

            <span className="ml-1 text-[11px] font-bold tabular-nums text-white/35">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Sonraki proje önizleme */}
          <div className="absolute right-0 hidden items-center gap-3 md:flex">
            <span className="text-[10px] uppercase tracking-widest text-white/35">Sıradaki</span>
            <span className="text-sm font-semibold text-white/60">{nextSlide.title}</span>
            <span className="h-px w-6 bg-white/25" aria-hidden />
          </div>
        </div>
      </div>

      {/* Animasyon keyframe tanımları */}
      <style>{`
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes kenBurns {
          from { transform: scale(1); }
          to   { transform: scale(1.07); }
        }
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes fadeInSlow {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .shimmer-btn::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: skewX(-20deg);
          transition: none;
        }
        .shimmer-btn:hover::after {
          animation: shimmerSweep 0.8s ease-in-out forwards;
        }
        @keyframes shimmerSweep {
          100% { left: 200%; }
        }
        .animate-ken-burns {
          animation: kenBurns var(--interval, 3.5s) ease-in-out forwards;
        }
        .animate-progress-bar {
          animation: progressBar linear forwards;
          transform-origin: left;
        }
        .animate-fade-in-slow {
          animation: fadeInSlow 1.2s ease forwards;
        }
        .duration-400 { transition-duration: 400ms; }
      `}</style>
    </div>
  );
}
