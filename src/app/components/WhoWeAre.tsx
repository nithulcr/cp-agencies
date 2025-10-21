"use client";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";


const whywhoweareDataEN = [
  {
    id: "01",
    icon: "/mision.jpg",
    title: "Our Mission",
    description: "To empower manufacturers with advanced machine tool technology, reliable solutions, and exceptional service that drive efficiency, precision, and sustainable growth.",
  },
  {
    id: "02",
     icon: "/vision.jpg",
    title: "Our Vision",
    description: "To be the most trusted partner in the machine tool industry, recognized globally for innovation, customer-centric solutions, and a commitment to shaping the future of manufacturing.",
  },
];



// Section texts
const sectionTextEN = {
  heading: "Who We Are",
  description: "CP Agencies is a trusted leader in the machine tool industry, dedicated to delivering cutting-edge technology, innovative solutions, and unmatched service to help businesses achieve precision, efficiency, and growth.",
  button: "Contact Us",
};



const WhoWeAre = () => {
  const section = sectionTextEN;
  const data = whywhoweareDataEN;
  return (
    <section className="py-10 lg:py-16 text-[var(--foreground)]" >
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="flex flex-col items-start gap-5 justify-start  lg:col-span-2">
          <div>
            <h2 className="text-3xl lg:text-5xl font-medium mb-6">{section.heading}</h2>
            <p className="leading-relaxed max-w-[500px] text-gray-600 text-justify">{section.description}</p>
          </div>
          
          <AnimatedButton href="/ContactUs" label="Contact Us" className="w-fit" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative lg:col-span-3">
          {data.map((whoweare) => (
            <div
              key={whoweare.id}
              className="bg-white rounded-3xl   transition-all overflow-hidden duration-300 relative top-0 hover:top-[-6px]"
            >
              <div className="flex items-center justify-between gap-3">
                {/* <div className="w-16 h-12 mb-2">{whoweare.icon}</div> */}
                 <Image
                                src={whoweare.icon}
                                width="500"
                                height="500"
                                alt="bg"
                                className="w-full h-full object-cover relative"
                            />
              </div>
             <div className=" p-6">
               <h3 className="text-2xl font-medium mb-2 text-[var(--green)]">{whoweare.title}</h3>
              <p className="text-sm leading-snug text-gray-700">{whoweare.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default WhoWeAre;
