"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const partnersEn = [
  {
    id: "01",
    icon: "/partners/1.jpeg",
   
  },
  {
    id: "02",
     icon: "/partners/2.jpeg",
   
  },
  {
    id: "03",
    icon: "/partners/3.jpeg",
   
  },
  {
    id: "04",
     icon: "/partners/4.jpeg",
  
  },
  {
    id: "05",
     icon: "/partners/5.jpeg",
  
  },
  {
    id: "06",
     icon: "/partners/6.jpeg",
  
  },
  {
    id: "07",
     icon: "/partners/7.jpeg",
  
  },
    {
    id: "08",
    icon: "/partners/8.jpg",
   
  },
  {
    id: "09",
     icon: "/partners/9.jpg",
   
  },
  {
    id: "010",
    icon: "/partners/10.jpg",
   
  },
  {
    id: "011",
     icon: "/partners/11.jpg",
  
  },
  {
    id: "012",
     icon: "/partners/12.jpg",
  
  },
  {
    id: "013",
     icon: "/partners/13.jpeg",
  
  },
  {
    id: "014",
     icon: "/partners/14.jpeg",
  
  },
  {
    id: "015",
     icon: "/partners/15.jpeg",
  
  },
  {
    id: "016",
     icon: "/partners/16.jpeg",
  
  },
  {
    id: "017",
     icon: "/partners/17.jpeg",
  
  },
];

const Partners = () => {
  const partners = partnersEn;

  return (
    <section className="py-10 lg:py-16 text-[var(--foreground)]">
      <div className="max-w-[1400px] mx-auto px-6 flex text-center  flex-col items-start lg:items-center gap-5 justify-between mb-10">
        <div className="mx-auto">
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">Partners</h2>
          <p className="leading-relaxed max-w-[460px] text-gray-700">
            
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto lg:px-6 partners-container">
        <div>
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
                slidesPerView: 5,
              },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            
          >
            {partners.map((partner) => (
              <SwiperSlide key={partner.id}>
                <div className="partners-child rounded-3xl text-center rounded-bl-none p-5 transition-all duration-300 relative top-0 hover:top-[-6px]">
                  <Image
                    src={partner.icon}
                    alt="logo"
                    className="w-44 h-44 object-contain mx-auto mb-2"
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
