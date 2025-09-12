"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Phone, Mail, Tag } from 'lucide-react';
import AnimatedButton from "./AnimatedButton";


const navItems = [
  { href: "/", label: "Home" },
  { href: "#AboutUs", label: "About us" },
  { href: "#products", label: "Products" },
  { href: "#our-services", label: "Our Services" },
  { href: "#blogs", label: "Blogs" },
  { href: "#csr", label: "CSR" },
  { href: "#FAQ", label: "FAQ's" },
  // { href: "/ContactUs", label: "Contact us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
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

  const isHome = pathname === "/";

  const headerClass = [
    "content-center  bg-white w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-nav",
     scrolled ? "bg-nav-cover" : ""
  ].filter(Boolean).join(" ");

  return (
    <header className={headerClass}>
      <div className="w-full h-[35px]  bg-[var(--green)]">
        {/* Left Side: Contact Info */}
        <div className="max-w-[1400px] mx-auto  text-white flex items-center justify-between px-6 py-2 text-sm ">
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
          {/* Right Side: Location & Flags */}
          <div className="items-center space-x-2 hidden md:flex">
            <Tag className="w-4 h-4" strokeWidth={1} />
            <span>
              Now in

              Kannur, Kerala For Local Support &amp; Service

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
              <Link
                key={item.href}
                href={item.href}
                className={`place-items-center flex transition-colors duration-300 font-light text-md menu-item ${pathname === item.href ? "menu-active" : ""
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div > <AnimatedButton href="" label="Contact Us" className="w-fit" /></div>

        </div>
        <button onClick={handleMenuToggle} className="md:hidden text-black">
          {open ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`md:hidden bg-[var(--green)]  font-light px-6 py-8 space-y-3 shadow-md transition-all duration-300 origin-top ${animation}`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-white hover:text-[#009D78] ${pathname === item.href ? "text-[#009D78] font-semibold" : ""
                }`}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
