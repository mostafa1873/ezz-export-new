"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFileDownload } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function FloatingActions() {
  const t = useTranslations('FloatingActions');
  const whatsappNumber = "201109458208";
  const catalogUrl = "/catalog.pdf";

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[999] flex flex-col gap-3 md:gap-4" dir="ltr">

      <motion.a
        href={catalogUrl}
        download
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white text-[#2d5a27] rounded-full shadow-xl border border-gray-100 cursor-pointer"
      >
        {/* التسمية التوضيحية تظهر دائماً على يسار الزر لضمان عدم خروجها عن الشاشة */}
        <span className="hidden md:block absolute right-16 px-3 py-1 bg-black text-white text-[10px] uppercase font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {t('downloadCatalog')}
        </span>
        <FaFileDownload className="text-xl md:text-2xl" />
      </motion.a>

      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg cursor-pointer"
      >
        {/* التسمية التوضيحية تظهر دائماً على يسار الزر */}
        <span className="hidden md:block absolute right-16 px-3 py-1 bg-[#25D366] text-white text-[10px] uppercase font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          {t('chatWithUs')}
        </span>

        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10 md:opacity-20"></span>

        <FaWhatsapp className="text-2xl md:text-3xl z-10" />
      </motion.a>

    </div>
  );
}