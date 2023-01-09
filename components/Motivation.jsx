import React from "react";
import Image from "next/image";
import Img1 from "../public/assets/2st extract.png";

export const Motivation = () => {
  return (
    <div>
      <div className="relative">
        <Image src={Img1} className="w-4/5 px-10" alt="/" />
        <div className="absolute top-0 right-0 pt-36 px-48 flex items-center justify-center text-white text-4xl md:text-2xl">
          <p className="px-48 text-center tracking-widest leading-loose font-quicksand">
            Gamify Your <br />
            Programmer&#39;s,
            <br /> Fitness Journey
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
