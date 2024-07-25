'use client';
import { useState } from 'react';
import './SearchBar.css';

import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar({ smSearchBarStatus }) {
  const [searchtext, setSearchText] = useState('');

  console.log('searchtext = ', searchtext);

  const doSearch = (event) => {
    setSearchText(event.target.value);
  };

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (event) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(event);
      }, delay);
    };
  };

  const handleSearch = debounceHandler(doSearch, 500);

  return (
    <div
      className={`sm:max-w-[600px] w-full relative searchbar-container searchbar-container ${
        smSearchBarStatus
          ? 'searchbar-container-active'
          : 'searchbar-container-inactive'
      }`}
    >
      <div className="absolute h-full flex items-center text-2xl pl-3 sm:pl-4">
        <AiOutlineSearch className="cursor-pointer hover:text-green-500" />
      </div>

      <input
        type="search"
        placeholder="Search..."
        className="h-full w-full text-base py-[11px] sm:py-[16px] pl-[44px] searchbar"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
