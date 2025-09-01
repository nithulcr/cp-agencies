"use client";
import Image from "next/image";

const teamData = [  // Renamed from Teams to teamData
  {
    id: "01",
    icon: "/member1.png",
    title: "sadiq ali KM",
    description: "Associate Professor",
  },
  {
    id: "02",
    icon: "/member2.png",
     title: "sadiq ali KM",
    description: "Associate Professor",
  },
  {
    id: "03",
    icon: "/member3.png",
    title: "sadiq ali KM",
    description: "Associate Professor",
  },
  {
    id: "04",
    icon: "/member4.png",
    title: "sadiq ali KM",
    description: "Associate Professor",
  },
];

const Teams = () => {
  return (
    <section className="py-12 lg:py-20 text-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-6 flex lg:flex-row flex-col items-start lg:items-center gap-5 justify-between mb-10">
        <div>
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">Team</h2>
          <p className="leading-relaxed max-w-[540px]">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {teamData.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-[30px] lg:rounded-[46px] lg:rounded-bl-none rounded-bl-none p-2  lg:p-4 transition-all duration-300 relative top-0 hover:top-[-6px]"
          >
            <Image
              src={partner.icon}
              alt={partner.title}
              className="w-full object-contain mx-auto mb-2"
              width={100}
              height={100}
            />
            <h3 className="text-lg lg:text-2xl font-medium lg:mb-2 pt-2">{partner.title}</h3>
            <p className="text-sm lg:text-md leading-snug text-gray-700 pb-2">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
