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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function Slider(params) {
  const [corImg, setCorrImg] = useState(0);

  const handleNext = () => {
    setCorrImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCorrImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className=" max-w-full h-[624px] ">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-[60%] z-10 p-4 cursor-pointer text-white"
      >
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </button>
      <div className=" relative flex items-center justify-between ">
        <div className=" absolute top-0 left-0 h-[624px] w-2/3 bg-mainColor rounded-tr-3xl flex flex-col justify-center items-start pl-32 gap-14 ">
          <div className="flex flex-col gap-2 font-semibold text-white text-5xl">
            <span>Բարի գալու՜ստ</span>
            <span> OVIO</span>
          </div>
          <span className=" text-white font-semibold text-xl">Բացահայտիր</span>
        </div>
        <img
          src={images[corImg]}
          className="h-[624px] absolute right-0 top-0 rounded-l-full"
          alt=""
        />
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-[60%] z-10 p-4 cursor-pointer text-white"
      >
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </button>
    </div>
  );
}
