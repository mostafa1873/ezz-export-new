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
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-white text-slate-900 antialiased selection:bg-[#2d5a27] selection:text-white relative overflow-hidden font-sans">
      
      {/* تصحيح العكس: الخلفية الداكنة الآن مبرمجة لتقف خلف الفورم فقط بناءً على اللغة (يسار في العربي / يمين في الإنجليزي)، وفي الموبايل تغطي الجزء السفلي فقط */}
      <div className={`absolute bottom-0 ${isRtl ? "lg:left-0" : "lg:right-0"} w-full lg:w-1/2 h-[75%] lg:h-full bg-[#051109] pointer-events-none z-0`} />
      
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[#2d5a27]/5 blur-[100px] pointer-events-none hidden lg:block" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* النصف الأول: النصوص (بنفس ألوانها الأصلية، متمركزة في الموبايل فقط) */}
        <div className={`flex flex-col justify-center items-center lg:items-start text-center ${isRtl ? "lg:text-right lg:pl-10" : "lg:text-left lg:pr-10"}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 bg-[#2d5a27]/10 text-[#2d5a27] text-xs font-bold uppercase tracking-widest rounded-full border border-[#2d5a27]/20">
              {t("heroBadge")}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.2]">
            {t("heroTitle")}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-lg">
            {t("heroDescription")}
          </p>
        </div>

        {/* النصف الثاني: الفورم (تأثير زجاجي بنفس الاستايل الأصلي) */}
        <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white/10 p-6 sm:p-8 lg:p-10 w-full max-w-xl mx-auto lg:mx-0">
          
          {!isSubmitted ? (
            <>
              {/* Form Headers */}
              <div className={`mb-8 text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {t("formTitle")}
                </h2>
                <p className="text-slate-400 text-sm font-medium">
                  {t("formSubtitle")}
                </p>
              </div>

              {/* Form Grid */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* الصف الأول */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                      {t("labelName")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:bg-white/10 transition-all text-white text-sm text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}
                      placeholder={t("placeholderName")}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                      {t("labelCompany")}
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:bg-white/10 transition-all text-white text-sm text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}
                      placeholder={t("placeholderCompany")}
                    />
                  </div>
                </div>

                {/* الصف الثاني */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                      {t("labelEmail")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:bg-white/10 transition-all text-white text-sm text-center lg:text-left"
                      placeholder={t("placeholderEmail")}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                      {t("labelCountry")} 
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:bg-white/10 transition-all text-white text-sm text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}
                      placeholder={t("placeholderCountry")}
                    />
                  </div>
                </div>

                {/* الصف الثالث */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={`block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                      {t("labelProducts")}
                    </label>
                    <input
                      type="text"
                      name="products"
                      required
                      value={formData.products}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:bg-white/10 transition-all text-white text-sm text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}
                      placeholder={t("placeholderProducts")}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-bold text-slate-300 mb-2 uppercase tracking-wide text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                      {t("labelOrderSize")}
                    </label>
                    <input
                      type="text"
                      name="orderSize"
                      required
                      value={formData.orderSize}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a27] focus:bg-white/10 transition-all text-white text-sm text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}
                      placeholder={t("placeholderOrderSize")}
                    />
                  </div>
                </div>

                {/* رسالة الخطأ */}
                {errorMessage && (
                  <div className={`p-3 bg-rose-500/10 border border-rose-500/20 text-rose-300 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center lg:justify-start gap-2 text-center ${isRtl ? "lg:text-right" : "lg:text-left"}`}>
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {errorMessage}
                  </div>
                )}

                {/* زر الإرسال */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 bg-[#2d5a27] text-white rounded-xl font-bold shadow-md hover:bg-[#22441d] hover:shadow-lg disabled:bg-slate-600 disabled:shadow-none disabled:cursor-not-allowed transition-all duration-200 text-center flex items-center justify-center gap-2 text-sm tracking-wide uppercase"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
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
            </>
          ) : (
            /* رسالة النجاح */
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                <svg className="w-10 h-10 text-[#2d5a27]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
                {t("successTitle")}
              </h2>
              <p className="text-slate-300 font-medium">
                {t("successDescription")}
              </p>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}