"use client";
import Link from "next/link";
import { motion } from "framer-motion";


interface Hero2Props {
    heading_en: string;
    breadcrumbText_en?: string;
    breadcrumbPosition?: "left" | "center" | "right";
}

const Hero2 = ({
    heading_en,
    breadcrumbText_en,
    breadcrumbPosition = "left",
}:
    Hero2Props) => {

    // Choose based on language
    const heading = heading_en;
    const breadcrumbText = breadcrumbText_en ?? heading_en;

    // Breadcrumb alignment
    const breadcrumbAlignClass =
        breadcrumbPosition === "center"
            ? "justify-center"
            : breadcrumbPosition === "right"
                ? "justify-end"
                : "justify-start";

    return (
        <section className="hero2 relative mt-[100px] w-full bg-[var(--green)] text-white flex flex-col justify-center items-center text-center relative">
            <div
                className={`bg-fixed absolute inset-0 bg-[url('/about.png')] bg-cover bg-[40%_center] lg:bg-[30%_center] `}
            ></div>

            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative z-10 py-12 lg:py-20 flex flex-col w-full max-w-[1400px] px-6 items-${breadcrumbPosition} text-${breadcrumbPosition}`}
            >
                <h2 className={`text-3xl lg:text-4xl font-medium text-left`}>
                    {heading}
                </h2>


                {(breadcrumbText ?? heading) && (
                    <div className={`flex items-center gap-1 breadcrumb lg:mt-3 mb-2 ${breadcrumbAlignClass}`}>
                        <Link href="/" className="text-md md:text-lg my-1 text-white">
                            Home
                        </Link>

                        <div style={{ transform: "none" }}>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 25 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_79_1528)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.9893 11.293C16.1768 11.4805 16.2821 11.7348 16.2821 12C16.2821 12.2652 16.1768 12.5195 15.9893 12.707L10.3323 18.364C10.2401 18.4595 10.1297 18.5357 10.0077 18.5881C9.88573 18.6405 9.75451 18.6681 9.62173 18.6692C9.48895 18.6704 9.35727 18.6451 9.23437 18.5948C9.11148 18.5445 8.99982 18.4703 8.90593 18.3764C8.81204 18.2825 8.73778 18.1708 8.6875 18.048C8.63722 17.9251 8.61192 17.7934 8.61307 17.6606C8.61423 17.5278 8.64181 17.3966 8.69422 17.2746C8.74663 17.1526 8.82281 17.0422 8.91833 16.95L13.8683 12L8.91833 7.05C8.73617 6.8614 8.63537 6.60879 8.63765 6.3466C8.63993 6.0844 8.7451 5.83359 8.93051 5.64818C9.11591 5.46277 9.36673 5.3576 9.62892 5.35532C9.89112 5.35305 10.1437 5.45384 10.3323 5.636L15.9893 11.293Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_79_1528">
                                        <rect
                                            width="22"
                                            height="22"
                                            fill="white"
                                            transform="translate(0.282227)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <span className="text-md md:text-lg my-1 font-medium ">{breadcrumbText}</span>
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default Hero2;
