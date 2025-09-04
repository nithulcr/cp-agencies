import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { lang: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  const metadata: Metadata = {
    title: lang === 'ar' ? 'اتصل بنا | استثمار ريع منتظم' : 'Contact Us | Ray Montazim Investment',
    description: lang === 'ar' ? 'تواصل مع ريع منتظم. تعرف على فريقنا، الشراكات، أو استكشف فرص الاستثمار العقاري في السعودية.' : 'Get in touch with Ray Montazim. Connect with our team, learn about partnerships, or explore investment opportunities in Saudi real estate.',
    keywords: lang === 'ar' ? 'اتصل بنا ريع منتظم, استثمار عقاري السعودية, شراكات استثمار, علاقات المستثمرين, فريق ريع منتظم' : 'Contact Ray Montazim, real estate investment contact, partnerships Saudi Arabia, investment team, investor relations Ray Montazim',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";







export default function Home() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="Contact Us"
                heading_ar=" تواصل معنا"
                breadcrumbText_en="Contact Us"
                breadcrumbText_ar=" تواصل معنا"
                breadcrumbPosition="left"
            />

            <ContactUs />


            <Footer />
        </>
    );
}