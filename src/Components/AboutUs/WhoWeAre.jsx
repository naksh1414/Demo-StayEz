import Who from "../../assets/Whoweare.png"
const WhoWeAre = () => {
  return (
    <main>
      <div className="flex justify-center mt-20">
        <h1 className="text-white font-semibold text-[2.3rem] md:text-[3rem]">
          <span className="text-[#03A9F4]">Who</span> We Are
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row w-full">
        <div className="w-full md:w-[50%] p-10">
          <h1 className="text-white font-semibold text-[1.2rem] md:text-[1.7rem]">
            About <span className="text-[#03A9F4]">Comapny</span>{" "}
          </h1>
          <h1 className="text-white font-semibold text-[2.2rem] md:text-[3rem]">
            Your <span className="text-[#03A9F4]">Ez</span> Ticket to Cozy
            Stays!
          </h1>
          <p className="text-white/90 mt-5 text-[1rem] md:text-[1.3rem]">
            About CompanyVivamus magna justo, lacinia eget consectetur sed,
            convallis at tellus. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi. Nulla porttitor accumsan tincidunt. Donec
            rutrum congue leo eget malesuada..
          </p>
          <p className="text-white/80 mt-5 text-[1rem] md:text-[1.3rem]">
            Vivamus magna justo, lacinia eget consectetur sed, convallis at
            tellus. Praesent sapien massa, convallis a pellentesque nec, egestas
            non nisi. Nulla porttitor accumsan tincidunt. Donec rutrum congue
            leo eget malesuada.. <br /> Professional and Expert Roofing Contractor
          </p>
        </div>
        <div className="md:w-[50%] mt-10 p-5 md:p-0 md:mt-20 md:ml-5">
          <img src={Who} alt="WhoWeAre Image" />
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
