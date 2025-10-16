import ProductsFilter from './ProductsFilter'; // Client component
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero2 from "@/app/components/Hero2";

interface Brand { id: number; name: string; slug: string; }
interface Product { id: number; title: {rendered: string}; slug: string; product_brand?: number[]; _embedded?: { 'wp:featuredmedia'?: { source_url: string }[] } }

const API_URL = process.env.NEXT_PUBLIC_WP_API_URL;

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}/product?_embed&per_page=100`, { headers: { 'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_APPLICATION_PASSWORD}`).toString('base64') }, next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

async function getBrands(): Promise<Brand[]> {
  const res = await fetch(`${API_URL}/product_brand?per_page=100`, { headers: { 'Authorization': 'Basic ' + Buffer.from(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_APPLICATION_PASSWORD}`).toString('base64') }, next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch brands');
  return res.json();
}

export default async function ProductsPage() {
  const [products, brands] = await Promise.all([getProducts(), getBrands()]);
  return (
    <>
      <Header />
      <Hero2 heading_en="Our Products" breadcrumbText_en="Products" />
      <ProductsFilter products={products} brands={brands} />
      <Footer />
    </>
  );
}
