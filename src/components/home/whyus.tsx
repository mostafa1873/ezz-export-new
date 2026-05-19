"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, RefreshCw, Layers, Globe, Truck } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const AboutFluid = () => {
  const shouldReduceMotion = useReducedMotion();
  const t = useTranslations('WhyUs');
  const locale = useLocale();

  // مصفوفة الأيقونات فقط لربطها ديناميكياً مع النصوص القادمة من ملف الـ JSON
  const icons = [RefreshCw, ShieldCheck, Layers, Globe, Truck];

  // أنيميشن منسق وناعم جداً للكروت
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] as const } 
    }
  };

  return (
    <section className="py-10 text-gray-900 relative overflow-hidden">
      {/* خلفية ناعمة جداً تضمن نقاء اللون الأبيض بدون تشويش */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-green-50/40 to-emerald-50/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* هيدر مرتب وموزع هندسياً بالكامل لتجنب العشوائية مع قسم المحتوى الأوسط الأنيق */}
        <div className="text-center max-w-4xl mx-auto pb-16 flex flex-col items-center">
          <span className="inline-flex items-center gap-2.5 text-[#2d5a27] text-[11px] font-black uppercase tracking-[0.25em] bg-green-50/60 px-4 py-2 rounded-full border border-green-100/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a27] animate-pulse" />
            {t('badge')}
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 leading-[1.25] tracking-tight max-w-3xl">
            {t.rich('title', {
              colored: (chunks) => <span className="text-[#2d5a27] relative inline-block">{chunks}<span className="absolute bottom-1.5 left-0 w-full h-[4px] bg-green-800/10 -z-10" /></span>
            })}
          </h2>

          {/* تعديل المحتوى تحت الهيدر ليصبح منسقاً، عريضاً، ومريحاً للعين تماماً كالمجلات العالمية */}
          <div className="mt-10 flex flex-col items-center justify-center gap-5 text-center max-w-3xl pt-8 border-t border-[#2d5a27]/35 w-full">
            <p className="text-gray-950 text-xl md:text-2xl font-bold leading-relaxed tracking-tight">
              {t('mainDesc')}
            </p>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
              {t.rich('subDesc', {
                bold: (chunks) => <span className="text-gray-900 font-semibold">{chunks}</span>
              })}
            </p>
          </div>
        </div>

        {/* الجزء السفلي: الكروت مقسمة لصفين لضمان السنترة المطلقة */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {/* الصف الأول: الـ 3 كروت اللي فوق */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {icons.slice(0, 3).map((Icon, index) => {
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  className="p-7 rounded-3xl bg-gradient-to-br from-[#f4f9f3] to-[#e9f3e7] border border-[#dcecd8] hover:border-[#2d5a27]/30 hover:shadow-[0_20px_40px_rgba(45,90,39,0.06)] transition-all duration-400 flex flex-col justify-between min-h-[190px] group relative overflow-hidden"
                >
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#2d5a27]/5 rounded-full blur-2xl group-hover:bg-[#2d5a27]/10 transition-colors duration-400" />
                  
                  <div className="flex items-center justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#2d5a27] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(45,90,39,0.15)] group-hover:scale-105 transition-transform duration-400">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-[#2d5a27]/20 bg-[#2d5a27]/5 px-2.5 py-1 rounded-md uppercase">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <div className="mt-6 relative z-10">
                    <h4 className="font-black text-gray-950 text-base mb-2 group-hover:text-[#2d5a27] transition-colors duration-300 tracking-tight">
                      {t(`points.${index}.title`)}
                    </h4>
                    <p className="text-[#415a3d] text-[13px] leading-relaxed font-medium tracking-wide">
                      {t(`points.${index}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* الصف الثاني: الكرتين اللي تحت في المنتصف بالملّي متوافق مع الـ RTL والـ LTR */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            {icons.slice(3, 5).map((Icon, index) => {
              const actualIndex = index + 3;
              return (
                <motion.div
                  key={actualIndex}
                  variants={cardVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -6 }}
                  className="p-7 rounded-3xl bg-gradient-to-br from-[#f4f9f3] to-[#e9f3e7] border border-[#dcecd8] hover:border-[#2d5a27]/30 hover:shadow-[0_20px_40px_rgba(45,90,39,0.06)] transition-all duration-400 flex flex-col justify-between min-h-[190px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group relative overflow-hidden"
                >
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#2d5a27]/5 rounded-full blur-2xl group-hover:bg-[#2d5a27]/10 transition-colors duration-400" />
                  
                  <div className="flex items-center justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#2d5a27] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(45,90,39,0.15)] group-hover:scale-105 transition-transform duration-400">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest text-[#2d5a27]/20 bg-[#2d5a27]/5 px-2.5 py-1 rounded-md uppercase">
                      0{actualIndex + 1}
                    </span>
                  </div>
                  
                  <div className="mt-6 relative z-10">
                    <h4 className="font-black text-gray-950 text-base mb-2 group-hover:text-[#2d5a27] transition-colors duration-300 tracking-tight">
                      {t(`points.${actualIndex}.title`)}
                    </h4>
                    <p className="text-[#415a3d] text-[13px] leading-relaxed font-medium tracking-wide">
                      {t(`points.${actualIndex}.desc`)}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* الجزء السفلي الأخير: الزرار الأخضر المترجم ديناميكياً */}
        <div className="pt-16 flex justify-center">
          <Link href={`/${locale}/about`}>
            <motion.button
              whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 bg-[#2d5a27]/95 text-white pl-7 pr-3 py-3 rtl:pl-3 rtl:pr-7 rounded-full transition-all duration-300 hover:bg-[#2d5a27] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
            >
              <span className="font-bold tracking-wider text-xs uppercase pl-1 rtl:pl-0 rtl:pr-1">
                {t('btn')}
              </span>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </div>
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AboutFluid;