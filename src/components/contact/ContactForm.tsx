"use client";
import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations('Contact.form');

  // حالة الفورم (بيانات المدخلات)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  // حالة الإرسال (تحميل، نجاح، خطأ)
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // ملحوظة: تأكد من تغيير الرابط لرابط الملف عندك في XAMPP
      const response = await fetch("https://ezzexport.com/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const result = await response.text();

      if (result.trim() === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* حقل الاسم بالكامل */}
      <div className="space-y-2">
        <label className="text-[10px] rtl:text-[12px] font-bold uppercase tracking-widest rtl:tracking-normal text-[#1a3a16] ml-2 rtl:mr-2 rtl:ml-0">
          {t('fullName')}
        </label>
        <input
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t('fullNamePlaceholder')}
          className="w-full bg-[#f8f9fa] border border-slate-200 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none text-sm rtl:text-right placeholder:text-slate-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* حقل البريد الإلكتروني */}
        <div className="space-y-2">
          <label className="text-[10px] rtl:text-[12px] font-bold uppercase tracking-widest rtl:tracking-normal text-[#1a3a16] ml-2 rtl:mr-2 rtl:ml-0">
            {t('email')}
          </label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('emailPlaceholder')}
            className="w-full bg-[#f8f9fa] border border-slate-200 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none text-sm rtl:text-right placeholder:text-slate-400"
          />
        </div>

        {/* حقل رقم الموبايل الجديد */}
        <div className="space-y-2">
          <label className="text-[10px] rtl:text-[12px] font-bold uppercase tracking-widest rtl:tracking-normal text-[#1a3a16] ml-2 rtl:mr-2 rtl:ml-0">
            {t('phone')}
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('phonePlaceholder')}
            className="w-full bg-[#f8f9fa] border border-slate-200 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none text-sm rtl:text-right placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* حقل الرسالة */}
      <div className="space-y-2">
        <label className="text-[10px] rtl:text-[12px] font-bold uppercase tracking-widest rtl:tracking-normal text-[#1a3a16] ml-2 rtl:mr-2 rtl:ml-0">
          {t('message')}
        </label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder={t('messagePlaceholder')}
          className="w-full bg-[#f8f9fa] border border-slate-200 rounded-[2rem] px-6 py-5 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none resize-none text-sm rtl:text-right placeholder:text-slate-400"
        />
      </div>

      <button
        disabled={status === "loading"}
        className="w-full bg-[#1a3a16] text-[#f4f1ea] rounded-full py-5 font-bold uppercase text-[11px] rtl:text-[13px] tracking-[0.3em] rtl:tracking-normal flex items-center justify-center gap-3 hover:bg-[#2d5a27] transition-all duration-500 shadow-lg group disabled:opacity-70"
      >
        {status === "loading" ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <>
            {t('submit')}
            <Send
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
            />
          </>
        )}
      </button>

      <div className="mt-4 transition-all duration-500">
        {status === "success" && (
          <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl animate-in fade-in slide-in-from-top-2">
            <div className="bg-green-500 rounded-full p-1">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm font-medium rtl:text-right">{t('successMessage')}</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl animate-in fade-in slide-in-from-top-2">
            <div className="bg-red-500 rounded-full p-1">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p className="text-sm font-medium rtl:text-right">{t('errorMessage')}</p>
          </div>
        )}
      </div>
    </form>
  );
}