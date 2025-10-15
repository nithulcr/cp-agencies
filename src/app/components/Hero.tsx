"use client";
import { motion } from "framer-motion";
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
        imageSrc: "/bg5.jpg",
        heading: "Empowering South India’s Industries",
        description1: "Your Trusted Partner in Superior Machine Tool Technology",
        // description2: "Your Trusted Partner in Superior Machine Tool Technology",

        exploreLink: "",
        contactLink: "",
    },
    {
        imageSrc: "/bg4.jpg",
        heading: "Forging the Future of Manufacturing Since 2009",
        description1: "CP Agencies stands as a testament to growth and expertise in the South Indian machine tool sector",
        // description2: "We provide overall planning, coordination and control of a project, so you don’t have to worry about anything.",
        exploreLink: "",
        contactLink: "",
    },
   
    {
        imageSrc: "/bg3.jpg",
        heading: "Driven by Passion, Defined by Service",
        description1: "CP Agencies lies a deep-seated passion for delivering unparallel professional service",
        // description2: "Empowering your projects with state-of-the-art equipment and expertise.",
        exploreLink: "",
        contactLink: "",
    },
    {
        imageSrc: "/products/piston-line.jpg",
        heading: "Partnering for Success",
        description1: " Trusted Technology Providers",
       
        contactLink: "",
    },
    {
        imageSrc: "/products/TAJMAC.png",
        heading: "Partnering for Success",
        description1: " Trusted Technology Providers",
       
        contactLink: "",
    },
     {
        imageSrc: "/products/ort.png",
        heading: "Innovation A Way Of Life",
        description1: "Forging the Future of Manufacturing Since 2009",
     
        exploreLink: "",
        contactLink: "",
    },
     {
        imageSrc: "/products/wf.jpg",
        heading: "Innovation A Way Of Life",
        description1: "Forging the Future of Manufacturing Since 2009",
     
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
                speed={1500}
                // pagination={{ clickable: true }}
                navigation={true}
                className="w-full hero bg-[var(--green)] text-white flex flex-col justify-center items-center text-center px-6 relative mt-[100px] lg:pb-[120px]"
            >
                {slidesContent.map((slide, index) => (
                    <SwiperSlide key={index} className="h-full">
                        {/* Background pattern */}

                        <div className="h-full grid lg:grid-cols-2">
                            <div className="lg:hidden bg-white">
                                <Image
                                    src={slide.imageSrc}
                                    width="700"
                                    height="700"
                                    alt="bg"
                                    className="w-full h-full object-cover relative"
                                />
                            </div>
                            <motion.div initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }} className="relative z-10 max-w-[1400px] mx-auto px-6 py-10 lg:py-40 h-full flex flex-col text-left">


                                <h1 className="text-4xl md:text-[50px] font-bold mb-2 head-font max-w-[570px]" dangerouslySetInnerHTML={{ __html: slide.heading }}>
                                </h1>
                                <div className="my-4 lg:my-2 max-w-[540px]">
                                    <p className="text-lg md:text-2xl my-2 font-light2">
                                        {slide.description1}

                                    </p>

                                    {/* <p className="text-md md:text-lg my-2 font-light2">
                                    {slide.description2}
                                </p> */}
                                </div>
                                <div className="flex flex-wrap gap-4 mt-4 max-w-[540px]">
                                    {/* <div className='shuffle'> <AnimatedButton href={slide.exploreLink} label="Explore Products" className="w-fit" /></div> */}
                                    <div className='shuffle'><AnimatedButton href={slide.contactLink} label="Contact Us" className="w-fit transparent-btn" /></div>
                                </div>


                            </motion.div>
                            <div className="hidden lg:block">
                                <Image
                                    src={slide.imageSrc}
                                    width="1000"
                                    height="1000"
                                    alt="bg"
                                    className="w-full h-full object-cover relative bg-white"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </>
    );
};

export default Hero;
