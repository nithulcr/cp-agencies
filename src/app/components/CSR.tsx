"use client";

import Image from "next/image";
import AnimatedButton from "./AnimatedButton";



export default function CSR() {

    return (

        <section  className="bg-white py-14 lg:pb-24 lg:pt-24 text-left">
            <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="">
                    <div className="overflow-hidden lg:hidden mb-10">
                        <Image
                            src="/csr1.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover pl-5 f-full rounded-xl"
                        />
                    </div>
                    <div className="col-span-2 max-w-[550px]">
                        <h4 className="mb-4 lg:text-5xl text-3xl">CSR</h4>
                        <div className="flex flex-col gap-2">
                            <p className="text-justify">As part of the social responsibility, we have undertaken few improvement programmes at Government primary school located at Chetla Gouraram village, near Toopran.</p>
                            <p className="text-justify">“As a responsible corporate citizen, CP agencies besides being actively engaged in its business, is fully committed to the larger goal of enhancing the standard of living of the people”</p>
                        </div>
                        <AnimatedButton href="/CSR" label="Read More" className="w-fit text-white mt-8" />
                    </div>


                </div>
                <div className="relative flex justify-center lg:justify-end hidden lg:flex h-full">

                    <Image
                        src="/csr1.jpg"
                        alt="Investor at Computer"
                        width={750}
                        height={750}
                        className="object-cover ml-10 max-w-[500px] f-full rounded-xl"
                    />

                </div>
            </div>
        </section>

    );
}
