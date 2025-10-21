"use client";

import Image from "next/image";

interface ProductsChildProps {
  icon: string;
  title: string;
  description: string;
}

const ProductsChild: React.FC<ProductsChildProps> = ({ icon, title, description }) => {
  return (
    <div
  className="group relative bg-white rounded-[20px] overflow-hidden transition-all duration-300 top-0 hover:top-[-6px]"
>
  <Image
    src={icon}
    alt={title}
    className="w-full object-contain mx-auto mb-2 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] aspect-[1/1.1]"
    width={100}
    height={100}
  />
  <h3 className="text-lg lg:text-xl font-medium my-2 px-4 group-hover:opacity-0">{title}</h3>

  {/* Overlay div (initially hidden, appears on hover) */}
  <div className="absolute inset-0 bg-[#0f2563e3] flex flex-col gap-3 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <h3 className="text-lg lg:text-xl font-medium text-white">{title}</h3>
    <p className="text-white">{description}</p>
  </div>
</div>

  );
};

export default ProductsChild;
