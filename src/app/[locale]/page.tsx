import ExportCTA from "../../components/about/ExportCTA";
import Hero from "../../components/home/Hero";
import Products from "../../components/home/products";
import WhyChooseUs from "../../components/home/whyus";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { use } from "react"; 
import WhyEgypt from "@/components/home/WhyEgypt";
import QualitySection from "@/components/home/QualitySection";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://ezzexport.com/${locale}`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://ezzexport.com/${locale}`,
      siteName: "Ezz Export",
      type: "website",
      images: [
        {
          url: "/og-main.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: ["/og-main.jpg"],
    },
  };
}

export async function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'en' },
    { locale: 'it' }
  ];
}

export default function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(props.params);
  setRequestLocale(locale);

  return (
    <main className="relative bg-white">
      <Hero />

      <WhyChooseUs />

      <Products />

      <WhyEgypt />

      <QualitySection />

      <ExportCTA />
    </main>
  );
}