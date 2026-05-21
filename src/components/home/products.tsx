"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import { useLocale, useTranslations } from "next-intl";

// استيراد ملف الـ JSON مباشرة
import productsData from "@/data/products.json";
import Image from "next/image";

interface Product {
  id: string | number;
  category: string;
  status: string | string[];
  name_en: string;
  name_ar?: string;
  name_it?: string;
  image: string;
  description_en?: string;
  description_ar?: string;
  description_it?: string;
}

const MainProducts = () => {
  const t = useTranslations("ProductsPage.grid"); // استخدام نفس نصوص الترجمة لتوحيد الكلمات (Origin, Country, إلخ)
  const mainT = useTranslations("MainProducts"); // لعنوان السكشن والزر السفلي
  const locale = useLocale();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (productsData && productsData.products) {
      // فلترة المنتجات الأساسية الـ 5 المطلوبة عبر الـ IDs الخاصة بها
      const targetIds = [1, 34, 22, 24, 21]; 
      const filtered = productsData.products.filter((p: any) => targetIds.includes(p.id));
      setProducts(filtered.length > 0 ? filtered : productsData.products.slice(0, 5));
    }
  }, []);

  // دالة توليد الـ Slug المتطابقة تماماً لصفحة التفاصيل
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
    <>
      {/* 🍃 حاوية الأيقونة المستقلة خارج السكشن لمنع حدوث الـ overflow-hidden وقص الدائرة */}
      <div className="relative z-30 flex justify-center -mb-[18px] pointer-events-none">
        <div className="bg-white w-9 h-9 flex items-center justify-center border border-[#2d5a27]/30 rounded-full shadow-sm pointer-events-auto">
          <Leaf className="text-[#2d5a27] size-4" />
        </div>
      </div>

      {/* تم ضبط السكشن مع الحفاظ التام على overflow-hidden لحماية الأبعاد والتأثيرات الخلفية */}
      <section className="py-10 bg-[#fff] text-[#051109] relative z-10 border-t-2 border-[#2d5a27] overflow-hidden">
        
        {/* عناصر ديكورية بالخلفية لكسر اللون وإعطاء شكل مميز وعصري */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-[#2d5a27]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2d5a27]/5 rounded-full blur-3xl" />
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 relative z-10">
          
          {/* --- HEADER SECTION WITH WATERMARK BACKGROUND --- */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 relative">
            
            {/* الكلمة الخلفية الكبيرة الفخمة - تم ضبط الشفافية والخط بدقة */}
            <div className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 text-[50px] sm:text-[110px] md:text-[150px] font-black uppercase tracking-[0.15em] text-[#2d5a27]/[0.04] select-none pointer-events-none z-0 font-sans">
              FRESH
            </div>

            <div className="flex items-center gap-3 mb-4 justify-center relative z-10">
              <span className="w-8 md:w-12 h-[2px] bg-[#2d5a27]" />
              <span className="text-[#2d5a27] text-[10px] font-extrabold uppercase tracking-widest">
                {t('premiumSelection')}
              </span>
              <span className="w-8 md:w-12 h-[2px] bg-[#2d5a27]" />
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-[#051109] uppercase leading-[1.15] tracking-tight mb-4 relative z-10">
              {mainT("title")}
            </h2>
            
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-2xl relative z-10">
              {mainT("desc")}
            </p>
          </div>

          {/* --- PRODUCTS GRID (الخمس منتجات بجانب بعضهم تماماً بدون أي سكرول ومتجاوب تماماً) --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-5">
            {products.map((product, index) => (
              <div key={product.id} className="group relative h-full">
                <Link
                  href={`/${locale}/products/${createSlug(product.name_en, product.id)}/`}
                  className="block h-full"
                  scroll={false}
                >
                  {/* تم تعديل الطول ليكون مرن بالكامل h-full مع min-h لمنع الانضغاط وتجانس الارتفاعات */}
                  <div className="relative min-h-[450px] h-full w-full bg-white rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden border border-[#2d5a27]/20 flex flex-col transition-all duration-500 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
                    
                    {/* Image Area - أصبحت مرنة هيدروليكياً وتأخذ المساحة المتاحة بالتساوي */}
                    <div className="relative flex-1 w-full min-h-[220px] p-6 md:p-8 flex items-center justify-center">
                      <Image
                        src={product.image.replace('../', '/')}
                        alt={getLocalizedContent(product, 'name')}
                        fill
                        className="object-contain p-4 md:p-6"
                        sizes="(max-w-1200px) 100vw, (max-w-960px) 50vw, 20vw"
                        priority={index < 5}
                      />
                    </div>

                    {/* Info Box - تم تثبيت تموضعه بالأسفل دائماً دون تداخل */}
                    <div className="p-4 md:p-6 bg-white border border-black/[0.02] rounded-[1.5rem] md:rounded-[1.8rem] m-2 md:m-3 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.02)] shrink-0">
                      
                      <div className="flex justify-between items-start mb-3 md:mb-4 gap-2">
                        <div className="max-w-[75%] min-w-0">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <Leaf className="text-[#2d5a27] size-2.5 shrink-0" />
                            <p className="text-[#2d5a27] text-[8px] font-black uppercase tracking-[0.2em] opacity-80 truncate">
                              {t(`categories.${product.category.toLowerCase()}` as any)}
                            </p>
                          </div>
                          <h3 className="text-base md:text-lg xl:text-xl font-[1000] text-[#051109] uppercase leading-tight tracking-tighter truncate">
                            {getLocalizedContent(product, 'name')}
                          </h3>
                        </div>
                        
                        {/* السهم الأخضر الجانبي */}
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#2d5a27] text-white flex items-center justify-center shadow-lg shrink-0">
                          <FiArrowUpRight size={16} className="rtl:-scale-x-100" />
                        </div>
                      </div>

                      {/* البار السفلي للكرت */}
                      <div className="flex items-center justify-between pt-3 border-t border-black/[0.05] gap-2">
                        <div className="flex flex-col min-w-0">
                          <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400 mb-0.5 truncate">
                            {t('origin')}
                          </span>
                          <span className="text-[9px] md:text-[10px] font-black uppercase text-[#2d5a27] tracking-wider truncate">
                            {t('country')}
                          </span>
                        </div>
                        <span className="px-2.5 py-1 md:py-1.5 rounded-full text-[7px] md:text-[8px] font-[1000] uppercase tracking-[0.1em] text-white bg-[#2d5a27] whitespace-nowrap shrink-0">
                          {t.raw(`filter.${(Array.isArray(product.status) ? product.status[0] : product.status).toLowerCase()}`)}
                        </span>
                      </div>

                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* --- BOTTOM BUTTON --- */}
          <div className="pt-16 flex justify-center">
            <Link href={`/${locale}/products`}>
              <button className="flex items-center justify-center bg-[#2d5a27] text-white px-12 py-4 rounded-full font-black tracking-widest text-xs uppercase transition-colors duration-300 hover:bg-gray-950 shadow-md">
                {mainT("btn")}
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MainProducts;