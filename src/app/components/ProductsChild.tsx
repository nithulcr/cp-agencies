"use client";

import Image from "next/image";

interface ProductsChildProps {
  icon: string;
  title: string;
}

const ProductsChild: React.FC<ProductsChildProps> = ({ icon, title }) => {
  return (
    <div
      className="Products-child bg-white rounded-[30px] lg:rounded-[46px] lg:rounded-bl-none rounded-bl-none p-2  lg:p-4 transition-all duration-300 relative top-0 hover:top-[-6px]"
    >
      <Image
        src={icon}
        alt={title}
        className="w-full object-contain mx-auto mb-2 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[30px] aspect-[1/1.1] object-cover"
        width={100}
        height={100}
      />
      <h3 className="text-lg lg:text-xl font-medium lg:mb-2 pt-2">{title}</h3>
    </div>
  );
};

export default ProductsChild;
