
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

            <div className="py-10 lg:py-16">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col-reverse md:flex-row  gap-y-8">
                    <div className="flex w-full flex-col gap-6">
                        <Image
                            src="/metrology.jpg"
                            alt="Investor at Computer"
                            width={750}
                            height={750}
                            className="object-cover f-full rounded-xl"
                        />
                        <div >
                            <p className="mb-7 text-lg text-center">Accurate measurement and leak testing solutions from VDH and MAKRA for quality assurance.</p>

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
                    <div className="relative md:w-[430px] flex flex-none md:pl-12 justify-center lg:justify-end lg:flex lg:sticky lg:top-[100px] h-fit">
                        <ServiceTabs current="/services/metrology" />

                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}
