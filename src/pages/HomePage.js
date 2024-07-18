import React from 'react';
import ProductList from '../components/Products/ProductList';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to Our Store</h1>
      <ProductList />
      <Outlet />
    </div>
  );
};

export default HomePage;
