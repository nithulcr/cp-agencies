"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from 'lucide-react';

import AnimatedButton from "./AnimatedButton";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/Home2", label: "Home2" },
    { href: "#AboutUs", label: "About us" },
    { href: "#products", label: "Products" },
    {
        label: "Our Services",
        href: "#our-services",
        submenu: [
            { href: "#services/machine-tools", label: "Machine Tools" },
            { href: "#services/fabrication-automation", label: "Fabrication & Automation" },
            { href: "#services/metrology", label: "Metrology" },
            { href: "#services/heat-treatment", label: "Heat Treatment" },
        ],
    },
    { href: "#blogs", label: "Blogs" },
    { href: "#CSR", label: "CSR" },
    { href: "#FAQ", label: "FAQ's" },
];

export default function Header() {
    const [open, setOpen] = useState(false);
    const [animation, setAnimation] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
    const pathname = usePathname();

    const handleMenuToggle = () => {
        if (open) {
            setAnimation("animate-menuSlideUp");
            setTimeout(() => {
                setOpen(false);
                setAnimation(null);
            }, 300);
        } else {
            setOpen(true);
            setAnimation("animate-menuSlideDown");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClass = [
        "content-center bg-white w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-nav",
        scrolled ? "bg-nav-cover" : ""
    ].filter(Boolean).join(" ");

    return (
        <header className={headerClass}>
            <div className="w-full h-[35px] bg-[var(--green)]">
                <div className="max-w-[1400px] mx-auto text-white flex items-center justify-between px-6 py-2 text-sm ">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone className="w-4 h-4" strokeWidth={1} />
                            <span>+91-9849018828</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4" strokeWidth={1} />
                            <span>info@cpagencies.co.in</span>
                        </div>
                    </div>
                    <div className="items-center space-x-2 hidden md:flex">
                        <MapPin className="w-4 h-4" strokeWidth={1} />
                        <span>
                            Telangana <span className="px-1">|</span> Bangalore <span className="px-1">|</span> Tamil Nadu
                        </span>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-[72px] text-white z-10 relative">
                <div className="text-2xl font-bold h-full align-content-center flex">
                    <Link href="/" className="items-center flex">
                        <img src="/logo-dark.png" alt="Logo" width={140} height={50} className="w-[160px] lg:w-[220px]" />
                    </Link>
                </div>
                <div className="items-center gap-6 hidden md:flex h-full">
                    <nav className="hidden md:flex gap-6 h-full">
                        {navItems.map((item) => (
                            item.submenu ? (
                                <div
                                    key={item.href}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={() => setServiceMenuOpen(true)}
                                    onMouseLeave={() => setServiceMenuOpen(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className={`place-items-center h-full flex transition-colors duration-300 font-light text-md menu-item ${pathname === item.href ? "menu-active" : ""}`}
                                    >
                                        {item.label}
                                        <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${serviceMenuOpen ? 'rotate-180' : ''}`} />
                                    </Link>
                                    {serviceMenuOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 w-60 bg-white rounded-b-md shadow-lg z-60">
                                            <div className="py-1">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.href}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`place-items-center flex transition-colors duration-300 font-light text-md menu-item ${pathname === item.href ? "menu-active" : ""}`}
                                >
                                    {item.label}
                                </Link>
                            )
                        ))}
                    </nav>
                    <div > <AnimatedButton href="/ContactUs" label="Contact Us" className="w-fit" /></div>
                </div>
                <button onClick={handleMenuToggle} className="md:hidden text-black">
                    {open ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
                </button>
            </div>
            {open && (
                <motion.div initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`md:hidden bg-[var(--green)] font-light px-6 py-8 space-y-3 shadow-md transition-all duration-300 origin-top ${animation}`}
                >
                    {navItems.map((item) => (
                        item.submenu ? (
                            <div key={item.href}>
                                <div
                                    className="flex justify-between items-center text-white"
                                    onClick={() => setServiceMenuOpen(!serviceMenuOpen)}
                                >
                                    <span>{item.label}</span>
                                    <ChevronDown size={16} className={`ml-1 transition-transform duration-300 ${serviceMenuOpen ? 'rotate-180' : ''}`} />
                                </div>
                                {serviceMenuOpen && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className={`block text-white hover:text-[#009D78] ${pathname === subItem.href ? "text-[#009D78] font-semibold" : ""}`}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block text-white hover:text-[#009D78] ${pathname === item.href ? "text-[#009D78] font-semibold" : ""}`}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                </motion.div>
            )}
        </header>
    );
}