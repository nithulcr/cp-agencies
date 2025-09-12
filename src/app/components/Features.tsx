"use client";
import { motion } from "framer-motion";


const featuresEn = [
    {
        id: "01",

        title: "Machine Tools",
        description: "We Are delivers advanced machine tools and industrial solutions from leading global brands."
    },
    {
        id: "02",

        title: "Metrology",
        description: "We Are provides advanced metrology equipment for precision measurement and quality control"
    },
    {
        id: "03",

        title: "Heat Treatment",
        description: "We Are supplies advanced heat treatment solutions, including induction heating etc..."
    },
    {
        id: "04",

        title: "Fabrication & Automation",
        description: "We Are provides advanced fabrication and automation solutions, including CNC welding etc..."
    }
];

export default function Features() {
    const features = featuresEn;

    return (
        <section id="features" className="py-12 lg:py-20 features-section text-[var(--foreground)] lg:mt-[-180px] z-2">
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
                {features.map((feature) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-[#fff8f5] rounded-2xl shadow-sm p-6 transition-all duration-300 relative top-0 hover:top-[-6px]"
                    >
                        <div className="flex items-center justify-between gap-3 mb-4">

                            <span className="text-5xl font-bold text-transparent text-stroke">
                                {feature.id}
                            </span>
                        </div>

                        <h3 className="text-[22px] font-light mb-2">{feature.title}</h3>
                        <p className="text-sm text-gray-600 leading-snug">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
