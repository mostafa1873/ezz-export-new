"use client";

import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight, Globe, ShieldCheck, Zap } from "lucide-react";

const WhyEgypt = () => {
  const t = useTranslations('WhyEgypt');
  const locale = useLocale();
  const isRtl = locale === "ar";

  // نقاط قوة سريعة تدعم النص الأساسي وتعطي ثقل للتصميم بدون تغيير المحتوى الأصلي
  const highlights = [
    { icon: Globe, text: t('highlights.geo.title'), desc: t('highlights.geo.desc') },
    { icon: ShieldCheck, text: t('highlights.euro.title'), desc: t('highlights.euro.desc') },
    { icon: Zap, text: t('highlights.cost.title'), desc: t('highlights.cost.desc') },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-[#061a10] text-white relative overflow-hidden border-t border-white/5" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* تأثيرات خلفية ناعمة جداً وذهبية خافتة تكسر جمود اللون الزيتي */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#cda250]/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-white/5 rounded-full blur-[90px] sm:blur-[140px]" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* التوزيع الهندسي المبتكر: يمين ويسار بتناسق فخم ومتجاوب بالكامل */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* الجانب الأول: العنوان والمؤشرات (Highlights) - تم إضافة text-center و items-center للموبايل فقط */}
          <div className="grid-cols-1 lg:col-span-6 space-y-8 md:space-y-12 text-center lg:text-start flex flex-col items-center lg:items-start">
            
            {/* البار الصغير العلوي بلون ذهبي هادئ وراقٍ */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <span className="w-6 h-[1px] bg-[#fff]" />
              <span className="text-[#fff] text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.25em]">
                {t('badge')}
              </span>
              <span className="w-6 h-[1px] bg-[#fff] lg:hidden" /> {/* يظهر على الموبايل فقط للتوسيط البصري */}
            </div>

            {/* العنوان الرئيسي: تم جعل المقاس متجاوب وحركي (fluid) عشان يستوعب الكلمات الإيطالية الطويلة دون تداخل */}
            <h2 
              className={`text-2xl sm:text-4xl md:text-5xl font-[1000] text-white tracking-tight uppercase w-full break-words [hyphens:auto]`}
              style={{
                // الحسبة دي بتقلل الخط سنة صغيرة لو اللغة مش عربي عشان تمنع التداخل في اللغات اللاتينية الطويلة
                fontSize: isRtl ? 'clamp(1.875rem, 4vw, 3.75rem)' : 'clamp(1.65rem, 3.5vw, 3.25rem)',
                lineHeight: isRtl ? '1.2' : '1.15'
              }}
            >
              {t.rich('title', {
                green: (chunks) => <span className="text-green-500 inline-block">{chunks}</span>,
                // منع قفزة السطر العنيفة في الشاشات المتوسطة للإيطالي
                br: () => <br className="hidden sm:inline" />
              })}
            </h2>

            {/* المؤشرات الثلاثية مصفوفة عمودياً بشكل أنيق جداً ومنظم - تم تعديل محاذاة العناصر للموبايل */}
            <div className="space-y-5 md:space-y-6 max-w-md pt-2 md:pt-4 text-start w-full">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-start gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#fff]/50 border border-white/10 shrink-0 transition-colors group-hover:bg-[#fff] group-hover:text-[#061a10]">
                    <item.icon className="size-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">{item.text}</h4>
                    <p className="text-xs text-slate-400 font-medium leading-relaxed [hyphens:auto]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* الجانب الثاني: النص الأصلي مفرود بالكامل - تم إضافة text-center للموبايل فقط */}
          <div className="grid-cols-1 lg:col-span-6 lg:h-full flex flex-col justify-between space-y-10 md:space-y-12 lg:pt-20 text-center lg:text-start">
            
            {/* اللوحة النصية: مفتوحة بالكامل ومقروءة بالأبيض الصريح الفاخر */}
            <div className="relative">
              {/* علامة اقتباس ذهبية خافتة بالخلفية لجمال التصميم الفني - تم ترحيلها في اللاتيني عشان متغطيش ع الكلام */}
              <div className={`absolute -top-6 md:-top-10 text-[#cda250]/5 font-serif text-[7rem] sm:text-[10rem] select-none pointer-events-none leading-none ${isRtl ? "right-1/2 translate-x-1/2 lg:right-auto lg:translate-x-0 lg:-right-6" : "left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:-left-10"}`}>
                “
              </div>
              
              {/* تم ضبط حجم خط الوصف للإيطالي ليكون متناسق ومريح للعين */}
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-[1.6] md:leading-[1.7] tracking-wide relative z-10 opacity-95 [hyphens:auto]">
                {t('description')}
              </p>
            </div>

            {/* بار الحركة السفلي الممتد الفاخر - تم تعديل توزيع العناصر ليتناسب مع توسيط الموبايل */}
            <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-4 sm:gap-0 text-white">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {t('destination_badge')}
                </span>
                <span className="text-xs font-bold text-slate-300">
                  {t('destination_text')}
                </span>
              </div>
              
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-green-500 hover:bg-white hover:text-[#061a10] transition-all shrink-0">
                <ArrowUpRight size={18} className={isRtl ? "rotate-90" : ""} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyEgypt;