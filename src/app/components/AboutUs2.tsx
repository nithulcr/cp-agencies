"use client";

import Image from "next/image";



export default function AboutUs2() {

  return (

    <section dir="ltr" className="py-10 lg:pb-14 lg:pt-22 text-left">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="">
          <div className="overflow-hidden lg:hidden mb-10">
            <Image
              src="/bg5.jpg"
              alt="Investor at Computer"
              width={550}
              height={550}
              className="object-cover f-full rounded-xl"
            />
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium mb-6"> CP Agencies, Connecting You to Global Excellence</h2>
          <p className="leading-relaxed mb-5 max-w-[560px]">
            CP AGENCIES is a leading provider of advanced technology and exceptional service in the machine tool industry. Since our inception, we have committed to delivering high-tech products and innovative designs tailored to meet each customer s unique machining requirements. We proudly offer comprehensive manufacturing solutions, expert applications support, specialized customer training, and reliable after-sales service to our growing client base.
          </p>
         
         
        </div>
        <div className="relative flex justify-center lg:justify-end hidden lg:flex h-full">
       
            <Image
              src="/bg5.jpg"
              alt="Investor at Computer"
              width={750}
              height={750}
              className="object-cover f-full rounded-xl"
            />
          
        </div>
      </div>
    </section>

  );
}
