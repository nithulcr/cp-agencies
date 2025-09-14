"use client";

import Image from "next/image";

interface TeamsChildProps {
  icon: string;
  title: string;
  role: string;

  description: string;
}

const TeamsChild: React.FC<TeamsChildProps> = ({ icon, title, role, description }) => {
  return (
    <div
      className="teams-child bg-white rounded-[14px] lg:rounded-[20px] lg:rounded-bl-none rounded-bl-none p-2  lg:p-4 transition-all duration-300 relative top-0 hover:top-[-6px]"
    >
      <Image
        src={icon}
        alt={title}
        className="w-full object-contain  max-w-[60px] mb-2"
        width={60}
        height={60}
      />
      <h3 className="text-lg lg:text-xl font-medium lg:mb-2 pt-2">{title}</h3>
      <p className="text-sm lg:text-md leading-snug text-[var(--green)] pb-2">{role}</p>
      <p className="text-sm lg:text-md leading-snug text-gray-700">{description}</p>

    </div>
  );
};

export default TeamsChild;
