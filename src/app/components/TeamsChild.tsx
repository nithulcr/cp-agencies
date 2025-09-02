"use client";

import Image from "next/image";

interface TeamsChildProps {
  icon: string;
  title: string;
  description: string;
}

const TeamsChild: React.FC<TeamsChildProps> = ({ icon, title, description }) => {
  return (
    <div
      className="teams-child bg-white rounded-[30px] lg:rounded-[46px] lg:rounded-bl-none rounded-bl-none p-2  lg:p-4 transition-all duration-300 relative top-0 hover:top-[-6px]"
    >
      <Image
        src={icon}
        alt={title}
        className="w-full object-contain mx-auto mb-2"
        width={100}
        height={100}
      />
      <h3 className="text-lg lg:text-2xl font-medium lg:mb-2 pt-2">{title}</h3>
      <p className="text-sm lg:text-md leading-snug text-gray-700 pb-2">{description}</p>
    </div>
  );
};

export default TeamsChild;
