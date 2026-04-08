import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 pb-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-bronze">
        404
      </p>
      <h1 className="mt-2 font-sans text-3xl font-semibold text-foreground">
        Sayfa bulunamadı
      </h1>
      <p className="mt-3 max-w-md text-muted">
        Aradığınız adres taşınmış veya silinmiş olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
