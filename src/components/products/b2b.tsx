"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { useTranslations, useLocale } from "next-intl";

export default function B2B() {
  const locale = useLocale();
  const t = useTranslations(); // استخدم namespace في حال أردت: useTranslations('b2b')
  const isAr = locale === "ar";

  return (
    <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-6xl">
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-[#2d5a27] shadow-2xl">
        <div className="flex flex-col lg:flex-row relative z-10">
          {/* القسم الأيسر */}
          <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r rtl:border-r-0 rtl:border-l border-white/10 text-white text-center lg:text-start flex flex-col items-center lg:items-start justify-center">
            <span className="text-emerald-300 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-4 md:mb-6 block">
              {t('b2b.partnerships')}
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-10 leading-[0.95] md:leading-[0.85]">
              {t('b2b.bulk_title')} <br className="hidden sm:block" /> {t('b2b.bulk_subtitle')}
            </h2>

            <Link
              href={`/${locale}/contact/`}
              className="inline-flex items-center gap-3 md:gap-5 py-3.5 md:py-5 px-8 md:px-12 bg-white text-[#2d5a27] font-black uppercase text-[9px] md:text-[11px] tracking-widest hover:scale-105 transition-all rounded-full shadow-xl"
            >
              <span>{t('b2b.contact_button')}</span>
              <FiArrowUpRight size={18} className={isAr ? "rotate-180" : ""} />
            </Link>
          </div>

          {/* القسم الأيمن */}
          <div className="flex-1 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 bg-black/5">
            {[t('b2b.features.cold_chain'), t('b2b.features.private_label'), t('b2b.features.compliance')].map((item, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-6 text-white/90 group justify-start sm:justify-center lg:justify-start">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-[#2d5a27] transition-all duration-500">
                  <FiCheck size={14} />
                </div>
                <span className="font-black uppercase text-[10px] sm:text-[11px] md:text-[13px] tracking-[0.1em] md:tracking-widest text-start leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}