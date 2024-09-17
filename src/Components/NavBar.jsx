import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo/logo.svg";
import { faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";
import useStore from "../store";

const data = [
  "Հատուկ առաջարկներ",
  "Տան համար",
  "Բիզնեսի համար",
  "Մեր մասին",
  "Վճարել",
  "Օգնություն",
];

export default function NavBar(params) {
  const count = useStore((state) => state.cards);
  console.log(count);

  return (
    <div className=" max-w-screen flex justify-center border-t-2 border-textColor">
      <div className=" w-11/12 flex justify-between items-center py-3 ">
        <div className="">
          <img src={logo} alt="logo" className=" w-[200px] h-[56px]" />
        </div>
        <ul className=" flex justify-between items-center">
          {data.map((val, i) => {
            return (
              <li key={i} className=" pl-3 pr-3 font-semibold">
                {val}
              </li>
            );
          })}
        </ul>
        <div className=" font-semibold px-9 border-l-2 flex gap-3 items-center">
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <span className="">Մուտք</span>
        </div>
        <div className=" relative">
          <FontAwesomeIcon
            className=" mr-5"
            icon={faShoppingBag}
          ></FontAwesomeIcon>
          <span className=" absolute right-0 top-0">{count.length}</span>
        </div>
        <button className=" bg-mainColor px-11 py-3 rounded-2xl text-white">
          Միացի՛ր հիմա
        </button>
      </div>
    </div>
  );
}
