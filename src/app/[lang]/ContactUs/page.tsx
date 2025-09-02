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
                heading_ar="اتصل بنا"
                breadcrumbText_en="Contact Us"
                breadcrumbText_ar="اتصل بنا"
                breadcrumbPosition="left"
            />

            <ContactUs />


            <Footer />
        </>
    );
}