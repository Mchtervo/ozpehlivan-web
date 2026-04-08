export type ProjectCategory = "konut" | "ticari" | "arsa";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  excerpt: string;
  description: string[];
  specs: string[];
  features: string[];
  category: ProjectCategory;
  status: "satışta" | "tamamlandı";
  coverImage: string;   // kart görseli — her yerde (drone/dikey)
  heroImage: string;    // slider görseli — sadece ana sayfa hero
  gallery?: string[];   // opsiyonel galeri görselleri
};

export const projects: Project[] = [
  {
    slug: "zirova-yasam",
    title: "Zirova Yaşam",
    tagline: "Modern yaşamın yeni adresi",
    excerpt:
      "83 m², 2+1 Amerikan mutfaklı daireler; konforlu yaşam ve güçlü konum.",
    description: [
      "Zirova Yaşam, günlük konforu ve şehirle bağınızı dengeleyen, özenle planlanmış bir konut projesidir. Ferah daire planları ve sosyal donatılarla aile yaşamına uygun bir ortam sunar.",
      "Ayaş Yolu'na yakın konumu sayesinde ulaşım avantajı yüksektir; proje içi güvenlik ve yeşil alan düzenlemeleriyle huzurlu bir yaşam alanı hedeflenmiştir.",
    ],
    specs: ["83 m² yaşam alanı", "2+1 plan", "Amerikan mutfak"],
    features: [
      "Özel otopark",
      "7/24 güvenlik",
      "Oyun alanı",
      "Basketbol sahası",
      "Ayaş Yolu'na yürüme mesafesi",
    ],
    category: "konut",
    status: "tamamlandı",
    coverImage: "/images/projects/zirova-yasam-mobile.png",
    heroImage: "/images/projects/zirova-yasam.png",
    gallery: Array.from({ length: 17 }, (_, i) =>
      `/images/projects/zirova-gallery/${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    slug: "bulvar-yenikent",
    title: "Bulvar Yenikent",
    tagline: "Modern şehir yaşamında yeni bir ayrıcalık",
    excerpt:
      "4+1 lüks daireler, 178 m² yaşam alanı; prestijli yaşam ve ticari değer bir arada.",
    description: [
      "Bulvar Yenikent, geniş metrekareli daireleri ve caddeye hakim konumuyla hem yaşam hem yatırım odaklı bir projedir.",
      "Ticari üniteler ve site içi donatılarla günlük ihtiyaçlara yakın, güvenli ve prestijli bir yaşam sunar.",
    ],
    specs: ["178 m² yaşam alanı", "4+1 lüks daireler", "Ticari üniteler"],
    features: [
      "Açık özel otopark",
      "Çocuk parkı",
      "7/24 güvenlik",
      "Ticari dükkanlar",
    ],
    category: "konut",
    status: "tamamlandı",
    coverImage: "/images/projects/bulvar-yenikent-mobile.png",
    heroImage: "/images/projects/bulvar-yenikent.png",
    gallery: Array.from({ length: 24 }, (_, i) =>
      `/images/projects/bulvar-gallery/${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    slug: "yakut-has-bahceleri",
    title: "Yakut Has Bahçeleri",
    tagline: "Doğayla iç içe ayrıcalıklı yaşam",
    excerpt:
      "50 bahçelik seçkin yaşam ve yatırım alanı; 420 m² özel bahçe imkânı.",
    description: [
      "Yakut Has Bahçeleri, doğa ile iç içe, planlı altyapısıyla uzun vadeli yaşam ve yatırım için tasarlanmıştır.",
      "Geniş bahçe alanları, güvenlik ve ulaşım avantajıyla öne çıkar.",
    ],
    specs: ["50 parsel", "420 m² özel bahçe alanı", "Altyapı hazır"],
    features: [
      "Ayaş Yolu'na yakın kolay ulaşım",
      "7/24 aktif kamera sistemi",
      "Elektrik, su ve güvenlik altyapısı",
      "Otomatik aydınlatma direği",
    ],
    category: "arsa",
    status: "satışta",
    coverImage: "/images/projects/yakut-has-bahceleri-mobile.png",
    heroImage: "/images/projects/yakut-has-bahceleri.png",
    gallery: Array.from({ length: 21 }, (_, i) =>
      `/images/projects/yakut-gallery/${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    slug: "prestijli-ticari-alan",
    title: "Prestijli Ticari Alan",
    tagline: "Merkezi konumda prestijli ticari fırsat",
    excerpt:
      "Her biri yaklaşık 85 m² kullanım alanı; vitrin değeri yüksek ticari üniteler.",
    description: [
      "Sincan'ın hareketli bölgelerine yakın konumuyla ticari görünürlüğü güçlendiren bu proje, mağaza ve ofis kullanımına uygundur.",
      "Ulaşım bağlantıları ve çevredeki iş hacmi, sürdürülebilir kira ve iş potansiyeli sunar.",
    ],
    specs: ["~85 m² kullanım alanı", "Çoklu ünite", "Merkezi konum"],
    features: [
      "Sincan merkeze yakın konum",
      "Ayaş Caddesi ve ASKİ Sincan Şube Müdürlüğü'ne yakın",
      "Ayaş Yolu bağlantısıyla güçlü ulaşım",
      "Sincan 1. Organize Sanayi Bölgesi'ne yakın",
    ],
    category: "ticari",
    status: "satışta",
    coverImage: "/images/projects/prestijli-ticari-alan.png",
    heroImage: "/images/projects/prestijli-ticari-alan-hero.png",
    gallery: Array.from({ length: 10 }, (_, i) =>
      `/images/projects/prestijli-gallery/${String(i + 1).padStart(2, "0")}.png`
    ),
  },
  {
    slug: "ayas-orman-evleri",
    title: "Ayaş Orman Evleri",
    tagline: "Doğayla iç içe ayrıcalıklı yaşam",
    excerpt:
      "Ayaş'a 3 km, yola 500 m; parsel başına 500 m² bahçe ve hazır altyapı.",
    description: [
      "Ayaş Orman Evleri, yeşil çevre ve düşük yoğunluklu yaşam arayanlar için tasarlanmıştır.",
      "Her ünite için geniş bahçe alanı, güvenlik altyapısı ve yönetim binası ile sürdürülebilir bir site konsepti sunar.",
    ],
    specs: [
      "Ayaş merkeze 3 km",
      "Ayaş yoluna 500 m",
      "500 m² özel bahçe",
    ],
    features: [
      "Elektrik altyapısı hazır",
      "Kanalizasyon hattı tamamlandı",
      "7/24 aktif kamera sistemi",
      "Çim çit ile çevre düzenlemesi",
      "Su deposu desteği",
      "Yönetim binası",
    ],
    category: "arsa",
    status: "satışta",
    coverImage: "/images/projects/ayas-orman-evleri.png",
    heroImage: "/images/projects/ayas-orman-evleri-hero.png",
    gallery: Array.from({ length: 29 }, (_, i) =>
      `/images/projects/ayas-gallery/${String(i + 1).padStart(2, "0")}.png`
    ),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
