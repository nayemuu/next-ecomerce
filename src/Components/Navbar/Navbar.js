'use client';
import './Navbar.css';
import SearchBar from './Navbar Mini Components/SearchBar/SearchBar/SearchBar';
import Cart from './Navbar Mini Components/Cart/Cart';
import User from './Navbar Mini Components/User/User';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import UserLoggedIn from './Navbar Mini Components/User/UserLoggedIn';

function Navbar() {
  const [smSearchBarStatus, setSmSearchBarStatus] = useState(0);

  return (
    <div className="header">
      <div className="container flex items-center justify-between gap-5 relative">
        <div className="text-xl font-bold">Logo</div>

        <SearchBar smSearchBarStatus={smSearchBarStatus} />

        <div className="flex items-center gap-5">
          <div
            className="h-full flex items-center text-[30px] sm:hidden"
            onClick={() => {
              setSmSearchBarStatus(!smSearchBarStatus);
            }}
          >
            <AiOutlineSearch className="cursor-pointer hover:text-green-500" />
          </div>
          <Cart />
          <User />
          {/* <UserLoggedIn /> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
