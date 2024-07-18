import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const cart = useSelector(state => state.cart);
  const { items: products , totalCount, totalAmount } = cart;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., API call, validation)
    console.log('Form submitted!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      
      {/* Order Summary */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Order Summary</h2>
        <div className="border-t border-b border-gray-300 py-4">
          {products.map(product => (
            <div key={product.id} className="flex items-center justify-between py-2">
              <p>{product.name} - Quantity: {product.quantity}</p>
              <p>${product.price * product.quantity}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-lg font-bold">Total:</p>
          <p className="text-lg font-bold">${totalAmount}</p>
        </div>
      </div>

      {/* Shipping Information Form */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" id="city" name="city" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input type="text" id="zipCode" name="zipCode" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">Place Order</button>
      </form>

      {/* Back to Cart Link */}
      <div className="mt-8 text-center">
        <Link to="/cart" className="text-indigo-600 hover:text-indigo-800">Back to Cart</Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
