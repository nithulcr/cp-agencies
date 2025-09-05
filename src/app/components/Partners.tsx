"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { useLang } from "../hooks/useLang";

const partnersEn = [
  {
    id: "01",
    icon: "/logo1.png",
   
  },
  {
    id: "02",
     icon: "/logo2.png",
   
  },
  {
    id: "03",
    icon: "/logo3.png",
   
  },
  {
    id: "04",
     icon: "/logo4.png",
  
  },
  {
    id: "05",
     icon: "/logo5.png",
  
  },
  {
    id: "06",
     icon: "/logo6.png",
  
  },
  {
    id: "07",
     icon: "/logo7.png",
  
  },
];

const partnersAr = [
    {
    id: "01",
    icon: "/logo1.png",
   
  },
  {
    id: "02",
     icon: "/logo2.png",
   
  },
  {
    id: "03",
    icon: "/logo3.png",
   
  },
  {
    id: "04",
     icon: "/logo4.png",
  
  },
  {
    id: "05",
     icon: "/logo5.png",
  
  },
  {
    id: "06",
     icon: "/logo6.png",
  
  },
  {
    id: "07",
     icon: "/logo7.png",
  
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
        <div className="">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1.6}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 3.2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="partners-child bg-white rounded-3xl text-center rounded-bl-none p-5 transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="Logo"
                    className="w-28 h-28 object-contain mx-auto mb-2"
                    width={100}
                    height={100}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Partners;
