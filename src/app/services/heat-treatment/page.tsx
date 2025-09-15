
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero2 from "@/app/components/Hero2";
import Image from "next/image";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function HeatTreatment() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="Heat Treatment"
            breadcrumbText_en="Heat Treatment"
            />
            <ServiceTabs current="/services/heat-treatment" />

            <div className="py-10 lg:py-16">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div >
                            <ul className="">
                                <li>1. INDUCTION HEATING & BRAZING MACHINES</li>
                                <li>2. VACUUM FURNACES</li>
                                <li>3. ELECTRON, THE NETHERLANDS
                                    <br /><span className="pl-3 block"> - Surface and Heating Technologies -  Electron Beam Physical Vapour Deposition, Cleaning Furnaces, Coating Furnaces, Metal Powder Processing, Electron etc.</span>
                                </li>
                                <li>4. ION HEAT, COLUMBIA
                                    <br /> <span className="pl-3">- Nitriding Furnaces</span>
                                </li>
                               

                            </ul>
                        </div>
                        
                    </div>
                    <div className="relative flex justify-center lg:justify-end lg:flex h-full">

                        <Image
                            src="/heat-treatment.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full rounded-tl-[30px] rounded-br-[30px] rounded-bl-[30px] lg:rounded-tl-[100px] lg:rounded-br-[100px] lg:rounded-bl-[100px]"
                        />

                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
