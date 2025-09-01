import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";







export default function Home() {
    return (
        <>
            <Header />
            <Hero2 heading="Contact Us" breadcrumbText="Contact Us" breadcrumbPosition="left" />
            <ContactUs  />

           
            <Footer />
        </>
    );
}
