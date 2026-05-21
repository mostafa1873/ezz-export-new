"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FiMaximize, FiPackage, FiLayers, FiTrendingUp, FiCompass, FiActivity } from "react-icons/fi";

export default function TechnicalSpecs() {
    const t = useTranslations("TechnicalSpecs");
    const shouldReduceMotion = useReducedMotion();
    
    // حالة التحكم في العنصر النشط حالياً لعرض تفاصيله في اللوحة السينمائية
    const [activeIndex, setActiveIndex] = useState(0);
    // حالة لمعرفة ما إذا كان المستخدم يضع الماوس فوق العناصر لإيقاف المؤقت مؤقتاً
    const [isHovered, setIsHovered] = useState(false);

    const specsData = [
        {
            id: 0,
            icon: <FiMaximize className="w-5 h-5" />,
            title: t("sizesTitle"),
            desc: t("sizesDesc"),
            metric: "ISO Standard",
            tag: "DIMENSIONS"
        },
        {
            id: 1,
            icon: <FiPackage className="w-5 h-5" />,
            title: t("packagingTitle"),
            desc: t("packagingDesc"),
            metric: "Heavy Duty",
            tag: "PROTECTION"
        },
        {
            id: 2,
            icon: <FiLayers className="w-5 h-5" />,
            title: t("sortingTitle"),
            desc: t("sortingDesc"),
            metric: "Grade A Premium",
            tag: "QUALITY"
        },
        {
            id: 3,
            icon: <FiTrendingUp className="w-5 h-5" />,
            title: t("loadingTitle"),
            desc: t("loadingDesc"),
            metric: "Optimized Vol.",
            tag: "CAPACITY"
        }
    ];

    // تأثير التغيير الأوتوماتيكي (Auto-play Slider)
    useEffect(() => {
        if (isHovered) return; // إيقاف التغيير التلقائي إذا كان الماوس فوق العناصر

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % specsData.length);
        }, 4000); // يتغير تلقائياً كل 4 ثوانٍ

        return () => clearInterval(interval);
    }, [isHovered, specsData.length]);

    return (
        <section className="relative w-full bg-[#fff] py-10 overflow-hidden selection:bg-green-800 selection:text-white">
            
            {/* دمج لمسة النسيج الهندسي في الخلفية */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#15451e" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#tech-grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-20 relative z-10">
                
                {/* الرأس أو الهيدر بلمسة "Minimalist" فاخرة جداً */}
                <div className="border-b border-slate-100 pb-8 md:pb-12 mb-12 lg:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-8 text-start">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15451e]/5 border border-[#15451e]/10 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-700 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#15451e]">
                                {t("title")}
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-slate-900 leading-[1.2] lg:leading-[1.15] tracking-tight max-w-2xl">
                            {t("mainHeading")}
                        </h2>
                    </div>
                    <div className="lg:col-span-4 lg:ltr:text-right lg:rtl:text-left">
                        <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-md lg:inline-block">
                            {t("description")}
                        </p>
                    </div>
                </div>

                {/* تخطيط الأَسيمتريك (الهيكل غير التقليدي) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch">
                    
                    {/* الجانب الأول: لوحة البيانات اللوجستية التفاعلية (The Cinematic Dashboard Pane) */}
                    <div className="w-full lg:col-span-5 flex flex-col justify-between bg-[#0a1910] rounded-[2rem] lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 text-white relative overflow-hidden shadow-2xl shadow-green-950/20 min-h-[350px] sm:min-h-[400px] lg:min-h-none transform-gpu">
                        
                        {/* شبكة رادار لوجستية خافتة في خلفية اللوحة */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#15451e_1px,transparent_1px)] [background-size:16px_16px]" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] pointer-events-none" />

                        {/* هيدر اللوحة التفاعلية */}
                        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 sm:pb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-green-400">
                                    <FiCompass className="w-5 h-5 animate-[spin_20s_linear_infinite]" />
                                </div>
                                <span className="text-xs font-mono tracking-widest text-green-400 uppercase">
                                    LOGISTICS_HUB  0{activeIndex + 1}
                                </span>
                            </div>
                            <FiActivity className="w-4 h-4 text-white/30" />
                        </div>

                        {/* المحتوى الديناميكي المتغير بناءً على الـ العداد والـ Hover بحركات ناعمة جداً */}
                        <div className="relative z-10 my-8 sm:my-12 min-h-[120px] sm:h-32 flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="space-y-3 sm:space-y-4"
                                >
                                    <span className="inline-block text-[10px] font-mono font-bold tracking-widest bg-white/10 text-white px-2.5 py-1 rounded-md uppercase">
                                        {specsData[activeIndex].tag}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-wide">
                                        {specsData[activeIndex].title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-normal">
                                        {specsData[activeIndex].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* الفوتر الخاص باللوحة */}
                        <div className="relative z-10 border-t border-white/10 pt-4 sm:pt-6 flex items-center justify-between font-mono text-xs text-white/40">
                            <span>DATA SPECIFICATION</span>
                            <AnimatePresence mode="wait">
                                <motion.span 
                                    key={activeIndex}
                                    initial={{ opacity: 0 }} 
                                    animate={{ opacity: 1 }} 
                                    className="text-green-400 font-bold"
                                >
                                    {specsData[activeIndex].metric}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* الجانب الثاني: الأسطر الذكية ممتدة العرض (Interactive Control Track) */}
                    <div 
                        className="w-full lg:col-span-7 flex flex-col justify-center gap-3"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {specsData.map((item, index) => {
                            const isSelected = activeIndex === index;
                            return (
                                <div
                                    key={item.id}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className={`group relative w-full rounded-xl sm:rounded-2xl border p-5 sm:p-6 lg:p-8 flex flex-row items-center justify-between gap-4 cursor-pointer transition-all duration-300 transform-gpu ${
                                        isSelected 
                                            ? "bg-[#15451e]/5 border-[#15451e] shadow-md" 
                                            : "bg-[#fff] border-slate-100 hover:border-slate-300"
                                    }`}
                                >
                                    {/* المحتوى النصي والأيقونة لكل سطر */}
                                    <div className="flex items-center gap-4 sm:gap-5 relative z-10 overflow-hidden">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center border shrink-0 transition-all duration-300 ${
                                            isSelected 
                                                ? "bg-[#15451e] text-white border-[#15451e]" 
                                                : "bg-slate-50 text-slate-700 border-slate-100 group-hover:bg-[#15451e]/10 group-hover:text-[#15451e]"
                                        }`}>
                                            {item.icon}
                                        </div>
                                        <div className="truncate">
                                            <h4 className={`text-sm sm:text-base lg:text-lg font-bold truncate transition-colors duration-300 ${
                                                isSelected ? "text-[#15451e]" : "text-slate-800"
                                            }`}>
                                                {item.title}
                                            </h4>
                                            <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-mono uppercase tracking-wider truncate">
                                                {item.tag}  VERIFIED
                                            </p>
                                        </div>
                                    </div>

                                    {/* مؤشر رقمي جانبي أنيق جداً يختفي ويظهر بدقة */}
                                    <div className="flex items-center gap-4 ltr:text-right rtl:text-left relative z-10 shrink-0">
                                        <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md transition-all duration-300 ${
                                            isSelected 
                                                ? "bg-[#15451e] text-white" 
                                                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                                        }`}>
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* خلفية ديناميكية متحركة تظهر عند التحديد */}
                                    {isSelected && !shouldReduceMotion && (
                                        <motion.div 
                                            layoutId="activeTrack"
                                            className="absolute inset-0 bg-gradient-to-r from-[#15451e]/[0.02] to-transparent rounded-xl sm:rounded-2xl pointer-events-none z-0"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}