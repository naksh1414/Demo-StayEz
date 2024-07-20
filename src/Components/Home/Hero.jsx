import Carousel from "../Carousel/Carousel";
import { FaLocationDot } from "react-icons/fa6";
import pgVector from "../../assets/pgvector.png";
import bedVector from "../../assets/bedVector.png";
const Hero = () => {
  return (
    <main>
      <div className="relative px-5 md:px-[130px] mt-[20px] md:mt-[100px] z-20">
        <h1 className="text-white text-[1.2rem] md:text-[60px] font-semibold">{`You've got 99`}</h1>
        <h1 className="text-white text-[1.2rem] md:text-[60px] font-semibold">Problems, but</h1>
        <h1 className="text-white text-[1.2rem] md:text-[60px] font-semibold">{`brokerage ain't one`}</h1>
        <p className="text-white/50 text-[0.8rem] md:text-[1.2rem]">
          Co-ed. Girls-only. Boys-only. All types of <br /> residences
          available. Co-ed. Girls-only. Boys-<br></br>only. All types of
          residences available. <br /> Co-ed. Girls-only. Boys-only.
        </p>
        <input
          type="text"
          className="p-3 md:p-5 mt-5 md:mt-2 rounded-[10px] w-[250px] md:w-[450px] placeholder:text-white placeholder:font-semibold bg-white/30"
          placeholder="Find in and Around..."
        ></input>
      </div>
      <div className="hidden h-full md:flex ml-[70px] md:mt-[-485px] md:ml-[450px] -z-20">
        <Carousel />
      </div>
      <div className="flex items-center p-5 justify-around md:mt-10">
        <div className="mt-10 flex justify-center items-center space-x-3 h-10">
          <FaLocationDot className="text-[#03A9F4] text-[1.2rem] h-20" />
          <h1 className="text-white md:text-[1.2rem]">30+ Cities</h1>
        </div>
        <div className="mt-10 flex justify-center items-center space-x-3 h-10">
          {/* <FaLocationDot className="text-white text-[1.2rem] h-20" /> */}
          <img src={pgVector} alt="" />
          <h1 className="text-white md:text-[1.2rem]">30+ Pg&apos;s</h1>
        </div>
        <div className="mt-10 flex justify-center items-center space-x-3 h-10">
          <img src={bedVector} alt="" />
          <h1 className="text-white md:text-[1.2rem]">1000+ beds</h1>
        </div>
      </div>
    </main>
  );
};

export default Hero;
