"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = { images: string[]; title: string };

export function ProjectGallery({ images, title }: Props) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);
  const close = () => setOpen(false);

  /* Keyboard navigation */
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

  /* Auto-scroll active thumbnail into view */
  useEffect(() => {
    if (!open || !thumbRef.current) return;
    const active = thumbRef.current.children[idx] as HTMLElement | undefined;
    active?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [idx, open]);

  const openAt = (i: number) => { setIdx(i); setOpen(true); };

  /* Touch swipe handlers */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <>
      {/* ── Grid — satır sırası (row-flow) ── */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => openAt(i)}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze"
            aria-label={`${title} — görsel ${i + 1}`}
          >
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover brightness-90 transition-all duration-500 group-hover:scale-[1.05] group-hover:brightness-70"
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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal
          aria-label="Galeri"
        >
          {/* Top bar: close + counter */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 z-10" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold text-white/80 backdrop-blur-sm">
              {String(idx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
              aria-label="Kapat"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>

          {/* Image area with swipe support */}
          <div
            className="relative flex w-full flex-1 items-center justify-center px-14 sm:px-20"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-2 sm:left-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/25 active:scale-95 touch-manipulation"
              aria-label="Önceki"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            <Image
              key={idx}
              src={images[idx]}
              alt={`${title} ${idx + 1}`}
              width={900}
              height={1200}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              priority
            />

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-2 sm:right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/25 active:scale-95 touch-manipulation"
              aria-label="Sonraki"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            className="w-full shrink-0 px-4 pb-4 pt-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              ref={thumbRef}
              className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none"
              style={{ scrollbarWidth: "none" }}
            >
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                  className={`relative h-14 w-10 shrink-0 overflow-hidden rounded-md transition-all touch-manipulation ${
                    i === idx ? "ring-2 ring-bronze opacity-100 scale-110" : "opacity-35 hover:opacity-60"
                  }`}
                  aria-label={`Görsel ${i + 1}`}
                >
                  <Image src={src} alt="" fill className="object-cover" sizes="40px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
