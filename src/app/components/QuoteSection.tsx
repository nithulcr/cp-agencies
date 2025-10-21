"use client";

import React from "react";
import Image from 'next/image';

const QuoteSection = () => {


  return (
    <section

      className="bg-[var(--green)]  py-12 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* Quote Icon */}
        <div className="flex-shrink-0 text-[#4CAF1B] md:w-auto w-full">

          <Image src="/dummy-user.jpg" alt="Logo" className="mx-auto md:w-[380px] w-[300px]" width={380} height={150} />
        </div>
        {/* Quote Text */}
        <div className="text-white text-lg lg:text-xl text-center md:text-left leading-snug max-w-xl">
          <h5 className="mt-6 text-[30px] mb-5">CEO Message</h5>

          <div className="flex flex-col gap-3">
            <p className="fw-200 max-w-[560px] text-justify">
              At CP Agencies, our commitment is to provide the highest standards of technology and service for the machine tool industry. Since day one, we have focused on delivering innovative solutions designed around each customer’s unique requirements. Our dedication to training, support, and ongoing partnership ensures our clients stay ahead in a rapidly changing industrial landscape.
            </p>
            <p className="fw-200 max-w-[560px] text-justify">
             Thank you for making us your trusted partner in manufacturing excellence.
            </p>
          </div>
          <div className="flex flex-col mt-6 gap-2">
            <p className="">Mr. V. Prabhu</p>
            <p className="text-[#ffa484ff]">CEO - CP Agencies</p>

          </div>


        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
