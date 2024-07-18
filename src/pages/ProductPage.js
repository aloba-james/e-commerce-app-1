import React from 'react';
import ProductDetail from '../components/Products/ProductDetail';
import { Outlet } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div>
      <ProductDetail />
      <Outlet />
    </div>
  );
};

export default ProductPage;
