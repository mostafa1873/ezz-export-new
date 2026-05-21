"use client";

import React, { useState, memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiGlobe, FiPhone, FiStar } from "react-icons/fi";
import arch from "../../assets/about-hero.webp";
import about from "../../assets/about-main.webp";
import Link from "next/link";
// import Seson from "./seson";
import ExportCTA from "./ExportCTA";
import pro1 from "../../assets/pro1.webp";
import pro2 from "../../assets/pro2.webp";
import pro3 from "../../assets/pro3.webp";
import { useLocale, useTranslations } from "next-intl";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import PhilosophySection from "./PhilosophySection";
import TargetMarketsSection from "./TargetMarketsSection";

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
    <section className="relative h-screen w-full flex flex-col justify-between items-center pt-[120px] pb-4 lg:pt-[130px] lg:pb-6 overflow-hidden" dir={locale === 'ar' ? 'rtl' : 'ltr'}>

      {/* خلفية نظيفة وهادئة جداً */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-16 w-full max-w-5xl flex flex-col justify-between h-full flex-1 gap-4">

        {/* 1. قسم النصوص: حجم كبير محترم ومستحيل يدخل في الـ Navbar */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center text-center max-w-3xl mx-auto shrink-0"
        >
          <h1 className="font-black tracking-tight leading-tight text-4xl sm:text-5xl lg:text-6xl text-[#051109]">
            <span className="block opacity-90">{t('pure')}</span>
            <span className="block text-[#2d5a27] mt-1 sm:mt-2">{t('impact')}</span>
          </h1>

          <p className="mt-2 text-base sm:text-lg font-medium text-slate-500 leading-relaxed max-w-xl">
            {t.rich('subtitle', {
              green: (chunks) => <span className="text-[#2d5a27] font-bold">{chunks}</span>,
              br: () => <br className="hidden sm:block" />
            })}
          </p>
        </motion.div>

        {/* الكرت الكبير المدمج الموزون بدون قطع أو تداخل وملتزم بالـ h-screen */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full bg-[#051109] rounded-[2.5rem] p-6 pb-6 flex flex-col justify-between flex-1 my-auto shadow-xl relative overflow-hidden"
        >
          {/* لمسة تدرج ضوئي خفيفة جداً لإبراز المنتج داخل الكرت */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-full bg-[#2d5a27]/10 rounded-full blur-[120px] pointer-events-none z-0" />

          {/* 2. قسم الصورة: تم التكبير هنا! */}
          <div className="relative w-full flex-1 flex items-center justify-center z-10 min-h-0 mb-4">
            {/* وسعنا مساحة العرض (max-w-3xl) عشان الصورة تاخد راحتها */}
            <div className="relative w-full max-w-3xl h-full">
              <Image
                src={arch}
                alt="Ezz Trading Products"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                // تم استخدام التكبير البصري (scale) بقيم كبيرة خصوصاً للموبايل عشان تملأ المكان
                className="object-contain object-bottom transform-gpu scale-[2.0] sm:scale-125 lg:scale-[1.40]"
              />
            </div>
          </div>

          {/* 3. شريط التحكم السفلي: ظاهر بالكامل ومستحيل يتغطي وثابت في مكانه */}
          <div className="w-full pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 shrink-0">
            {/* تفاصيل المنشأ */}
            <div className="text-center sm:text-start">
              <p className="text-[9px] font-bold tracking-widest uppercase text-slate-400">{t('originLabel')}</p>
              <p className="text-sm font-bold text-white mt-0.5">{t('originValue')}</p>
            </div>

            {/* الأزرار والسوشيال ميديا في كتلة واحدة نظيفة جداً */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* زر الكتالوج النظيف */}
              <a
                href="/catalog.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#051109] px-5 py-2.5 rounded-xl transition-colors duration-300 hover:bg-[#2d5a27] hover:text-white font-bold text-xs uppercase tracking-wider w-full sm:w-auto"
              >
                <span>{t('catalog')}</span>
                <FiArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* أيقونات السوشيال ميديا */}
              <div className="flex items-center gap-2">
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
                    className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#2d5a27] hover:text-white hover:border-[#2d5a27] transition-all duration-300 bg-white/5 shrink-0"
                  >
                    <item.Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* النص الجانبي للوصول العالمي */}
            <div className="flex items-center gap-2 text-center sm:text-end hidden md:flex">
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                {t.rich('globalReach', {
                  br: () => <br className="hidden" />
                })}
              </h3>
              <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-white/50 shrink-0">
                <FiArrowUpRight className={locale === 'ar' ? "-scale-x-100" : ""} size={12} />
              </div>
            </div>
          </div>

        </motion.div>

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
      <div className="py-10 lg:py-10 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10 items-center" dir="ltr">

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
      {/* <MarqueeSection /> */}
      <PhilosophySection />
      <TargetMarketsSection />
      <ProcessSection />
      {/* <Seson /> */}
      <ExportCTA />
    </>
  );
}