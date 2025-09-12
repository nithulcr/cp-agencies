'use client';

import AnimatedButton from "./AnimatedButton";
import { HardDrive, Wrench, Target, Sun } from 'lucide-react';



const services = [
    {
        title: 'Machine Tools',
        desc: 'Precision CNC machining and automation with trusted brands, plus new additions like PRAYOSHA, GH Induction, IMT, and NUMTEC for enhanced deburring and aluminium wheel manufacturing.',
        icon: <> <HardDrive size={32} strokeWidth={1} />
        </>,
    },
    {
        title: 'Fabrication & Automation',
        desc: 'Specialized CNC laser cutting, welding automation, electron beam welding, wirecut EDMs, and waterjet cutting for efficient manufacturing.',
        icon: <><Wrench size={32} strokeWidth={1} />
        </>,
    },
    {
        title: 'Metrology',
        desc: 'Accurate measurement and leak testing solutions from VDH and MAKRA for quality assurance.',
        icon: <><Target size={32} strokeWidth={1} />
        </>,
    },
    {
        title: 'Heat Treatment',
        desc: 'Advanced induction heating, vacuum furnaces, electron beam technologies, and nitriding furnaces from Electron (Netherlands) and Ion Heat (Columbia).',
        icon: <><Sun size={32} strokeWidth={1} />
        </>,
    },

];

export default function ServiceSection() {
    return (
        <section className="relative  services">
            <div className=' py-12 lg:pt-10 lg:pb-26 max-w-[1400px] mx-auto px-6'>
                
                <div
                    className="grid md:grid-cols-2 gap-10 lg:gap-16"
                >

                    {/* Left Section */}
                    <div className="mb-4 text-center md:text-left lg:sticky lg:top-[120px] h-fit">
                        <h3 className="text-2xl md:text-3xl  mb-3 ">OUR SERVICES</h3>
                        <p className="text-gray-600  mb-5 max-w-[440px]  mx-auto md:mx-0 ">
                           We provide overall planning, coordination and control of a project, so you don’t have to worry about anything.
                        </p>
                        <AnimatedButton href="" label="View more" className="w-fit mx-auto md:mx-0 text-white" />
                    </div>

                    {/* services List */}
                    <div className="flex-1 grid gap-8">
                        {services.map((feat, i) => (
                            <div
                                key={i}
                                className=" flex items-start gap-4 lg:gap-8"
                            >
                                <span className="shuffle bg-white w-10 h-10 md:w-13 md:h-13 flex items-center justify-center shadow-[0px_3px_6px_rgba(138,165,255,0.3)] p-2 rounded-lg"><span className='shuffle'>{feat.icon}</span></span>
                                <div className=''>
                                    <h4 className="text-lg lg:text-xl  mb-2">{feat.title}</h4>
                                    <p className="text-gray-600 text-sm max-w-[420px]">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
