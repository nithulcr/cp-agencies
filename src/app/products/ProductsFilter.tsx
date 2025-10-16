"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "../components/AnimatedButton";

interface Brand { id: number; name: string; slug: string; }
interface Product { id: number; title: { rendered: string }; slug: string; product_brand?: number[]; _embedded?: { 'wp:featuredmedia'?: { source_url: string }[] }; }

export default function ProductsFilter({ products, brands }: { products: Product[]; brands: Brand[] }) {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleBrandClick = (brandId: number | null) => {
    setActiveBrand(brandId);
    setVisibleCount(6);
  };

  const filteredProducts = activeBrand === null
    ? products
    : products.filter(p => Array.isArray(p.product_brand) && p.product_brand.includes(activeBrand));

  const productsToShow = filteredProducts.slice(0, visibleCount);

  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const showLess = () => {
    setVisibleCount(prevCount => Math.max(6, prevCount - 6));
  };

  return (
    <div className="py-14 lg:py-24 max-w-[1400px] mx-auto px-6 flex flex-col-reverse lg:flex-row gap-y-8">

      {/* Product list */}
      <div className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-5">
          {productsToShow.map(product => {
            const featuredImage = product._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/bg1.jpg';
            return (
              <div key={product.id} className="Products-child bg-white rounded-[20px] transition-all duration-300 relative top-0 hover:top-[-6px]">
                <Link href={`/products/${product.slug}`}>
                  <Image
                    src={featuredImage}
                    alt={product.title.rendered}
                    width={400}
                    height={250}
                    className="w-full rounded-xl aspect-[2/1.6] object-cover"
                  />
                  <div className="px-5 py-3">
                    <h2 className="text-lg font-semibold uppercase line-clamp-2">{product.title.rendered}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap w-fit  justify-center ml-auto gap-4 mt-12">
          {visibleCount > 6 && (
            <AnimatedButton onClick={showLess} label="View Less" className="w-fit transparent-btn transparent-btn4 mx-auto" />
          )}
          {visibleCount < filteredProducts.length && (
            <AnimatedButton onClick={showMore} label="Next" className="w-fit mx-auto" />
          )}
        </div>
      </div>

      {/* Brand filter sidebar */}
      <div className="relative lg:w-[480px] flex flex-none lg:pl-14 justify-center lg:justify-end lg:flex h-fit">
        <div className="w-full flex lg:flex-col flex-wrap gap-2 lg:gap-4 lg:bg-[var(--green2)] lg:rounded-xl lg:px-8 lg:py-12">
          <h4 className="text-3xl text-white mb-2 hidden lg:block border-b border-b-[#6686c2] pb-2">Our Products</h4>

          <button
            onClick={() => handleBrandClick(null)}
            className={`px-6 cursor-pointer text-sm lg:text-[16px] py-2 lg:py-3 text-left rounded-[40px] border lg:border-0 ${activeBrand === null ? 'bg-[#e5ecff]' : 'bg-[var(--green)] text-white'}`}
          >
            All Products
          </button>
          

          {brands.map(brand => (
            <button
              key={brand.id}
              onClick={() => handleBrandClick(brand.id)}
              className={`px-6 cursor-pointer text-sm lg:text-[16px] py-2 lg:py-3 text-left rounded-[40px] border border-[#193685]  lg:border-0 ${activeBrand === brand.id ? 'bg-[#e5ecff]' : 'bg-[var(--green)] text-white'}`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
