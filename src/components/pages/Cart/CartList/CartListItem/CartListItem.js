import Image from 'next/image';
import productImg from '../../../../../../public/images/Products/A52.png';
import './CartListItem.css';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';
import { FaTrash } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa6';

function CartListItem() {
  return (
    <div className="flex items-center gap-4 border border-solid bg-white rounded-md">
      <div>
        <div className="flex justify-center items-center sm:border border-solid border-[#dce0e4] rounded-md min-h-[120px] sm:min-h-[150px] h-full aspect-square relative cursor-pointer">
          <Image
            src={productImg}
            alt={`productImgAlt`}
            fill
            style={{ objectFit: 'scale-down', padding: '5px' }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center h-full w-full p-2 sm:p-5 gap-3">
        <div className="cart-list-item-container-left-section h-full">
          <div className="cart-list-item-text-box-container">
            <div className="cart-list-item-title">NESCAFE CLASSIC</div>
            <div className="cart-list-item-quantity">200 GM</div>

            <div className="cart-list-item-price-box-container">
              <div className="cart-list-item-price-container">
                <div className="cart-list-item-price-taka-symbol">৳</div>
                <div className="cart-list-item-price">0</div>
              </div>

              <div className="cart-list-item-discount-price-container">
                <div className="cart-list-item-discount-price-taka-symbol">
                  ৳
                </div>
                <div className="cart-list-item-discount-price">0</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 md:gap-5">
            <div className="text-base sm:text-xl hover:text-green-500 cursor-pointer">
              <FaMinus />
            </div>

            <div className="text-base sm:text-xl">1</div>

            <div className="text-base sm:text-xl hover:text-green-500 cursor-pointer">
              <FaPlus />
            </div>
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="text-base sm:text-[23px] text-gray-600 hover:text-pink-500 cursor-pointer">
            {/* <FaHeart /> */}
            <FaRegHeart />
          </div>
          <div className="text-base sm:text-xl text-gray-600 hover:text-red-500 cursor-pointer">
            <FaTrash />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartListItem;
