import React from "react";
import { FaPencilRuler } from "react-icons/fa";
import { FiBox, FiLayers, FiTruck, } from "react-icons/fi";

export default function TechnicalSpecs() {
  const specs = [
    {
      icon: <FaPencilRuler size={24} />,
      title: "الأحجام والمقاسات",
      description: "نلتزم بمعايير دقيقة للأحجام لضمان تجانس المنتج وتلبية متطلبات الأسواق العالمية.",
    },
    {
      icon: <FiBox size={24} />,
      title: "التعبئة والتغليف",
      description: "خيارات تغليف متنوعة وعالية الجودة تحافظ على سلامة المنتج أثناء الشحن والتخزين.",
    },
    {
      icon: <FiLayers size={24} />,
      title: "درجات الفرز",
      description: "نظام فرز صارم يضمن أعلى درجات الجودة والنقاء وفقاً للمواصفات القياسية.",
    },
    {
      icon: <FiTruck size={24} />,
      title: "الطاقة التحميلية",
      description: "تخطيط لوجستي دقيق يضمن كفاءة تحميل الحاويات وتقليل تكاليف الشحن.",
    },
  ];

  return (
    <section className="py-20 bg-[#fbfbfb]">
      <div className="max-w-7xl mx-auto px-6">
        {/* العنوان */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#2d5a27] font-bold text-sm tracking-widest uppercase mb-3 block">
            المواصفات الفنية
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            مواصفات واضحة لقرارات شراء أكثر دقة
          </h2>
          <p className="text-gray-600 text-lg">
            نوفر تفاصيل دقيقة حول الأحجام، التغليف، درجات الفرز، والطاقة التحميلية لتسهيل عمليات الشراء والتخطيط اللوجستي.
          </p>
        </div>

        {/* كروت المواصفات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specs.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#2d5a27]/10 text-[#2d5a27] rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}