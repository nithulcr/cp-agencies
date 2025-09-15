
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero2 from "@/app/components/Hero2";
import Image from "next/image";
import ServiceTabs from "@/app/components/ServiceTabs";




export default function FabricationAutomation() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="Fabrication & Automation"
            breadcrumbText_en="Fabrication & Automation"
            />
            <ServiceTabs current="/services/fabrication-automation" />

            <div className="py-10 lg:py-16">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-col-reverse lg:grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div >
                            <ul className="">
                                <li>1. CNC TIG & PLASMA WELDING MACHINES</li>
                                <li>2. ROBOTIC WELDING AUTOMATION</li>
                                <li>3. CNC LASER MARKING, CUTTING & WELDING MACHINES</li>
                                <li>4. CNC ELECTRON BEAM WELDING MACHINES</li>
                                <li>5. CNC WIRECUT EDMs</li>
                                <li>6. CNC WATERJET CUTTING MACHINES</li>


                            </ul>
                        </div>
                        
                    </div>
                    <div className="relative flex justify-center lg:justify-end lg:flex h-full">

                        <Image
                            src="/fabrication.jpg"
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
