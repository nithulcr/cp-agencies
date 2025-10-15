"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import TeamsChild from "./TeamsChild";


const teamDataEN = [
  {
    id: "01",
    icon: "/profile.png",
    title: "Mr. V. Prabhu",
    role: "CEO",
    description: "Having 37 years of Professional Expertise in Machine Tool line (in Marketing & Servicing of Machines) and worked with reputed Agencies – Machine Tools (India) Limited & Proteck Machinery Pvt. Ltd.",
  },
  {
    id: "02",
    icon: "/profile.png",
    title: "Mr. K.Murali",
    role: "Sr.General Manager",

    description: "Having 30 years of Professional Expertise in Machine Tool line (in Marketing & Servicing of Machines) and worked with reputed Agencies – Machine Tools (India) Limited & Empire Machine Tools",
  },
  {
    id: "03",
    icon: "/profile.png",
    title: "Mr. P. Ghuhan",
    role: "General Manager",

    description: "Having 23 years of Professional Expertise in Machine Tool line (in Marketing of Machines) and worked with reputed Agencies such as M/s.Machine Tool(India) Limited, M/s.Proteck Machinery Pvt Ltd and Empire Machine Tools.",
  },
  {
    id: "04",
    icon: "/profile.png",
    title: "Mr. O. Ravi Prakash Reddy",
    role: "Assistant General Manager",

    description: "Having 30 years of Professional Expertise in Machine Tool line (in Tendering & Administration) and worked with reputed Agencies – Machine Tools (India) Limited & Proteck Machinery Pvt Ltd",
  },
  // ...other members
];


const sectionTextEN = {
  heading: "Team",
  description: "Our team of skilled professionals brings together deep industry expertise, innovation, and a commitment to excellence. With diverse backgrounds and a shared vision, we work collaboratively to deliver advanced solutions and outstanding service to our clients.",
};



const Teams = () => {
  const section =  sectionTextEN;
  const data =  teamDataEN;
  return (
    <section className="py-10 lg:py-16 text-[var(--foreground)]">
      <div className="max-w-[1400px] mx-auto px-6 flex lg:flex-row flex-col items-start lg:items-center gap-5 justify-between mb-10">
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">{section.heading}</h2>
          <p className="leading-relaxed max-w-[750px]">
            {section.description}
          </p>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto lg:px-6 teams-container">
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
                  role={member.role}

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
                  role={member.role}

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