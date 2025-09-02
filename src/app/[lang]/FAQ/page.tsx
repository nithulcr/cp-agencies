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
