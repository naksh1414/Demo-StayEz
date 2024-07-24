import CardImg from "../../assets/cardImg.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaFemale } from "react-icons/fa";
import { FaGenderless } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
const Card = ({ property, onAddToWishlist }) => {
  const {
    property_name,
    address1,
    avl_for,
    dist_from_college,
    room_detail,
    starting_price,
    cover_image,
  } = property;

  const imgSrc = cover_image || CardImg;

  return (
    <main className="">
      <div className="w-full md:w-[700px] md:h-[300px] flex flex-col md:flex-row border-2 border-white my-10 rounded-2xl">
        <div className="md:w-[35%] h-full border-r-2 border-white ">
          <img
            className="h-[200px] md:h-full w-full"
            src={imgSrc}
            alt="property_img"
          />
        </div>
        <div className="md:w-[65%] text-white p-5">
          <div className="flex justify-between items-center">
            <h1 className="text-[1rem] md:text-[2rem]">{property_name}</h1>
            <div
              className={`flex flex-row ${
                avl_for === "Male"
                  ? "bg-[#03A9F4]" // Blue for Male
                  : avl_for === "Female"
                  ? "bg-[#F48FB1]" // Pink for Female
                  : "bg-transparent" // Transparent for Both
              } border-[1px] border-white rounded-xl w-[120px] h-8 items-center px-4`}
            >
              {avl_for === "Male" ? (
                <FaMale />
              ) : avl_for === "Female" ? (
                <FaFemale />
              ) : (
                <FaGenderless />
              )}
              <h1>{avl_for}</h1>
            </div>
          </div>

          <h1 className="text-[1rem] md:text-[1.2rem]">{address1}</h1>
          <div className="bg-white rounded-xl w-[220px] h-8 mt-5 items-center flex px-4">
            <FaLocationDot className="text-black" />
            <h1 className="text-black ml-2">
              {dist_from_college / 1000} km away from kiet
            </h1>
          </div>
          <div className="flex space-x-2">
            <div className="bg-black/50 border-[1px] border-white rounded-xl w-[120px] h-8 mt-5 items-center flex px-4">
              <FaBath className="text-white mr-2" />
              <h1 className="text-white">{room_detail[0].washroom}</h1>
            </div>
            <div className="bg-[#03A9F4] border-[1px] border-white rounded-xl w-[120px] h-8 mt-5 items-center flex px-4">
              <FaBed className="text-black mr-2" />
              <h1 className="text-black">{room_detail[0].seater}Seater</h1>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10">
            <div className="text-white text-[1.1rem]">
              <h1>Starts From</h1>
              <h1 className="text-[#03A9F4]">
                Rs {starting_price.toLocaleString()}/mo*
              </h1>
            </div>
            <div>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5">
                <button
                  onClick={onAddToWishlist}
                  className="bg-white text-[#03A9F4] py-2 px-3 rounded-md border-2 border-[#03A9F4] hover:border-white hover:bg-[#03A9F4] hover:text-red-600"
                >
                  <FaHeart />
                </button>
                <NavLink to={`/flats/${property.id}`}>
                  <button className="bg-[#03A9F4] border-[1.1px] border-white hover:border-[#03A9F4]  py-2 px-3 rounded-md hover:text-[#03A9F4] hover:bg-white ">
                    View
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
