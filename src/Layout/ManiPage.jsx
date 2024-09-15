import { Link } from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Slider from "../Components/Slider";

export default function ManiPage(params) {
  return (
    <>
      <Link to="/">
        <Header></Header>
        <NavBar></NavBar>
        <Slider></Slider>
      </Link>
    </>
  );
}
