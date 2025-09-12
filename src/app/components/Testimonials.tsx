'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from "next/image";


// Example avatars (replace src paths with your actual assets)
const testimonialsItems = [
    {
        name: "Alex jonas",
        role: "JS Marketing",
        rating: 5.0,
        review: "Pleased to inform that we have been successful in selling IMT Intermato, Italy Wheel Turning Cells and M/s.LPM, Italy Low Pressure Die Casting Machines to M/s.WHEELS INDIA LTD, CHENNAI.",
        avatar: "/client1.png",
    },
    {
        name: "John Robert",
        role: "SM Strategy",
        rating: 5.0,
        review: "Also exited to mention here that M/s.TOS KURIM, Czech Republic CNC Horizontal Boring Machine model FU 200/12 has been sold to M/s.MTAR TECHNOLOGIES PVT LTD, HYDERABAD.",
        avatar: "/client1.png",
    },
    {
        name: "Maggie Hue",
        role: "BS Growth Ceo",
        rating: 4.8,
        review: "Proud the state that M/s.ORT ITALIA, Italy ‘s CNC thread Rolling Machine model RP 100 has been sold to M/s.Sundaram Fasteners Limited, Villupuram, Tamil Nadu.",
        avatar: "/client1.png",
    },

    {
        name: "jack hamma",
        role: "JK Finance",
        rating: 5.0,
        review: "M/s.ROCKMAN INDUSTRIES LTD, TIRUPATI has become one of our prestigious customer, who bought M/s.IMT Intermato, Italy Wheel Turning Cells &amp; Desprue punching machines.",
        avatar: "/client1.png",
    },


];

export default function Testimonials() {

    return (
        <section className="testimonials-section overflow-hidden relative lg:py-20 py-14">
            <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center">
                <div className="max-w-[600px] mx-auto text-center">
                    <h2 className="text-3xl lg:text-5xl font-medium mb-6">What Our Clients Say</h2>
                    <p className="leading-relaxed max-w-[740px]">
                       Hear from industry leaders and satisfied customers who trust our precision tools and services to drive their success.
                    </p>
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
                                <span className=" text-md opacity-70 mr-2">{item.rating.toFixed(1)}</span>
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
                                    <div className="text-[#A4AAC7] text-xs">{item.role}</div>

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
                                        <span className="text-[#E6ECFF] text-md opacity-70 mr-2">{item.rating.toFixed(1)}</span>
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
                                            <div className="text-white text-lg mb-1">{item.name}</div>
                                            <div className="text-[#A4AAC7] text-xs">{item.role}</div>
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
