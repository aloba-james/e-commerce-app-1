import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import './App.css';
import { useSelector } from 'react-redux';
import UserPage from './pages/UserPage';
import ScrollToTop from './ScrollToTop';
import CheckoutPage from './pages/CheckoutPage';

function App () {
  const user  = useSelector((state) => state.auth.user);
  return (
    <>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Header /> 
          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/user" element={user ? <UserPage /> : <LoginPage />} />
              <Route path='checkout' element={<CheckoutPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div> 
    </>
  );
};

export default App;
