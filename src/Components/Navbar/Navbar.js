'use client';
import './Navbar.css';
import SearchBar from './Navbar Mini Components/SearchBar/SearchBar/SearchBar';
import Cart from './Navbar Mini Components/Cart/Cart';
import User from './Navbar Mini Components/User/User';

function Navbar() {
  return (
    <div className="header">
      <div className="container flex items-center justify-between gap-5">
        <div className="text-xl font-bold">Logo</div>

        <SearchBar />

        <div className="flex gap-5">
          <Cart />
          <User />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
