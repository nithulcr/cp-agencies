"use client";

import Image from "next/image";
import { Car, Rocket, Settings, Factory } from 'lucide-react';


// Define all icons once
const iconPredictableIncome = (
  <Car size={30} strokeWidth={1} />
);

const iconLicensedRegulated = (
  <Rocket size={26} strokeWidth={1} />
);

const iconClearExitStrategy = (
  <Settings size={28} strokeWidth={1} />
);

const iconRealAssetBacking = (
  <Factory size={28} strokeWidth={1} />
);

// English content array with shared icons
const points_en = [
  {
    title: <>Automotive</>,
    description: "Design and manufacture of motor vehicles and components for personal and commercial use.",
    icon: iconPredictableIncome,
  },
  {
    title: <>Aerospace</>,
    description: "Development and production of aircraft, spacecraft, and related systems and equipment.",
    icon: iconLicensedRegulated,
  },
  {
    title: <>Heavy Engineering</>,
    description: "Manufacturing of large-scale industrial machinery and infrastructure equipment.",
    icon: iconClearExitStrategy,
  },
  {
    title: <>General Manufacturing</>,
    description: "Production of a wide range of goods through various industrial processes across multiple sectors.",
    icon: iconRealAssetBacking,
  },
];



export default function AboutUs() {

  return (

    <section dir="ltr" className="py-10 lg:py-14 text-left">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="">
          <div className="overflow-hidden lg:hidden mb-10">
            <Image
              src="/about-us.jpg"
              alt="Investor at Computer"
              width={550}
              height={550}
              className="object-cover mx-auto rounded-tl-[60px] rounded-br-[60px] rounded-bl-[60px]"
            />
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">About CP Agencies</h2>
          <p className="leading-relaxed mb-5 max-w-[560px]">
            CP AGENCIES is a leading provider of advanced technology and exceptional service in the machine tool industry. Since our inception, we have committed to delivering high-tech products and innovative designs tailored to meet each customer s unique machining requirements. We proudly offer comprehensive manufacturing solutions, expert applications support, specialized customer training, and reliable after-sales service to our growing client base.
          </p>
          <p className="font-medium text-2xl">Industries We Serve:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 my-5">
            {points_en.map((point, idx) => (
              <div key={idx} className="flex flex-col items-start gap-3 bg-white rounded-3xl rounded-bl-none p-6 transition-all duration-300 relative top-0 hover:top-[-6px]">
                <div className="flex items-center gap-4  w-full">
                  <div className="w-12 h-12 bg-gray-200 rounded-full p-2 flex items-center justify-center">{point.icon}</div>

                  <h3 className="lg:text-[19px] font-semibold text-gray-900">{point.title}</h3>
                </div>
                <p className="text-sm mt-1">{point.description}</p>
              </div>
            ))}
          </div>
         
        </div>
        <div className="relative flex justify-center lg:justify-end hidden lg:flex">
       
            <Image
              src="/about-us.jpg"
              alt="Investor at Computer"
              width={550}
              height={550}
              className="object-cover rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px]"
            />
          
        </div>
      </div>
    </section>

  );
}
