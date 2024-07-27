import Modal from 'react-modal';
import { IoCloseSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';

const MoreFiltersModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Filter Properties"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="bg-[#012A40] border-[1.2px] border-white text-white rounded-2xl w-[350px] max-w-full p-6 space-y-4 absolute top-[450px] left-[30%]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Filter Properties</h2>
          <button onClick={onRequestClose} className="text-white">
            <IoCloseSharp className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-4">
          <div className='bg-[#395376]/50'>
            <h3 className="text-xl font-semibold">Property Type</h3>
            <div className="space-y-2 flex flex-col">
              <label>
                <input type="checkbox" /> Independent Flat
              </label>
              <label>
                <input type="checkbox" /> Shared Flat
              </label>
              <label>
                <input type="checkbox" /> PG
              </label>
              <label>
                <input type="checkbox" /> Hostel
              </label>
            </div>
          </div>
          <div className='bg-[#395376]/50'>
            <h3 className="text-lg font-semibold">Amenity</h3>
            <div className="space-y-2 flex flex-col">
              <label>
                <input type="checkbox" /> AC
              </label>
              <label>
                <input type="checkbox" /> RO
              </label>
              <label>
                <input type="checkbox" /> Cooler
              </label>
            </div>
          </div>
          <div className='bg-[#395376]/50'>
            <h3 className="text-lg font-semibold">Available For</h3>
            <div className="space-y-2 flex flex-col">
              <label>
                <input type="checkbox" /> Male
              </label>
              <label>
                <input type="checkbox" /> Female
              </label>
              <label>
                <input type="checkbox" /> Both
              </label>
            </div>
          </div>
          <div className='bg-[#395376]/50'>
            <h3 className="text-lg font-semibold">Near College</h3>
            <div className="space-y-2">
              <label>
                <input type="checkbox" /> KIET Group of Institutions, Ghaziabad
              </label>
            </div>
          </div>
          <div className='bg-[#395376]/50'>
            <h3 className="text-lg font-semibold">Pay Duration</h3>
            <div className="space-y-2 flex flex-col">
              <label>
                <input type="checkbox" /> Monthly
              </label>
              <label>
                <input type="checkbox" /> Quarterly
              </label>
            </div>
          </div>
          <div className='bg-[#395376]/50'>
            <h3 className="text-lg font-semibold">Mess Facility</h3>
            <div className="space-y-2">
              <label>
                <input type="checkbox" /> Available
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <button className="bg-[#007BFF] text-white py-2 px-4 rounded-md">
            Apply Filters
          </button>
          <button onClick={onRequestClose} className="bg-gray-300 text-black py-2 px-4 rounded-md">
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

MoreFiltersModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default MoreFiltersModal;