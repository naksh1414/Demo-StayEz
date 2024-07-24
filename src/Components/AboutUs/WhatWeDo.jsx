import Who from "../../assets/whatwedoimg.png";
const WhatWeDo = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-white font-semibold text-[2.2rem] md:text-[3rem]">
          {" "}
          <span className="text-[#03A9F4] ">What</span> We Do ?
        </h1>
        <div className="flex flex-col md:flex-row w-full mt-10">
          <div className="md:w-[50%] mt-10 p-5 md:mt-20 md:ml-20">
            <img src={Who} alt="WhoWeAre Image" />
          </div>
          <div className="md:w-[50%] p-5 mr-10">
            <h1 className="text-white md:text-right font-semibold text-[1.3rem] md:text-[1.9rem]">
              Our <span className="text-[#03A9F4]">Objective</span>{" "}
            </h1>
            <h1 className="text-white font-semibold text-[2.3rem] md:text-[4rem]">
              Providing the best services
            </h1>
            <p className="text-white/90 mt-5 text-[1rem] md:text-[1.3rem]">
              About CompanyVivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus. Praesent sapien massa, convallis a
              pellentesque nec, egestas non nisi. Nulla porttitor accumsan
              tincidunt. Donec rutrum congue leo eget malesuada..
            </p>
            <p className="text-white/80 mt-5 text-[1rem] md:text-[1.3rem]">
              Vivamus magna justo, lacinia eget consectetur sed, convallis at
              tellus. Praesent sapien massa, convallis a pellentesque nec,
              egestas non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum
              congue leo eget malesuada.. <br /> Professional and Expert Roofing
              Contractor
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WhatWeDo;
