"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

interface Brand { id: number; name: string; slug: string; }
interface Product { id: number; title: { rendered: string }; slug: string; product_brand?: number[]; _embedded?: { 'wp:featuredmedia'?: { source_url: string }[] }; }

export default function ProductsFilter({ products, brands }: { products: Product[]; brands: Brand[] }) {
  const [activeBrand, setActiveBrand] = useState<number | null>(null);

  const filteredProducts = activeBrand === null
    ? products
    : products.filter(p => Array.isArray(p.product_brand) && p.product_brand.includes(activeBrand));

  return (
    <div className="py-14 lg:py-24 max-w-[1400px] mx-auto px-6 flex flex-col-reverse md:flex-row gap-y-8">

      {/* Product list */}
      <div className="w-full">
        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-5">
          {filteredProducts.map(product => {
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
                    <h2 className="text-lg font-semibold  line-clamp-2">{product.title.rendered}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Brand filter sidebar */}
      <div className="relative md:w-[480px] flex flex-none md:pl-14 justify-center lg:justify-end lg:flex lg:sticky lg:top-[100px] h-fit">
        <div className="w-full flex lg:flex-col flex-wrap gap-2 md:gap-4 md:bg-[var(--green2)] md:rounded-xl md:px-8 md:py-12">
          <h4 className="text-3xl text-white mb-2 hidden md:block border-b border-b-[#6686c2] pb-2">Our Products</h4>

          <button
            onClick={() => setActiveBrand(null)}
            className={`px-6 cursor-pointer text-sm md:text-[16px] py-2 md:py-3 text-left rounded-[40px] ${activeBrand === null ? 'bg-[#e5ecff]' : 'bg-[var(--green)] text-white'}`}
          >
            All Products
          </button>

          {brands.map(brand => (
            <button
              key={brand.id}
              onClick={() => setActiveBrand(brand.id)}
              className={`px-6 cursor-pointer text-sm md:text-[16px] py-2 md:py-3 text-left rounded-[40px] ${activeBrand === brand.id ? 'bg-[#e5ecff]' : 'bg-[var(--green)] text-white'}`}
            >
              {brand.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
