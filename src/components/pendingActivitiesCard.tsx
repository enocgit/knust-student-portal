import Image from "next/image";
import React from "react";
import { HiPuzzle } from "react-icons/hi";

type Props = {
    className?: string;
};

const PendingActivitiesCard = ({className}: Props) => {
  return (
    <div className={`relative card w-[20rem] bg-white space-y-4 px-8 py-6 activity-card ${className}`}>
      <h1 className="text-base text-black font-bold">Pending Activities</h1>
      <div className="flex flex-row gap-2">
        <div className="bg-orange-100 h-12 w-16 rounded-md flex items-center justify-center">
            <HiPuzzle className="text-xl text-warning" />
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-black/100">Complete Lecturer Assessment to see your result</p>
          <small className="text-black/100">5d ago</small>
        </div>
      </div>
    </div>
  );
};

export default PendingActivitiesCard;
