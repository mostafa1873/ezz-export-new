import React from "react";
import { Mail, Phone, MapPin, Globe, Instagram, Linkedin, Facebook, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { use } from "react";

// إضافة الـ Metadata للصفحة
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Contact' });

  // توحيد الرابط النشط ليطابق باقي صفحات الموقع والـ Layout لمنع تشتيت الروبوتات
  const baseUrl = "https://ezz-export-new.vercel.app";

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    metadataBase: new URL(baseUrl), // إضافة الـ Base لضمان قراءة مسار الصورة النسبي بشكل سليم
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
    },
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: `${baseUrl}/${locale}/contact`,
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

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations('Contact');

  return (
    <main className="bg-[#fdfcf9] min-h-screen pb-20 selection:bg-[#1a3a16] selection:text-white text-start overflow-x-hidden">

      {/* --- Main Section --- */}
      <section className="relative min-h-screen w-full flex items-center pt-32 pb-8 lg:pt-32 lg:pb-12 px-3 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">

          {/* Header */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-1 lg:row-start-1 flex flex-col items-center text-center lg:items-start lg:text-start space-y-4 shrink-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d5a27]/5 border border-[#2d5a27]/10">
              <Mail size={14} className="text-[#2d5a27]" />
              <span className="text-[#2d5a27] text-[10px] font-black uppercase tracking-[0.2em]">
                {t('badge')}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl xl:text-6xl text-[#1a3a16] tracking-tight leading-tight font-black px-2">
              {t.rich('title', {
                touch: (chunks) => <span className="font-sans not-italic uppercase block md:inline">{chunks}</span>
              })}
            </h1>

            <p className="text-slate-500 max-w-xl text-sm md:text-base font-medium leading-relaxed px-4">
              {t('description')}
            </p>
          </div>

          {/* Form Section */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 flex flex-col justify-center px-1">
            <div className="bg-white border border-slate-100 p-5 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-sm relative overflow-hidden text-start flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d5a27]/5 rounded-bl-full pointer-events-none" />

              <div className="mb-6 shrink-0 text-center lg:text-start">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a3a16] uppercase tracking-tighter mb-1">
                  {t('sendInquiry')}
                </h2>
                <p className="text-slate-400 text-xs font-medium italic">
                  {t('inquirySubtitle')}
                </p>
              </div>

              <ContactForm />
            </div>
          </div>

          {/* Contact Cards */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-1 lg:row-start-2 flex flex-col sm:flex-row lg:flex-col gap-4 px-1">
            <div className="flex-1 bg-[#1a3a16] text-[#f4f1ea] p-6 rounded-[2rem] flex flex-col justify-between items-center text-center min-h-[200px] shadow-xl">
              <Globe className="opacity-20" size={32} />
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-bold mb-1">{t('globalExports')}</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4 max-w-[220px]">
                  {t('servingCountries')}
                </p>
                <div className="flex gap-3 justify-center">
                  {/* Social links stay same */}
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white border border-slate-100 p-6 rounded-[2rem] space-y-5 shadow-sm">
              <InfoItem icon={<Phone className="text-[#2d5a27]" />} title={t('directCall')} value="+20 1109458208" isPhone={true} />
              <InfoItem icon={<Mail className="text-[#2d5a27]" />} title={t('emailUs')} value="info@ezzexport.com" />
              <InfoItem icon={<Clock className="text-[#2d5a27]" />} title={t('workingHours')} value={t('workingHoursValue')} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-10 px-3 md:px-6">
        <div className="max-w-7xl mx-auto h-[400px] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl relative">
          <iframe
            src="https://www.google.com/maps/embed?..." // تأكد من الرابط الصحيح
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}

function InfoItem({ icon, title, value, isPhone }: any) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="w-10 h-10 rounded-xl bg-[#f8fcf7] flex items-center justify-center border border-slate-50 shrink-0">
        {icon}
      </div>
      <div className="text-start truncate">
        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{title}</p>
        <p className="text-[#1a3a16] font-bold text-sm truncate" dir={isPhone ? "ltr" : "auto"}>
          {value}
        </p>
      </div>
    </div>
  );
}