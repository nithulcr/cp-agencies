"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import he from 'he';

interface Brand {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  brands: number[];
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
}

interface ProductsClientProps {
  products: Product[];
  brands: Brand[];
}




export default function ProductsClient({ products, brands }: ProductsClientProps) {
  const [activeBrand, setActiveBrand] = useState<number | null>(brands.length > 0 ? brands[0].id : null);

  const filteredProducts = activeBrand
    ? products.filter(p => p.brands.includes(activeBrand))
    : products;

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="flex border-b border-gray-200">
        {brands.map(brand => (
          <button
            key={brand.id}
            onClick={() => setActiveBrand(brand.id)}
            className={`py-4 px-6 text-lg font-medium ${activeBrand === brand.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {he.decode(brand.name)}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => {
            const featuredImage = product._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            const decodedTitle = he.decode(product.title.rendered);
            return (
              <div key={product.id} className="site-card blog-card rounded-lg">
                <Link href={`/products/${product.slug}`}>
                  <Image
                    src={featuredImage || '/bg1.jpg'}
                    alt={decodedTitle}
                    width={400}
                    height={250}
                    className='w-full rounded-xl aspect-[2/1.2] object-cover'
                  />
                  <div className='p-5'>
                    <h2 className="text-xl font-semibold my-3 line-clamp-2">{decodedTitle}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

