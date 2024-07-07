"use client";
import { BiShoppingBag } from "react-icons/bi";

import "./Cart.css";
import Link from "next/link";

function Cart() {
  return (
    <Link href={"/cart"} className="cart-container" id="js-shopping-bag-target">
      <div className="cart-container-items">1</div>
      <BiShoppingBag className="cart-icon" />
    </Link>
  );
}

export default Cart;
