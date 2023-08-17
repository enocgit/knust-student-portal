import Link from "next/link";
import React from "react";


type Props = {
    className?: string;
    icon: JSX.Element
    iconBackground: string;
    name: string;
};

const ActivityCard = ({className, icon, iconBackground, name}: Props) => {
  return (
    <Link href="" className="flex-grow inline-block">
      <div className={`bg-white px-3 py-8 min-w-[10rem] flex flex-col gap-4 items-center rounded-2xl hover:scale-105 transition-all ${className}`}>
        <div className={`w-14 h-14 rounded-full ${!iconBackground && "bg-neutral-500"}  flex items-center justify-center`} style={{backgroundColor: iconBackground}}>
          {icon}
        </div>
        <h2 className="text-center text-black/100 text-sm">{name}</h2>
      </div>
    </Link>
  );
};

export default ActivityCard;
