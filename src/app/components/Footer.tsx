// components/Footer.jsx
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import Image from 'next/image';

import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-[var(--green)] text-white text-base px-6 pt-16 lg:pt-20 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto p-8 bg-white rounded-2xl hidden lg:flex justify-between flex-wrap gap-6 lg:flex-nowrap items-center">
        <h2 className="text-black text-3xl lg:text-4xl max-w-[800px]">“We analyze your needs with precision to design strategies that lead to measurable success.”</h2>
        <AnimatedButton href="ContactUs" label="Let’s Talk" className="w-fit whitespace-nowrap btn-xl" />



      </div>
      <div className="max-w-[1200px] lg:pt-14 mx-auto pb-4">
        <div className="grid lg:grid-cols-2 justify-between gap-8">
          {/* Logo */}
          <div className=" flex flex-col lg:pr-10 lg:border-r border-r-[#ffffff33]">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140} height={50} className="w-[200px] lg:w-[260px] mb-4"
            />
            <div className="flex flex-col gap-3">
              <div className="opacity-70">
                Hyderabad | Bangalore | Chennai
                <p>+91-9849018828, +91-9985370478</p>
                <p>info@cpagencies.co.in, support@cpagencies.co.in</p>

              </div>
              <div className="flex flex-row gap-3 opacity-70">
                <a href="https://linkedin.com" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} strokeWidth={1} className="text-white  transition" />
                </a>
                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <Twitter size={20} strokeWidth={1} className="text-white  transition" />
                </a>
                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} strokeWidth={1} className="text-white  transition" />
                </a>
                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <Facebook size={20} strokeWidth={1} className="text-white  transition" />
                </a>
                <a href="https://x.com" aria-label="X" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} strokeWidth={1} className="text-white  transition" />
                </a>
              </div>
            </div>

          </div>
          {/* Services & About Us */}
          <div className=" grid grid-cols-1 lg:pl-10 md:grid-cols-2 gap-8 flex-1">
            <div>

              <h2 className="text-2xl font-medium mb-4 flex items-center gap-2 relative pb-1">
                Quick Links <span className="h-[2px] w-12 bg-white block rounded opacity-50 absolute bottom-0"></span>
              </h2>
              <ul className="space-y-1 opacity-70 flex flex-col">

                <Link href="/AboutUs">About Us</Link>
                <Link href="/Products">Products</Link>
                <Link href="/Blogs">Blogs</Link>
                <Link href="/CSR">CSR</Link>

              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4 flex items-center gap-2 relative pb-1">
                Services <span className="h-[2px] w-12 bg-white block rounded opacity-50 absolute bottom-0"></span>
              </h2>
              <ul className="space-y-1 opacity-70 flex flex-col">
                <Link href="/services/machine-tools">Machine Tools & Automation</Link>
                <Link href="/services/metrology">Metrology</Link>
                <Link href="/services/heat-treatment">Heat Treatment</Link>
              </ul>
            </div>


          </div>
          {/* Socials */}

        </div>
        {/* Bottom Links */}
        <div className="mt-10 border-t border-[#ffffff33] pt-4 text-sm flex flex-col  justify-center md:flex-row items-start md:items-center justify-between gap-2 text-gray-400">
          <div className="space-x-2">
            <span>Privacy</span>
            <span>|</span>
            <span>Terms</span>
            <span>|</span>
            <span>Security</span>
            <span>|</span>
            <span>CSR Policy</span>
            <span>|</span>
            <span>Certifications</span>
            <span>|</span>
            <span>Sitemap</span>
            <span>|</span>
            <span>Cookie Preferences</span>
          </div>

        </div>
        {/* Copyright */}
        <div className="mt-2 text-xs text-gray-400 text-center">Copyright © 2025 Host on pdl. com. All rights reserved</div>
      </div>
    </footer>
  );
}
