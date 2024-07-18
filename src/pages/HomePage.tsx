import React from 'react';
import {Outlet} from 'react-router-dom';
import ProductList from '../components/Products/ProductList';


const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl">Welcome to Our Store</h1>
     
      <ProductList />
      <Outlet />
    </div>
  );
};

export default HomePage;
