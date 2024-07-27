import { useState, useEffect } from "react";
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
import { Button2 } from "../../Components/Buttons/Button";
import { IoSearchSharp } from "react-icons/io5";
import { LiaFilterSolid } from "react-icons/lia";
import Pagination from "../../Components/Pagination/Pagination";
import MoreFiltersModal from "../../Components/Modal/MoreFiltersModal";
const Flats = () => {
  const [priceModalIsOpen, setPriceModalIsOpen] = useState(false);
  const [distanceModalIsOpen, setDistanceModalIsOpen] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState([
    6000,
    Infinity,
  ]);
  const [selectedDistance, setSelectedDistance] = useState(Infinity);
  const [genderModalIsOpen, setGenderModalIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("both");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [moreFilterModal, setOpenMoreFilterModal] = useState(false);
  const openPriceModal = () => setPriceModalIsOpen(true);
  const closePriceModal = () => setPriceModalIsOpen(false);
  const openDistanceModal = () => setDistanceModalIsOpen(true);
  const closeDistanceModal = () => setDistanceModalIsOpen(false);
  const openGenderModal = () => setGenderModalIsOpen(true);
  const closeGenderModal = () => setGenderModalIsOpen(false);
  const openMoreFilterModal = () => setOpenMoreFilterModal(true);
  const closeMoreFilterModal = () => setOpenMoreFilterModal(false);
  const handleApplyPriceRange = (range) => {
    setSelectedPriceRange(range);
    closePriceModal();
  };

  const handleApplyDistance = (distance) => {
    setSelectedDistance(distance);
    closeDistanceModal();
  };

  const handleApplyGender = (gender) => {
    setSelectedGender(gender);
    closeGenderModal();
  };

  const handleRemoveFilters = () => {
    setSelectedPriceRange([6000, Infinity]);
    setSelectedDistance(Infinity);
    setSelectedGender("both");
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
    const savedWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const handleAddToWishlist = (property) => {
    console.log("Adding to wishlist:", property);
    if (wishlist.some((item) => item.id === property.id)) {
      alert("This property is already in your wishlist.");
      return;
    }
    const newWishlist = [...wishlist, property];
    setWishlist(newWishlist);
    localStorage.setItem("Wishlist", JSON.stringify(newWishlist));
    alert("Added to Wishlist!");
  };

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

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setCurrentPage(newPage);
  };

  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = filteredData.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <main>
      <div className="flex justify-center mt-10">
        <div className=" absolute right-[190px] md:right-[100px] pt-5 md:pt-2 flex items-center justify-between md:mt-2 rounded-[10px] w-[250px] md:w-[450px] text-white font-semibold ">
          <Button2
            data={"Search"}
            icon={<IoSearchSharp></IoSearchSharp>}
            path={"/flats"}
          ></Button2>
        </div>
        <input
          type="text"
          className="p-3 md:p-5 mt-5 md:mt-2 rounded-[10px] w-[250px] md:w-[650px] placeholder:text-white placeholder:font-semibold bg-white/30"
          placeholder="Find in and Around..."
        ></input>
      </div>

      <div className="flex justify-center text-white text-[1.4rem] md:text-[2.4rem] font-semibold my-8">
        Popular in&nbsp;
        <span className="text-[#03A9F4]">GHAZIABAD</span>
      </div>
      <div className="bg-[#224260] h-full p-5 md:p-0 md:h-20 w-full">
        <div className="text-white h-full flex flex-col md:flex-row items-center px-5 space-y-4 md:space-y-0 md:space-x-8">
          <button
            onClick={openGenderModal}
            className="bg-[#0477C0]/30 w-[120px] h-12 justify-center border-2 border-white rounded-full flex items-center"
          >
            Gender <MdArrowDropDown className="w-8 h-8" />
          </button>
          <button
            onClick={openPriceModal}
            className="bg-[#0477C0]/30 border-2 border-white w-[120px] h-12 justify-center rounded-full flex items-center"
          >
            <FaRupeeSign className="w-6 h-6" />
            Price
          </button>
          <button
            onClick={openDistanceModal}
            className="bg-[#0477C0]/30 w-[120px] h-12 justify-center rounded-full border-2 border-white flex items-center"
          >
            <RiPinDistanceFill className="w-6 h-6" />
            Distance
          </button>
          <div className="bg-white w-[2px] h-14"></div>
          <button
            onClick={openMoreFilterModal}
            className="bg-[#0477C0]/30 border-2 border-white w-fit h-12 justify-center px-6 rounded-full flex items-center"
          >
            <LiaFilterSolid className="h-6 w-6" />
            More Filters
          </button>
          <button
            onClick={handleRemoveFilters}
            className="bg-[#ce4a25] border-2 border-white w-fit h-12 justify-center px-6 rounded-full flex items-center"
          >
            Remove All filters
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
      <MoreFiltersModal
        isOpen={moreFilterModal}
        onRequestClose={closeMoreFilterModal}
      />
      <div className="flex flex-row justify-center mt-[150px] md:mt-5">
        <div className="p-5 justify-center items-center flex flex-col">
          <div>
            {currentProperties.map((property, index) => (
              <Card
                key={index}
                property={property}
                onAddToWishlist={() => handleAddToWishlist(property)}
              />
            ))}
          </div>
          <div className="flex flex-wrap space-y-2 md:space-y-0 justify-center space-x-2 mt-10">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <div className="hidden md:flex mt-20 ml-20 p-5">
          <img className="h-[800px] w-[80%] mt-10" src={MapImg} alt="image" />
        </div>
      </div>
    </main>
  );
};

export default Flats;
