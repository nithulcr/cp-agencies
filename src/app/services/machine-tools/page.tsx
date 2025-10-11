
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Hero2 from "@/app/components/Hero2";
import Image from "next/image";
import ServiceTabs from "@/app/components/ServiceTabs";



export default function MachineTools() {
    return (
        <>
            <Header />
            <Hero2
                heading_en="Machine Tools"
                breadcrumbText_en="Machine Tools"
            />



            <div className="py-10 lg:py-16">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col-reverse md:flex-row  gap-y-8">
                    <div className="flex w-full flex-col gap-6">

                        <Image
                            src="/machine_tools.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full "
                        />
                        <div className="flex flex-col gap-6">
                            <div >
                                <p className="mb-2 text-lg">TAJMAC:</p>
                                <ul className="pl-4 text-gray-800">
                                    <li>CNC VERTICAL MACHINING CENTRES</li>
                                    <li>CNC HORIZONTAL MACHINING CENTRES</li>
                                    <li>CNC TURN MILL CENTRES</li>
                                </ul>
                            </div>
                            <div className="">
                                <p className="mb-2 text-lg">TOS KURIM:</p>
                                <ul className="pl-4 text-gray-800">
                                    <li>CNC GANTRY DRILING &amp; MILLING MACHINES</li>
                                    <li>CNC DOUBLE COLUMN PLANO MILLERS</li>
                                    <li>CNC HORIZONTAL BORING MACHINES</li>
                                </ul>
                            </div>
                            <div className="">
                                <p className="mb-2 text-lg">ROBBI:</p>
                                <ul className="pl-4 text-gray-800">
                                    <li>CNC CYLINDRICAL GRINDING MACHINES</li>
                                    <li>HONING MACHINES (VERTICAL &amp; HORIZONTAL)</li>
                                </ul>
                            </div>
                            <p><strong>FELSS</strong>: SWAGING MACHINES</p>
                            <p><strong>VDH</strong>: INDUSTRIAL LEAK DETECTION SYSTEMS meant for Automotive/Wheels/Packaging Industry, etc.</p>
                            <p><strong>ORT</strong>: CNC THREAD ROLLING AND SPLINE ROLLING MACHINES</p>
                            <p><strong>WF</strong>: FLOW FORMING MACHINES meant for Wheel Industry (Aluminium and Cast Iron)</p>
                            <p><strong>LPM</strong>: LOW AND HIGH PRESSURE DIE CASTING MACHINES meant for Wheel Industry</p>
                        </div>

                    </div>
                    <div className="relative md:w-[430px] flex flex-none md:pl-8 justify-center lg:justify-end lg:flex lg:sticky lg:top-[100px] h-fit">
                        <ServiceTabs current="/services/machine-tools" />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
}
