import React from 'react';
import Cart from '../components/Cart/Cart';
import { Outlet } from 'react-router-dom';

const CartPage = () => {
  return (
    <div>
      <Cart />
      <Outlet />
    </div>
  );
};

export default CartPage;
