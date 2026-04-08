"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Props = { images: string[]; title: string };

export function ProjectGallery({ images, title }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, prev, next]);

  const openAt = (i: number) => { setIdx(i); setOpen(true); };

  return (
    <>
      {/* ── Grid ── */}
      <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(i)}
            className="group relative mb-3 block w-full overflow-hidden rounded-xl bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            aria-label={`${title} — görsel ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              width={600}
              height={800}
              className="w-full object-cover brightness-90 transition-all duration-500 group-hover:scale-[1.04] group-hover:brightness-75"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            {/* Counter badge */}
            <span className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-bold text-white/60 backdrop-blur-sm">
              {String(i + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal
          aria-label="Galeri"
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Kapat"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-white/70 backdrop-blur-sm">
            {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/25 sm:left-6"
            aria-label="Önceki"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative mx-16 sm:mx-24 max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              key={idx}
              src={images[idx]}
              alt={`${title} ${idx + 1}`}
              width={900}
              height={1200}
              className="max-h-[88vh] w-auto max-w-[85vw] rounded-xl object-contain shadow-2xl"
              priority
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/25 sm:right-6"
            aria-label="Sonraki"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
              <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 overflow-x-auto px-4 pb-1">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className={`relative h-12 w-9 shrink-0 overflow-hidden rounded-md transition-all ${
                  i === idx ? "ring-2 ring-bronze opacity-100" : "opacity-40 hover:opacity-70"
                }`}
                aria-label={`Görsel ${i + 1}`}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="36px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
