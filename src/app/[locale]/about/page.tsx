import AboutUsSection from '@/components/about/AnimatedSection';
import React from 'react';
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from 'next';
import { use } from "react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'About' });

  // توحيد الرابط النشط ليطابق الصفحة الرئيسية والـ Layout
  const baseUrl = "https://ezz-export-new.vercel.app";

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl), // إضافة الـ Base لضمان قراءة مسار الصورة النسبي بشكل سليم

    // 1. تحديد الرابط الأصلي للصفحة
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
    },
    // 2. تحسين ظهور الرابط عند المشاركة
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/about`,
      images: [
        {
          url: "/og-main.jpg", // نفس الصورة الموحدة أو صورة خاصة بـ About
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