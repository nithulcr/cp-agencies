"use client";

import Image from "next/image";

interface ProductsChildProps {
  icon: string;
  title: string;
}

const ProductsChild: React.FC<ProductsChildProps> = ({ icon, title }) => {
  return (
    <div
      className="Products-child bg-white rounded-[20px] lg:rounded-[20px] lg:rounded-bl-none rounded-bl-none  transition-all duration-300 relative top-0 hover:top-[-6px]"
    >
      <Image
        src={icon}
        alt={title}
        className="w-full object-contain mx-auto mb-2 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] aspect-[1/1.1] object-cover"
        width={100}
        height={100}
      />
      <h3 className="text-lg lg:text-xl font-medium lg:mb-2  px-2  lg:px-4">{title}</h3>
    </div>
  );
};

export default ProductsChild;
