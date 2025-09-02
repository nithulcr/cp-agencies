"use client";

import React from "react";
import { useLang } from "../hooks/useLang";
import Image from 'next/image';

const QuoteSection = () => {
  const { isArabic } = useLang();

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="bg-[var(--green)] py-12 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
        {/* Quote Icon */}
        <div className="flex-shrink-0 text-[#4CAF1B] md:w-auto w-full">
          {/* <svg
            width="340"
            height="340"
            viewBox="0 0 440 331"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-auto w-20 h-20 md:h-auto md:w-auto"
          >
            <path
              d="M0.282349 0.96875V165.61H110.043C110.043 226.116 60.8429 275.371 0.282349 275.371V330.251C91.0683 330.251 164.924 256.396 164.924 165.61V0.96875H0.282349Z"
              fill="#51AC0A"
            />
            <path
              d="M274.685 0.96875V165.61H384.446C384.446 226.116 335.245 275.371 274.685 275.371V330.251C365.471 330.251 439.326 256.396 439.326 165.61V0.96875H274.685Z"
              fill="#51AC0A"
            />
          </svg> */}
          <Image src="/quate.png" alt="Logo" className="mx-auto md:w-[380px] w-[300px]" width={380} height={150} />
        </div>
        {/* Quote Text */}
        <div className="text-white text-lg lg:text-xl text-center md:text-left leading-snug max-w-lg">
          {isArabic ? (
            <p>
             في سول نت ، نعتقد أن مستقبل نمو الأعمال ذكي. بصفتنا شركة تسويق ذكي ، فإننا نستفيد من الذكاء الاصطناعي وتحليلات البيانات لإعادة تعريف نجاحك. نحن هنا لنكون شريكك الاستراتيجي ، وتحويل الرؤى إلى نتائج قابلة للقياس الكمي ونمو مستدام.
            </p>
          ) : (
            <p>
              At WssolNet, We Believe The Future Of Business Growth Is Intelligent.
              As An Intelligent Marketing Company, We Leverage AI And Data Analytics
              To Redefine Your Success. We’re Here To Be Your Strategic Partner,
              Transforming Insights Into Quantifiable Results And Sustainable Growth.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
