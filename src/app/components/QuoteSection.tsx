"use client";

import React from "react";
import Image from 'next/image';

const QuoteSection = () => {


  return (
    <section
     
      className="bg-[var(--green)] py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* Quote Icon */}
        <div className="flex-shrink-0 text-[#4CAF1B] md:w-auto w-full">
          <svg
            width="340"
            height="340"
            viewBox="0 0 440 331"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-auto w-20 h-20 md:h-auto md:w-auto"
          >
            <path
              d="M0.282349 0.96875V165.61H110.043C110.043 226.116 60.8429 275.371 0.282349 275.371V330.251C91.0683 330.251 164.924 256.396 164.924 165.61V0.96875H0.282349Z"
              fill="#ffa484ff"
            />
            <path
              d="M274.685 0.96875V165.61H384.446C384.446 226.116 335.245 275.371 274.685 275.371V330.251C365.471 330.251 439.326 256.396 439.326 165.61V0.96875H274.685Z"
              fill="#ff6b35"
            />
          </svg>
          {/* <Image src="/quate.png" alt="Logo" className="mx-auto md:w-[380px] w-[300px]" width={380} height={150} /> */}
        </div>
        {/* Quote Text */}
        <div className="text-white text-lg lg:text-xl text-center md:text-left leading-snug max-w-xl">
    
            <p className="fw-200">
             At CP Agencies, our commitment is to provide the highest standards of technology and service for the machine tool industry. Since day one, we have focused on delivering innovative solutions designed around each customer’s unique requirements. Our dedication to training, support, and ongoing partnership ensures our clients stay ahead in a rapidly changing industrial landscape. Thank you for making us your trusted partner in manufacturing excellence.
            </p>
            <p className="mt-6 text-[#ffa484ff]">CEO Message</p>
         
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
