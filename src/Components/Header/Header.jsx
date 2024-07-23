import { FaHeart } from "react-icons/fa";
import LOgo from "../../assets/logo.png";
import Button from "../Buttons/Button";
import { Button2 } from "../Buttons/Button";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import NavDrawer from "../../Components/Drawer/NavDrawer";

const Header = () => {
  return (
    <nav className="bg-none border-white border-b-[1.2px]">
      <div className="!z-10 flex flex-row justify-between bg-none p-5">
        {/* StayEz logo  */}
        <NavLink to={"/"}>
          <img className="h-10 md:h-20 bg-none" src={LOgo} alt="Logo" />
        </NavLink>
        {/* Navigation links for Mobiles */}
        <div className="flex md:hidden text-white !z-10">
          <NavDrawer className="text-white h-8 w-8" />
        </div>
        {/* Navigation links for Tablets and Laptops*/}
        <div className="bg-none hidden md:[text-1rem] lg:text-[1.2rem] md:flex flex-row justify-center items-center space-x-10 pr-10">
          <NavLink to={"/aboutus"}>
            <h1 className="text-white font-semibold bg-none flex flex-row justify-center items-center">
              Know More
            </h1>
          </NavLink>
          <NavLink to={"/flats"}>
            <h1 className="text-white font-semibold bg-none flex flex-row justify-center items-center">
              Flats
            </h1>
          </NavLink>
          <NavLink to={"/wishlist"}>
            <h1 className="bg-none text-white font-semibold flex items-center">
              {/* <FaHeart className="text-white bg-none" /> */}
              Wishlist
            </h1>
          </NavLink>
          {/* <Button2 data={"Request a CallBack"}></Button2> */}
          <Button data={"Log In"} path={"/login"} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
