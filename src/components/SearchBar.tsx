import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-[90%] flex justify-center items-center relative bg-white">
      <input 
        type="text" 
        placeholder="Search for resources and tutorials" 
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <img src="svgs/search.svg" alt="Search" />
      </div>
    </div>
  );
};

export default SearchBar;
