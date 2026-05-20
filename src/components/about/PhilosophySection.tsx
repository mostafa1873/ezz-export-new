"use client";

import { useTranslations, useLocale } from "next-intl";

export default function PhilosophySection() {
  const t = useTranslations("philosophy");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const pillars = [
    { num: "01", title: t("pillar1_title"), desc: t("pillar1_desc") },
    { num: "02", title: t("pillar2_title"), desc: t("pillar2_desc") },
    { num: "03", title: t("pillar3_title"), desc: t("pillar3_desc") },
  ];

  return (
    <section className="w-full bg-[#051109] text-white py-24 lg:py-36 relative overflow-hidden border-t border-white/5 z-20 font-sans">
      
      {/* لمحة ضوئية خافتة جداً في الزاوية */}
      <div className={`absolute top-0 ${isRtl ? "right-0" : "left-0"} w-[400px] h-[400px] bg-[#2d5a27]/5 rounded-full blur-[120px] pointer-events-none`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* 1. الكتلة الجانبية: العنوان الرئيسي والبادج */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ca743]" />
              <span className="text-[#4ca743] text-xs font-black uppercase tracking-[0.3em]">
                {t("badge")}
              </span>
            </div>
            
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-8 ${
              isRtl ? "text-right" : "text-left"
            }`}>
              {t("title")}
            </h2>

            <p className={`text-slate-400 text-sm sm:text-base font-medium leading-relaxed max-w-sm ${
              isRtl ? "text-right" : "text-left"
            }`}>
              {t("description")}
            </p>
          </div>

          {/* 2. الكتلة المقابلة: القائمة الرأسية التفاعلية المتصلة (Minimal Vertical Stack) */}
          <div className="lg:col-span-7 relative">
            
            {/* خط عمودي نحيف يربط النقاط ببعضها بصرياً */}
            <div className={`absolute top-4 bottom-4 ${isRtl ? "right-3" : "left-3"} w-[1px] bg-white/10`} />

            <div className="space-y-12">
              {pillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className={`group relative ${isRtl ? "pr-12 text-right" : "pl-12 text-left"} transition-all duration-300`}
                >
                  
                  {/* النقطة المضيئة على الخط العمودي */}
                  <div className={`absolute top-3 ${isRtl ? "right-[7px]" : "left-[7px]"} w-2 h-2 rounded-full bg-white/30 border border-[#051109] group-hover:bg-[#4ca743] group-hover:scale-125 transition-all duration-300 z-10`} />
                  
                  {/* محتوى الركيزة */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4">
                    
                    {/* الرقم التعريفي - يكبر ويضيء عند الـ Hover */}
                    <span className="text-xl font-black font-mono text-slate-500 group-hover:text-[#4ca743] group-hover:scale-110 transition-all duration-300 transform origin-left">
                      {pillar.num}.
                    </span>

                    <div className="flex-1">
                      {/* اسم الركيزة */}
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4ca743] transition-colors duration-200">
                        {pillar.title}
                      </h3>
                      
                      {/* الشرح */}
                      <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed max-w-xl group-hover:text-slate-300 transition-colors duration-200">
                        {pillar.desc}
                      </p>
                    </div>

                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}