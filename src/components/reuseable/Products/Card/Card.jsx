"use client";

import "./Card.css";
import productImage from "../../../../../public/images/Products/A52.png";
import Image from "next/image";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Card() {
  const [isHovered, setIsHovered] = useState(false);
  const cardImageContainerRef = useRef();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCart = (e) => {
    // console.log("added to cart");
    addToCartAnimation(e);
  };

  const addToCartAnimation = async (event) => {
    const shopping_cart = document.getElementById("js-shopping-bag-target");
    if (shopping_cart) {
      const imgCopy = createImageCopy();
      document.body.appendChild(imgCopy);

      const imgCopyBounding = imgCopy.getBoundingClientRect();
      // console.log("imgCopyBounding = ", imgCopyBounding);

      // console.log("shopping_cart = ", shopping_cart);
      const shoppingCartBounding = shopping_cart.getBoundingClientRect();
      // console.log("shoppingCartBounding = ", shoppingCartBounding);

      let x =
        shopping_cart.getBoundingClientRect().x -
        imgCopy.getBoundingClientRect().x;

      let y =
        shopping_cart.getBoundingClientRect().y -
        imgCopy.getBoundingClientRect().y;

      requestAnimationFrame(() => {
        imgCopy.style.transform = `translate(${x}px, ${y}px)`;
        imgCopy.style.width = "50px"; // Set final width
        imgCopy.style.height = "50px"; // Set final height
        imgCopy.style.transition = "all 0.5s ease-in-out";
      });

      imgCopy.addEventListener("transitionend", () => {
        imgCopy.remove();
      });
    }
  };

  const createImageCopy = () => {
    const img = cardImageContainerRef.current.querySelector("img");
    const imgCopy = img.cloneNode(true);
    const rect = img.getBoundingClientRect();

    imgCopy.style.position = "absolute";
    imgCopy.style.top = `${rect.top}px`;
    imgCopy.style.left = `${rect.left}px`;
    imgCopy.style.width = `${rect.width}px`;
    imgCopy.style.height = `${rect.height}px`;
    imgCopy.style.zIndex = 1000;

    return imgCopy;
  };

  return (
    <div
      className="rounded border border-[#f2f3f8] my-2 product-card w-full relative cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* shopping cart */}
      <div
        className={`absolute z-[2] top-0 shopping-card-container ${
          isHovered ? "right-1" : "right-[-35px]"
        }`}
      >
        <div
          className="h-[35px] w-[35px] rounded-full shopping-card flex justify-center items-center hover:bg-green-500 text-gray-700 hover:text-white add-to-cart-container"
          title="add to cart"
          onClick={handleCart}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>

      {/* discount & stock section */}
      <div className="flex justify-between absolute z-[1] w-full">
        <div className="product-card-left-text bg-[#0080009e]">In Stock</div>
        <div className="product-card-right-text">30 % OFF</div>
      </div>

      {/* main card content */}
      <div className="p-[10px]">
        <div className="h-[228px] w-full relative">
          <div
            className="relative h-full w-auto rounded-t"
            ref={cardImageContainerRef}
          >
            <Image
              fill
              src={productImage}
              alt="productImage"
              className="object-scale-down"
            />
          </div>
        </div>

        <div className="mt-[10px]">
          <div className="flex justify-between">
            <div className="text-[#6c757d] font-bold text-sm line-through">
              ৳3,000.00
            </div>
            <div className="text-[#377dff] font-bold text-sm">৳2,100.00</div>
          </div>
          <div className="font-bold text-sm mt-1">Samsung Galaxy A52</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
