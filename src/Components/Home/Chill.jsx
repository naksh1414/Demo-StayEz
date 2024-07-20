import heroImg from "../../assets/heroimg.png";
const Chill = () => {
  return (
    <main className="my-[100px] h-full">
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-[50%] justify-center items-center">
          <h1 className="text-white text-[1.4rem] md:text-[1.6rem] lg:text-[4rem] font-bold md:pl-28 px-5">
            Chill in a <span className="text-[#03A9F4]">Common area</span>{" "}
            that’s anything but common
          </h1>
          <p className="text-white text-[1.1rem] md:text-[1.4rem] md:pl-28 px-5 mt-2">
            Nope, we don&apos;t try to pass off a few plastic chairs and a TV as
            a common area. We&apos;ve replaced them with sofas, bean bags and
            large-screen TVs. And we&apos;ve also added gaming zones, fitness
            centres and chillout corners as a bonus.
          </p>
        </div>
        <div className="w-full md:w-[50%] p-5 md:pl-14">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Chill;
