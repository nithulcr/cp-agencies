import { Metadata, ResolvingMetadata } from 'next';



export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {

  const metadata: Metadata = {
    title: 'Contact Us | Ray Montazim Investment',
    description: 'Get in touch with Ray Montazim. Connect with our team, learn about partnerships, or explore investment opportunities in Saudi real estate.',
    keywords: 'Contact Ray Montazim, real estate investment contact, partnerships Saudi Arabia, investment team, investor relations Ray Montazim',

  };

  return metadata;
}

import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";







export default function Home() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="Contact Us"
                breadcrumbText_en="Contact Us"
                breadcrumbPosition="left"
            />

            <ContactUs />


            <Footer />
        </>
    );
}