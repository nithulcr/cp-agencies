"use client";
import { motion } from "framer-motion";


const featuresEn = [
    {
        id: "01",

        title: "Manufacturing Solutions",
        description: "Efficient and advanced technologies to optimize your production processes."
    },
    {
        id: "02",

        title: "Applications Assistance",
        description: "Expert help to tailor machine tool applications for your needs."
    },
    {
        id: "03",

        title: "Customer Training",
        description:
            "Practical training to operate and maintain your equipment confidently."
    },
    {
        id: "04",

        title: "After-Sales Service",
        description:
            "Reliable maintenance and support to ensure smooth operations."
    }
];

export default function Features() {
    const features = featuresEn;

    return (
        <section id="features" className="py-12 lg:py-20 features-section text-[var(--foreground)] lg:mt-[-180px] z-2">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
                {features.map((feature) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-2xl shadow-sm p-6 transition-all duration-300 relative top-0 hover:top-[-6px]"
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
