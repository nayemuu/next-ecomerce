'use client';
import { BiShoppingBag } from 'react-icons/bi';

import './Cart.css';

function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-container-items">1</div>
      <BiShoppingBag className="cart-icon" />
    </div>
  );
}

export default Cart;
