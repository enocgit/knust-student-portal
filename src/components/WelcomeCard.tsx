"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { WelcomeCardInterface } from "../../types";

const WelcomeCard = ({firstName,className}: WelcomeCardInterface) => {
  // USESTATE
  const [showAnimation, setShowAnimation] = useState<boolean>(false)

  // USEREF
  // const welcomeCardRef = useRef<HTMLDivElement>(null);

  // USEEFFECT
  useEffect(() => {
    // check if animation has happened
    const animationFlag = sessionStorage.getItem('animationFlag')

    // animate the card if animation hasn't happened
    if (!animationFlag) {
      setShowAnimation(true)
      // welcomeCardRef.current?.classList.add('welcome-card__grow');
      
      // set animation flag
      sessionStorage.setItem("animationFlag", "true")
    }
  }, [])
  return (
    <div className={`relative card max-w-[30rem] bg-white shadow-md text-black p-3 xxs:px-8 xxs:py-6 welcome-card ${showAnimation ? "welcome-card__grow" : ""} ${className}`}>
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
