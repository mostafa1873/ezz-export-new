import AboutUsSection from '@/components/about/AnimatedSection';
import React from 'react';
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from 'next';
import { use } from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  return {
    title: t('title'),
    description: t('description'),
    // 1. تحديد الرابط الأصلي للصفحة
    alternates: {
      canonical: `https://ezzexport.com/${locale}/about`,
    },
    // 2. تحسين ظهور الرابط عند المشاركة
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://ezzexport.com/${locale}/about`,
      images: [
        {
          url: "/og-image.webp", // نفس الصورة الموحدة أو صورة خاصة بـ About
          width: 1200,
          height: 630,
        },
      ],
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

export default function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <div>
      <AboutUsSection />
    </div>
  );
}