"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";


const CSR = () => {
    return (
        <section className=" py-14 lg:py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-6  grid md:grid-cols-3 items-center  gap-5">
                <div className="col-span-2 max-w-[700px]">
                    <h4 className="mb-4 lg:text-5xl text-3xl">CSR</h4>
                    <p>  As part of the social responsibility, we have undertaken few improvement programmes at Government primary school located at Chetla Gouraram village, near Toopran. “As a responsible corporate citizen, CP agencies besides being actively engaged in its business, is fully committed to the larger goal of enhancing the standard of living of the people,</p>
                </div>
                <div className="flex justify-end">
                    <AnimatedButton label="Read More" className="w-fit text-white" />
                </div>

            </div>
        </section>
    );
};

export default CSR;
