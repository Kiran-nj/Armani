import React from 'react'
import RangeSlider from './Buttons/RangeSlider';
import DropdownButton from './Buttons/DropDown2';

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "Nissan",
  "Hyundai",
  "Volkswagen",
  "Audi",
  "BMW",
  "Mercedes-Benz"
];
const model = [
"Anymodel"
];
const status = [
  "All",
  "PreOwned",
  "Unregistered"
  ];


function FilterSearch() {
  return (
    <div className='p-5 text-black w-full bg-white border-b-2 border-b-gray-300'>
        {/* <div className='flex justify-around'><h1>Brand  </h1>  <h1>Model</h1>  <h1>VehicleStatus</h1>  </div> */}

        <div className='p-3 flex justify-around w-[70%] '>  <DropdownButton options={carBrands} type={'brand'} />   <DropdownButton type={'model'} options={model}/>  </div>
        <div className='w-full flex items-center '>
          <div className='w-[80%]'> <RangeSlider /></div> 
         <button className='bg-slate-700 h-14 w-20 rounded-lg'>Search</button>
         </div>
     
    </div>
  )
}

export default FilterSearch
