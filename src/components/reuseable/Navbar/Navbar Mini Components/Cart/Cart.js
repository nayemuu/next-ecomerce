"use client";

import { BiShoppingBag } from "react-icons/bi";
import "./Cart.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

function Cart() {
  const [totalCartItem, setTotalCartItem] = useState(0);
  const { count } = useSelector((state) => state.cart);
  const counterRef = useRef();

  const cartCounterAnimation = async () => {
    if (counterRef.current) {
      counterRef.current.style.viewTransitionName = "cart-counter";

      const counterTransition = document.startViewTransition(() => {
        incrementCounter();
      });

      await counterTransition.finished;
      counterRef.current.style.viewTransitionName = "none";
    }
  };

  function incrementCounter() {
    counterRef.current.innerText = count;
  }

  useEffect(() => {
    if (document?.startViewTransition) {
      cartCounterAnimation();
    } else {
      setTotalCartItem(count);
    }
  }, [count]);

  // useEffect(() => {
  //   console.log("yoo");
  // }, []);

  // console.log("count = ", count);
  return (
    <Link href={"/cart"} className="cart-container" id="js-shopping-bag-target">
      <div className="cart-container-items">
        <span ref={counterRef}>{totalCartItem}</span>
      </div>
      <BiShoppingBag className="cart-icon" />
    </Link>
  );
}

export default Cart;
