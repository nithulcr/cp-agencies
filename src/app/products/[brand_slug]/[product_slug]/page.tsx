import { cache } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from "lucide-react";


interface Product {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
  product_brand?: number[];
  menu_order?: number;
}

interface Brand { 
  id: number; 
  name: string; 
  slug: string; 
  meta?: { term_order?: number }; 
}

async function getBrands(): Promise<Brand[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/product_brand?per_page=100`, { headers: { 'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_APPLICATION_PASSWORD}`).toString('base64') }, next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch brands');
  return res.json();
}

async function getProduct(slug: string): Promise<Product | null> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/product?slug=${slug}&_embed`, {
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_APPLICATION_PASSWORD}`).toString('base64'),
    },
    next: { revalidate: 60 }
  });

  if (!response.ok) {
    // Handle error, maybe return null or throw an error
    return null;
  }

  const products = await response.json();
  if (products.length === 0) {
    return null;
  }
  return products[0];
}

const getAllProducts = cache(async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/product?_embed&per_page=100`, {
      headers: {
        'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_APPLICATION_PASSWORD}`).toString('base64'),
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch products for getAllProducts:", response.status, await response.text());
      return [];
    }

    const products: Product[] = await response.json();
    return products;
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return [];
  }
});

export async function generateStaticParams() {
  const products = await getAllProducts();
  const brands = await getBrands();

  return products.map((product: Product) => {
    const brand = brands.find(b => product.product_brand?.includes(b.id));
    return {
      brand_slug: brand ? brand.slug : 'uncategorized',
      product_slug: product.slug,
    }
  });
}

export default async function ProductPage({ params }: { params: { brand_slug: string, product_slug: string } }) {
  const product = await getProduct(params.product_slug);
  const allProducts = await getAllProducts();
  const brands = await getBrands();

  if (!product) {
    notFound();
  }

  const sortedBrands = [...brands].sort((a, b) => ((a.meta?.term_order || 0) - (b.meta?.term_order || 0)));

  const sortedProducts = sortedBrands.flatMap(brand => 
    allProducts
      .filter(p => p.product_brand?.includes(brand.id))
      .sort((a, b) => (a.menu_order || 0) - (b.menu_order || 0))
  );

  const currentIndex = sortedProducts.findIndex((p) => p.slug === params.product_slug);
  const previousIndex = (currentIndex - 1 + sortedProducts.length) % sortedProducts.length;
  const nextIndex = (currentIndex + 1) % sortedProducts.length;

  const previousProduct = sortedProducts[previousIndex];
  const nextProduct = sortedProducts[nextIndex];

  const getBrandSlug = (brandId: number) => {
    const brand = brands.find(b => b.id === brandId);
    return brand ? brand.slug : 'uncategorized';
  }


  const featuredImage = product._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <>
      <Header />
      <div className="py-14 lg:py-24 mt-[100px]">
        <div className='max-w-[1200px] mx-auto px-6'>

          <div className=" grid lg:grid-cols-2 gap-8">

            {featuredImage && (
              <Image
                src={featuredImage}
                alt={product.title.rendered}
                width={800}
                height={400}
                className="w-full max-w-[500px] h-auto object-cover lg:ml-auto rounded-lg lg:hidden"
              />
            )}
            <div>
              <div className='mb-6'>
                <Link href="/products" className='flex items-center gap-2'> <ArrowLeft className="w-6 h-6" strokeWidth={1} />Back to All Products</Link>
              </div>
              <div className='flex gap-2 items-center  mb-6'>

                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">

                  {product.title.rendered}
                </h1>
              </div>
              <div
                className="prose lg:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: product.content.rendered }}
              />

              <div className="product-paginations flex flex-wrap w-fit  ml-auto  gap-8 mt-12">

                {previousProduct && previousProduct.product_brand && previousProduct.product_brand.length > 0 && (
                  <Link href={`/products/${getBrandSlug(previousProduct.product_brand[0])}/${previousProduct.slug}`} className='flex gap-2 items-center '>
                    <ArrowLeft className="w-5 h-5" strokeWidth={1} />

                    Previous
                  </Link>
                )}


                {nextProduct && nextProduct.product_brand && nextProduct.product_brand.length > 0 && (
                  <Link href={`/products/${getBrandSlug(nextProduct.product_brand[0])}/${nextProduct.slug}`} className='flex gap-2 items-center '>
                    Next
                    <ArrowRight className="w-5 h-5" strokeWidth={1} />
                  </Link>
                )}

              </div>
            </div>
            {featuredImage && (
              <Image
                src={featuredImage}
                alt={product.title.rendered}
                width={800}
                height={400}
                className="w-full max-w-[500px] h-auto object-cover lg:ml-auto rounded-lg hidden lg:block"
              />
            )}

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}