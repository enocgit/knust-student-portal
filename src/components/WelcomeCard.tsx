import Image from "next/image";
import React from "react";
import { WelcomeCardInterface } from "../../types";

const WelcomeCard = ({firstName,className}: WelcomeCardInterface) => {
  return (
    <div className={`relative card w-[30rem] bg-white text-black px-8 py-6 welcome-card ${className}`}>
      <div className="text-left flex items-start gap-8 justify-between">
        <div className="space-y-2">
          <h2 className="card-title text-base">Welcome, <span className="text-success">{firstName}</span></h2>
          <p className="text-sm text-black/100">
            Please select an Activity by clicking on one of the cards below.
          </p>
        </div>
        <div className="relative w-28 h-28">
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
