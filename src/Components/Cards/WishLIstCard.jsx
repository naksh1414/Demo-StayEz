const Card = ({ property, removeFromWishList}) => {
  return (
    <div className="bg-white p-4 m-2 rounded-lg shadow-md w-64">
      <h2 className="text-xl font-bold mb-2">{property.property_name}</h2>
      <p className="text-gray-700">{`Price: ₹${property.starting_price}`}</p>
      <p className="text-gray-700">{`Distance: ${property.dist_from_college / 1000} km`}</p>
      <p className="text-gray-700">{`Available for: ${property.avl_for}`}</p>
      {/* <button onClick={addToWishList} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Wishlist
      </button> */}
      <button onClick={() => removeFromWishList(property)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
        Remove from Wishlist
      </button>
    </div>
  );
};

export default Card;
