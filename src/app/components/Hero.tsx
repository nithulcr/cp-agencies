"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useLang } from "../hooks/useLang";


const Hero = () => {
    const { isArabic } = useLang();
    return (
        <>
            {isArabic ? (
                <section className="w-full md:min-h-screen bg-[var(--green)] text-white flex flex-col justify-center items-center text-center px-6 relative">
                    {/* Background pattern */}
                    <div className="bg-fixed absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center"></div>

                    <div className="relative z-10 max-w-3xl py-20">
                        <Image src="/hero-shape.png" alt="Logo" className="mx-auto md:w-[380px] w-[300px]" width={380} height={150} />

                        <motion.h2 initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} className="text-6xl md:text-8xl font-bold mb-4 font-script-mt-bold">
                            مرحبا بكم في ريع منتظم
                        </motion.h2>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} className="my-6 lg:my-8">
                            <p className="text-md md:text-lg my-1 font-light">
                                بوابتكم إلى استثمارات عقارية مستقرة ومدرّة للدخل

                            </p>
                            <p className="text-xl md:text-3xl my-1 font-light">
                                عوائد سنوية تتراوح بين 10% و15% تُوزّع بشكل دوري 
                            </p>
                            <p className="text-md md:text-lg my-1 font-light">
                                ضمن هيكل منظم وشفاف
                            </p>
                        </motion.div>
                        <button className="inline-flex items-center gap-2 px-10 py-[12px] bg-[var(--green2)] text-white border rounded-full  transition-transform duration-300 hover:scale-105 cursor-pointer">
                            ابدأ الآن
                        </button>

                    </div>
                </section>
            ) : (
                <section className="w-full md:min-h-screen bg-[var(--green)] text-white flex flex-col justify-center items-center text-center px-6 relative">
                    {/* Background pattern */}
                    <div className="bg-fixed absolute inset-0 bg-[url('/pattern.png')] bg-cover bg-center"></div>

                    <div className="relative z-10 max-w-3xl py-20">
                        <Image src="/hero-shape.png" alt="Logo" className="mx-auto md:w-[380px] w-[300px]" width={380} height={150} />

                        <motion.h2 initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} className="text-6xl md:text-8xl font-bold mb-4 font-script-mt-bold">
                            Welcome To
                        </motion.h2>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }} className="my-6 lg:my-8">
                            <p className="text-md md:text-lg my-1 font-light">
                                Your Gateway To Stable, Income-Producing Real Estate Investments.

                            </p>
                            <p className="text-xl md:text-3xl my-1 font-light">
                                Earn Quarterly Returns Of 10%–15% Annually
                            </p>
                            <p className="text-md md:text-lg my-1 font-light">
                                With A Clear, Regulated Structure
                            </p>
                        </motion.div>
                        <button className="inline-flex items-center gap-2 px-10 py-[12px] bg-[var(--green2)] text-white border rounded-full  transition-transform duration-300 hover:scale-105 cursor-pointer">
                            Get Started
                        </button>

                    </div>
                </section>
            )}
        </>
    );
};

export default Hero;
