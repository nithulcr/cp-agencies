import Link from 'next/link';

const services = [
    { href: "/services/machine-tools", label: "Machinne Tools and Automation" },
    { href: "/services/heat-treatment", label: "Heat Treatment" },
    { href: "/services/metrology", label: "Metrology" },
];

export default function ServiceTabs({ current }: { current: string }) {
    return (
        <div className="w-full">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex lg:flex-col flex-wrap gap-2 md:gap-4  md:bg-[var(--green2)] md:rounded-xl md:px-8 md:py-12">
                    <h4 className='text-3xl text-white mb-2 hidden md:block border-b border-b-[#6686c2] pb-2'>Our Services</h4>
                    {services.map((service) => (
                        <Link key={service.href} href={service.href}
                            className={`px-6 text-sm md:text-[16px] py-2 md:py-3 rounded-[40px] ${service.href === current ? 'bg-[#e5ecff]   ' : 'bg-[var(--green)] text-white'}`}
                        >
                            {service.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}