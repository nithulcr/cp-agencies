"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";


const slidesContent = [
    {
        videoSrc: "/bg1.jpg",
        heading: "Welcome To <br/> CP AGENCIES",
        description1: "Your Trusted Partner in Superior Machine Tool Technology",
        description2: "Delivering high-precision solutions, customer support, and unmatched service.",
        exploreLink: "",
        contactLink: "",
    },
        {
        videoSrc: "/bg2.jpg",
        heading: "Engineering Our Passion",
        description1: "TOS-KURIM",
        description2: "We provide overall planning, coordination and control of a project, so you don’t have to worry about anything.",
        exploreLink: "",
        contactLink: "",
    },

];

const Hero = () => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full  bg-[var(--green)] text-white flex flex-col justify-center items-center text-center px-6 relative mt-[100px] lg:pb-[120px]"
            >
                {slidesContent.map((slide, index) => (
                    <SwiperSlide key={index} className="h-full">
                        {/* Background pattern */}
                        <div className="absolute hero-cover hero-cover2 inset-0  bg-cover bg-center">
                            <Image
                                src={slide.videoSrc}
                                width="1000"
                                height="1000"
                                alt="bg"
                                className="w-full h-full object-cover relative"
                            />
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} className="relative z-10 max-w-3xl py-20 h-full flex flex-col justify-center mx-auto">


                            <h2 className="text-5xl md:text-7xl font-bold mb-2 head-font" dangerouslySetInnerHTML={{ __html: slide.heading }}>
                            </h2>
                            <div className="my-6 lg:my-4">
                                <p className="text-lg md:text-3xl my-2 font-light2">
                                    {slide.description1}

                                </p>

                                <p className="text-md md:text-lg my-2 font-light2">
                                    {slide.description2}
                                </p>
                            </div>
                            <div className="flex justify-center flex-wrap gap-4 mt-4">
                                <div className='shuffle'> <AnimatedButton href={slide.exploreLink} label="Explore Products" className="w-fit" /></div>
                                <div className='shuffle'><AnimatedButton href={slide.contactLink} label="Contact Us" className="w-fit transparent-btn" /></div>
                            </div>


                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Hero;
