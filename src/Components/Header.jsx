import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import am from "../assets/Flags/am.svg";
import en from "../assets/Flags/en.svg";
import ru from "../assets/Flags/ru.svg";

const flags = [am, ru, en];

export default function Header(params) {
  const [open, setOpen] = useState(false);
  const [flag, setFlags] = useState(false);

  function openFlags() {
    setFlags(true);
  }
  function closeFlags() {
    setFlags(false);
  }

  function openModal() {
    setOpen(true);
  }
  function closeModal() {
    setOpen(false);
  }

  return (
    <div className=" max-w-screen flex justify-center ">
      <div className=" w-11/12 flex justify-between p-1">
        <div className=" flex gap-4">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              className=" text-textColor"
              icon={faPhone}
            ></FontAwesomeIcon>
            <span className=" text-textColor">+ 374 60 46 46 46</span>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              className=" text-textColor"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <span className=" text-textColor">info@ovio.am</span>
          </div>
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              className=" text-textColor"
              icon={faLocationDot}
            ></FontAwesomeIcon>
            <span className=" text-textColor">Գրասենյակներ և ծածկույթ</span>
          </div>
        </div>
        <div className=" flex items-center">
          <div className=" relative">
            <span
              onMouseEnter={openModal}
              onMouseLeave={closeModal}
              className=" p-4 pr-0"
            >
              Լրացուցիչ
            </span>
            {open && (
              <div
                onMouseEnter={openModal}
                onMouseLeave={closeModal}
                className=" absolute top-9 right-0  z-10 flex flex-col w-[260px] bg-white p-4 shadow-md shadow-modalBG rounded-2xl"
              >
                <a className=" p-1 ">Օգնություն</a>
                <a className=" p-1">Հեռաուսային սպասարկում</a>
                <a className=" p-1">Աշխատատեղեր</a>
              </div>
            )}
          </div>
          <div className=" relative">
            <img
              className=" p-4 pr-0"
              src={am}
              onMouseEnter={openFlags}
              onMouseLeave={closeFlags}
            />
            {flag && (
              <div
                onMouseEnter={openFlags}
                onMouseLeave={closeFlags}
                className=" absolute top-10 right-0 z-10 flex flex-col items-center justify-center gap-2 w-20 py-4 bg-white"
              >
                {flags.map((val, i) => {
                  return <img key={i} src={val} className=" " alt="" />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
