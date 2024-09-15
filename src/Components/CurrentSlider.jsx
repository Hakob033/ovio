import React from "react";
import { useState } from "react";
import img1 from "../assets/slider/img1.png";
import img2 from "../assets/slider/img2.png";
import img3 from "../assets/slider/img3.png";
import img4 from "../assets/slider/img4.png";
import img5 from "../assets/slider/img5.png";
import img6 from "../assets/slider/img6.png";
import img7 from "../assets/slider/img7.png";
import img8 from "../assets/slider/img8.png";
import img9 from "../assets/slider/img9.png";
import img10 from "../assets/slider/img10.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
export default function CurrentSlider(params) {
  return (
    <div className=" max-w-full max-h-[624px] ">
      <div className=" relative flex items-center justify-between ">
        <div className=" absolute top-0 left-0 h-[624px] w-2/3 bg-mainColor rounded-tr-3xl "></div>
        <img
          src={images[corImg]}
          className="h-[624px] absolute right-0 top-0 rounded-l-full"
          alt=""
        />
      </div>
    </div>
  );
}
