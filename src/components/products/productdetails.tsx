"use client";
import React from "react";
import Image from "next/image";
import { FiArrowLeft, FiMessageCircle, FiCheck, FiPackage, FiShield, FiSend, FiGlobe, FiDownload } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import productsData from "@/data/products.json";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

interface ProductProps {
    product: any;
}

export default function ProductContent({ product }: ProductProps) {
    const locale = useLocale();
    const t = useTranslations("ProductDetails");

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [product?.id]);

    if (!product) return null;

    const isRTL = locale === "ar";
    const dir = isRTL ? "rtl" : "ltr";

    const imagePath = product.image ? product.image.replace("../", "/") : "/placeholder.png";
    const catalogPath = "/catalog.pdf";

    const productName = product[`name_${locale}`] || product.name_en;
    const productDesc = product[`description_${locale}`] || product.description_en;

    const whatsappNumber = "201109458208";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(isRTL ? 'استفسار عن ' : 'Inquiry about ')} ${productName}`;

    const createSlug = (name: string, id: string | number) => {
        if (!name) return '';
        const slug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        return `${slug}-${id}`;
    };

    const relatedProducts = productsData.products
        .filter((p: any) => p.id !== product.id && p.category === product.category)
        .slice(0, 4);

    // حماية صانعة الأخطاء (Safe Access for t.raw)
    let features = [];
    try {
        const rawFeatures = t.raw("features");
        features = Array.isArray(rawFeatures) ? rawFeatures : [];
    } catch (error) {
        features = [];
    }

    return (
        <main className="bg-[#fff] min-h-screen font-sans text-[#2d2d2d] py-26" dir={dir}>

            <nav className="max-w-7xl mx-auto px-6 md:px-8 py-6 md:py-10 flex justify-between items-center">
                <Link href={`/${locale}/products/`} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors group">
                    <FiArrowLeft size={18} className={`group-hover:-translate-x-1 transition-transform ${isRTL ? "rotate-180" : ""}`} />
                    <span className="text-sm font-medium tracking-tight">{t("backToCatalog")}</span>
                </Link>
                <div className="flex items-center gap-2">
                    <span className="hidden sm:block text-[10px] font-bold uppercase tracking-widest text-gray-400">{t("premiumExport")}</span>
                    <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                </div>
            </nav>

            <div className="max-w-6xl mx-auto px-5 py-5">
                <div className="lg:hidden mb-6 flex flex-col items-center text-center">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                        {t("directFromFarms")}
                    </span>

                    <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight">
                        {productName}
                    </h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

                    {/* LEFT: IMAGE SECTION */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative bg-white border border-gray-100 rounded-[24px] md:rounded-[32px] p-8 md:p-12 shadow-sm w-full"
                    >
                        <div className="relative aspect-square w-full max-w-[300px] md:max-w-[400px] mx-auto">
                            <Image
                                src={imagePath}
                                alt={productName}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        <div className="mt-8 flex justify-center gap-4 md:gap-8 border-t border-gray-50 pt-8">
                            <div className="text-center">
                                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1">{t("origin")}</p>
                                <p className="text-xs md:text-sm font-semibold">{t("egypt")}</p>
                            </div>
                            <div className="w-[1px] h-8 bg-gray-100"></div>
                            <div className="text-center">
                                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1">{t("quality")}</p>
                                <p className="text-xs md:text-sm font-semibold">{t("premium")}</p>
                            </div>
                            <div className="w-[1px] h-8 bg-gray-100"></div>
                            <div className="text-center">
                                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-gray-400 mb-1">{t("type")}</p>
                                <p className="text-xs md:text-sm font-semibold">{t("organic")}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: INFO SECTION */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left rtl:lg:text-right pt-2 md:pt-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-full flex flex-col items-center lg:items-start"
                        >
                            <div className="hidden lg:block w-full text-left rtl:text-right">
                                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 md:mb-6">
                                    {t("directFromFarms")}
                                </span>
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] tracking-tight mb-4 md:mb-6">
                                    {productName}
                                </h1>
                            </div>

                            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10 font-normal max-w-lg text-center lg:text-left rtl:lg:text-right">
                                {productDesc}
                            </p>

                            <div className="mb-8 md:mb-10 w-full text-center lg:text-left rtl:lg:text-right">
                                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">{t("availableSelection")}</h3>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
                                    {product.variants?.map((v: any, i: number) => (
                                        <div key={i} className="px-4 py-2 md:px-5 md:py-2.5 bg-white border border-gray-200 rounded-full text-xs md:text-sm font-medium hover:border-black transition-all cursor-default shadow-sm">
                                            {v[`name_${locale}`] || v.name_en}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-12 w-full">
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-3 p-3 md:p-4 bg-[#f9f9f9] rounded-xl md:rounded-2xl border border-gray-50">
                                    <FiPackage className="text-gray-400" size={18} />
                                    <span className="text-[11px] md:text-xs font-semibold text-gray-600">{t("exportPacking")}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 md:gap-3 p-3 md:p-4 bg-[#f9f9f9] rounded-xl md:rounded-2xl border border-gray-50">
                                    <FiShield className="text-gray-400" size={18} />
                                    <span className="text-[11px] md:text-xs font-semibold text-gray-600">{t("certifiedQuality")}</span>
                                </div>
                            </div>

                            <div className="w-full flex flex-row flex-nowrap items-center justify-start gap-2 mt-2">
                                <Link href={`/${locale}/catalog`} scroll={false} className="flex-1 min-w-0">
                                    <motion.div
                                        whileHover={{ y: -3, boxShadow: "0px 10px 25px rgba(45, 90, 39, 0.25)" }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex items-center justify-center gap-1.5 bg-[#2d5a27] text-white px-2 py-3 rounded-full shadow-md transition-all whitespace-nowrap"
                                    >
                                        <FiSend size={14} className={isRTL ? "scale-x-[-1]" : ""} />
                                        <span className="text-[10px] md:text-xs font-bold tracking-tight truncate">
                                            {t("buttons.quote")}
                                        </span>
                                    </motion.div>
                                </Link>

                                <Link href={`/${locale}/contact`} scroll={false} className="flex-1 min-w-0">
                                    <motion.div
                                        whileHover={{ y: -3, backgroundColor: "rgba(45, 90, 39, 0.15)" }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex flex-1 min-w-0 items-center justify-center gap-1.5 bg-[#2d5a27]/10 text-[#2d5a27] px-2 py-3 rounded-full font-bold text-[10px] md:text-xs transition-all whitespace-nowrap"
                                    >
                                        <FiPackage size={14} />
                                        <span className="tracking-tight truncate">
                                            {t("buttons.sample")}
                                        </span>
                                    </motion.div>
                                </Link>

                                <motion.a
                                    whileHover={{ y: -3, borderColor: "#2d5a27", color: "#2d5a27" }}
                                    whileTap={{ scale: 0.97 }}
                                    href={product.pdf_url || catalogPath}
                                    download
                                    target="_blank"
                                    className="flex flex-1 min-w-0 items-center justify-center gap-1.5 border-2 border-gray-200 text-gray-600 px-2 py-3 rounded-full font-bold text-[10px] md:text-xs transition-all whitespace-nowrap hover:bg-gray-50"
                                >
                                    <FiDownload size={14} />
                                    <span className="tracking-tight truncate">
                                        {t("buttons.catalog")}
                                    </span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="relative w-full py-16 md:py-32 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-[#2d5a27]"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 92%)' }}
                    ></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                        <span className="text-white/60 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-4">
                            {t("curatedSelection")}
                        </span>
                        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 md:mb-8">
                            {t("similarItems")}
                        </h2>
                        <div className="h-1 w-16 md:w-20 bg-white/20 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-8">
                        {relatedProducts.map((item: any, idx: number) => (
                            <Link
                                key={item.id}
                                scroll={false}
                                href={`/${locale}/products/${createSlug(item.name_en, item.id)}/`}
                                className={`group relative ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
                            >
                                <div className="relative aspect-square flex items-center justify-center max-w-[280px] mx-auto md:max-w-none">
                                    <div className="absolute inset-0 bg-white/5 rounded-[40px] md:rounded-[60px] rotate-6 group-hover:rotate-12 group-hover:bg-white transition-all duration-700"></div>
                                    <div className="absolute inset-0 bg-white shadow-xl md:shadow-2xl rounded-[40px] md:rounded-[60px] -rotate-6 group-hover:rotate-0 transition-all duration-700"></div>

                                    <div className="relative z-10 p-8 md:p-12 transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110 group-hover:-translate-y-4 md:group-hover:-translate-y-8">
                                        <Image
                                            src={item.image.replace("../", "/")}
                                            alt={item[`name_${locale}`] || item.name_en}
                                            width={240}
                                            height={240}
                                            className="object-contain w-[160px] h-[160px] md:w-full md:h-full"
                                        />
                                    </div>

                                    <div className="absolute bottom-6 md:bottom-10 opacity-0 group-hover:opacity-100 group-hover:bottom-8 md:group-hover:bottom-12 transition-all duration-500 z-20 hidden md:block">
                                        <div className="bg-[#2d5a27] text-white p-4 rounded-full shadow-xl">
                                            <FiArrowLeft className={`${isRTL ? "" : "rotate-180"}`} size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 md:mt-12 text-center">
                                    <p className="text-[9px] md:text-[10px] font-black text-white/60 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 group-hover:text-white transition-colors">
                                        {item.category}
                                    </p>
                                    <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                                        {item[`name_${locale}`] || item.name_en}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-20 md:mt-32 flex justify-center">
                        <Link
                            href={`/${locale}/products/`}
                            className="group relative w-full sm:w-auto text-center px-12 md:px-16 py-5 md:py-6 bg-white rounded-full overflow-hidden shadow-2xl transition-all"
                        >
                            <div className="absolute inset-0 bg-[#1a1a1a] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                            <span className="relative z-10 font-black uppercase text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] text-[#2d5a27] group-hover:text-white transition-colors">
                                {t("backToCatalog")}
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 mt-24 md:mt-40 mb-20 md:mb-32">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-7 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-6 md:mb-8">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#2d5a27] flex items-center justify-center">
                                <FiGlobe className="text-[#2d5a27] animate-spin-slow text-sm md:text-base" />
                            </div>
                            <span className="text-[#2d5a27] font-black text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em]">
                                {t("worldwideLogistics")}
                            </span>
                        </div>

                        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-[#1a1a1a] leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 md:mb-12">
                            {t("startJourney")}
                        </h2>

                        <p className="text-base md:text-xl text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed mb-10 md:mb-12 font-medium opacity-90">
                            {t("logisticsDesc")}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center justify-center md:justify-start">
                            <motion.a
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                href={whatsappUrl}
                                target="_blank"
                                className="group w-full sm:w-auto bg-[#2d5a27] text-white px-8 md:px-12 py-5 md:py-6 rounded-full flex items-center justify-center gap-6 transition-all duration-300 shadow-xl shadow-[#2d5a27]/20"
                            >
                                <div className={`flex flex-col ${isRTL ? "items-end" : "items-start"}`}>
                                    <span className="text-[9px] font-medium opacity-80 uppercase tracking-tighter leading-none mb-1 text-left">{t("directContact")}</span>
                                    <span className="font-black uppercase text-[11px] md:text-xs tracking-[0.1em] md:tracking-[0.15em]">{t("chatWhatsApp")}</span>
                                </div>
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white group-hover:text-[#2d5a27] transition-all shrink-0">
                                    <FiMessageCircle size={18} />
                                </div>
                            </motion.a>

                            <motion.a
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                href={product.pdf_url || catalogPath}
                                download
                                target="_blank"
                                className="group w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 border-2 border-gray-200 rounded-full flex items-center justify-center gap-6 hover:border-[#2d5a27] hover:bg-[#2d5a27]/5 transition-all duration-300 cursor-pointer"
                            >
                                <div className={`flex flex-col ${isRTL ? "items-end" : "items-start"}`}>
                                    <span className="text-[9px] font-medium text-gray-400 uppercase tracking-tighter leading-none mb-1">
                                        {t("availablePdf")}
                                    </span>
                                    <span className="font-black text-[#1a1a1a] uppercase text-[11px] md:text-xs tracking-[0.1em] md:tracking-[0.15em]">
                                        {t("buttons.catalog")}
                                    </span>
                                </div>
                                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#2d5a27] group-hover:bg-[#2d5a27] group-hover:text-white transition-all shrink-0">
                                    <FiDownload size={18} />
                                </div>
                            </motion.a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-3 md:space-y-4 w-full">
                        {features.map((f: any, i: number) => (
                            <div
                                key={i}
                                className="group flex items-center justify-between p-6 md:p-8 bg-gray-50/50 border border-gray-100/50 rounded-[2rem] md:rounded-[2.5rem] hover:bg-[#2d5a27] transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 md:gap-6">
                                    <span className="text-xl md:text-2xl font-black text-gray-200 group-hover:text-white/20 transition-colors">
                                        {f.icon}
                                    </span>
                                    <div className={isRTL ? "text-right" : "text-left"}>
                                        <h4 className="font-bold text-[#1a1a1a] group-hover:text-white transition-colors uppercase text-[12px] md:text-sm tracking-widest leading-none mb-1">
                                            {f.title}
                                        </h4>
                                        <p className="text-gray-400 group-hover:text-white/60 transition-colors text-[10px] md:text-xs font-medium">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-white/30 group-hover:rotate-45 transition-all shrink-0">
                                    <FiSend className={`text-gray-300 group-hover:text-white text-xs md:text-sm ${isRTL ? "rotate-180" : ""}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}