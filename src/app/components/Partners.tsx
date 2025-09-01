"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useLang } from "../hooks/useLang";

const partnersEn = [
  {
    id: "01",
    icon: "/pepsico.png",
    title: "Pepsico",
    description: "The term logos has multiple meanings depending on the context, primarily referring to either a brand identifier ",
  },
  {
    id: "02",
    icon: "/pepsico2.png",
    title: "Pepsico",
    description: "The term logos has multiple meanings depending on the context, primarily referring to either a brand identifier ",
  },
  {
    id: "03",
    icon: "/pepsico3.png",
    title: "Pepsico",
    description: "The term logos has multiple meanings depending on the context, primarily referring to either a brand identifier ",
  },
  {
    id: "04",
    icon: "/pepsico4.png",
    title: "Pepsico",
    description: "The term logos has multiple meanings depending on the context, primarily referring to either a brand identifier ",
  },
];

const partnersAr = [
  {
    id: "01",
    icon: "/pepsico.png",
    title: "بيبسيكو",
    description: "مصطلح الشعارات له معانٍ متعددة حسب السياق، يشير أساساً إلى معرف العلامة التجارية.",
  },
  {
    id: "02",
    icon: "/pepsico2.png",
    title: "بيبسيكو",
    description: "مصطلح الشعارات له معانٍ متعددة حسب السياق، يشير أساساً إلى معرف العلامة التجارية.",
  },
  {
    id: "03",
    icon: "/pepsico3.png",
    title: "بيبسيكو",
    description: "مصطلح الشعارات له معانٍ متعددة حسب السياق، يشير أساساً إلى معرف العلامة التجارية.",
  },
  {
    id: "04",
    icon: "/pepsico4.png",
    title: "بيبسيكو",
    description: "مصطلح الشعارات له معانٍ متعددة حسب السياق، يشير أساساً إلى معرف العلامة التجارية.",
  },
];

const Partners = () => {
  const { isArabic } = useLang();
  const partners = isArabic ? partnersAr : partnersEn;

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="py-12 lg:py-20 text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6 flex lg:flex-row flex-col items-start lg:items-center gap-5 justify-between mb-18">
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">{isArabic ? "شركاؤنا" : "Partners"}</h2>
          <p className="leading-relaxed max-w-[420px] text-gray-700">
            {isArabic
              ? "من الحقائق المعروفة أن القارئ يتشتت بسبب المحتوى المقروء لصفحة عند النظر إلى تخطيطها."
              : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto lg:px-6 partners-container">
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="partners-child bg-white rounded-3xl text-center rounded-bl-none p-5 transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt={partner.title}
                    className="w-34 h-34 object-contain mx-auto mb-2"
                    width={100}
                    height={100}
                  />
                  <h3 className="text-2xl font-medium mb-2">{partner.title}</h3>
                  <p className="text-md leading-snug text-gray-700">{partner.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="partners-child bg-white rounded-3xl text-center rounded-bl-none p-5 transition-all duration-300 relative top-0 hover:top-[-6px]"
            >
              <Image
                src={partner.icon}
                alt={partner.title}
                className="w-34 h-34 object-contain mx-auto mb-2"
                width={100}
                height={100}
              />
              <h3 className="text-2xl font-medium mb-2">{partner.title}</h3>
              <p className="text-md leading-snug text-gray-700">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
