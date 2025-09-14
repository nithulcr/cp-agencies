// components/Footer.jsx
import { Linkedin, Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--green)] text-white text-base mt-6 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto pt-16 lg:pt-28 pb-4 px-6">
        <div className="grid lg:grid-cols-6 justify-between gap-8">
          {/* Logo */}
          <div className="col-span-2 flex flex-col lg:pr-10">
            <img src="/logo.png" alt="Logo" width={140} height={50} className="w-[160px] lg:w-[220px] mb-6" />

            <p>CP AGENCIES is a trusted leader in the machine tool industry, delivering advanced technology and outstanding service. Since inception, we have focused on providing innovative, high-tech solutions tailored to each customer’s specific machining needs.</p>

          </div>
          {/* Services & About Us */}
          <div className="col-span-2 grid grid-cols-1  md:grid-cols-2 gap-8 flex-1">
            <div>
              <h2 className="text-2xl font-medium mb-3 flex items-center gap-2">
                Quick Links <span className="h-[3px] w-8 bg-white block ml-3 rounded opacity-50"></span>
              </h2>
              <ul className="space-y-1">

                <li>About Us</li>
                <li>Products</li>
                <li>Blogs</li>
                <li>CSR</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-3 flex items-center gap-2">
                Services <span className="h-[3px] w-8 bg-white block ml-3 rounded opacity-50"></span>
              </h2>
              <ul className="space-y-1">
                <li>Machine Tools</li>
                <li>Fabrication & Automation</li>
                <li>Metrology</li>
                <li>Heat Treatment</li>
              </ul>
            </div>


          </div>
          {/* Socials */}
          <div className="col-span-2 ">
            <div>
              <h2 className="text-2xl font-medium mb-3 flex items-center gap-2">
                Contact us <span className="h-[3px] w-8 bg-white block ml-3 rounded opacity-50"></span>
              </h2>
              <div className="flex flex-col gap-3 mt-3">
                <div>
                  Head Office CP AGENCIES<br></br>
                  
                  <p className="opacity-70 text-sm py-1">Plot #74, Road #3, Jupiter Colony, Sikh Road, Sikh Village
                  Secunderabad, Telangana, INDIA 500009</p>
                  <p className="py-1">+91-9849018828, +91-9985370478, 040 - 27841857</p>
                  <p className="py-1">info@cpagencies.co.in, support@cpagencies.co.in</p>
                  
                </div>
                <div className="flex flex-row gap-3">
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
          </div>
        </div>
        {/* Bottom Links */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-sm flex flex-col  justify-center md:flex-row items-start md:items-center justify-between gap-2 text-gray-400">
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
        <div className="mt-2 text-xs text-gray-400 text-center">Copyright © 2025 Kyndryl Inc. All rights reserved</div>
      </div>
    </footer>
  );
}
