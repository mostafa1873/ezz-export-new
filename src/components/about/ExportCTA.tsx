"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowLeft, ArrowRight, Download, FileText, Calendar, PhoneCall, FileEdit } from "lucide-react";
import Link from "next/link";

const FinalCTA = () => {
  const t = useTranslations('FinalCTA');
  const locale = useLocale();
  const isRtl = locale === "ar";

  const handleDownloadCatalog = () => {
    const catalogPath = "/catalog.pdf"; 
    const link = document.createElement("a");
    link.href = catalogPath;
    link.setAttribute("download", `Ezz-Export-Catalog-${locale}.pdf`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      className="py-24 md:py-32 bg-[#fafbfa] text-[#051109] relative overflow-hidden border-t border-slate-100"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* شبكة خلفية ناعمة جداً لمنح السكشن عمقاً هندسياً هندسياً */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f3f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f3f0_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-70 pointer-events-none" />

      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* شبكة التقسيم للكارتين المنفصلين الفاخرين */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* الكارت الأول: كارت المحتوى النصي وحجز المكالمة (أبيض فاخر) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/70 rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-sm flex flex-col justify-between items-center lg:items-start text-center lg:text-start relative overflow-hidden group">
            
            {/* توهج خفيف بالخلفية */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#2d5a27]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10 w-full">
              <div className="inline-flex items-center gap-2 bg-[#2d5a27]/5 px-3.5 py-1.5 rounded-full border border-[#2d5a27]/10">
                <Calendar className="size-3.5 text-[#2d5a27]" />
                <span className="text-[#2d5a27] text-xs font-black uppercase tracking-wider">
                  {t('badge')}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-[1000] tracking-tight leading-[1.15] text-[#051109] uppercase">
                {t.rich('title', {
                  green: (chunks) => <span className="text-[#2d5a27]">{chunks}</span>,
                  br: () => <br className="hidden sm:inline" />
                })}
              </h2>

              <p className="text-slate-600 max-w-xl text-base md:text-lg leading-relaxed font-medium">
                {t('description')}
              </p>
            </div>

            {/* الأزرار جنب بعض ومتوافقة ريسبونسبف بالكامل */}
            <div className="pt-8 w-full flex flex-col sm:flex-row items-center gap-4 relative z-10">
              
              {/* زر حجز المكالمة الفاخر - ينقلك فوراً لصفحة الاتصال */}
              <Link href={`/${locale}/contact/`} className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#051109] text-white hover:bg-[#2d5a27] font-bold px-8 py-4 rounded-xl transition-all text-sm md:text-base tracking-wide shadow-lg shadow-[#051109]/10 cursor-pointer"
                >
                  <PhoneCall size={18} className="opacity-90" />
                  <span>{t('cta_call')}</span>
                  {isRtl ? (
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  )}
                </motion.div>
              </Link>

              {/* زر طلب عرض السعر الرايق والمودرن */}
              <Link href={`/${locale}/catalog/`} className="w-full sm:w-auto">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#051109] hover:text-white hover:bg-[#2d5a27] font-bold px-8 py-4 rounded-xl border-2 border-[#051109] hover:border-[#2d5a27] transition-all text-sm md:text-base tracking-wide shadow-md cursor-pointer"
                >
                  <FileEdit size={18} className="opacity-90 transition-transform group-hover:rotate-12" />
                  <span>{t('downloadCatalog')}</span>
                  {isRtl ? (
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  )}
                </motion.div>
              </Link>

            </div>
          </div>

          {/* الكارت الثاني: كارت تحميل الكتالوج (أخضر إمبراطوري معتم فاخر) */}
          <div className="lg:col-span-5 bg-[#0b1e11] rounded-[2.5rem] p-8 md:p-12 lg:p-14 text-white flex flex-col justify-between items-start text-start relative overflow-hidden shadow-xl shadow-[#2d5a27]/5 border border-white/5">
            
            {/* خطوط هندسية تجريدية دقيقة بالخلفية لرفع مستوى التصميم */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#2d5a27]/40 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10 w-full">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white/90">
                <FileText className="size-5" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                  {t('card_title')}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                  {t('card_desc')}
                </p>
              </div>
            </div>

            {/* زر تحميل الكتالوج التفاعلي عالي التباين والأناقة */}
            <div className="pt-12 w-full relative z-10">
              <motion.button
                onClick={handleDownloadCatalog}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-[#0b1e11] hover:bg-slate-100 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-black/20"
              >
                <Download size={18} className="animate-pulse" />
                <span className="text-sm md:text-base font-black tracking-wide">
                  {t('cta_catalog')}
                </span>
              </motion.button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;