import { useState } from "react";
import Modal from "react-modal";

const GenderModal = ({ isOpen, onRequestClose, onApply }) => {
  const [selectedGender, setSelectedGender] = useState("both");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleApply = () => {
    onApply(selectedGender);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Gender"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="text-white h-[250px] w-[400px] bg-black px-4 py-6 rounded absolute top-[350px] left-[50px]">
        <h2 className="text-white font-semibold">Select Gender</h2>
        <div className="flex flex-col space-y-4">
          <label>
            <input
              type="radio"
              value="male"
              checked={selectedGender === "male"}
              onChange={handleGenderChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              value="female"
              checked={selectedGender === "female"}
              onChange={handleGenderChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              value="both"
              checked={selectedGender === "both"}
              onChange={handleGenderChange}
            />
            Both
          </label>
          <button
            onClick={handleApply}
            className="bg-[#2590ce] text-white px-4 py-2 rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default GenderModal;
