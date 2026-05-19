"use client";
import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import logo from '../assets/greenrow.webp';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');
    const locale = useLocale();

    const getRoute = (key: string) => {
        if (key === 'home') return '/';
        return `/${key.toLowerCase().replace(/\s+/g, '-')}`;
    };

    return (

        <footer className="bg-[#051a10] text-white pt-20 pb-10 border-t border-white/5 relative rounded-t-4xl overflow-hidden">
            <div className="absolute bottom-0 right-0 rtl:right-auto rtl:left-0 w-[300px] h-[300px] bg-green-900/20 blur-[100px] rounded-full -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-start">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={140}
                                height={50}
                                className="h-18 w-auto object-contain brightness-110"
                            />
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 font-medium max-w-[sm]">
                            {t('description')}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: "https://web.facebook.com/profile.php?id=61582088223661" },
                                { Icon: Instagram, href: "https://www.instagram.com/ezzexport/?fbclid=IwY2xjawNsKVpleHRuA2FlbQIxMQBicmlkETEwN2xjblIzdTRhNmpKZ2tPAR7k_hx9Tk12NMj34rMICVpeqJavdX_0OOiGNwksXLF4QkQh6xjWh5Z9BqjD0w_aem_EiVZGu7OHrur6W-PHTp5Eg" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/ezz-export" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
                                >
                                    <social.Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-start w-full">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                            {t('navigation.title')}
                        </h4>

                        <ul className="space-y-4 flex flex-col items-center justify-center lg:items-start w-full">
                            {['home', 'about', 'products', 'contact'].map((item) => (
                                <li key={item} className="w-full flex justify-center lg:justify-start">
                                    <Link
                                        href={`/${locale}${getRoute(item)}`}
                                        className="text-white/50 text-sm font-bold hover:text-green-500 transition-colors
                 flex items-center justify-center lg:justify-start group"
                                    >
                                        <ArrowUpRight
                                            size={14}
                                            className="hidden lg:inline-block me-2 opacity-0 -translate-y-1
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all rtl:rotate-[-90deg]"
                                        />
                                        {t(`navigation.${item}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                            {t('getInTouch')}
                        </h4>
                        <ul className="space-y-6 w-full">
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <a href="tel:+201109458208" className="group flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full">
                                    <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">{t('phone')}</p>
                                        <p className="text-sm font-bold text-white/80 group-hover:text-green-500 transition-colors dir-ltr" dir="ltr">+20 1109458208</p>
                                    </div>
                                </a>
                            </li>
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <a href="mailto:info@ezzexport.com" className="group flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full">
                                    <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">{t('email')}</p>
                                        <p className="text-sm font-bold text-white/80 group-hover:text-green-500 transition-colors">info@ezzexport.com</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-start">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                            {t('location')}
                        </h4>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col lg:flex-row items-center lg:items-start gap-4"
                        >
                            <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                <MapPin size={18} />
                            </div>
                            <p className="text-sm font-bold text-white/80 leading-relaxed pt-1 group-hover:text-green-500 transition-colors">
                                {t('address')}
                            </p>
                        </a>
                    </div>

                </div>

                <div className="mt-8 p-4 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="flex items-center justify-center md:justify-start gap-2 w-full md:w-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse shrink-0 hidden md:block" />
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium text-center md:text-left">
                            {t('copyright')}
                        </span>
                    </div>

                    <Link
                        href="https://globalnexuseg.com"
                        target='_blank'
                        className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300 border border-white/5 shrink-0"
                    >
                        <span className="text-[8px] text-white/40 uppercase font-bold tracking-tighter">{t('craftedBy')}</span>
                        <span className="text-[10px] text-white group-hover:text-green-400 font-black tracking-widest transition-colors">
                            GLOBALNEXUS
                        </span>
                    </Link>
                </div>

            </div>
        </footer>
    );
}