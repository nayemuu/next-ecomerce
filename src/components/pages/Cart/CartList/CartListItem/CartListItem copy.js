import Image from 'next/image';
import productImg from '../../../../../../public/images/Products/A52.png';
import './CartListItem.css';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import { FaTrash } from 'react-icons/fa6';

function CartListItem() {
  return (
    <div className="cart-list-item-container">
      <div className="cart-list-item-img-container ">
        <Image
          src={productImg}
          alt={`productImgAlt`}
          fill
          style={{ objectFit: 'scale-down' }}
        />
      </div>
      <div className="cart-list-item-container-left-section h-full bg-red-500">
        <div className="cart-list-item-text-box-container">
          <div className="cart-list-item-title">NESCAFE CLASSIC</div>
          <div className="cart-list-item-quantity">200 GM</div>

          <div className="cart-list-item-price-box-container">
            <div className="cart-list-item-price-container">
              <div className="cart-list-item-price-taka-symbol">৳</div>
              <div className="cart-list-item-price">0</div>
            </div>

            <div className="cart-list-item-discount-price-container">
              <div className="cart-list-item-discount-price-taka-symbol">৳</div>
              <div className="cart-list-item-discount-price">0</div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart-list-item-action-button-container">
        <DecrementButton />
        <div className="cart-item-quantity">1</div>
        <IncrementButton />
      </div>

      <div className="text-xl hover:text-red-500 cursor-pointer">
        <FaTrash />
      </div>
    </div>
  );
}

export default CartListItem;
