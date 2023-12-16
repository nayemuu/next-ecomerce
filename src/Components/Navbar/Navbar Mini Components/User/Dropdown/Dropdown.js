'use client';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import './Dropdown.css';

function Dropdown() {
  return (
    <div className="openProfile boxItems">
      <div className="flex gap-2 items-center mb-5">
        <div className="profile-img">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt=""
          />
        </div>

        <div>
          <div className="text-sm font-semibold">Nayem</div>
          <div className="text-xs font-normal">nayem@gmail.com</div>
        </div>
      </div>

      <button className="box">
        <IoSettingsOutline className="icon" />
        <h4>My Account</h4>
      </button>
      <button className="box">
        <BsBagCheck className="icon" />
        <h4>My Order</h4>
      </button>
      <button className="box">
        <AiOutlineHeart className="icon" />
        <h4>Wishlist</h4>
      </button>
      <button className="box">
        <GrHelp className="icon" />
        <h4>Help</h4>
      </button>
      <button className="box" onClick={() => {}}>
        <BiLogOut className="icon" />
        <h4>Log Out</h4>
      </button>
    </div>
  );
}

export default Dropdown;
