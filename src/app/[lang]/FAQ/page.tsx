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
                heading_ar="اتصل بنا"
                breadcrumbText_en="FAQ"
                breadcrumbText_ar="اتصل بنا"
                breadcrumbPosition="left"
            />
            <FAQ  />

           
            <Footer />
        </>
    );
}
