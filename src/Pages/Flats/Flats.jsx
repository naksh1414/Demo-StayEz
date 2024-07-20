import Card from "../../Components/Cards/Card";
import MapImg from "../../assets/Map.png";
const Flats = () => {
  return (
    <main>
      <div className="flex justify-center text-white text-[1.4rem] md:text-[3rem] font-semibold my-8">
        Popular in&nbsp;<span className="text-[#03A9F4]">GHAZIABAD</span>
      </div>
      <div className="bg-[#012940] h-20 w-full"></div>
      <div className="flex flex-row">
        <div className="p-5 justify-center items-center flex flex-col">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="hidden md:flex mt-20 ml-20 p-5">
          <img className="h-[600px] w-[80%]" src={MapImg} alt="image" />
        </div>
      </div>
    </main>
  );
};

export default Flats;
