
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero2 from "@/app/components/Hero2";
import Image from "next/image";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function Metrology() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="Metrology"
            breadcrumbText_en="Metrology"
            />
            <ServiceTabs current="/services/metrology" />

            <div className="py-10 lg:py-16">
                <div className="max-w-[800px] mx-auto px-6 flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div >
                            <ul className="">
                                <li>1. LASER SCANNERS</li>
                                <li>2. PORTABLE SURFACE ROUGHNESS TESTER</li>
                                <li>3. SURFACE, FORM CHECKING EQUIPMENTS</li>
                                <li>4. ROUNDNESS TESTING EQUIPMENTS</li>
                                <li>5. VDH</li>
                                <li>6. MAKRA</li>


                            </ul>
                        </div>
                        
                    </div>
                    <div className="relative flex justify-center lg:justify-end lg:flex h-full">

                        <Image
                            src="/metrology.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full"
                        />

                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
