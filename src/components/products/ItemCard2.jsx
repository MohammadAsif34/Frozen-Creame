import React from "react";

const ItemCard2 = ({ item }) => {
  return (
    <div className="flex items-center bg-white rounded-lg p-3 shadow-sm">
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded text-xs"
      />

      {/* Info */}
      <div className="ml-3 flex-1 flex  justify-between items-center">
        <div>
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.description}</p>
        </div>
        <div className="text-sm text-gray-600">x {item.quantity}</div>
      <div className="text-rose-500 font-semibold">₹{item.price}</div>
      </div>
    </div>
  );
};

export default ItemCard2;
