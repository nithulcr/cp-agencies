"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useLang } from "../hooks/useLang";

const navItems_en = [
  { href: "/", label: "Home" },
  { href: "/en/AboutUs", label: "About us" },
  { href: "/en/ContactUs", label: "Contact us" },
  { href: "/en/FAQ", label: "FAQ's" },
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
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {lang === "ar" ? (
        <header
          className={`content-center bg-nav h-[70px] lg:h-[90px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
            pathname === "/"
              ? " "
              : " bg-[var(--green)]"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white z-10 relative">
          
            {/* Desktop Menu */}
            <div className="items-center gap-12 hidden md:flex">
              {/* Language Switch / Button */}
              <div className="hidden md:block">
                <button onClick={toggle} className="cursor-pointer border px-3 py-1 h-10 w-10 rounded-full text-sm flex items-center justify-center">
                  {lang === 'ar' ? 'En' : 'عربي'}
                </button>
              </div>
              <nav className="hidden md:flex gap-12">
                {navItems_ar.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-300 font-light text-md hover:text-[#009D78] ${
                      pathname === item.href ? "text-[#009D78] font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              
            </div>

            {/* Mobile Menu Button */}
            <button onClick={handleMenuToggle} className="md:hidden">
              {open ? <X size={28} strokeWidth={1} /> : <Menu size={28} strokeWidth={1} />}
            </button>
            <div className="text-2xl font-bold ">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={140} height={50} className="w-[100px] lg:w-[140px]" />
              </Link>
            </div>
          </div>

          {/* Mobile Dropdown */}
          {open && (
            <div
              className={`md:hidden bg-[var(--green)] text-right font-light px-6 py-8 space-y-3 shadow-md transition-all duration-300 origin-top ${animation}`}
            >
              {navItems_ar.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block text-white hover:text-[#009D78] ${
                    pathname === item.href ? "text-[#009D78] font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={toggle} className="ml-auto cursor-pointer border px-3 py-1 text-white h-10 w-10 rounded-full hover:bg-green-800 text-sm flex items-center justify-center mt-4">
                {lang === 'ar' ? 'En' : 'عربي'}
              </button>
            </div>
          )}
        </header>
      ) : (
        <header
          className={`content-center bg-nav h-[70px] lg:h-[90px] w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
            pathname === "/"
              ? " "
              : " bg-[var(--green)]"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white z-10 relative">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={140} height={50} className="w-[100px] lg:w-[140px]" />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="flex items-center gap-12">
              <nav className="hidden md:flex gap-12">
                {navItems_en.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-colors duration-300 font-light text-md hover:text-[#009D78] ${
                      pathname === item.href ? "text-[#009D78] font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Language Switch / Button */}
              <div className="hidden md:block">
                <button onClick={toggle} className="cursor-pointer border px-3 py-1 h-10 w-10 rounded-full text-sm flex items-center justify-center">
                  {lang === 'ar' ? 'En' : 'عربي'}
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
                  href={item.href}
                  className={`block text-white hover:text-[#009D78] ${
                    pathname === item.href ? "text-[#009D78] font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={toggle} className="cursor-pointer border px-3 py-1 text-white h-10 w-10 rounded-full hover:bg-green-800 text-sm flex items-center justify-center mt-4">
                {lang === 'ar' ? 'En' : 'عربي'}
              </button>
            </div>
          )}
        </header>
      )}
    </>
  );
}
