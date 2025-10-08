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
        videoSrc: "/bg5.jpg",
        heading: "Welcome To <br/> CP AGENCIES",
        description1: "Your Trusted Partner in Superior Machine Tool Technology",
        description2: "Delivering high-precision solutions, customer support, and unmatched service.",
        exploreLink: "",
        contactLink: "",
    },
    {
        videoSrc: "/bg4.jpg",
        heading: "Engineering is Our Passion",
        description1: "Discover CP Agencies Your Partner in Advanced Machining Solutions",
        description2: "We provide overall planning, coordination and control of a project, so you don’t have to worry about anything.",
        exploreLink: "",
        contactLink: "",
    },
    // {
    //     videoSrc: "/bg4.jpg",
    //     heading: "Innovation A Way Of Life",
    //     description1: "Forging the Future of Manufacturing Since 2009",
    //     description2: "We provide overall planning, coordination and control of a project, so you don’t have to worry about anything.",
    //     exploreLink: "",
    //     contactLink: "",
    // },
    {
        videoSrc: "/bg3.jpg",
        heading: "Driving Industry Progress",
        description1: "Reliable Machine Tool Solutions",
        description2: "Empowering your projects with state-of-the-art equipment and expertise.",
        exploreLink: "",
        contactLink: "",
    },
    // {
    //     videoSrc: "/bg4.jpg",
    //     heading: "Partnering for Success",
    //     description1: " Trusted Technology Providers",
    //     description2: "Supporting your growth with quality products and dedicated service.",
    //     exploreLink: "",
    //     contactLink: "",
    // },


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
                speed={1500}
                // pagination={{ clickable: true }}
                navigation={true}
                className="w-full hero bg-[var(--green)] text-white flex flex-col justify-center items-center text-center px-6 relative mt-[100px] lg:pb-[120px]"
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
                            transition={{ duration: 0.5 }} className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 h-full flex flex-col text-left">


                            <h1 className="text-5xl md:text-6xl font-bold mb-2 head-font max-w-[540px]" dangerouslySetInnerHTML={{ __html: slide.heading }}>
                            </h1>
                            <div className="my-6 lg:my-4 max-w-[540px]">
                                <p className="text-lg md:text-3xl my-2 font-light2">
                                    {slide.description1}

                                </p>

                                <p className="text-md md:text-lg my-2 font-light2">
                                    {slide.description2}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4 max-w-[540px]">
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
