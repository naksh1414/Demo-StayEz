import ThumbGallery from "../../Components/Carousel/ThumbGallery";
import { PiWhatsappLogoLight } from "react-icons/pi";
const SpecificFlat = () => {
  return (
    <main>
      <div className="flex">
        <div className="text-[2rem] w-[50%] border-r-2 b m-10 text-white font-semibold">
          <h1>Boy&apos;s Pg</h1>
          <p className=" font-normal">
            {" "}
            At StayEz, we understand the unique needs of students !
          </p>
          <div className="mt-10 w-[90%]">
            <ThumbGallery />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[#03A9F4] text-[2rem] font-semibold pl-[100px] mt-10">
            Schedule a Visit
          </h1>
          <div className="flex flex-col mt-10 space-y-5 pl-[100px]">
            <input
              className="h-10 w-[400px] p-5 placeholder:text-[#03A9F4]"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-10 w-[400px] p-5 placeholder:text-[#03A9F4]"
              type="number"
              placeholder="+91 9900990099"
            />
            <div className="flex items-center">
              <PiWhatsappLogoLight className="text-green-300 h-10 w-10"></PiWhatsappLogoLight>
              <h1 className="text-white font-semibold">
                Get Updates over Whatsapp{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecificFlat;
