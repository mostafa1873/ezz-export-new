"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image"; // استيراد مكون الصور الخاص بـ Next.js

import steps1 from "../../assets/step-1.jpeg";
import steps2 from "../../assets/step-2.jpeg";
import steps3 from "../../assets/step-3.jpeg";

export default function QualitySpecs() {
    const t = useTranslations("QualitySpecs");

    // Matrix مع مسارات الصور الثابتة
    const steps = [
        {
            id: "01",
            title: t("step1Title"),
            desc: t("step1Desc"),
            image: steps1
        },
        {
            id: "02",
            title: t("step2Title"),
            desc: t("step2Desc"),
            image: steps2
        },
        {
            id: "03",
            title: t("step3Title"),
            desc: t("step3Desc"),
            image: steps3
        }
    ];

    return (
        <section className="relative w-full bg-white py-10 overflow-hidden selection:bg-green-800 selection:text-white">
            <div className="container mx-auto px-4 sm:px-8 lg:px-20 relative z-10">

                {/* الجزء العلوي: متمركز في المنتصف (Centered Header) */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-6">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-green-50 border border-green-100">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#15451e]">
                            {t("badge")}
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.2] tracking-tight">
                        {t("mainHeading")}
                    </h2>

                    <p className="text-base sm:text-lg text-slate-500 leading-relaxed font-medium">
                        {t("description")}
                    </p>
                </div>

                {/* الجزء السفلي: البطاقات التفاعلية المتمددة (Hover-Expand Flex Cards) */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-auto lg:h-[460px]">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className="group cursor-pointer relative flex-1 flex flex-col justify-end p-8 rounded-[2rem] bg-[#f8f9fa] border border-slate-100 transition-all duration-500 ease-out hover:flex-[1.5] hover:shadow-2xl hover:shadow-[#15451e]/20 cursor-default overflow-hidden min-h-[320px] lg:min-h-full"
                        >
                            {/* الصورة كخلفية كاملة للبوكس مع تأثير الزووم خفيف */}
                            <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    sizes="(max-w-1024px) 100vw, 33vw"
                                    priority={index === 0}
                                />
                                {/* زيادة تعتيم الخلفية الافتراضية قليلاً من 10 لـ 35 لتبرز النص الأبيض بسلاسة وفخامة */}
                                <div className="absolute inset-0 bg-slate-950/35 transition-colors duration-500 group-hover:bg-[#15451e]/85" />
                            </div>

                            {/* رقم المرحلة بخط كبير وشفاف كخلفية */}
                            <div className="absolute top-4 right-6 text-[8rem] font-black text-white/10 group-hover:text-white/5 transition-colors duration-500 leading-none pointer-events-none select-none z-10">
                                {step.id}
                            </div>

                            {/* المحتوى النصي للبطاقة */}
                            <div className="relative z-10 transition-transform duration-500 group-hover:translate-y-0 translate-y-0 lg:translate-y-8 mt-5">
                                {/* تم تعديل اللون هنا إلى text-white بشكل افتراضي مع إضافة drop-shadow قوي للوضوح الفوري */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                                    {step.title}
                                </h3>

                                {/* الوصف: تم تعديل لونه الافتراضي ليكون متناسقاً ومقروءاً فوق الصور */}
                                <p className="text-sm sm:text-base text-slate-200 group-hover:text-green-50/90 transition-all duration-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 max-w-sm leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                                    {step.desc}
                                </p>
                            </div>

                            {/* شريط التقدم الديكوري السفلي */}
                            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-green-400 transition-all duration-700 ease-in-out group-hover:w-full z-10" />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}