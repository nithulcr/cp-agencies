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
    title: lang === 'ar' ? 'الأسئلة الشائعة | استثمارات ريع منتظم العقارية' : 'FAQs | Ray Montazim Real Estate Investments',
    description: lang === 'ar' ? 'اعثر على إجابات حول نموذج الاستثمار في ريع منتظم، حقوق المساهمين، العوائد ربع السنوية، مستوى المخاطر، والحماية القانونية للمستثمرين.' : 'Find answers about Ray Montazim’s investment model, shareholder rights, quarterly returns, risk level, and legal protections for investors.',
    keywords: lang === 'ar' ? 'الأسئلة الشائعة ريع منتظم, استثمار عقاري السعودية, عوائد مضمونة, حقوق المساهمين, شركة مساهمة مبسطة' : 'Ray Montazim FAQs, real estate investment questions, Saudi joint stock investment, guaranteed returns Saudi, shareholder rights',

  };

  return metadata;
}

import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";







export default function Home() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="FAQ"
                heading_ar=" الاسئلة الشائعة"
                breadcrumbText_en="FAQ"
                breadcrumbText_ar=" الاسئلة الشائعة"
                breadcrumbPosition="left"
            />
            <FAQ  />

           
            <Footer />
        </>
    );
}
