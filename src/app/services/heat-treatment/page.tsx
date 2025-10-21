
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



            <div className="py-10 lg:py-16">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col-reverse md:flex-row  gap-y-8">
                    <div className="flex w-full flex-col gap-6">

                        <Image
                            src="/heat-treatment.jpg"
                            alt="Investor at Computer"
                            width={750}
                            height={750}
                            className="object-cover f-full rounded-xl"
                        />
                        <div >
                            <p className="mb-7 text-lg text-center">Advanced induction heating, vacuum furnaces, electron beam technologies, and nitriding furnaces from Electron (Netherlands) and Ion Heat (Columbia).</p>

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
                    <div className="relative md:w-[430px] flex flex-none md:pl-12 justify-center lg:justify-end lg:flex lg:sticky lg:top-[100px] h-fit">
                        <ServiceTabs current="/services/heat-treatment" />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
