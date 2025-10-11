import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from "next/image";

interface Post {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
}

async function getPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}?_embed`, {
    headers: {
      'Authorization': 'Basic ' + btoa(`${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_APPLICATION_PASSWORD}`),
    },
    next: { revalidate: 60 } // Revalidate every 60 seconds
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

export default async function BlogListPage() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <Header />
      <section className=" other-section pt-14 lg:pt-22 pb-14 lg:pb-22 overflow-hidden relative">
        <div className="max-w-[1400px] px-6 w-full mx-auto pt-14 lg:pt-20">
          <div className='relative'>
            <div className='fade-up max-w-3xl mx-auto text-center'>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 fade-up">Latest News & Blog</h1>
              <p className="fade-up mb-6 opacity-70">
                Stay informed with the latest articles, market insights, and trading tips from the Jeta FX team. Our blog is designed to help traders at every level — from beginners learning the basics to experienced investors exploring advanced strategies.
              </p>
            </div>
          </div>
        </div>
        <div className='max-w-[1460px] mx-auto px-6 mt-10 lg:mt-20'>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14 fade-up">
            {posts.map((post) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              if (!featuredImage) {
                console.warn(`Featured image not found for post: "${post.title.rendered}"`);
              }
              return (
                <div key={post.id} className="site-card blog-card rounded-lg ">
                  <Image 
                    src={featuredImage || '/blog1.jpg'}
                    alt="blog img"
                    width={400}
                    height={250}
                    className='w-full rounded-xl aspect-[2/1.2] object-cover'
                  />
                  <div className='p-5 pt-3'>
                    <span className='text-sm opacity-70 fw-200'>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <h2 className="text-xl font-semibold my-3 line-clamp-2">
                      <Link href={`/blogs/${post.slug}`}>{post.title.rendered}</Link>
                    </h2>
                    <div
                      className="opacity-70 line-clamp-4 text-sm"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <Link className='opacity-70 fw-200 cursor-pointer inline-block mt-4' href={`/blogs/${post.slug}`}>Read More</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
