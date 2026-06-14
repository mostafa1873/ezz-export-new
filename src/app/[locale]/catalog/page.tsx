import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { use } from "react";
import CatalogPage from "@/components/CatalogPage";

// إضافة الـ Metadata للصفحة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    // تم تحويل الـ namespace إلى catalog لسحب نصوص الأرشفة الصحيحة
    const t = await getTranslations({ locale, namespace: 'catalog' });

    // توحيد الرابط النشط ليطابق باقي صفحات الموقع والـ Layout
    const baseUrl = "https://ezz-export-new.vercel.app";

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
        metadataBase: new URL(baseUrl), // إضافة الـ Base لضمان قراءة مسار الصورة النسبي بشكل سليم
        // إضافة كلمات مفتاحية لرفع تقييم الـ SEO للكتالوج
        keywords: "Ezz Export Catalog, Agro Products Export, IQF Vegetables, Fresh Fruits, Egyptian Agriculture Export",
        alternates: {
            // تم تعديل المسار ليكون catalog بدلاً من contact
            canonical: `${baseUrl}/${locale}/catalog`,
            languages: {
                'en': `${baseUrl}/en/catalog`,
                'ar': `${baseUrl}/ar/catalog`,
                'it': `${baseUrl}/it/catalog`,
                'x-default': `${baseUrl}/en/catalog`,
            },
        },
        openGraph: {
            title: t('metadata.title'),
            description: t('metadata.description'),
            url: `${baseUrl}/${locale}/catalog`,
            siteName: "Ezz Export",
            images: [
                {
                    url: "/og-main.jpg",
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
            images: ["/og-main.jpg"],
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

// تم الحفاظ على بنية الـ Component وطريقة التعامل مع params كما هي تماماً مع توجيه الـ translation للكتالوج
export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = use(params);
    setRequestLocale(locale);
    const t = useTranslations('catalog');

    return (
        <>

            <CatalogPage />

        </>
    );
}