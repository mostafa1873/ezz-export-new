"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowUpRight, FiBox, FiDownload, FiGlobe, FiPhone } from "react-icons/fi";
import arch from "../../assets/arch.webp";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const MovingTicker = memo(() => {
    const t = useTranslations("Hero");
    const locale = useLocale();
    const reduceMotion = useReducedMotion();

    return (
        <div
            className="relative w-full bg-[#0a2e1a] py-6 mt-5 lg:mt-0 mb-7 overflow-x-hidden ltr:rotate-[-2deg] rtl:rotate-[2deg] scale-[1.02] md:scale-[1.05] z-50 shadow-2xl"
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
                            <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.4em] rtl:tracking-normal">
                                {t("fastDelivery")}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiGlobe className="text-green-400 shrink-0" />
                            <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.4em] rtl:tracking-normal">
                                {t("globalReach")}
                            </span>
                        </div>
                        <div className="flex items-center gap-3 text-green-400 font-serif italic text-xl">
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

    return (

        <section className="relative w-full min-h-screen bg-[#fff] overflow-hidden flex flex-col items-center justify-center pt-32 lg:pt-28">
            {/* Background Text - Added transform-gpu to optimize large text rendering */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none transform-gpu">
                <h2 className="text-[30vw] font-black tracking-tighter text-green-900 uppercase leading-none">
                    EZZ
                </h2>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
                    {/* Content */}
                    <div className="w-full lg:w-1/2 text-center lg:ltr:text-start lg:rtl:text-right z-30">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2d5a27] mb-6">
                                <div className="w-2 h-2 rounded-full bg-green-800 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest rtl:tracking-normal text-[#2d5a27]">
                                    {t("newSeason")}
                                </span>
                            </div>

                            <h1 className="text-[11vw] sm:text-[8vw] lg:text-[5.5rem] font-black text-slate-900 leading-[0.95] rtl:leading-[1.1] tracking-tighter rtl:tracking-normal mb-6">
                                {t("titlePrefix")} <br />
                                <span className="text-[#2d5a27] relative">
                                    {t("titleHighlight")}
                                </span>{" "}
                                <br />
                                <span>{t("titleSuffix")}</span>
                            </h1>

                            {/* Mobile Image - Optimized with priority */}
                            <div className="relative w-75 h-75 mx-auto mb-8 block lg:hidden">
                                <Image
                                    src={arch}
                                    alt="Ezz products"
                                    fill
                                    priority
                                    sizes="192px"
                                    className="object-contain"
                                />
                            </div>

                            <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-md mx-auto lg:ltr:mx-0 lg:rtl:mr-0 leading-relaxed font-medium mb-10">
                                {t("description")}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:ltr:justify-start lg:rtl:justify-start">
                                <Link
                                    href={`/${locale}/catalog/`}
                                    // أضفنا will-change-transform لضمان سلاسة الأنميشن في المتصفح
                                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 font-bold text-white transition-all duration-300 ease-in-out will-change-transform bg-[#2d5a27] rounded-full hover:bg-white hover:text-[#2d5a27] shadow-[0_10px_20px_-5px_rgba(45,90,39,0.3)] hover:shadow-[0_0_30px_rgba(45,90,39,0.5)] border-2 border-[#2d5a27] active:scale-[0.98]"
                                >
                                    {/* نبض خفيف تحت الزرار لجذب الانتباه */}
                                    <span className="absolute inset-0 rounded-full animate-pulse border border-[#2d5a27]/30 group-hover:hidden" />

                                    <span className="relative z-10 flex items-center gap-2">
                                        {t("downloadCatalog")}
                                        <div className="p-1 bg-[#ffffff]/20 group-hover:bg-[#2d5a27]/10 rounded-full transition-all duration-300">
                                            <FiArrowUpRight className="w-5 h-5 rtl:rotate-[-90deg]" />
                                        </div>
                                    </span>
                                </Link>

                                <Link
                                    href="/catalog.pdf"
                                    download="catalog.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 bg-white border border-[#2d5a27] text-slate-900 rounded-[2rem] font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <FiDownload className="text-[#2d5a27] w-5 h-5" />
                                    {t("ctaContact")}
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Desktop Image */}
                    <div className="w-full lg:w-1/2 relative hidden lg:flex justify-center items-center h-[600px]">
                        <div className="absolute w-[450px] h-[450px]  rounded-full blur-[80px]" />

                        <motion.div
                            animate={
                                reduceMotion
                                    ? false
                                    : { y: [0, -20, 0], rotate: [0, 5, 0] }
                            }
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-[550px] h-[550px] z-20 will-change-transform transform-gpu"
                        >
                            <Image
                                src={arch}
                                alt="Ezz products"
                                fill
                                priority
                                sizes="(min-width: 1024px) 550px, 100vw"
                                className="object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <MovingTicker />

            {/* Noise - Changed to absolute with fixed behavior to prevent repaints during scroll */}
            <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"
                style={{ transform: "translateZ(0)" }}
            />
        </section>
    );
}