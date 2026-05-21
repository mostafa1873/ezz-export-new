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

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    alternates: {
      canonical: `https://ezzexport.com/${locale}/contact`,
    },
    openGraph: {
      title: t('metadata.title'),
      description: t('metadata.description'),
      url: `https://ezzexport.com/${locale}/contact`,
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
    <main className="bg-[#fdfcf9] min-h-screen pb-20 selection:bg-[#1a3a16] selection:text-white text-start">

      {/* --- Header Section --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d5a27]/5 border border-[#2d5a27]/10">
              <Mail size={14} className="text-[#2d5a27]" />
              <span className="text-[#2d5a27] text-[10px] font-black uppercase tracking-[0.2em]">
                {t('badge')}
              </span>
            </div>
            <h1 className="text-6xl md:text-9xl text-[#1a3a16] tracking-tight leading-tight">
              {t.rich('title', {
                touch: (chunks) => <span className="font-sans not-italic font-[1000] uppercase block md:inline">{chunks}</span>
              })}
            </h1>
            <p className="text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* --- Main Grid Section --- */}
      <section className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Contact Info (Left) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#1a3a16] text-[#f4f1ea] p-10 rounded-[3rem] flex flex-col justify-between items-center text-center min-h-[300px] shadow-xl">
              <Globe className="opacity-20" size={40} />

              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">{t('globalExports')}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-[250px]">
                  {t('servingCountries')}
                </p>

                {/* Social Media Links */}
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://web.facebook.com/people/Ezz-Export/61582088223661/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a3a16] transition-all border border-white/5 shadow-sm"
                  >
                    <Facebook size={18} />
                  </a>

                  <a
                    href="https://www.instagram.com/ezzexport/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a3a16] transition-all border border-white/5 shadow-sm"
                  >
                    <Instagram size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/ezz-export"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a3a16] transition-all border border-white/5 shadow-sm"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-[3rem] space-y-8 shadow-sm">
              <a href="tel:+201109458208" className="block group">
                <InfoItem
                  icon={<Phone className="text-[#2d5a27] group-hover:scale-110 transition-transform rtl:-scale-x-100" />}
                  title={t('directCall')}
                  value="+20 1109458208"
                  isPhone={true}
                />
              </a>

              <a href="mailto:info@ezzexport.com" className="block group">
                <InfoItem
                  icon={<Mail className="text-[#2d5a27] group-hover:scale-110 transition-transform" />}
                  title={t('emailUs')}
                  value="info@ezzexport.com"
                />
              </a>

              <div className="block">
                <InfoItem
                  icon={<Clock className="text-[#2d5a27]" />}
                  title={t('workingHours')}
                  value={t('workingHoursValue')}
                />
              </div>
            </div>
          </div>

          {/* Form Section (Right) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 p-8 md:p-16 rounded-[3rem] shadow-sm relative overflow-hidden text-start">
              <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-32 h-32 bg-[#2d5a27]/5 rounded-bl-full rtl:rounded-bl-none rtl:rounded-br-full pointer-events-none" />
              <div className="mb-12">
                <h2 className="text-3xl font-[1000] text-[#1a3a16] uppercase tracking-tighter mb-2">
                  {t('sendInquiry')}
                </h2>
                <p className="text-slate-400 text-sm font-medium italic">
                  {t('inquirySubtitle')}
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="mt-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto h-[450px] rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            style={{ border: 0 }}
            allowFullScreen
          />
          <div className="
  absolute bottom-6
  left-1/2 -translate-x-1/2
  w-[90%] max-w-md
  sm:w-auto sm:max-w-xs
  sm:left-8 sm:translate-x-0
  rtl:left-auto rtl:right-1/2 rtl:translate-x-1/2
  sm:rtl:right-8 sm:rtl:translate-x-0
  bg-[#1a3a16] text-white
  p-6 rounded-3xl shadow-2xl
  text-start
">
            <div className="flex items-start gap-4">
              <MapPin className="shrink-0 text-[#2d5a27] mt-1" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">{t('ourLocation')}</p>
                <p className="text-sm font-bold leading-tight">{t('addressValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- Helper Components ---

function InfoItem({ icon, title, value, isPhone }: any) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-2xl bg-[#f8fcf7] flex items-center justify-center border border-slate-50 shrink-0">
        {icon}
      </div>
      <div className="text-start">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{title}</p>
        <p
          className="text-[#1a3a16] font-bold text-sm tracking-tight"
          dir={isPhone ? "ltr" : "auto"}
        >
          {value}
        </p>
      </div>
    </div>
  );
}