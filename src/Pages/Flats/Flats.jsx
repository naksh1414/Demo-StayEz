import { useState, useEffect, useCallback } from "react";
import Card from "../../Components/Cards/Card";
import MapImg from "../../assets/Map.png";
import data from "../../data/properies.json";
import { MdArrowDropDown } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { RiPinDistanceFill } from "react-icons/ri";
import PriceRangeModal from "../../Components/Modal/PriceModal";
import DistanceModal from "../../Components/Modal/DistanceModal";
import { CiCircleRemove } from "react-icons/ci";
import GenderModal from "../../Components/Modal/GenderModal";

const Flats = () => {
  const [priceModalIsOpen, setPriceModalIsOpen] = useState(false);
  const [distanceModalIsOpen, setDistanceModalIsOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState([
    6000,
    Infinity,
  ]);
  const [selectedDistance, setSelectedDistance] = useState(Infinity);
  const [genderModalIsOpen, setGenderModalIsOpen] = useState(false);
  const openPriceModal = () => setPriceModalIsOpen(true);
  const closePriceModal = () => setPriceModalIsOpen(false);
  const openDistanceModal = () => setDistanceModalIsOpen(true);
  const closeDistanceModal = () => setDistanceModalIsOpen(false);
  const openGenderModal = () => setGenderModalIsOpen(true);
  const closeGenderModal = () => setGenderModalIsOpen(false);
  const [selectedGender, setSelectedGender] = useState("both");
  const [wishlist, setWishlist] = useState([]);

  const handleApplyPriceRange = (range) => {
    setSelectedPriceRange(range);
    closePriceModal();
  };

  const handleApplyDistance = (distance) => {
    setSelectedDistance(distance);
    closeDistanceModal();
  };
  const handleRemoveFilters = () => {
    setSelectedPriceRange([6000, Infinity]);
    setSelectedDistance(Infinity);
    setSelectedGender("both");
  };
  const handleApplyGender = (gender) => {
    setSelectedGender(gender);
    closeGenderModal();
  };

  const handleRemovePriceFilter = () => {
    setSelectedPriceRange([6000, Infinity]);
  };

  const handleRemoveDistanceFilter = () => {
    setSelectedDistance(Infinity);
  };

  const handleRemoveGenderFilter = () => {
    setSelectedGender("both");
  };

  useEffect(() => {
    // Load wishlist items from local storage
    const savedWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleAddToWishlist = (property) => {
    if (wishlist.some((item) => item.id === property.id)) {
      alert("This property is already in your wishlist.");
      return;
    }
    const newWishlist = [...wishlist, property];
    setWishlist(newWishlist);
    localStorage.setItem("Wishlist", JSON.stringify(newWishlist));
  };

  // const handleAddToWishlist = (property) => {
  //   const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   const updatedWishlist = [...savedWishlist, property];
  //   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  //   setWishlist(updatedWishlist);
  // };

  // useEffect(() => {
  //   // Load wishlist items from local storage
  //   const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   setWishlist(savedWishlist);
  // }, []);

  // const handleAddToWishlist = useCallback((property) => {
  //   setWishlist((prevWishlist) => {
  //     const updatedWishlist = [...prevWishlist, property];
  //     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  //     return updatedWishlist;
  //   });
  // }, []);

  const filteredData = data.filter((property) => {
    const matchesPrice =
      property.starting_price >= selectedPriceRange[0] &&
      property.starting_price <= selectedPriceRange[1];
    const matchesDistance = property.dist_from_college <= selectedDistance;
    const matchesGender =
      selectedGender === "both" ||
      property.avl_for.toLowerCase() === selectedGender.toLowerCase();

    return matchesPrice && matchesDistance && matchesGender;
  });
  console.log("gender", selectedGender);
  console.log("Filtered Data:", filteredData);
  console.log(data);

  return (
    <main>
      <div className="flex justify-center text-white text-[1.4rem] md:text-[3rem] font-semibold my-8">
        Popular in&nbsp;<span className="text-[#03A9F4]">GHAZIABAD</span>
      </div>
      <div className="bg-[#012940] h-20 w-full">
        <div className="text-white h-full flex flex-col md:flex-row items-center px-5 space-y-4 md:space-y-0 md:space-x-8">
          <button
            onClick={openGenderModal}
            className="bg-[#2590ce] w-[160px] h-14 justify-center px-3 py-2 rounded-md flex items-center"
          >
            Gender <MdArrowDropDown className="w-10 h-10" />
          </button>
          <button
            onClick={openPriceModal}
            className="bg-[#2590ce] w-[160px] h-14 justify-center px-3 py-2 rounded-md flex items-center"
          >
            <FaRupeeSign className="w-10 h-8" />
            Price
          </button>
          <button
            onClick={openDistanceModal}
            className="bg-[#2590ce] w-[160px] h-14 justify-center px-3 py-2 rounded-md flex items-center"
          >
            <RiPinDistanceFill className="w-10 h-8" />
            Distance
          </button>
          <button
            onClick={handleRemoveFilters}
            className="bg-[#ce4a25] w-[160px] h-14 justify-center px-3 py-2 rounded-md flex items-center"
          >
            <CiCircleRemove className="w-10 h-8" />
            Remove All
          </button>
          {selectedGender !== "both" && (
            <div className="bg-[#2590ce] w-[180px] h-14 justify-center px-3 py-2 rounded-md flex items-center space-x-2">
              <span>{`Gender: ${selectedGender}`}</span>
              <button onClick={handleRemoveGenderFilter}>
                <CiCircleRemove className="w-6 h-6" />
              </button>
            </div>
          )}
          {selectedPriceRange[0] !== 6000 ||
          selectedPriceRange[1] !== Infinity ? (
            <div className="bg-[#2590ce] w-[180px] h-14 justify-center px-3 py-2 rounded-md flex items-center space-x-2">
              <span>{`Price: ${selectedPriceRange[1]}`}</span>
              <button onClick={handleRemovePriceFilter}>
                <CiCircleRemove className="w-6 h-6" />
              </button>
            </div>
          ) : null}
          {selectedDistance !== Infinity && (
            <div className="bg-[#2590ce] w-[180px] h-14 justify-center px-3 py-2 rounded-md flex items-center space-x-2">
              <span>{`Distance: ${selectedDistance / 1000} km`}</span>
              <button onClick={handleRemoveDistanceFilter}>
                <CiCircleRemove className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
      <PriceRangeModal
        isOpen={priceModalIsOpen}
        onRequestClose={closePriceModal}
        onApply={handleApplyPriceRange}
      />
      <DistanceModal
        isOpen={distanceModalIsOpen}
        onRequestClose={closeDistanceModal}
        onApply={handleApplyDistance}
      />
      <GenderModal
        isOpen={genderModalIsOpen}
        onRequestClose={closeGenderModal}
        onApply={handleApplyGender}
      />
      <div className="flex flex-row mt-[150px] md:mt-5">
        <div className="p-5 justify-center items-center flex flex-col">
          <div>
            {filteredData.length > 0 ? (
              filteredData.map((property) => (
                <Card
                  key={property.id}
                  property={property}
                  addToWishList={() => handleAddToWishlist(property)}
                />
              ))
            ) : (
              <p className="text-white text-center w-[700px] font-semibold">
                No properties found.
              </p>
            )}
          </div>
        </div>
        <div className="hidden md:flex mt-20 ml-20 p-5">
          <img className="h-[600px] w-[80%]" src={MapImg} alt="image" />
        </div>
      </div>
    </main>
  );
};

export default Flats;
