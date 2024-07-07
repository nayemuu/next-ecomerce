'use client';

import './Card.css';
import productImage from '../../../../../public/images/Products/A52.png';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Card() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const addToCartAnimation = async (event) => {
    const dot = createCartDot();
    const parent = event.target.closest('div');
    // console.log("parent = ", parent);

    parent.append(dot);

    const moveTransition = document.startViewTransition(() =>
      moveDotToTarget(dot)
    );

    await moveTransition.finished;

    dot.remove();
    dot.style.viewTransitionName = 'none';
  };

  const createCartDot = () => {
    const dot = document.createElement('div');
    dot.classList.add('product__dot');
    dot.style.viewTransitionName = 'cart-dot';
    return dot;
  };

  const moveDotToTarget = (dot) => {
    const target = document.getElementById('js-shopping-bag-target');
    target.append(dot);
  };

  const handleCart = (e) => {
    console.log('added to cart');
    addToCartAnimation(e);
  };

  return (
    // <div
    //   className="rounded border border-[#f2f3f8] my-2 product-card w-full relative cursor-pointer overflow-hidden"
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    // >
    //   {/* shopping card */}
    //   <div
    //     className={`absolute z-[2] top-0 shopping-card-container ${
    //       isHovered ? "right-1" : "right-[-35px]"
    //     }`}
    //   >
    //     <div
    //       className="h-[35px] w-[35px] rounded-full shopping-card flex justify-center items-center hover:bg-green-500 text-gray-700 hover:text-white add-to-cart-container"
    //       title="add to card"
    //       onClick={handleCart}
    //     >
    //       <FontAwesomeIcon icon={faCartShopping} />
    //     </div>
    //   </div>

    //   {/* discount & stock section */}

    //   <div className="flex justify-between absolute z-[1] w-full">
    //     <div className="product-card-left-text bg-[#0080009e]">In Stock</div>
    //     <div className="product-card-right-text">30 % OFF</div>
    //   </div>

    //   {/* main card content */}
    //   <div className="p-[10px]">
    //     <div className="h-[228px] w-full relative">
    //       <div className="relative h-full w-auto rounded-t">
    //         <Image
    //           fill
    //           src={productImage}
    //           alt="productImage"
    //           className="object-scale-down"
    //         />
    //       </div>
    //     </div>

    //     <div className="mt-[10px]">
    //       <div className="flex justify-between">
    //         <div className="text-[#6c757d] font-bold text-sm line-through">
    //           ৳3,000.00
    //         </div>
    //         <div className="text-[#377dff] font-bold text-sm">৳2,100.00</div>
    //       </div>
    //       <div className="font-bold text-sm mt-1">Samsung Galaxy A52</div>
    //     </div>
    //   </div>
    // </div>

    <div onClick={addToCartAnimation}>yooi</div>
  );
}

export default Card;
