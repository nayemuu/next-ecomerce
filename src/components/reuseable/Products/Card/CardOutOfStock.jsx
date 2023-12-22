'use client';

import './Card.css';
import productImage from '../../../../../public/images/Products/A52.png';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CardOutOfStock() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="rounded border border-[#f2f3f8] my-2 product-card max-w-[214px] relative cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* shopping card */}
      <div
        className={`hidden absolute z-[2] top-0 shopping-card-container ${
          isHovered ? 'right-1' : 'right-[-32px]'
        }`}
      >
        <div className="h-[35px] w-[35px] rounded-full shopping-card flex justify-center items-center">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>

      {/* discount & stock section */}

      <div className="flex justify-between absolute z-[1] w-full">
        <div className="product-card-left-text bg-[#ff00009e]">Stock Out</div>
      </div>

      {/* main card content */}
      <div className="p-[10px]">
        <div className="h-[228px] relative">
          <div className="relative h-full w-auto rounded-t">
            <Image fill src={productImage} className="object-scale-down" />
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

export default CardOutOfStock;
