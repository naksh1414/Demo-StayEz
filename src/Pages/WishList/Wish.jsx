import WishImg from "../../assets/wishlist.png";
import { NavLink } from "react-router-dom";
const Wish = () => {
  return (
    <main className="flex flex-col items-center h-[550px] md:h-screen">
      <h1 className="text-white text-[2.4rem] md:text-[4rem] font-semibold underline leading-loose">
        Wish<span className="text-[#03A9F4]">List</span>
      </h1>
      <img className="h-[300px] md:h-[500px] w-[300px] md:w-[500px]" src={WishImg} alt="" />
      <h1 className="text-white text-[1.2rem] md:text-[2rem]">
        Wishlist is <span className="text-[#03A9F4]">Empty</span>
      </h1>
      <NavLink to={"/flats"}>
        <h1 className="text-[#03A9F4] text-[1.2rem] md:text-[2rem] underline">See pg&apos;s</h1>
      </NavLink>
    </main>
  );
};

export default Wish;
