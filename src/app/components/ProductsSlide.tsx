"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import ProductsChild from "./ProductsChild";
import AnimatedButton from "./AnimatedButton";



const teamDataEN = [

  {
    id: "02",
    icon: "/products/TAJMAC.png",
    title: "TAJMAC",
    description: "Low pressure die casting machine"
  },
  {
    id: "03",
    icon: "/products/TOSHULIN.png",

    title: "TOSHULIN",
    description: "global leader in manufacturing technologically advanced CNC machining."

  },
  {
    id: "01",
    icon: "/products/ort.png",
    title: "ORT",
    description: "ORT ITALIA is a company leader in the rolling machines field."

  },
  {
    id: "04",
    icon: "/products/imt.png",

    title: "IMT",
    description: ""

  },
  {
    id: "05",
    icon: "/products/weiler.png",
    title: "WEILER",
    description: "WEILER leads the market with specialized lathes and milling machines designed for training in Germany, Austria, and Switzerland. "

  },

  // ...other products
];






const Products = () => {

  const data = teamDataEN;

  return (
    <section className="py-14 lg:py-24 text-[var(--foreground)]">
      <div className="max-w-[1400px] mx-auto px-6 flex lg:flex-row flex-col items-start lg:items-center gap-5 justify-between mb-14">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-medium mb-6">Our Products</h2>
          <p className="leading-relaxed max-w-[740px]">
            Our products combine advanced technology and precision engineering to deliver reliable, high-performance solutions across industries.
          </p>
        </div>


      </div>
      <div className="max-w-[1400px] mx-auto lg:px-6 Products-container">
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            grabCursor={true}
          >
            {data.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductsChild
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {data.map((product) => (
            <ProductsChild
              key={product.id}
              icon={product.icon}
              title={product.title}
              description={product.description}

            />
          ))}
        </div>
      </div>
      <div className="max-w-[500px] mx-auto px-6 mt-10 flex justify-center">
        <AnimatedButton href="/products" label="View All Products" className="w-fit text-white" />
      </div>
    </section>
  );
};


export default Products;