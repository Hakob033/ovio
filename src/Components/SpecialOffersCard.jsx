import img1 from "../assets/slider/img2.png";
import img2 from "../assets/slider/img8.png";
import img3 from "../assets/slider/img9.png";
import img4 from "../assets/slider/img10.png";
import { useState } from "react";
import useStore from "../store";

const images = [img1, img2, img3, img4];

export default function SpecialOffersCard({ data, index }) {
  let [count, setCount] = useState(0);
  const addCards = useStore((state) => state.addCards);
  const cards = useStore((state) => state.cards);

  function addCount() {
    addCards({ id: data.id, title: data.title });

    setCount(count + 1);
  }

  return (
    <div
      className=" relative flex flex-col justify-end w-96 h-[532px] bg-center bg-cover p-5 brightness-90"
      style={{ backgroundImage: `url(${images[data.id]})` }}
      onClick={addCount}
    >
      <h3 className=" mb-10 text-white font-semibold text-xl">{data.title}</h3>
      <span className=" text-white mb-5">{data.info}</span>
      <button className=" px-6 bg-mainColor py-4 rounded-xl text-white">
        Իմացիր ավելին
      </button>
      <span className=" absolute top-0 right-1 font-semibold text-modalBG text-lg">
        {count}
      </span>
    </div>
  );
}
