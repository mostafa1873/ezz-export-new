"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiBox, FiDownload, FiGlobe } from "react-icons/fi";
import arch from "../../assets/arch.webp";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const MovingTicker = memo(() => {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const reduceMotion = useReducedMotion();

    return (
        <div
            className="relative w-full bg-[#0a2e1a] py-4 mt-auto mb-4 overflow-x-hidden ltr:rotate-[-1deg] rtl:rotate-[1deg] scale-[1.01] z-50 shadow-xl"
            style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            dir="ltr"
        >
            <motion.div
                animate={reduceMotion ? false : { x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap gap-12 md:gap-24 min-w-max will-change-transform"
            >
                {[...Array(4)].map((_, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-12 md:gap-24"
                        dir={locale === "ar" ? "rtl" : "ltr"}
                    >
                        <div className="flex items-center gap-3">
                            <FiBox className="text-green-400 shrink-0" />
                            <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] rtl:tracking-normal">
                                {t("fastDelivery")}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiGlobe className="text-green-400 shrink-0" />
                            <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] rtl:tracking-normal">
                                {t("globalReach")}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-green-400 font-serif italic text-lg">
                            {t("premiumHarvest")}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
});
MovingTicker.displayName = "MovingTicker";

export default function CinematicHero() {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const reduceMotion = useReducedMotion();
    const isRtl = locale === "ar";

    return (
        <section className="relative w-full min-h-screen lg:h-screen lg:min-h-0 bg-[#fff] overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32">
            {/* Background Large Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none transform-gpu z-0">
                <h2 className="text-[25vw] font-black tracking-tighter text-green-900 uppercase leading-none">
                    EZZ
                </h2>
            </div>

            <div className="container mx-auto px-4 sm:px-8 lg:px-20 my-auto relative z-20 py-6 lg:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">

                    {/* Content Column */}
                    <div className="w-full lg:col-span-7 text-center lg:ltr:text-start lg:rtl:text-right z-30">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#2d5a27] mb-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-800 animate-pulse" />
                                <span className="text-[9px] font-bold uppercase tracking-widest rtl:tracking-normal text-[#2d5a27]">
                                    {t("newSeason")}
                                </span>
                            </div>

                            {/* العناوين بعد تصغيرها وتنسيق الـ Line Height لمنع التداخل */}
                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[2.6rem] xl:text-[3.5rem] font-black text-slate-900 leading-[1.2] tracking-tight mb-4 max-w-2xl mx-auto lg:mx-0">
                                {t("titlePrefix")}{" "}
                                <span className="text-[#2d5a27]">
                                    {t("titleHighlight")}
                                </span>{" "}
                                <span className="block md:inline lg:block">{t("titleSuffix")}</span>
                             </h1>

                            {/* Mobile Image - تم تكبير الحاوية وزيادة حجم الـ sizes لتعمل بكفاءة */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto mb-6 block lg:hidden">
                                <Image
                                    src={arch}
                                    alt="Ezz products"
                                    fill
                                    priority
                                    sizes="(max-w: 640px) 256px, 320px"
                                    className="object-contain"
                                />
                            </div>

                            {/* الوصف بمقاس منضبط */}
                            <p className="text-xs sm:text-sm md:text-base text-slate-500 max-w-lg mx-auto lg:ltr:mx-0 lg:rtl:ml-0 lg:rtl:mr-0 leading-relaxed font-medium mb-6">
                                {t("description")}
                            </p>

                            {/* الأزرار متناسقة تماماً */}
                            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:ltr:justify-start lg:rtl:justify-start max-w-md sm:max-w-none mx-auto lg:mx-0">
                                {/* زر طلب عرض السعر */}
                                <Link
                                    href={`/${locale}/catalog/`}
                                    className="group relative w-full rounded-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-sm text-[#2d5a27] hover:text-white transition-all duration-300 ease-in-out will-change-transform bg-[#fff] hover:bg-[#2d5a27] shadow-md border-2 border-[#2d5a27] active:scale-[0.98]"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {t("downloadCatalog")}
                                        <div className="p-0.5 bg-[#2d5a27]/10 group-hover:bg-[#ffffff]/20 rounded-full transition-colors duration-300">
                                            <FiArrowUpRight className={`w-4 h-4 ${isRtl ? "rotate-[-90deg]" : ""}`} />
                                        </div>
                                    </span>
                                </Link>

                                {/* زر تحميل الكتالوج */}
                                <Link
                                    href="/catalog.pdf"
                                    download="catalog.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#15451e] border-2 border-[#15451e] text-[#fff] text-sm rounded-full font-bold transition-all duration-300 hover:bg-[#fff] hover:text-[#15451e] hover:shadow-[0_8px_20px_-6px_rgba(21,69,30,0.4)] hover:-translate-y-0.5 active:scale-[0.98]"
                                >
                                    <span>{t("ctaContact")}</span>
                                    {/* الأيقونة بتتحرك حركة خفيفة لفوق عند الهوفر وبقت بعد الجملة */}
                                    <FiDownload className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:animate-pulse" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Desktop Image Column - تم زيادة الطول الكلي للعمود وحجم حاوية الصورة المتحركة وحجم الـ sizes */}
                    <div className="w-full lg:col-span-5 relative hidden lg:flex justify-center items-center h-[450px] xl:h-[550px]">
                        <div className="absolute w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] bg-green-50/50 rounded-full blur-[60px]" />

                        <motion.div
                            animate={
                                reduceMotion
                                    ? false
                                    : { y: [0, -12, 0], rotate: [0, 3, 0] }
                            }
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] z-20 will-change-transform transform-gpu"
                        >
                            <Image
                                src={arch}
                                alt="Ezz products"
                                fill
                                priority
                                sizes="(min-width: 1280px) 500px, 400px"
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* الشريط المتحرك متموضع في الأسفل بدون تدمير الـ Height */}
            <MovingTicker />

            {/* Noise Background */}
            <div
                className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"
                style={{ transform: "translateZ(0)" }}
            />
        </section>
    );
}