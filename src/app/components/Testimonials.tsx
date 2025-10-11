'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from "next/image";


// Example avatars (replace src paths with your actual assets)
const testimonialsItems = [
    {
        name: "M/s.Hindustan Aeronautics Limited",
        role: "JS Marketing",
        rating: 5.0,
        review: "It is with immense satisfaction that we announce that we have successfully commissioned/proved M/s.TAJMAC, Czech Republic make CNC 5 AXES HORIZONTAL MACHINING CENTRE model H50FA for Aero Engine Blade for SU30 Project",
        avatar: "/profile.png",
    },
    {
        name: "M/s.Bharat Heavy Electricals Limited",
        role: "Ramachandrapuram, Hyderabad",
        rating: 5.0,
        review: "We are delighted to state that we have executed contract for M/s.TOS KURIM, Czech Republic make largest Gantry CNC Machine model FRUF 400C-V/14 to M/s.Bharat Heavy Electricals Limited, Ramachandrapuram, Hyderabad for their Gas Turbine/Steam Turbine and Compressor casing unit.This is the largest contract in terms of size & value to have been executed by us as on date!",
        avatar: "/profile.png",
    },
    {
        name: "M/s.Bharat Heavy Electricals Limited",
        role: "Ramachandrapuram, Hyderabad",
        rating: 4.8,
        review: "It gives us great pleasure to inform about supply of M/s.TOS KURIM, Czech Republic make Gantry CNC Machine model FRFQ 250-VR A/6",
        avatar: "/profile.png",
    },

    {
        name: "M/s.Fine Arc Systems Limited",
        role: " Pune",
        rating: 5.0,
        review: "It is a challenging order for execution from M/s.Bharat Dynamics Limited, Bhanur for Tig Welding Machine with automation",
        avatar: "/profile.png",
    },


];

export default function Testimonials() {

    return (
        <section className="testimonials-section overflow-hidden relative lg:py-24 py-14">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center">
                <div className="max-w-[600px] mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-medium mb-6">Few Major Recent Supplies</h2>
                    {/* <p className="leading-relaxed max-w-[740px]">
                       Hear from industry leaders and satisfied customers who trust our precision tools and services to drive their success.
                    </p> */}
                </div>
                <div

                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 lg:mt-16 md:grid hidden"
                >
                    {testimonialsItems.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-[16px] lg:rounded-[26px] lg:rounded-bl-none rounded-bl-none p-4  lg:p-6 transition-all duration-300 relative top-0 hover:top-[-6px] flex flex-col h-full  "
                        >
                            <p className="mb-3  text-md leading-relaxed font-medium">&ldquo;{item.review}&rdquo;</p>
                            <div className="flex items-center my-1">
                                <span className=" text-md  mr-2">{item.rating.toFixed(1)}</span>
                                {[...Array(5)].map((star, i) => (
                                    <svg
                                        key={i}
                                        width="16"
                                        height="16"
                                        fill="none"
                                        viewBox="0 0 16 16"
                                        className={`inline-block mr-[2px] `}
                                    >
                                        <polygon
                                            points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6"
                                            fill={i < Math.floor(item.rating) ? "#FFD700" : "#fff"}
                                        />

                                    </svg>
                                ))}
                            </div>
                            <div className="flex items-center mt-3">

                                <Image
                                    src={item.avatar}
                                    alt={item.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full mr-3 object-cover border border-[#23243b]"
                                />
                                <div>
                                    <div className=" textlg mb-1">{item.name}</div>
                                    <div className="text-gray-800 text-xs">{item.role}</div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-8 lg:mt-16 md:hidden">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1.2}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        loop={true}
                        className="pb-8"
                        style={{ paddingBottom: "40px" }}
                    >
                        {testimonialsItems.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="bg-white rounded-[16px] lg:rounded-[26px] lg:rounded-bl-none rounded-bl-none p-4  lg:p-6 transition-all duration-300 relative top-0 hover:top-[-6px] flex flex-col h-full  ">
                                    <p className="mb-4  text-lg leading-relaxed font-medium">&ldquo;{item.review}&rdquo;</p>
                                    <div className="flex items-center my-2">
                                        <span className="text-gray-700 text-md mr-2">{item.rating.toFixed(1)}</span>
                                        {[...Array(5)].map((star, i) => (
                                            <svg
                                                key={i}
                                                width="16"
                                                height="16"
                                                fill="none"
                                                viewBox="0 0 16 16"
                                                className={`inline-block mr-[2px] `}
                                            >
                                                <polygon
                                                    points="8,1 10,6 15,6 11,9 13,14 8,11 3,14 5,9 1,6 6,6"
                                                    fill={i < Math.floor(item.rating) ? "#FFD700" : "#fff"}
                                                />
                                            </svg>
                                        ))}
                                    </div>
                                    <div className="flex items-center mt-5">
                                        <img
                                            src={item.avatar}
                                            alt={item.name}
                                            width={40}
                                            height={40}
                                            className="rounded-full mr-3 object-cover border border-[#23243b]"
                                        />
                                        <div>
                                            <div className="text-lg mb-1">{item.name}</div>
                                            <div className="text-gray-700 text-xs">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-row items-center justify-center gap-3 lg:mt-6 lg:mt-12">
                    <div className="flex items-center">
                        <Image
                            src="/client1.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full "
                        />
                        <Image
                            src="/ceo.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full ml-[-5px]"
                        />

                        <Image
                            src="/client1.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full  ml-[-5px]"
                        />
                        <Image
                            src="/ceo.png"
                            alt="Founder"
                            width={28}
                            height={28}
                            className="rounded-full  ml-[-5px]"
                        />
                    </div>
                    <span className="text-sm">Over <span className="font-medium">1000+</span>customers rely on us for innovation and quality</span>
                </div>
            </div>
        </section>
    );
}
