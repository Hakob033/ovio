import data from "../data";
import SpecialOffersCard from "./SpecialOffersCard";

export default function SpecialOffers(params) {
  return (
    <div className=" flex mt-8 ml-8 gap-4">
      {data.specialOffers.map((val, i) => {
        return (
          <SpecialOffersCard key={i} data={val} index={i}></SpecialOffersCard>
        );
      })}
    </div>
  );
}
