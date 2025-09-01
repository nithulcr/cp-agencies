import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";







export default function Home() {
    return (
        <>
            <Header />
            <Hero2 heading="FAQ's" breadcrumbText="FAQ" breadcrumbPosition="left" />
            <FAQ  />

           
            <Footer />
        </>
    );
}
