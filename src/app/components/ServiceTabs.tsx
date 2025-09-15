import Link from 'next/link';

const services = [
    { href: "/services/machine-tools", label: "Machine Tools" },
    { href: "/services/fabrication-automation", label: "Fabrication & Automation" },
    { href: "/services/metrology", label: "Metrology" },
    { href: "/services/heat-treatment", label: "Heat Treatment" },
];

export default function ServiceTabs({ current }: { current: string }) {
    return (
        <div className="py-4">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex items-center flex-wrap gap-3 justify-center">
                    {services.map((service) => (
                        <Link key={service.href} href={service.href}
                            className={`px-6 py-2 rounded-[40px] ${service.href === current ? 'bg-[var(--green)]  text-white ' : 'bg-[#e5ecff]'}`}
                        >
                            {service.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}