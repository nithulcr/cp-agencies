"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import TeamsChild from "./TeamsChild";
import { useLang } from "../hooks/useLang";


const teamDataEN = [
  {
    id: "01",
    icon: "/member1.png",
    title: "Sadiq Ali KM",
    description: "Associate Professor",
  },
  {
    id: "02",
    icon: "/member2.png",
    title: "Sadiq Ali KM",
    description: "Associate Professor",
  },
  {
    id: "03",
    icon: "/member3.png",
    title: "Sadiq Ali KM",
    description: "Associate Professor",
  },
  {
    id: "04",
    icon: "/member4.png",
    title: "Sadiq Ali KM",
    description: "Associate Professor",
  },
  // ...other members
];

const teamDataAR = [
  {
    id: "01",
    icon: "/member1.png",
    title: "صادق علي ك.م.",
    description: "أستاذ مشارك",
  },
  {
    id: "02",
    icon: "/member2.png",
    title: "صادق علي ك.م.",
    description: "أستاذ مشارك",
  },
  {
    id: "03",
    icon: "/member3.png",
    title: "صادق علي ك.م.",
    description: "أستاذ مشارك",
  },
  {
    id: "04",
    icon: "/member4.png",
    title: "صادق علي ك.م.",
    description: "أستاذ مشارك",
  },
  // ...other members (all names and roles translated)
];

const sectionTextEN = {
  heading: "Team",
  description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
};
const sectionTextAR = {
  heading: "فريق العمل",
  description: "من الحقائق الثابتة أن القارئ سيتشتت انتباهه بمحتوى الصفحة القابل للقراءة عند النظر إلى تخطيطها.",
};


const Teams = () => {
  const { isArabic } = useLang();
  const section = isArabic ? sectionTextAR : sectionTextEN;
  const data = isArabic ? teamDataAR : teamDataEN;
  return (
    <section className="py-12 lg:py-20 text-[var(--foreground)]" dir={isArabic ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 flex lg:flex-row flex-col items-start lg:items-center gap-5 justify-between mb-10">
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">{section.heading}</h2>
          <p className="leading-relaxed max-w-[540px]">
            {section.description}
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto lg:px-6 teams-container">
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
          >
            {data.map((member) => (
              <SwiperSlide key={member.id}>
                <TeamsChild
                  icon={member.icon}
                  title={member.title}
                  description={member.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {data.map((member) => (
            <TeamsChild
              key={member.id}
              icon={member.icon}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Teams;