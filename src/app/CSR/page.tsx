"use client";
import Header from "../components/Header";
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Image from "next/image";




export default function AboutUs() {

    return (
        <>
            <Header />
            <Hero2
                heading_en="Corporate Social Responsibility"
                breadcrumbText_en="CSR"
            />
            <section dir="ltr" className="py-10 lg:pb-14 lg:pt-22 text-left">
                <div className="max-w-[1400px] lg:mb-30 mb-14 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-22 items-center">
                    <div>

                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-6">What is CSR</h2>

                        <p className="leading-relaxed mb-5 max-w-[700px]">
                            Corporate Social Responsibility (CSR) is a business model in which companies take responsibility for their impact on society, the environment, and the economy in a voluntary and ethical manner.
                        </p>
                        <p className="font-medium text-xl">Core Concepts:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 my-4  max-w-[700px]">
                            
                                <div  className="bg-white rounded-3xl rounded-bl-none p-4 transition-all duration-300 relative top-0 hover:top-[-6px]">
                                    <p className="text-sm mt-1">CSR involves companies going beyond profit-making to act in ways that benefit society and minimize negative effects on people and the planet.</p>
                                </div>
                                <div  className="bg-white rounded-3xl rounded-bl-none p-4 transition-all duration-300 relative top-0 hover:top-[-6px]">
                                    <p className="text-sm mt-1">Typical CSR activities include sustainability programs, ethical labor practices, community engagement, charitable giving, and stakeholder transparency.</p>
                                </div>
                                <div  className="bg-white rounded-3xl rounded-bl-none p-4 transition-all duration-300 relative top-0 hover:top-[-6px]">
                                    <p className="text-sm mt-1">Triple bottom line”—focusing on People, Planet, and Profit—is a common CSR principle aiming for positive impact in all three areas.</p>
                                </div>
                         
                        </div>
                        <p className="leading-relaxed mb-5 max-w-[700px]">
                            CSR strengthens brand reputation, helps companies gain stakeholder and public trust, and can lead to long-term business success while making a positive social impact.
                        </p>


                    </div>
                    <div className="relative flex justify-center lg:justify-end hidden lg:flex h-full">
                        <Image
                            src="/csr1.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full "
                        />

                    </div>
                </div>
                <div className="max-w-[1400px] lg:mb-30 mb-14 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-22 items-center">
                    <div className="relative flex justify-center lg:justify-start hidden lg:flex h-full">
                        <Image
                            src="/csr2.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover w-full f-full "
                        />

                    </div>
                    <div>

                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-medium mb-6">Community Commitment and Social Initiatives</h2>
                        <p className="leading-relaxed mb-5 max-w-[700px]">
                            As part of the social responsibility, we have undertaken few improvement programmes at Government primary school located at Chetla Gouraram village, near Toopran.
                        </p>
                        <p className="leading-relaxed mb-5 max-w-[700px]">
                            &ldquo;As a responsible corporate citizen, CP agencies besides being actively engaged in its business, is fully committed to the larger goal of enhancing the standard of living of the people, particularly that of the marginalized. Corporate social responsibility is an integral part of C.P.AGENCIES. A snap shot of various initiatives taken for the under privileged is showcased here. We support a few NGO organizations viz M/s. Integrated Welfare Society at Jeedimetla and M/s. Society for Aged and Women, Secunderabad directly and indirectly. Our C.E.O. is an active member in some of the Social service organizations and dedicates enough time for social service.&rdquo;
                        </p>
                       
                    </div>

                </div>
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="lg:hidden flex flex-col  max-w-[700px] gap-6 mb-10">
                            <Image
                            src="/csr1.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full w-full "
                        />
                        <Image
                            src="/csr2.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full w-full "
                        />
                        <Image
                            src="/csr3.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full w-full"
                        />
                        </div>

                        
                        <p className="font-medium text-2xl mb-4">Blood donation for Nizam’s Institute of Medical Sciences</p>
                        <p className="leading-relaxed mb-5 max-w-[700px]">
                            We encourage our associates as well as business partners and collaborators to be a part of this initiative.
                        </p>
                        <p className="leading-relaxed mb-5 max-w-[700px]">
                            We at CP Agencies strongly believe that we should do more to the underprivileged and motivate people to come forward to serve the needy.
                        </p>

                    </div>
                    <div className="relative flex justify-center lg:justify-end hidden lg:flex h-full">
                        <Image
                            src="/csr3.jpg"
                            alt="Investor at Computer"
                            width={550}
                            height={550}
                            className="object-cover f-full w-full "
                        />

                    </div>
                </div>
            </section>

            <Footer />
        </>



    );
}
