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

    return {
        title: t('metadata.title'),
        description: t('metadata.description'),
        // إضافة كلمات مفتاحية لرفع تقييم الـ SEO للكتالوج
        keywords: "Ezz Export Catalog, Agro Products Export, IQF Vegetables, Fresh Fruits, Egyptian Agriculture Export",
        alternates: {
            // تم تعديل المسار ليكون catalog بدلاً من contact
            canonical: `https://ezzexport.com/${locale}/catalog`,
            languages: {
                'en': 'https://ezzexport.com/en/catalog',
                'ar': 'https://ezzexport.com/ar/catalog',
                'it': 'https://ezzexport.com/it/catalog',
                'x-default': 'https://ezzexport.com/en/catalog',
            },
        },
        openGraph: {
            title: t('metadata.title'),
            description: t('metadata.description'),
            url: `https://ezzexport.com/${locale}/catalog`,
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