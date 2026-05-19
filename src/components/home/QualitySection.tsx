"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl"; // تم الاستيراد هنا

import img_1 from "../../assets/proc-1.jpeg";
import img_2 from "../../assets/proc-2.png";
import img_3 from "../../assets/proc-3.jpeg";
import img_4 from "../../assets/proc-4.jpeg";
import img_5 from "../../assets/proc-5.jpeg";

const QualitySection = () => {
  const t = useTranslations('Quality'); // تعريف دالة الترجمة
  const locale = useLocale(); // معرفة اللغة الحالية
  const isRtl = locale === 'ar'; // تحديد ما إذا كانت اللغة تدعم من اليمين لليسار

  // دمج الترجمة مع مصفوفة الخطوات
  const steps = [
    { title: t('steps.step1'), img: img_1, num: "01" },
    { title: t('steps.step2'), img: img_2, num: "02" },
    { title: t('steps.step3'), img: img_3, num: "03" },
    { title: t('steps.step4'), img: img_4, num: "04" },
    { title: t('steps.step5'), img: img_5, num: "05" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    // إضافة خاصية dir للتحكم التلقائي في اتجاه العناصر بناءً على اللغة
    <section className="py-12 md:py-20 bg-white text-[#051109]" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        
        {/* --- الهيدر --- */}
        <div className="mb-10 md:mb-16 space-y-4 relative w-full">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#2d5a27]/30" />
            <span className="text-[#2d5a27] text-[10px] font-black uppercase tracking-[0.3em]">
              {t('badge')}
            </span>
            <span className="w-8 h-[1px] bg-[#2d5a27]/30" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-[1000] uppercase tracking-tighter leading-tight max-w-4xl mx-auto break-words">
            {t.rich('title', {
              green: (chunks) => <span className="text-[#2d5a27] block sm:inline">{chunks}</span>,
              // التعديل هنا: اسم المفتاح "br" والـ parser هيربطه بالتاغ <br/> اللي في الـ JSON تلقائي من غير ما يظهره
              br: () => <br className="hidden md:inline" />
            })}
          </h2>

          <div className="w-16 md:w-20 h-1 bg-[#2d5a27] mx-auto my-4 md:my-6 rounded-full" /> 

          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed font-medium px-2">
            {t('description')}
          </p>
        </div>

        {/* --- تصميم بديل (تخطيط مقسم - Split Layout) --- */}
        {/* تم تعديل الترتيب في الشاشات الصغيرة لضمان تجربة مستخدم متناسقة للأجهزة المحمولة */}
        <div className="relative w-full flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-16">
          
          {/* القائمة الرأسية المنبثقة */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6 w-full">
            {steps.map((step, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                // تبديل محاذاة النص بناءً على اللغة مع الحفاظ على الحشوات متجاوبة
                className={`relative flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl transition-all group ${isRtl ? "text-right" : "text-left"}`}
                whileHover={{ scale: 1.02 }}
                animate={{
                  backgroundColor: i === index ? "#2d5a27" : "#f1f1f1",
                  color: i === index ? "white" : "#051109"
                }}
              >
                <span className={`text-3xl md:text-5xl font-black transition-colors ${i === index ? "text-white" : "text-[#2d5a27]"}`}>
                  {step.num}
                </span>
                <span className="text-lg md:text-2xl font-black uppercase tracking-wider flex-grow">
                  {step.title}
                </span>
                {i === index && (
                  <motion.div
                    layoutId="active-highlight"
                    // النقطة البيضاء هتتغير يمين أو شمال حسب اللغة
                    className={`absolute top-1/2 -translate-y-1/2 w-[6px] md:w-[8px] h-[6px] md:h-[8px] rounded-full bg-white ${isRtl ? "right-[-3px] md:right-[-4px]" : "left-[-3px] md:left-[-4px]"}`}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* إطار الصورة الكبير */}
          <div className="flex-[1.5] relative w-full h-[280px] sm:h-[350px] md:h-[auto] min-h-[300px] md:min-h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                // اتجاه دخول وخروج الصورة هيتعكس أوتوماتيك لو اللغة عربي
                initial={{ opacity: 0, x: isRtl ? 150 : -150 }} 
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? -150 : 150 }} 
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${steps[index].img.src})` }}
              >
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                  <h3 className="text-white text-3xl sm:text-4xl md:text-7xl font-black uppercase tracking-widest text-center shadow-lg select-none break-words max-w-full">
                    {steps[index].title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default QualitySection;