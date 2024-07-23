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
        <div className="flex flex-col items-center border-2 border-[#03A9F4] p-10 h-full mt-10 rounded-2xl ml-20">
          <h1 className="text-[#03A9F4] text-[2rem] font-semibold  mt-10">
            Schedule a Visit
          </h1>
          <div className="flex flex-col mt-10 space-y-5">
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
            <div className="flex flex-col w-[400px]">
              <div className="flex items-center space-x-2">
                <PiWhatsappLogoLight className="text-green-300 h-10 w-10"></PiWhatsappLogoLight>
                <h1 className="text-white font-semibold">
                  Get Updates over Whatsapp{" "}
                </h1>
              </div>

              <div className="flex mt-10 space-x-2">
                <input className="h-10 w-10" type="checkbox" />
                <h1 className="text-white">
                  I have read and agreed to the{" "}
                  <span className="text-[#03A9F4]">terms and conditions</span>{" "}
                  and <span>privacy policy</span> and hereby confirm to proceed
                </h1>
              </div>

              <button className="text-white bg-[#03A9F4] py-2 px-7 rounded-full mt-10">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SpecificFlat;
