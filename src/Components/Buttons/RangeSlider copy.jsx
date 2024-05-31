import React, { useState } from "react";

const RangeSlider = () => {
  const [value, setValue] = useState(500000);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  return (
    <div className="flex  mb-10">
      <h1 className="text-xs font-bold ">Select Min Price </h1>
      <div className="w-1/2">
        <input
          type="range"
          min="500000"
          max="4000000"
          value={value}
          onChange={handleChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <div className="flex justify-between text-gray-600">
          <span>500,000</span>
          <span>4,000,000</span>
        </div>
        <div className="mt-4 text-center">
          <span className="text-lg font-semibold">Price: </span>
          <span className="text-lg font-bold text-blue-600">{value.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
