"use client";
import React, { useState, useMemo, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Leaf } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface ProductVariant {
    name_en: string;
    name_ar?: string;
    name_it?: string;
}

interface Product {
    id: string | number;
    group_id?: string;
    category: string;
    status: string | string[];
    name_en: string;
    name_ar?: string;
    name_it?: string;
    image: string;
    description_en?: string;
    description_ar?: string;
    description_it?: string;
    variants?: ProductVariant[];
}

interface ProductsGridProps {
    initialProducts: Product[];
}

function ProductsGridContent({ initialProducts }: ProductsGridProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [filter, setFilter] = useState("all");
    const t = useTranslations('ProductsPage.grid');
    const locale = useLocale();

    useEffect(() => {
        const categoryFilter = searchParams.get('filter');
        if (categoryFilter) {
            const formattedFilter = categoryFilter.replace('-', '_');
            setFilter(formattedFilter);
        } else if (window.location.hash) { // ← سطر جديد لدعم hash
            const hashFilter = window.location.hash.substring(1).replace('-', '_');
            setFilter(hashFilter);
        } else {
            setFilter("all");
        }
    }, [searchParams]);

    const filteredProducts = useMemo(() => {
        if (filter === "all") return initialProducts;

        return initialProducts.filter(p => {
            const s = p.status;
            if (Array.isArray(s)) {
                return s.some(val => String(val).toLowerCase() === filter.toLowerCase());
            }
            return String(s).toLowerCase() === filter.toLowerCase();
        });
    }, [filter, initialProducts]);

    const createSlug = (name: string, id: string | number) => {
        const baseSlug = name
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');

        return `${baseSlug}-${id}`;
    };

    const getLocalizedContent = (product: Product, field: string) => {
        const typedProduct = product as any;
        return typedProduct[`${field}_${locale}`] || typedProduct[`${field}_en`];
    };

    return (
        <section id="products-grid" className="relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-10 mb-12 md:mb-24">
                    <div className="max-w-2xl text-center lg:text-left rtl:lg:text-right">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="
                                        flex items-center gap-3 mb-5 md:mb-6
                                        justify-center lg:justify-start rtl:lg:justify-end
                                        rtl:flex-row-reverse
                                      "
                        >
                            <span className="w-8 md:w-12 h-[2px] bg-[#2d5a27]" />
                            <span className="text-[#2d5a27] text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest">
                                {t('premiumSelection')}
                            </span>
                        </motion.div>


                        <motion.h2
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="
                                       text-4xl sm:text-6xl md:text-7xl
                                       font-black text-[#051109] uppercase
                                       leading-[1.15] md:leading-[1]
                                       tracking-tight
                                     "
                        >
                            {t.rich('pureCollection', {
                                italic: (chunks) => (
                                    <span className="text-[#2d5a27] font-black">
                                        {chunks}
                                    </span>
                                ),
                                br: () => <br className="hidden md:block" />
                            })}
                        </motion.h2>
                    </div>


                    <div className="w-full lg:w-fit">
                        <div className="grid grid-cols-2 sm:flex bg-white/70 backdrop-blur-md p-1.5 rounded-3xl sm:rounded-full border border-slate-200/50 shadow-sm gap-1">
                            {['all', 'fresh', 'iqf', 'in_brine'].map((f) => {
                                const isActive = filter === f;
                                return (
                                    <button
                                        key={f}
                                        onClick={() => {
                                            const params = new URLSearchParams(searchParams.toString());
                                            if (f === 'all') {
                                                params.delete('filter');
                                            } else {
                                                params.set('filter', f.replace('_', '-'));
                                            }
                                            // نحافظ على الـ hash #products حتى لا يعيد المتصفح التمرير لأعلى الصفحة
                                            const query = params.toString();
                                            const hash = window.location.hash || "#products";
                                            const nextUrl = query ? `?${query}${hash}` : hash;
                                            router.push(nextUrl, { scroll: false });
                                            setFilter(f);
                                        }} className={`relative px-3 py-2.5 sm:px-6 sm:py-3 rounded-2xl sm:rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] transition-all duration-500 z-10 ${isActive ? 'text-white' : 'text-slate-500 hover:text-[#051109]'
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeFilterBg"
                                                className="absolute inset-0 bg-[#2d5a27] rounded-2xl sm:rounded-full -z-10"
                                                transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                                            />
                                        )}
                                        <span className="truncate">{t(`filter.${f}`)}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14">
                    <AnimatePresence mode="wait">
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                                className="group relative"
                            >
                                <Link
                                    href={`/${locale}/products/${createSlug(product.name_en, product.id)}/`}
                                    className="block"
                                    scroll={false}
                                >                                    <div className="relative min-h-[500px] md:h-[600px] w-full bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-[#2d5a27]/30 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] group-hover:-translate-y-2 flex flex-col">

                                        {/* Image Area */}
                                        <div className="relative flex-grow w-full p-10 md:p-16 transition-transform duration-700 ease-out group-hover:scale-105 transform-gpu">
                                            <Image
                                                src={product.image.replace('../', '/')}
                                                alt={getLocalizedContent(product, 'name')}
                                                fill
                                                className="object-contain p-8 md:p-12"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                priority={index < 3}
                                            />
                                        </div>

                                        {/* Info Box */}
                                        <div className="p-6 md:p-10 bg-white/60 backdrop-blur-md border border-white/20 rounded-[2rem] md:rounded-[3.2rem] m-3 md:m-5 flex flex-col justify-between transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.03)] group-hover:bg-white">

                                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                                <div className="max-w-[75%]">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Leaf className="text-[#2d5a27] size-3" />
                                                        <p className="text-[#2d5a27] text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-80">
                                                            {t(`categories.${product.category.toLowerCase()}` as any)}
                                                        </p>
                                                    </div>
                                                    <h3 className="text-xl md:text-3xl font-[1000] text-[#051109] uppercase leading-none tracking-tighter">
                                                        {getLocalizedContent(product, 'name')}
                                                    </h3>
                                                </div>
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2d5a27] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 rtl:-translate-x-4 rtl:group-hover:translate-x-0 shadow-2xl shrink-0">
                                                    <FiArrowUpRight size={20} className="rtl:-scale-x-100" />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 md:pt-5 border-t border-black/[0.06]">
                                                <div className="flex flex-col">
                                                    <span className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 mb-0.5">{t('origin')}</span>
                                                    <span className="text-[10px] md:text-xs font-black uppercase text-[#2d5a27] tracking-wider">{t('country')}</span>
                                                </div>
                                                <span className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[8px] md:text-[9px] font-[1000] uppercase tracking-[0.2em] text-white bg-[#2d5a27]">
                                                    {t.raw(`filter.${(Array.isArray(product.status) ? product.status[0] : product.status).toLowerCase()}`)}
                                                </span>
                                            </div>
                                        </div>

                                    </div>
                                </Link>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

            </div>

            {/* WATERMARK */}
            <div className="absolute left-1/2 bottom-10 -translate-x-1/2 opacity-[0.02] pointer-events-none select-none">
                <h2 className="text-[40vw] lg:text-[25vw] font-black text-[#051109] tracking-[-0.05em] leading-none">EZZ</h2>
            </div>
        </section>
    );
}

export default function ProductsGrid(props: ProductsGridProps) {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Products...</div>}>
            <ProductsGridContent {...props} />
        </Suspense>
    );
}