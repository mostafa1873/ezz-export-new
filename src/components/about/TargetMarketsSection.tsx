"use client";

import { useTranslations, useLocale } from "next-intl";

export default function TargetMarketsSection() {
  const t = useTranslations("targetMarkets");
  const locale = useLocale();
  const isRtl = locale === "ar";

  return (
    <section 
      className="w-full bg-white text-slate-900 py-12 md:py-20 relative overflow-hidden font-sans"
      dir={isRtl ? "rtl" : "ltr"}
    >
      
      {/* 🗺️ خلفية شبكية خفيفة جداً تعطي إحساس الخرائط واللوجستيات (Mapping Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* 📝 الجانب الأول: المحتوى النصي المباشر والأنيق (متوسط تماماً في الموبايل وموزون في اللاب توب) */}
          <div className={`flex flex-col items-center lg:items-start text-center ${isRtl ? "lg:text-right lg:pl-12" : "lg:text-left lg:pr-12"}`}>
            
            {/* بادج ناعم جداً */}
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="w-2 h-2 rounded-full bg-[#2d5a27] animate-ping" />
              <span className="text-[#2d5a27] text-sm font-bold uppercase tracking-[0.15em] bg-[#2d5a27]/5 px-3 py-1 rounded-full border border-[#2d5a27]/10">
                {t("badge")}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.2] lg:leading-[1.15] mb-6">
              {t("title")}
            </h2>

            <p className="text-slate-500 text-base md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("description")}
            </p>
            
            {/* خط فاصل جمالي يتوسط في الموبايل */}
            <div className="mt-8 h-[2px] w-24 mx-auto lg:mx-0 bg-gradient-to-r from-[#2d5a27] to-transparent" />
          </div>

          {/* 🎯 الجانب الثاني: بؤرة التركيز التفاعلية (The Radar Concept) */}
          <div className="w-full flex flex-col items-center justify-center mt-3 lg:mt-0">
            
            {/* عرض الرادار (الدوائر والسنتر) - تم ضبط الحجم ليكون مثالياً للموبايل */}
            <div className="relative w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] aspect-square flex items-center justify-center">
              
              {/* الدوائر الملاحية (Rings) */}
              <div className="absolute inset-0 border border-slate-200 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-[15%] border border-[#2d5a27]/20 border-dashed rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <div className="absolute inset-[30%] border border-slate-100 rounded-full shadow-inner bg-slate-50/50 backdrop-blur-sm" />

              {/* بؤرة الهدف (Core Focus) - السوق الأوروبي */}
              <div className="relative z-20 w-28 h-28 sm:w-32 sm:h-32 bg-[#2d5a27] rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(45,90,39,0.3)] border-4 border-white transform hover:scale-110 transition-transform duration-500 cursor-default group">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white mb-1 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-black tracking-widest uppercase text-xs sm:text-sm">
                  EU Market
                </span>
              </div>

              {/* 🛰️ العقد الطائرة */}
              
              {/* المؤشر الأول: مطابق للمعايير (أعلى المنتصف) - طائر دائماً */}
              <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 z-30 w-max hover:-translate-y-2 transition-transform duration-300">
                <div className="bg-white px-3 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-2 sm:gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2d5a27]/10 flex items-center justify-center text-[#2d5a27] font-black text-sm sm:text-lg shrink-0">
                    {t("spec1_value")}
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">{t("spec1_title")}</span>
                  </div>
                </div>
              </div>

              {/* المؤشر الثاني: السوق الإيطالي (أسفل اليمين) - طائر دائماً */}
              <div className="absolute bottom-[5%] right-[-5%] z-30 w-max hover:translate-x-2 transition-transform duration-300">
                <div className="bg-white px-3 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-2 sm:gap-4">
                  <div className="flex flex-col text-start">
                    <span className="text-xs sm:text-sm font-bold text-slate-800 whitespace-nowrap">{t("spec2_title")}</span>
                  </div>
                  <div className="w-auto px-2 sm:px-3 h-8 sm:h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-xs sm:text-sm shrink-0">
                    {t("spec2_value")}
                  </div>
                </div>
              </div>

              {/* المؤشر الثالث: سلاسل الإمداد - يطير فقط في اللاب توب والشاشات الكبيرة */}
              <div className="hidden lg:block absolute bottom-[15%] left-[-10%] z-30 w-max hover:-translate-x-2 transition-transform duration-300">
                <div className="bg-white px-5 py-3 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-4">
                  <div className="w-auto px-3 h-10 rounded-full bg-[#4ca743] flex items-center justify-center text-white font-black text-sm shrink-0">
                    {t("spec3_value")}
                  </div>
                  <div className="flex flex-col text-start">
                    <span className="text-sm font-bold text-slate-800">{t("spec3_title")}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* 📱 الكرت الثالث (سلاسل الإمداد واللوجستيات) يظهر هنا لوحده بالأسفل ممركزاً بالكامل في الموايل */}
            <div className="w-full max-w-[280px] sm:max-w-[340px] mt-8 lg:hidden px-2">
              <div className="bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between gap-4">
                <div className="w-auto px-3 h-9 rounded-full bg-[#4ca743] flex items-center justify-center text-white font-black text-xs shrink-0">
                  {t("spec3_value")}
                </div>
                <div className="flex flex-col text-start flex-1">
                  <span className="text-sm font-bold text-slate-800 leading-tight">{t("spec3_title")}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}