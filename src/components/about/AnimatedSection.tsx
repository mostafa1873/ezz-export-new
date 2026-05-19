"use client";

import React, { useState, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGlobe, FiPhone, FiStar } from "react-icons/fi";
import arch from "../../assets/about-hero.webp";
import about from "../../assets/about-main.webp";
import Link from "next/link";
import Seson from "./seson";
import ExportCTA from "./ExportCTA";
import pro1 from "../../assets/pro1.webp";
import pro2 from "../../assets/pro2.webp";
import pro3 from "../../assets/pro3.webp";
import { useLocale, useTranslations } from "next-intl";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const steps = [
  {
    img: pro1,
    id: "01",
    key: "step1"
  },
  {
    img: pro2,
    id: "02",
    key: "step2"
  },
  {
    img: pro3,
    id: "03",
    key: "step3"
  },
];

const HeroSection = memo(() => {
  const t = useTranslations('About.Hero');
  const locale = useLocale();

  return (

    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-white pt-8" dir="ltr">
      <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
        <div className="flex-1 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        <div className="flex-1 bg-[#051109] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a27]/20 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-20 py-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-24">

          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "circOut" }}
            viewport={{ once: true }}
            className="w-full lg:max-w-2xl flex flex-col items-center lg:items-start rtl:ms-auto lg:rtl:pr-10 relative z-20 mt-10"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* العنوان */}
            <h1 className="font-black uppercase tracking-[-0.06em] leading-[0.85] text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw] text-center lg:text-start">
              <span className="block text-[#051109] tracking-normal">{t('pure')}</span>
              <span className="block text-[#2d5a27] mt-1 tracking-normal">{t('impact')}</span>
            </h1>

            {/* النصوص */}
            <div className="mt-8 lg:mt-12 flex flex-col gap-3 items-center lg:items-start text-center lg:text-start">
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-tight leading-snug">
                {t.rich('subtitle', {
                  green: (chunks) => <span className="text-[#2d5a27]">{chunks}</span>,
                  br: () => <br className="hidden lg:block" />
                })}
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-tight leading-snug">
                {t('subtitle-1')}
              </p>
            </div>

            {/* زر التحميل + الأيقونات - تم تعديل التنسيق هنا للموبايل */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-8 w-full"
            >
              {/* زر الكتالوج */}
              <a
                href="/catalog.pdf"
                download
                className="group relative inline-flex mb-10 lg:mb-0 items-center gap-3 bg-[#051109] text-white px-8 py-4 rounded-full overflow-hidden transition-all hover:ring-2 hover:ring-[#2d5a27] hover:ring-offset-2 hover:bg-[#2d5a27] shrink-0"
              >
                <span className="relative z-10 text-base font-bold uppercase tracking-wider">
                  {t('catalog')}
                </span>
                <div className="relative z-10 bg-white/20 rounded-full p-2 group-hover:bg-white group-hover:text-[#2d5a27] transition-colors">
                  <FiArrowDown className="w-4 h-4" />
                </div>
              </a>

              {/* أيقونات السوشيال */}
              <div className="items-center gap-4 hidden lg:flex">
                {[
                  { Icon: FaFacebookF, href: "https://web.facebook.com/profile.php?id=61582088223661" },
                  { Icon: FaInstagram, href: "https://www.instagram.com/ezzexport/?fbclid=IwY2xjawNsKVpleHRuA2FlbQIxMQBicmlkETEwN2xjblIzdTRhNmpKZ2tPAR7k_hx9Tk12NMj34rMICVpeqJavdX_0OOiGNwksXLF4QkQh6xjWh5Z9BqjD0w_aem_EiVZGu7OHrur6W-PHTp5Eg" },
                  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/ezz-export" }
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#2d5a27] hover:text-white hover:border-[#2d5a27] hover:-translate-y-1 transition-all duration-300 shadow-sm bg-white shrink-0"
                  >
                    <item.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>


          {/* CARD */}
          <motion.div
            whileHover={{ rotateY: -8, rotateX: 8 }}
            className="relative w-full max-w-sm sm:max-w-md aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] sm:rounded-[4rem] p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden transform-gpu will-change-transform mx-auto lg:mx-0"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-start text-white relative z-10">
              <div className="text-start">
                <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50">{t('originLabel')}</p>
                <p className="font-bold uppercase italic tracking-tight">{t('originValue')}</p>
              </div>
              <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                <FiArrowUpRight className={locale === 'ar' ? "-scale-x-100" : ""} />
              </div>
            </div>

            <div className="relative h-52 sm:h-64 w-full">
              <Image
                src={arch}
                alt="Premium"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain scale-110 sm:scale-125 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu"
              />
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-white italic uppercase leading-none tracking-tight text-center">
              {t.rich('globalReach', {
                br: () => <br />
              })}
            </h3>
          </motion.div>
        </div>
      </div>

      {/* WATERMARK */}
      <div className="absolute bottom-6 left-6 opacity-[0.03] pointer-events-none select-none">
        <h2 className="text-[20vw] sm:text-[14vw] font-black text-[#051109]">EST.24</h2>
      </div>
    </section>

  );
});
HeroSection.displayName = "HeroSection";

const StorySection = memo(() => {
  const t = useTranslations('About.Story');
  const locale = useLocale();

  return (

    <section className="relative bg-white overflow-hidden">
      <div className="py-20 lg:py-32 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center" dir="ltr">

        <div className="lg:col-span-7 relative">
          <motion.div
            whileInView={{ scale: [1.02, 1] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] sm:h-[500px] md:h-[650px] w-full rounded-tl-[3rem] rounded-br-[3rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] overflow-hidden shadow-2xl transform-gpu"
          >
            <Image
              src={about}
              alt="The Farm"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 sm:w-44 h-32 sm:h-44 bg-[#2d5a27] rounded-full flex items-center justify-center p-1 text-white shadow-xl z-20 border-4 border-white transform-gpu"
          >
            <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center">
              <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-center leading-relaxed">
                {t('badge-1')} <br /> {t('badge-2')} <br /> {t('badge-3')}
              </p>
            </div>
          </motion.div>
        </div>

        <div
          className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start space-y-8 lg:pl-10"
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          {/* أضفنا text-center للموبيل و lg:text-start (أو right في العربي) */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-[#051109] text-center lg:text-start">
            {t.rich('title', {
              italic: (chunks) => <span className="text-[#2d5a27] italic">{chunks}</span>,
              br: () => <br />
            })}
          </h2>

          <div className="space-y-6 relative z-10 text-center lg:text-start">
            <p className="text-lg sm:text-xl font-bold text-slate-700 leading-snug">
              {t('p1')}
            </p>

            <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
              {t('p2')}
            </p>

            {/* أضفنا flex justify-center عشان الزرار يتوسط في الموبيل */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <Link
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center justify-center px-10 py-5 font-black uppercase tracking-wider text-white bg-[#2d5a27] rounded-full overflow-hidden transition-all duration-300 active:scale-95"
              >
                <div className="absolute inset-0 bg-[#1e3c1a] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative flex items-center gap-3">
                  {t('button')}
                  <FiArrowUpRight
                    className={`text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${locale === 'ar' ? 'rotate-[-90deg]' : ''}`}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
});
StorySection.displayName = "StorySection";

const MarqueeSection = memo(() => {
  const t = useTranslations('About.Marquee');

  return (
    // أضفنا dir="ltr" هنا عشان نضمن إن حركة الأنميشن والترجمة (Transform) تفضل مستقرة
    <div className="w-full bg-[#2d5a27] py-8 overflow-hidden border-y border-[#1e3c1a]" dir="ltr">
      <div className="flex whitespace-nowrap w-fit will-change-transform animate-marquee">
        {[...Array(2)].map((_, mainIndex) => (
          // شلنا الـ rtl:pl-16 عشان نحافظ على ريتم المسافات ثابت بين اللغتين في الحركة
          <div key={mainIndex} className="flex items-center gap-16 pr-16">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                <span className="text-transparent text-5xl md:text-6xl font-black uppercase italic tracking-tighter stroke-text-white">
                  {t('premiumQuality')}
                </span>
                <FiStar className="text-[#d9f99d] text-4xl" />
                <span className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
                  {t('pureSoil')}
                </span>
                <FiStar className="text-[#d9f99d] text-4xl" />
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            /* الحركة لليسار دائماً تضمن استمرارية الدوران (Loop) بشكل صحيح */
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
});
MarqueeSection.displayName = "MarqueeSection";

const ProcessSection = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const t = useTranslations('About.Process');
  const locale = useLocale();


  return (

    <section className="bg-[#F8F9FA] py-12 relative overflow-hidden isolation-auto transform-gpu" dir="ltr">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d5a27]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none transform-gpu" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none backface-hidden"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">

        {/* Header Section - التعديل هنا للتمركز التام */}
        <div className="flex flex-col items-center justify-center text-center mb-20 gap-8">

          {/* Text Container */}
          <div
            className="max-w-3xl w-full flex flex-col items-center"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Subtitle (Line + Text) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="text-[#2d5a27] font-bold uppercase tracking-[0.2em] text-xs">
                {t('subtitle')}
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-black text-[#051109] leading-[0.9] tracking-tight text-center">
              {t.rich('title', {
                colored: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a27] to-[#5cb85c]">{chunks}</span>,
                br: () => <br />
              })}
            </h2>
          </div>

          {/* Description Paragraph */}
          <p
            className="max-w-2xl text-gray-500 text-lg leading-relaxed font-medium text-center mx-auto"
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            {t('description')}
          </p>
        </div>

        {/* Grid - تم إضافة dir هنا لعكس ترتيب البطاقات في العربي */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          dir={locale === 'ar' ? 'rtl' : 'ltr'}
        >
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden cursor-pointer transform-gpu backface-hidden group"
              onClick={() => setOpenStep(openStep === i ? null : i)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full transform-gpu">
                <div className={`absolute inset-0 transition-colors duration-500 z-10 ${openStep === i ? 'bg-black/10' : 'bg-black/20'}`} />
                <Image
                  src={item.img}
                  alt={t(`steps.${item.key}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`w-full h-full object-cover transition-transform duration-1000 ease-out transform-gpu will-change-transform translate-z-0 ${openStep === i ? 'scale-110' : 'scale-100'}`}
                />
              </div>

              {/* Number */}
              <div className="absolute top-4 right-6 z-10 pointer-events-none">
                <span className={`text-[8rem] font-black leading-none select-none transition-transform duration-700 transform-gpu ${openStep === i ? '-translate-y-2 text-white/20' : 'text-white/10'}`}>
                  {item.id}
                </span>
              </div>

              {/* Content Card */}
              <div className={`absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 
              transition-all duration-700 ease-in-out transform-gpu will-change-transform
              ${openStep === i ? 'translate-y-0' : 'translate-y-[70%]'}`}>

                {/* Card Body */}
                <div
                  className={`backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[2rem] shadow-2xl 
                  transition-all duration-500 transform-gpu backface-hidden ${openStep === i ? 'bg-black/50' : 'bg-black/30'}`}
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                >

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider text-start">
                      {t(`steps.${item.key}.title`)}
                    </h3>
                    <div className={`w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full bg-white text-[#2d5a27] flex items-center justify-center transition-transform duration-500 transform-gpu ${locale === 'ar' ? '-scale-x-100' : ''} ${openStep === i ? 'rotate-0' : '-rotate-45'}`}>
                      <FiArrowUpRight className="text-lg md:text-xl font-bold" />
                    </div>
                  </div>

                  <p className={`text-white/90 text-sm md:text-base font-medium leading-relaxed line-clamp-3 text-start
                  transition-opacity duration-500 delay-100 ${openStep === i ? 'opacity-100' : 'opacity-0'}`}>
                    {t(`steps.${item.key}.desc`)}
                  </p>

                  <div className="w-full h-1 bg-white/20 mt-6 rounded-full overflow-hidden flex">
                    <div className={`h-full bg-[#4ade80] transition-all duration-700 ease-out transform-gpu ${openStep === i ? 'w-full' : 'w-0'}`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default function AboutUsSection() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <MarqueeSection />
      <ProcessSection />
      <Seson />
      <ExportCTA />
    </>
  );
}