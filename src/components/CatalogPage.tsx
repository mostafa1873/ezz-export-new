"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

export default function CatalogPage() {
  const t = useTranslations("catalog");
  const locale = useLocale();
  const isRtl = locale === "ar";

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    products: "",
    orderSize: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const customMessage = `
Company: ${formData.company}
Target Country: ${formData.country}
Requested Products: ${formData.products}
Expected Order Volume: ${formData.orderSize}
    `.trim();

    const bodyFormData = new FormData();
    bodyFormData.append("name", formData.name);
    bodyFormData.append("email", formData.email);
    bodyFormData.append("phone", "N/A"); 
    bodyFormData.append("message", customMessage);

    try {
      const response = await fetch("http://localhost/ezz/mail.php", {
        method: "POST",
        body: bodyFormData,
      });

      const result = await response.text();

      if (result.trim() === "success") {
        setIsSubmitted(true);
      } else {
        setErrorMessage(t("errorMsg"));
      }
    } catch (error) {
      setErrorMessage(t("errorMsg"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // تم تحسين الارتفاع والريسبونسف ليكون مرن بالكامل مع إضافة خلفية شبكية وإضاءات ناعمة فخمة
    <div className="w-full min-h-screen text-slate-900 antialiased selection:bg-[#2d5a27] selection:text-white relative font-sans pt-30 sm:pt-32 lg:pt-30 pb-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      
      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col justify-center">
        
        {/* ================= القسم الأول: النصوص المركزية ================= */}
        <div className="flex flex-col items-center text-center mb-6 sm:mb-8 lg:mb-5 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white text-[#2d5a27] text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full border border-[#2d5a27]/15 shadow-sm mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d5a27] animate-pulse" />
            {t("heroBadge")}
          </span>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-3 tracking-tight leading-[1.2] max-w-3xl">
            {t("heroTitle")}
          </h1>
          
          <p className="text-xs sm:text-sm lg:text-base text-slate-500 font-medium max-w-xl leading-relaxed hidden sm:block">
            {t("heroDescription")}
          </p>
        </div>

        {/* ================= القسم الثاني: الفورم الذكي بالألوان الفخمة الجديدة ================= */}
        <div className="bg-[#0b150c] rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 lg:p-10 shadow-[0_25px_60px_-15px_rgba(45,90,39,0.15)] border border-[#2d5a27]/25 relative overflow-hidden w-full max-w-4xl mx-auto">
          
          {/* زخرفة داخلية ناعمة جداً في الخلفية وبدون تشتيت */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#2d5a27]/10 blur-[60px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#2d5a27]/10 blur-[60px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-8">
                
                <div className="text-center mb-2">
                  {/* أبيض نقي فاخر وعريض */}
                  <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-1.5 tracking-tight">
                    {t("formTitle")}
                  </h2>
                  {/* رمادي فاتح وناعم ومريح جداً للعين */}
                  <p className="text-slate-300 font-normal text-xs sm:text-sm">
                    {t("formSubtitle")}
                  </p>
                </div>

                {/* شبكة الحقول المتجاوبة 100% مع الموبايل والشاشات الكبيرة */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  
                  {/* الإسم */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold text-white uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                      {t("labelName")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent focus:bg-white/[0.07] transition-all text-white text-sm placeholder-white/50 ${isRtl ? "text-right" : "text-left"}`}
                      placeholder={t("placeholderName")}
                    />
                  </div>

                  {/* الشركة */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold text-white uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                      {t("labelCompany")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent focus:bg-white/[0.07] transition-all text-white text-sm placeholder-white/50 ${isRtl ? "text-right" : "text-left"}`}
                      placeholder={t("placeholderCompany")}
                    />
                  </div>

                  {/* الإيميل */}
                  <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
                    <label className={`block text-[11px] font-bold text-white uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                      {t("labelEmail")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent focus:bg-white/[0.07] transition-all text-white text-sm placeholder-white/50 text-left"
                      placeholder={t("placeholderEmail")}
                    />
                  </div>

                  {/* الدولة */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold text-white uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                      {t("labelCountry")}
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent focus:bg-white/[0.07] transition-all text-white text-sm placeholder-white/50 ${isRtl ? "text-right" : "text-left"}`}
                      placeholder={t("placeholderCountry")}
                    />
                  </div>

                  {/* المنتجات */}
                  <div className="space-y-1.5">
                    <label className={`block text-[11px] font-bold text-white uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                      {t("labelProducts")}
                    </label>
                    <input
                      type="text"
                      name="products"
                      required
                      value={formData.products}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent focus:bg-white/[0.07] transition-all text-white text-sm placeholder-white/50 ${isRtl ? "text-right" : "text-left"}`}
                      placeholder={t("placeholderProducts")}
                    />
                  </div>

                  {/* حجم الطلب */}
                  <div className="space-y-1.5 sm:col-span-2 lg:col-span-1">
                    <label className={`block text-[11px] font-bold text-white uppercase tracking-wider ${isRtl ? "text-right" : "text-left"}`}>
                      {t("labelOrderSize")}
                    </label>
                    <input
                      type="text"
                      name="orderSize"
                      required
                      value={formData.orderSize}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:border-transparent focus:bg-white/[0.07] transition-all text-white text-sm placeholder-white/50 ${isRtl ? "text-right" : "text-left"}`}
                      placeholder={t("placeholderOrderSize")}
                    />
                  </div>
                </div>

                {/* رسالة الخطأ */}
                {errorMessage && (
                  <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 animate-fade-in">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage}
                  </div>
                )}

                {/* زر الإرسال الاحترافي */}
                <div className="mt-2 text-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto min-w-[220px] md:min-w-[260px] px-8 py-3.5 bg-[#2d5a27] text-white rounded-xl font-bold shadow-lg hover:bg-[#22441d] active:scale-[0.98] disabled:bg-white/10 disabled:text-white/40 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200 text-xs sm:text-sm tracking-wider uppercase"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>{t("submitting")}</span>
                      </div>
                    ) : (
                      t("submitButton")
                    )}
                  </button>
                </div>
              </form>
            ) : (
              /* رسالة النجاح فائدة التناسق ومناسبة للـ Viewport المدمج */
              <div className="text-center py-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4 border border-emerald-500/20 shadow-inner">
                  <svg className="w-8 h-8 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-3xl font-bold text-white mb-2">
                  {t("successTitle")}
                </h2>
                <p className="text-slate-300 text-xs sm:text-base max-w-sm mx-auto leading-relaxed">
                  {t("successDescription")}
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}