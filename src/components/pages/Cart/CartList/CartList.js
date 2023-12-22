import React from 'react';
import CartListItem from './CartListItem/CartListItem';

function CartList() {
  return (
    <div className="flex flex-col gap-3">
      <CartListItem />
      <CartListItem />
      <CartListItem />
      <CartListItem />
    </div>
  );
}

export default CartList;
