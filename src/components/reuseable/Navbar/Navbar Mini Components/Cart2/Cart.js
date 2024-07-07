'use client';

import { useEffect, useState } from 'react';
import './Cart.css';

function Cart() {
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let totalMRP = 100;

  let cartLogo = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M3.75 5.25C3.3375 5.25 3 5.5875 3 6C3 6.4125 3.3375 6.75 3.75 6.75H5.41425L7.383 14.625C7.5495 15.2925 8.148 15.75 8.83575 15.75H17.4375C18.114 15.75 18.6885 15.3015 18.867 14.6483L20.8125 7.5H8.25L8.625 9H18.867L17.4375 14.25H8.83575L6.867 6.375C6.78589 6.05198 6.5987 5.76554 6.33543 5.56156C6.07216 5.35758 5.74804 5.24787 5.415 5.25H3.75ZM16.5 15.75C15.2662 15.75 14.25 16.7662 14.25 18C14.25 19.2337 15.2662 20.25 16.5 20.25C17.7338 20.25 18.75 19.2337 18.75 18C18.75 16.7662 17.7338 15.75 16.5 15.75ZM9.75 15.75C8.51625 15.75 7.5 16.7662 7.5 18C7.5 19.2337 8.51625 20.25 9.75 20.25C10.9837 20.25 12 19.2337 12 18C12 16.7662 10.9837 15.75 9.75 15.75ZM9.75 17.25C10.1722 17.25 10.5 17.5785 10.5 18C10.5 18.4222 10.1715 18.75 9.75 18.75C9.32775 18.75 9 18.4215 9 18C9 17.5777 9.3285 17.25 9.75 17.25ZM16.5 17.25C16.9222 17.25 17.25 17.5785 17.25 18C17.25 18.4222 16.9215 18.75 16.5 18.75C16.0778 18.75 15.75 18.4215 15.75 18C15.75 17.5777 16.0785 17.25 16.5 17.25Z"
        fill="#D13F97"
      />
    </svg>
  );

  if (screenWidth > 991) {
    cartLogo = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M5 7.00001C4.45 7.00001 4 7.45001 4 8.00001C4 8.55001 4.45 9.00001 5 9.00001H7.219L9.844 19.5C10.066 20.39 10.864 21 11.781 21H23.25C24.152 21 24.918 20.402 25.156 19.531L27.75 10H11L11.5 12H25.156L23.25 19H11.781L9.156 8.50001C9.04785 8.06932 8.79827 7.68739 8.44724 7.41542C8.09621 7.14345 7.66405 6.99716 7.22 7.00001H5ZM22 21C20.355 21 19 22.355 19 24C19 25.645 20.355 27 22 27C23.645 27 25 25.645 25 24C25 22.355 23.645 21 22 21ZM13 21C11.355 21 10 22.355 10 24C10 25.645 11.355 27 13 27C14.645 27 16 25.645 16 24C16 22.355 14.645 21 13 21ZM13 23C13.563 23 14 23.438 14 24C14 24.563 13.562 25 13 25C12.437 25 12 24.562 12 24C12 23.437 12.438 23 13 23ZM22 23C22.563 23 23 23.438 23 24C23 24.563 22.562 25 22 25C21.437 25 21 24.562 21 24C21 23.437 21.438 23 22 23Z"
          fill="#D13F97"
        />
      </svg>
    );
  }

  return (
    <>
      <div className="cart-section">
        <div className="cart-amount-section d-none d-md-flex">
          <div className="cart-taka-symbol">৳</div>
          <div className="cart-amount">{totalMRP}</div>
        </div>

        <div
          className="cart-icon-container"
          onClick={() => handleModal('cart-list')}
          id="js-shopping-bag-target"
        >
          <div className="cart-counter-container">5</div>
          {cartLogo}
        </div>
      </div>
    </>
  );
}

export default Cart;
