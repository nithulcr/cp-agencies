'use client';

import { useState } from "react";
import { Mail, Phone, ArrowRight, Clock } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
const containerStyle = { width: "100%", height: "400px" };
const center = { lat: 37.7749, lng: -122.4194 }; // Example coordinates
const locations = [
  { name: "Nagpur", lat: 21.1458, lng: 79.0882 },
  { name: "Odisha", lat: 20.9517, lng: 85.0985 },
  { name: "Goa", lat: 15.2993, lng: 74.1240 },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
  { name: "Telangana", lat: 17.3850, lng: 78.4867 },
];

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // Handle form submit (send POST to API route)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    // Get data from form fields
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    // Send POST request to backend API
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setLoading(false);
    if (res.ok) {
      setMessageStatus({ type: 'success', message: "Your message has been sent!" });
      form.reset();
    } else {
      setMessageStatus({ type: 'error', message: "Message sending failed." });
    }
  };

  return (
    <>
      <section className="py-10  lg:py-16   mx-auto ">
        <div className="max-w-[1400px] mx-auto px-6  grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl lg:text-5xl font-medium mb-4 max-w-[600px]">
                {"Have Questions? Our Team is Ready Anytime"}
              </h2>
              <p className="leading-relaxed max-w-[500px] text-gray-700">
                {"Got questions or need guidance? Our team is always ready to help you take the next step—whether it's a quick inquiry or a full project discussion."}
              </p>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <Mail size={26} color="var(--green)" />
              <div>
                <div className="text-xl mb-2">{"E-mail"}</div>
                <div className="flex flex-wrap gap-1 flex-col">
                  <a href="mailto:info@cpagencies.co.in" className="text-md font-medium">info@cpagencies.co.in</a>
                <a href="mailto:support@cpagencies.co.in" className="text-md font-medium">support@cpagencies.co.in</a>
                </div>

              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={26} color="var(--green)" />
              <div>
                <div className="text-xl mb-2">{"Phone number"}</div>
                <div className="flex flex-wrap gap-1 flex-col">
                  <a href="tel:+91-9849018828" className="text-md font-medium">+91-9849018828,</a>
                  <a href="tel:+91-9985370478" className="text-md font-medium">+91-9985370478,</a>
                  <a href="tel:040 - 27841857" className="text-md font-medium">040 - 27841857</a>
                </div>

              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl lg:p-10 p-6 space-y-5"
          >
            <div>
              <label className="block mb-1 font-medium text-sm">{"Your Name"}</label>
              <input
                name="name"
                className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none placeholder-[#BFBCBC]"
                type="text"
                placeholder={"Your Name"}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm">{"Phone number"}</label>
              <input
                name="phone"
                className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none placeholder-[#BFBCBC]"
                type="text"
                placeholder={"Phone number"}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm">{"E-mail"}</label>
              <input
                name="email"
                className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none placeholder-[#BFBCBC]"
                type="email"
                placeholder={"Email"}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-sm">{"Message"}</label>
              <textarea
                name="message"
                className="w-full bg-[#EDF6F3] rounded-xl px-4 py-2 focus:outline-none resize-none placeholder-[#BFBCBC]"
                rows={3}
                placeholder={"Message"}
                required
              />
            </div>
            <div className="mt-3 justify-self-end">
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center gap-2 pl-3 pr-8 py-[12px] bg-[var(--green2)] text-white border rounded-full transition-transform duration-300 hover:scale-105 cursor-pointer`}
              >
                <ArrowRight size={26} />
                {loading
                  ? "Sending..."
                  : "Get a Solution"}
              </button>
              
            </div>
            <div className="mt-3 justify-self-end message-status">
              {messageStatus && (
                <p className={`${messageStatus.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {messageStatus.message}
                </p>
              )}
            </div>
          </form>
        </div>


        <div className="max-w-[1400px] mx-auto px-6 pb-6  mt-18 lg:mt-36">

          <div className="max-w-[730px] mx-auto text-center mb-10">
            <h2 className="text-3xl lg:text-5xl font-medium mb-6">Find Our Offices</h2>
            <p className="leading-relaxed ">
              Our offices are strategically located across key regions to provide accessible, efficient service and support to our valued customers. Explore our head office and branch locations to find the nearest contact point for your needs.
            </p>
          </div>



          <div className="flex flex-col md:flex-row gap-8  justify-center items-stretch">
            <div className="flex-1 flex flex-col process-card p-5 lg:p-7  rounded-3xl bg-white relative transition-all duration-500 relative top-0 hover:top-[-5px]">
              <svg width="54" height="54" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-card-svg">
                <circle cx="28.7426" cy="29.1167" r="28.1875" fill="#dddcffff" />
                <circle cx="28.7425" cy="29.1165" r="22.3797" fill="white" />
                <path d="M21.3978 29.1167H23.2606M33.3197 29.1167L28.849 24.646M33.3197 29.1167L28.849 33.5874M33.3197 29.1167H25.496" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="gradient-text mb-4 text-7xl font-semibold bg-[linear-gradient(180deg,#193685_16%,#FFFFFF_88%)] bg-clip-text text-transparent">
                1
              </div>


              <div className="bg-[var(--blue1)] w-full">

                <h3 className="text-xl md:text-[22px] font-bold mb-2 text-site">Head Office</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-md  font-light ">Plot #74, Road #3, Jupiter Colony</p>
                  <p className="text-md  font-light ">Sikh Road, Sikh Village</p>

                  <p className="text-md  font-light ">
                    Secunderabad, Telangana, INDIA 500 009</p>
                  <p className="text-md  font-light ">
                    Telefax: 040-27841857</p>

                </div>

                <div className="flex items-center gap-4 mt-3">
                  <Phone size={24} color="var(--green)" />
                  <div>
                    <a href="tel:+91-9849018828" className="text-md font-medium block">+91-9849018828</a>
                    <a href="tel:+91-9985370478" className="text-md font-medium block">+91-9985370478</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <Mail size={24} color="var(--green)" />
                  <div>
                    <a href="mailto:info@cpagencies.co.in" className="text-md font-medium block">info@cpagencies.co.in</a>
                    <a href="mailto:support@cpagencies.co.in" className="text-md font-medium block">support@cpagencies.co.in</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col process-card p-5 lg:p-7  rounded-3xl bg-white relative transition-all duration-500 relative top-0 hover:top-[-5px]">
              <svg width="54" height="54" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-card-svg">
                <circle cx="28.7426" cy="29.1167" r="28.1875" fill="#dddcffff" />
                <circle cx="28.7425" cy="29.1165" r="22.3797" fill="white" />
                <path d="M21.3978 29.1167H23.2606M33.3197 29.1167L28.849 24.646M33.3197 29.1167L28.849 33.5874M33.3197 29.1167H25.496" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="gradient-text mb-4 text-7xl  font-semibold bg-[linear-gradient(180deg,#193685_16%,#FFFFFF_88%)] bg-clip-text text-transparent">
                2
              </div>


              <div className="bg-[var(--blue1)] w-full">

                <h3 className="text-xl md:text-[22px] font-bold mb-2 text-site">Branch Office</h3>
                <div className="flex-col flex gap-1">
                  <p className="text-md  font-light ">No.112, First floor, 12th cross

                  </p>
                  <p className="text-md  font-light ">
                    OPP: Mount Carmel school
                  </p>
                  <p className="text-md  font-light ">
                    Ideal Homes, Rajarajeswari Nagar
                    Bangalore, Karnataka, 560 098
                  </p>
                  <p className="text-md  font-light ">
                    Contact Person: MR. K Murali
                  </p>

                </div>
                <div className="flex items-center gap-4 mt-2">
                  <Phone size={20} color="var(--green)" />
                  <a href="tel:+91-9741120522" className="text-md font-medium">+91-9741120522</a>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <Mail size={20} color="var(--green)" />
                  <a href="mailto:km@cpagencies.co.in" className="text-md font-medium">km@cpagencies.co.in</a>
                </div>
                <div className="inline-flex items-center gap-2 mt-4 bg-gray-200 rounded-2xl py-1 px-2">
                  <Clock size={20} color="var(--green)" />
                  <a href="mailto:km@cpagencies.co.in" className="text-xs font-medium">Mon - Sat 9.00 - 20.00, Sunday CLOSED</a>
                </div>

              </div>
            </div>
            <div className="flex-1 flex flex-col process-card p-5 lg:p-7  rounded-3xl bg-white relative transition-all duration-500 relative top-0 hover:top-[-5px]">
              <svg width="54" height="54" viewBox="0 0 57 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="process-card-svg">
                <circle cx="28.7426" cy="29.1167" r="28.1875" fill="#dddcffff" />
                <circle cx="28.7425" cy="29.1165" r="22.3797" fill="white" />
                <path d="M21.3978 29.1167H23.2606M33.3197 29.1167L28.849 24.646M33.3197 29.1167L28.849 33.5874M33.3197 29.1167H25.496" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="gradient-text mb-4 text-7xl  font-semibold bg-[linear-gradient(180deg,#193685_16%,#FFFFFF_88%)] bg-clip-text text-transparent">
                3
              </div>


              <div className="bg-[var(--blue1)] w-full">

                <h3 className="text-xl md:text-[22px] font-bold mb-2 text-site">Branch Office</h3>
                <div className="flex flex-col gap-1">
                  <p className="text-md  font-light ">D Block, D22, 3rd Floor
                    NELSON Chambers, Nelson Manickam Road
                  </p>
                  <p className="text-md  font-light ">
                    Chennai, Tamil Nadu, 600 029</p>
                  <p className="text-md  font-light ">
                    Contact Person: MR. P Ghuhan</p>

                </div>
                <div className="flex items-center gap-4 mt-2">
                  <Phone size={20} color="var(--green)" />
                  <a href="tel:+91-9566270812" className="text-md font-medium">+91-9566270812</a>
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <Mail size={20} color="var(--green)" />
                  <a href="mailto:pg@cpagencies.co.in" className="text-md font-medium">pg@cpagencies.co.in</a>
                </div>
                <div className="inline-flex items-center gap-2 mt-4 bg-gray-200 rounded-2xl py-1 px-2">
                  <Clock size={20} color="var(--green)" />
                  <a href="mailto:km@cpagencies.co.in" className="text-xs font-medium">Mon - Sat 9.00 - 20.00, Sunday CLOSED</a>
                </div>
              </div>
            </div>

          </div>


        </div>

      </section>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          {locations.map((location) => (
            <Marker key={location.name} position={{ lat: location.lat, lng: location.lng }} />
          ))}
        </GoogleMap>
      </LoadScript>
    </>
  );
}
