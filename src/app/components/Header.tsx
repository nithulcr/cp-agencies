"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLang } from "../hooks/useLang";
import { motion } from "framer-motion";

const navItems_en = [
  { href: "/", label: "Home" },
  { href: "/AboutUs", label: "About us" },
  { href: "/ContactUs", label: "Contact us" },
  { href: "/FAQ", label: "FAQ's" },
];

const navItems_ar = [
  { href: "/", label: "الرئيسية" },
  { href: "/AboutUs", label: "من نحن" },
  { href: "/ContactUs", label: "الأسئلة الشائعة" },
  { href: "/FAQ", label: "تواصل معنا" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, toggle } = useLang();

  // Handles the animation logic for show/hide
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

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for English navigation links
  const getEnHref = (href: string) => (href === "/" ? "/en" : `/en${href}`);
  const isEnActive = (href: string) => pathname === getEnHref(href);

  // Helper for Arabic navigation links
  const isArActive = (href: string) => pathname === href;

  // Detect homepage for background logic
  const isHome =
    (lang === "ar" && pathname === "/") ||
    (lang === "en" && pathname === "/en");

  // Header class logic
  const headerClass = [
    "content-center h-[70px] lg:h-[90px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 bg-nav",
    isHome && scrolled ? "bg-nav-cover" : "",
    !isHome ? "bg-[var(--green)]" : ""
  ].filter(Boolean).join(" ");

  return (
    <>
      {lang === "ar" ? (
        <header className={headerClass}>
          <motion.div initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }} className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white z-10 relative">
            
            <div className="text-2xl font-bold ">
              <Link href="/">
                <img src="/logo.png" alt="Logo" width={140} height={50} className="w-[100px] lg:w-[140px]" />
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="items-center gap-12 hidden md:flex">
              <nav className="hidden md:flex gap-12">
                {navItems_ar.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-300 font-light text-md hover:text-[#009D78] ${
                      isArActive(item.href) ? "text-[#009D78] font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden md:block">
                <button onClick={toggle} className="cursor-pointer border px-3 py-1 h-10 w-10 rounded-full text-sm flex items-center justify-center">
                  {lang === 'ar' ? 'En' : 'عر'}
                </button>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button onClick={handleMenuToggle} className="md:hidden">
              {open ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </motion.div>
          {/* Mobile Dropdown */}
          {open && (
            <motion.div initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
              className={`md:hidden bg-[var(--green)] text-right font-light px-6 py-8 space-y-3 shadow-md transition-all duration-300 origin-top ${animation}`}
            >
              {navItems_ar.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-white hover:text-[#009D78] ${
                    isArActive(item.href) ? "text-[#009D78] font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={toggle} className="ml-auto cursor-pointer border px-3 py-1 text-white h-10 w-10 rounded-full hover:bg-green-800 text-sm flex items-center justify-center mt-4">
                {lang === 'ar' ? 'En' : 'عر'}
              </button>
            </motion.div>
          )}
        </header>
      ) : (
        <header className={headerClass}>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white z-10 relative">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link href="/en">
                <img src="/logo.png" alt="Logo" width={140} height={50} className="w-[100px] lg:w-[140px]" />
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="flex items-center gap-12">
              <nav className="hidden md:flex gap-12">
                {navItems_en.map((item) => (
                  <Link
                    key={item.href}
                    href={getEnHref(item.href)}
                    className={`transition-colors duration-300 font-light text-md hover:text-[#009D78] ${
                      isEnActive(item.href) ? "text-[#009D78] font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="hidden md:block">
                <button onClick={toggle} className="cursor-pointer border px-3 py-1 h-10 w-10 rounded-full text-sm flex items-center justify-center">
                  {lang === 'ar' ? 'En' : 'عر'}
                </button>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <button onClick={handleMenuToggle} className="md:hidden">
              {open ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
          </div>
          {/* Mobile Dropdown */}
          {open && (
            <div
              className={`md:hidden bg-[var(--green)] font-light px-6 py-8 space-y-3 shadow-md transition-all duration-300 origin-top ${animation}`}
            >
              {navItems_en.map((item) => (
                <Link
                  key={item.href}
                  href={getEnHref(item.href)}
                  className={`block text-white hover:text-[#009D78] ${
                    isEnActive(item.href) ? "text-[#009D78] font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={toggle} className="cursor-pointer border px-3 py-1 text-white h-10 w-10 rounded-full hover:bg-green-800 text-sm flex items-center justify-center mt-4">
                {lang === 'ar' ? 'En' : 'عر'}
              </button>
            </div>
          )}
        </header>
      )}
    </>
  );
}
