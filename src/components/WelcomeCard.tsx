import Image from "next/image";
import React from "react";
import { WelcomeCardInterface } from "../../types";

const WelcomeCard = ({firstName,className}: WelcomeCardInterface) => {
  return (
    <div className={`relative card max-w-[30rem] bg-white shadow-md text-black p-3 xxs:px-8 xxs:py-6 welcome-card ${className}`}>
      <div className="text-left flex flex-col items-end gap-2 justify-between xs:flex-row xs:items-start xs:gap-8">
        <div className="space-y-2">
          <h2 className="min-[260px]:card-title text-base">Welcome, <span className="text-success">{firstName}</span></h2>
          <p className="text-sm text-black/100">
            Please select an Activity by clicking on one of the cards below.
          </p>
        </div>
        <div className="relative hidden w-16 h-16 xs:w-28 xs:h-28 min-[270px]:inline-flex">
          <Image
            src="/assets/svg/welcome-illustration.svg"
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
