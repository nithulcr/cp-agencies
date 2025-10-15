import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { notFound } from 'next/navigation';
import AnimatedButton from "@/app/components/AnimatedButton";

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

export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/product`, {
    headers: {
      'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_APPLICATION_PASSWORD}`).toString('base64'),
    },
  });

  if (!response.ok) {
    return [];
  }

  const products: Product[] = await response.json();

  return products.map((product: Product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const featuredImage = product._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <>
      <Header />
      <div className="py-14 lg:py-24 mt-[100px]">
        <div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-8">

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
            <div className='flex gap-2 items-center  mb-6'>
             
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">

                {product.title.rendered}
              </h1>
            </div>
            <div
              className="prose lg:prose-xl max-w-none"
              dangerouslySetInnerHTML={{ __html: product.content.rendered }}
            />
            <AnimatedButton href="/products" label="Back to All Products" className="w-fit text-white mt-8" />
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
      <Footer />
    </>
  );
}
