
"use client";
import { blogPosts } from '../data';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AnimatedButton from "../../components/AnimatedButton";
import Link from 'next/link';
import React, { useState, use } from 'react';


export default function BlogPostPage({ params: initialParams }: { params: Promise<{ slug: string }> }) {
  const params = use(initialParams);

  const relatedBlogPosts = blogPosts.filter((p) => p.slug !== params.slug);

  // Shuffle related posts to get a random selection
  for (let i = relatedBlogPosts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [relatedBlogPosts[i], relatedBlogPosts[j]] = [relatedBlogPosts[j], relatedBlogPosts[i]];
  }

  const [visibleRelatedBlogsCount, setVisibleRelatedBlogsCount] = useState(3);

  const handleLoadMoreRelated = () => {
    setVisibleRelatedBlogsCount(prevCount => prevCount + 3);
  };

  const blogsToDisplay = relatedBlogPosts.slice(0, visibleRelatedBlogsCount);
  const hasMoreRelatedBlogs = visibleRelatedBlogsCount < relatedBlogPosts.length;

  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Header />

      <section className="other-section pt-14 lg:pt-22 pb-5 lg:pb-10 overflow-hidden relative">
       
        <div className="max-w-[1100px] px-6 w-full mx-auto pt-14 lg:pt-20 relative">


          <div className='max-w-4xl mx-auto text-center'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
           
           
            <div className='site-card2 my-8 p-0-card'>
              <Image src={post.image} alt={post.title} width={800} height={400} className="mx-auto" />
            </div>
             <p className=" mb-6  max-w-3xl mx-auto opacity-70">
              {post.content}
            </p>


          </div>
        

        </div>
      </section >
      <section className="pt-7 lg:pt-12 pb-14 lg:pb-16 overflow-hidden relative">
        <div className="max-w-[1460px] px-6 w-full mx-auto  relative">
          <h4 className='text-2xl lg:text-4xl font-medium text-center'>Related Insights</h4>

          <div className='mt-10 lg:mt-15'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-14'>
              {blogsToDisplay.map((relatedPost) => (
                <div key={relatedPost.slug} className="site-card blog-card rounded-lg ">
                  <Image src={relatedPost.image} alt="blog img" width="400" height="250" className=' w-full rounded-xl' />
                  <div className='p-5 pt-3'>
                    <span className='text-sm text-[#E6ECFF] opacity-70 fw-200'>{relatedPost.date}</span>
                    <h2 className="text-2xl font-semibold my-3 line-clamp-3">
                      <Link href={`/blogs/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h2>
                    <p className=" opacity-70 line-clamp-5">By {relatedPost.content}</p>
                    <Link className='opacity-70 fw-200 cursor-pointer inline-block mt-4' href={`/blogs/${relatedPost.slug}`}>Read More</Link>
                  </div>
                </div>
              ))}
            </div>
            {hasMoreRelatedBlogs && (
              <AnimatedButton onClick={handleLoadMoreRelated} label="Load More" className="white-btn w-fit load-more-btn mt-6  lg:mt-10 mx-auto" />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// -- Re-usable Check SVG icon (no JSX namespace needed) --
function CheckSVG() {
  return (
    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.74999 9.3448L3.16699 10.9278L7.91699 15.6778L15.833 7.7608L14.25 6.1778L7.91699 12.5108L4.74999 9.3448Z" fill="#8AA5FF" />
    </svg>
  );
}