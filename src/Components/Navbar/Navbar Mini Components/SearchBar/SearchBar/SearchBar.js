'use client';
import './SearchBar.css';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <div className="max-w-[600px] w-full relative">
      <div className="absolute h-full flex items-center text-2xl pl-4">
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
        <AiOutlineSearch />
      </div>

      <input
        type="search"
        placeholder="Search..."
        className="h-full w-full text-base py-[16px] pl-[44px] searchbar"
      />
    </div>
  );
}

export default SearchBar;
