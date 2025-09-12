"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedButton from "./AnimatedButton";


const Hero3 = () => {
    return (
        <>
            <section className="w-full md:min-h-screen bg-[var(--green)] text-white flex flex-col justify-center items-center text-center px-6 relative mt-[100px] lg:pb-[120px]">
                {/* Background pattern */}
                <div className="absolute hero-cover inset-0  bg-cover bg-center">
                    <video
                        src="/video.mp4" // correct spelling: video, not 'viedo'
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover relative"
                    />
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }} className="relative z-10 max-w-3xl py-20">


                    <h2 className="text-5xl md:text-7xl font-bold mb-2 head-font">
                        Welcome To <br></br><span>CP AGENCIES</span>
                    </h2>
                    <div className="my-6 lg:my-4">
                        <p className="text-lg md:text-3xl my-2 font-light2">
                            Your Trusted Partner in Superior Machine Tool Technology

                        </p>

                        <p className="text-md md:text-lg my-2 font-light2">
                            Delivering high-precision solutions, customer support, and unmatched service.
                        </p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-4 mt-8">
                        <div className='shuffle'> <AnimatedButton href="" label="Explore Products" className="w-fit" /></div>
                        <div className='shuffle'><AnimatedButton href="" label="Contact Us" className="w-fit transparent-btn" /></div>
                    </div>


                </motion.div>
            </section>
        </>
    );
};

export default Hero3;
