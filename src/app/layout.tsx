import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SITE_KEYWORDS } from "@/lib/site";
import "./globals.css";

/* Poppins — premium, geometrik, evrensel modern font */
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Ankara Lüks Konut & Satılık Arsa Ticari Projeler`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${poppins.variable} min-h-screen flex flex-col antialiased text-foreground bg-background`}
      >
        <ScrollReveal />
        
        {/* Global Premium Aurora Lighting */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-transparent" aria-hidden>
          <div className="absolute top-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-bronze/4 blur-[120px] mix-blend-screen float-anim" />
          <div className="absolute bottom-[-10%] right-[-10%] h-[40vw] w-[40vw] rounded-full bg-bronze/3 blur-[100px] mix-blend-screen float-anim" style={{ animationDirection: "reverse", animationDuration: "12s" }} />
        </div>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
