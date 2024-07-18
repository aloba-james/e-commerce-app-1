import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import ScrollToTop from './ScrollToTop';
import './App.css';

const Cart = lazy(() => import('./pages/CartPage'));
const Checkout = lazy(() => import('./pages/CheckoutPage'));
const Footer = lazy(() => import('./components/Layout/Footer'));
const Home = lazy(() => import('./pages/HomePage'));
const Header = lazy(() => import('./components/Layout/Header'));
const Login = lazy(() => import('./pages/LoginPage'));
const Product = lazy(() => import('./pages/ProductPage'));
const User = lazy(() => import('./pages/UserPage'));

const App: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="flex-grow container mx-auto px-4 py-6">Loading...</div>}>
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={user ? <User /> : <Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
