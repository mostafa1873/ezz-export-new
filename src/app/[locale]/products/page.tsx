import ProductsGrid from "@/components/products/ProductsGrid";
import productsData from "@/data/products.json";
import { FiArrowDown, FiCheck, FiArrowUpRight, FiGlobe, FiTarget } from "react-icons/fi";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Metadata } from "next";
import FinalCTA from "@/components/about/ExportCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({ locale, namespace: 'ProductsPage' });

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    keywords: locale === 'ar'
      ? ["تصدير فواكه", "خضروات مصرية", "عز اكسبورت", "منتجات زراعية"]
      : ["Fruit export", "Egyptian vegetables", "Ezz Export", "Agricultural products"],
    alternates: {
      canonical: `https://ezzexport.com/${locale}/products`,
    },
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: `https://ezzexport.com/${locale}/products`,
      siteName: "Ezz Export",
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t('metadata.title'),
      description: t('metadata.description'),
      images: ["/og-image.webp"],
    }
  };
}

export async function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'en' },
    { locale: 'it' }
  ];
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const allProducts = productsData.products;
  const t = await getTranslations({ locale, namespace: 'ProductsPage' });
  const isAr = locale === 'ar';

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <header className="relative min-h-screen flex flex-col overflow-hidden pt-0 md:pt-12">

        {/* النصف العلوي: أبيض */}
        <div className="h-[50vh] bg-white relative z-0 flex flex-col justify-center items-center text-center px-6">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

          <div className="relative mt-12">
            <div className="inline-flex items-center gap-2 bg-[#2d5a27]/10 text-[#2d5a27] px-4 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-[#2d5a27] rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{t('header.origin')}</span>
            </div>

            <h1 className="text-[12vw] md:text-[8.5vw] lg:text-[5.5vw] font-[1000] leading-[1] md:leading-[0.9] tracking-tighter text-[#051109] uppercase">
              {t('header.our')} <br />
              <span className="text-[#2d5a27] block">{t('header.products')}</span>
            </h1>
          </div>
        </div>

        {/* استخدمنا حساب calc لضمان السنتر في الكمبيوتر والموبايل */}
        <div className="absolute top-[calc(50vh+0px)] md:top-[calc(50vh+2rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <a
            href="#products"
            className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-[#2d5a27] shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-4 border-[#2d5a27] cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <FiArrowDown size={24} className="animate-bounce" />
          </a>
        </div>


        {/* النصف السفلي: أخضر */}
        <div className="h-[50vh] bg-[#2d5a27] relative z-10 flex items-center shadow-2xl">
          <div className="absolute inset-0 bg-black/10" />

          <div className="container mx-auto px-6 relative">
            <div className="max-w-4xl mx-auto space-y-8 text-center">
              <p className="text-white text-lg md:text-2xl font-bold uppercase tracking-tight leading-snug">
                {t.rich('header.subtitle', {
                  colored: (chunks) => <span className="text-green-600">{chunks}</span>
                })}
              </p>

              <div className="flex flex-wrap justify-center gap-8 opacity-50">
                <div className="flex items-center gap-2 text-white text-[10px] md:text-xs">
                  <FiGlobe size={14} />
                  <span className="font-black uppercase tracking-widest">
                    {t('header.stats_badges.global_shipping')}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-white text-[10px] md:text-xs">
                  <FiTarget size={14} />
                  <span className="font-black uppercase tracking-widest">
                    {t('header.stats_badges.quality_guaranteed')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* --- PRODUCTS GRID --- */}
      <section id="products" className="container mx-auto relative z-20 -mt-10 md:-mt-16">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-50">
          <ProductsGrid initialProducts={allProducts} />
        </div>
      </section>

      {/* --- B2B SECTION --- */}

      <FinalCTA />

    </main>
  );
}