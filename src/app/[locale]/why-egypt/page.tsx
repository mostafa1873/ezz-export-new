import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FiArrowUpRight, FiArrowUpLeft, FiSun, FiAnchor } from 'react-icons/fi';
import hero_image from '../../../assets/egypt-export.png';
import Image from 'next/image';
import FinalCTA from '@/components/about/ExportCTA';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'WhyEgyptHero' });

    return {
        title: t('title'),
        description: t('description'),
        keywords: locale === 'ar'
            ? ["تصدير زراعي", "مزارع مصر", "عز اكسبورت", "تصدير لأوروبا"]
            : ["Agricultural export", "Egypt farms", "Ezz Export", "Export to EU"],
        alternates: {
            canonical: `https://ezzexport.com/${locale}/why-egypt`,
        },
        openGraph: {
            title: t('title'),
            description: t('description'),
            url: `https://ezzexport.com/${locale}/why-egypt`,
            siteName: "Ezz Export",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: t('title'),
            description: t('description'),
            images: ["/og-image.jpg"],
        }
    };
}

export default async function WhyEgyptPage({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'WhyEgyptHero' });
    const isRtl = locale === 'ar';
    const Arrow = isRtl ? FiArrowUpLeft : FiArrowUpRight;

    return (
        <>
            <div
                // تم استخدام overflow-x-clip بدلاً من hidden لمنع السكرول العرضي دون التأثير على العناصر العائمة والـ sticky
                className="w-full min-h-screen bg-white text-slate-900 antialiased font-sans pt-32 pb-16 lg:pt-40 lg:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center overflow-x-clip"
                dir={isRtl ? 'rtl' : 'ltr'}
            >
                <div className="w-full max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

                        {/* 1. النصوص */}
                        <div className="flex flex-col items-start relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2d5a27]/5 text-[#2d5a27] text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full mb-4 sm:mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#2d5a27] animate-pulse" />
                                {t('badge')}
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-black text-slate-900 tracking-tight leading-[1.1] mb-6 sm:mb-8">
                                {t('title')}
                            </h1>

                            <div className={`relative p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 ${isRtl ? 'border-r-4 border-r-[#2d5a27]' : 'border-l-4 border-l-[#2d5a27]'}`}>
                                <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-medium leading-relaxed">
                                    {t('description')}
                                </p>
                            </div>
                        </div>

                        {/* 2. الصورة مع الكروت العائمة */}
                        <div className="relative mt-12 sm:mt-8 lg:mt-0 max-w-md sm:max-w-none mx-auto w-full">
                            {/* الصورة الرئيسية */}
                            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src={hero_image}
                                    alt="Egypt Agriculture Export"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                            </div>

                            {/* الكارت العائم الأول */}
                            <div className={`absolute -top-4 sm:-top-6 lg:-top-10 ${isRtl ? '-left-2 sm:-left-4 lg:-left-10' : '-right-2 sm:-right-4 lg:-right-10'} bg-[#2d5a27] text-white p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl border-2 sm:border-4 border-white transform transition-transform hover:scale-105 z-20 w-[130px] sm:w-[180px] lg:w-[200px]`}>
                                <FiSun className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300 mb-2 sm:mb-3" />
                                <div className="text-2xl sm:text-3xl font-black leading-none mb-1">365</div>
                                <div className="text-[9px] sm:text-xs font-bold text-emerald-100 uppercase tracking-wider leading-tight">{locale === 'ar' ? 'يوم من الشمس' : 'Days of Sun'}</div>
                            </div>

                            {/* الكارت العائم الثاني */}
                            <div className={`absolute -bottom-4 sm:-bottom-6 lg:-bottom-10 ${isRtl ? '-right-2 sm:-right-4 lg:-right-10' : '-left-2 sm:-left-4 lg:-left-10'} bg-white text-slate-900 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-slate-100 transform transition-transform hover:scale-105 z-20 w-[140px] sm:w-[180px] lg:w-[220px]`}>
                                <div className="flex items-center justify-between mb-2 sm:mb-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                        <FiAnchor className="w-4 h-4 sm:w-5 sm:h-5 text-[#2d5a27]" />
                                    </div>
                                    <Arrow className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                                </div>
                                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#2d5a27] leading-none mb-1">3-5 {locale === 'ar' ? 'أيام' : 'Days'}</div>
                                <div className="text-[9px] sm:text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-wider leading-tight">{locale === 'ar' ? 'ترانزيت لأوروبا' : 'EU Transit Time'}</div>
                            </div>
                        </div>

                    </div>

                    {/* ================= ركائز القوة ================= */}
                    <div className="mt-20 sm:mt-24 lg:mt-32 w-full border-t border-slate-200 pt-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative">

                            {/* فواصل الخطوط للشاشات الكبيرة */}
                            <div className={`hidden md:block absolute top-0 bottom-0 w-px bg-slate-200 ${isRtl ? 'right-1/3' : 'left-1/3'}`} />
                            <div className={`hidden md:block absolute top-0 bottom-0 w-px bg-slate-200 ${isRtl ? 'right-2/3' : 'left-2/3'}`} />

                            {/* الركيزة الأولى */}
                            <div className={`flex flex-col md:px-8 ${isRtl ? 'md:pr-0' : 'md:pl-0'}`}>
                                <div className="text-4xl sm:text-5xl font-black text-slate-100 mb-2 font-mono">01</div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">{t('pillar1_title')}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{t('pillar1_desc')}</p>
                            </div>

                            {/* الركيزة الثانية */}
                            <div className="flex flex-col md:px-8">
                                <div className="text-4xl sm:text-5xl font-black text-slate-100 mb-2 font-mono">02</div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">{t('pillar2_title')}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{t('pillar2_desc')}</p>
                            </div>

                            {/* الركيزة الثالثة */}
                            <div className={`flex flex-col md:px-8 ${isRtl ? 'md:pl-0' : 'md:pr-0'}`}>
                                <div className="text-4xl sm:text-5xl font-black text-slate-100 mb-2 font-mono">03</div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">{t('pillar3_title')}</h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{t('pillar3_desc')}</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* 2- SECTION */}
            <section className="w-full bg-white text-slate-900 antialiased py-10 border-t border-slate-100 flex items-center justify-center">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                        {/* الجانب الأيسر: العنوان الثابت */}
                        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-36 z-10">
                            <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-[#2d5a27] mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a27]" />
                                {t('sec2_badge')}
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight max-w-md mb-5 sm:mb-6">
                                {t('sec2_title')}
                            </h2>
                            <div className="w-10 sm:w-12 h-[2px] bg-[#2d5a27]/30" />
                        </div>

                        {/* الجانب الأيمن: تفكيك المحتوى */}
                        <div className="lg:col-span-7 flex flex-col w-full mt-4 lg:mt-0">

                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-800 leading-relaxed max-w-2xl mb-10 sm:mb-16">
                                {t('sec2_desc')}
                            </p>

                            <div className="flex flex-col w-full border-t border-slate-200">

                                {/* الميزة الأولى */}
                                <div className="flex flex-col sm:grid sm:grid-cols-12 py-6 sm:py-8 border-b border-slate-100 sm:items-baseline gap-2 sm:gap-4 group">
                                    <div className="sm:col-span-2 text-xl sm:text-2xl font-light font-mono text-[#2d5a27]/40 group-hover:text-[#2d5a27] transition-colors">01</div>
                                    <div className="sm:col-span-4 text-base sm:text-lg font-bold text-slate-900">{isRtl ? 'تنوع زراعي واسع' : 'Wide Agricultural Diversity'}</div>
                                    <div className="sm:col-span-6 text-sm text-slate-500 font-medium mt-1 sm:mt-0">
                                        {isRtl ? 'تغطية متكاملة لمختلف أنواع المحاصيل والخضروات والفواكه المطلوبة.' : 'Comprehensive coverage of all types of required crops, vegetables, and fruits.'}
                                    </div>
                                </div>

                                {/* الميزة الثانية */}
                                <div className="flex flex-col sm:grid sm:grid-cols-12 py-6 sm:py-8 border-b border-slate-100 sm:items-baseline gap-2 sm:gap-4 group">
                                    <div className="sm:col-span-2 text-xl sm:text-2xl font-light font-mono text-[#2d5a27]/40 group-hover:text-[#2d5a27] transition-colors">02</div>
                                    <div className="sm:col-span-4 text-base sm:text-lg font-bold text-slate-900">{isRtl ? 'جودة مستقرة ومضمونة' : 'Stable & Certified Quality'}</div>
                                    <div className="sm:col-span-6 text-sm text-slate-500 font-medium mt-1 sm:mt-0">
                                        {isRtl ? 'إنتاج يخضع لرقابة صارمة يضمن ثبات معايير الحجم، المذاق، والسلامة الغذائية.' : 'Strictly monitored production ensuring consistency in size, taste, and food safety standards.'}
                                    </div>
                                </div>

                                {/* الميزة الثالثة */}
                                <div className="flex flex-col sm:grid sm:grid-cols-12 py-6 sm:py-8 border-b border-slate-100 sm:items-baseline gap-2 sm:gap-4 group">
                                    <div className="sm:col-span-2 text-xl sm:text-2xl font-light font-mono text-[#2d5a27]/40 group-hover:text-[#2d5a27] transition-colors">03</div>
                                    <div className="sm:col-span-4 text-base sm:text-lg font-bold text-slate-900">{isRtl ? 'كميات تجارية ضخمة' : 'Scalable Commercial Volumes'}</div>
                                    <div className="sm:col-span-6 text-sm text-slate-500 font-medium mt-1 sm:mt-0">
                                        {isRtl ? 'قدرات لوجستية وتصديرية لتلبية طلبيات أسواق الاتحاد الأوروبي الكبرى بدون انقطاع.' : 'Export capabilities optimized to supply large-scale EU market demands uninterrupted.'}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 3- SECTION */}
            <section className="w-full bg-white text-slate-900 antialiased py-10 border-t border-slate-100 flex items-center justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* الجزء العلوي: اتظبط عشان الـ Gap في الموبايل */}
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-20 mb-16 lg:mb-24">
                        <div className="max-w-2xl">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#2d5a27]/5 border border-[#2d5a27]/10 text-[#2d5a27] text-xs font-black tracking-[0.25em] uppercase mb-6 lg:mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#2d5a27] animate-pulse" />
                                {t('sec3_badge')}
                            </div>
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
                                {t('sec3_title')}
                            </h2>
                        </div>

                        <div className="max-w-xl lg:pt-16">
                            <p className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-500 leading-relaxed border-s-4 border-[#2d5a27]/20 ps-4 lg:ps-6">
                                {t('sec3_desc')}
                            </p>
                        </div>
                    </div>

                    {/* الجزء السفلي: تعديل الـ Flexbox عشان يقلب طولي في الموبايل */}
                    <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-8 relative mt-10">

                        {/* نقطة البداية */}
                        <div className="relative z-10 flex items-center gap-5 bg-white md:pe-8 group w-full md:w-auto">
                            <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2d5a27]/5 border border-[#2d5a27]/20 transition-transform group-hover:scale-110 duration-500 flex-shrink-0">
                                <span className="absolute w-full h-full rounded-full border border-[#2d5a27] animate-ping opacity-20" />
                                <span className="w-4 h-4 rounded-full bg-[#2d5a27]" />
                            </div>
                            <div>
                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{isRtl ? 'المنشأ' : 'ORIGIN'}</span>
                                <span className="block text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{isRtl ? 'مزارع مصر' : 'EGYPT FARMS'}</span>
                            </div>
                        </div>

                        {/* خط الإمداد: مخفي في الموبايل عشان ميعملش زحمة، وواضح في التابلت والديسكتوب */}
                        <div className="hidden md:flex flex-1 items-center justify-center relative px-6 lg:px-12">
                            <div className="absolute left-0 right-0 h-[2px] bg-slate-100 z-0" />
                            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#2d5a27]/40 to-transparent z-0" />
                            <div className="relative z-10 bg-white border border-[#2d5a27]/20 px-4 lg:px-6 py-2 rounded-full flex items-center gap-3 shadow-sm text-[#2d5a27] whitespace-nowrap">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <span className="text-xs lg:text-sm font-black uppercase tracking-widest">{isRtl ? 'توريد سريع' : 'FAST SUPPLY'}</span>
                            </div>
                        </div>

                        {/* نقطة الوصول */}
                        <div className="relative z-10 flex items-center gap-5 bg-white md:ps-8 group w-full md:w-auto md:justify-end">
                            <div className="text-start md:text-end order-2 md:order-1">
                                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{isRtl ? 'الوجهة' : 'DESTINATION'}</span>
                                <span className="block text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{isRtl ? 'أسواق أوروبا' : 'EU MARKETS'}</span>
                            </div>
                            <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-dashed border-slate-200 text-slate-300 transition-colors group-hover:border-[#2d5a27]/30 group-hover:text-[#2d5a27]/50 duration-500 flex-shrink-0 order-1 md:order-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v1.45c2.84 1.35 4.93 4.02 5.6 7.21.14.77.21 1.56.21 2.34 0 1.63-.44 3.16-1.2 4.47z" /></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4- SECTION */}
            <section className="w-full bg-white py-10 border-t border-black/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* الهيدر (بنفس ألوانك) */}
                    <div className="flex flex-col items-center text-center mb-16 md:mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d5a27]/5 border border-[#2d5a27]/10 text-[#2d5a27] text-xs font-black uppercase tracking-[0.2em] mb-6">
                            {t('quality_sec_badge')}
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 max-w-3xl leading-tight">
                            {t('quality_sec_title')}
                        </h2>
                        <p className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed">
                            {t('quality_sec_desc')}
                        </p>
                    </div>

                    {/* 
          شكل مختلف: Bento Grid Layout
          بدل الـ 4 مربعات التقليدية، هنقسمهم شبكة احترافية 
        */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* الكارت الأول (كبير - ياخد مساحة عمودين) */}
                        <div className="md:col-span-2 p-8 md:p-10 rounded-[2rem] bg-slate-50 border border-slate-100 relative overflow-hidden group hover:shadow-xl hover:shadow-[#2d5a27]/5 transition-all duration-300">
                            <div className="absolute -right-6 -top-10 text-[180px] font-black text-slate-900/[0.03] rotate-12 group-hover:scale-110 transition-transform duration-700">
                                01
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{t('q_card1_head')}</h3>
                                <p className="text-base text-slate-500 leading-relaxed max-w-md">{t('q_card1_text')}</p>
                            </div>
                        </div>

                        {/* الكارت الثاني (صغير - بحدود مميزة) */}
                        <div className="md:col-span-1 p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-100/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#2d5a27]/10 flex items-center justify-center mb-6 group-hover:bg-[#2d5a27] transition-colors duration-300">
                                <svg className="w-6 h-6 text-[#2d5a27] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('q_card2_head')}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{t('q_card2_text')}</p>
                        </div>

                        {/* الكارت الثالث (صغير) */}
                        <div className="md:col-span-1 p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg shadow-slate-100/50 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                            <div className="w-12 h-12 rounded-full bg-[#2d5a27]/10 flex items-center justify-center mb-6 group-hover:bg-[#2d5a27] transition-colors duration-300">
                                <svg className="w-6 h-6 text-[#2d5a27] group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{t('q_card3_head')}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{t('q_card3_text')}</p>
                        </div>

                        {/* الكارت الرابع (كبير ومعكوس بألوانك عشان يكسر الملل ويدي فخامة) */}
                        <div className="md:col-span-2 p-8 md:p-10 rounded-[2rem] bg-[#2d5a27] relative overflow-hidden group hover:shadow-2xl hover:shadow-[#2d5a27]/20 transition-all duration-300">
                            {/* تأثير إضاءة خفيف في الخلفية */}
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="relative z-10 h-full flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('q_card4_head')}</h3>
                                <p className="text-base text-white/80 leading-relaxed max-w-md">{t('q_card4_text')}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* 5- SECTION */}
            <FinalCTA />

        </>
    );
}