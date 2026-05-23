import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FloatingActions from "../../components/FloatingActions";

// إضافات مكتبة الترجمة
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { use } from "react"; // استيراد use لفك الـ Promise بشكل آمن

// --- التعديل المطلوب للـ Static Export ---
export const dynamic = "force-static";

export async function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'en' },
    { locale: 'it' }
  ];
}
// ----------------------------------------

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// إعدادات الـ Viewport لضمان التجاوب وسرعة الأداء
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2d5a27", // لون براند الشركة للمتصفحات
};

// دالة توليد الـ Metadata الشاملة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  // تحديد الرابط ديناميكياً بناءً على البيئة الحالية (Vercel أو الدومين الأساسي أو Localhost)
  const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_SITE_URL) {
      return process.env.NEXT_PUBLIC_SITE_URL;
    }
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    if (process.env.NODE_ENV === 'development') {
      return 'http://ezz-export-new.vercel.app';
    }
    return "https://ezzexport.com";
  };

  const baseUrl = getBaseUrl();

  return {
    // 1. العناوين والوصف الأساسي
    title: {
      default: t('title'),
      template: `%s | Ezz Export`
    },
    description: t('description'),
    metadataBase: new URL(baseUrl),

    // 2. الكلمات المفتاحية (Keywords)
    keywords: ["Ezz Export", "Export Egypt", "Fresh fruits export", "Egyptian vegetables", "Agricultural products Egypt"],

    // 3. روابط اللغة والأرشفة (Canonical & Hreflang)
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
        it: `${baseUrl}/it`,
        "x-default": `${baseUrl}/en`,
      },
    },

    // 4. إعدادات السوشيال ميديا (OpenGraph - Facebook/LinkedIn)
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}`,
      siteName: "Ezz Export",
      locale: locale === 'ar' ? 'ar_EG' : locale === 'it' ? 'it_IT' : 'en_US',
      type: "website",
      // images: [
      //   {
      //     url: `${baseUrl}/og-main.jpg`, 
      //     width: 1200,
      //     height: 630,
      //     alt: "Ezz Export - Egyptian Agricultural Excellence",
      //   },
      // ],
    },

    // 5. إعدادات تويتر (Twitter Card)
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      // images: [`${baseUrl}/og-main.jpg`],
    },

    // 6. تعليمات الروبوتات (Robots)
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // 7. الأيقونات (Favicons)
    icons: {
      icon: [
        { url: "/favicon.png" },
        { url: "/favicon.png", type: "image/png" },
      ],
      apple: [
        { url: "/apple-icon.png" },
      ],
    },

    // 8. التحقق من ملكية الموقع (اختياري)
    verification: {
      google: "google-site-verification-code",
    },
  };
}


export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // فك الـ Promise الخاص بـ params و messages باستخدام use لضمان استقرار الـ Static Export
  const { locale } = use(params);
  setRequestLocale(locale);
  const messages = use(getMessages());

  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          {children}
          <FloatingActions />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}