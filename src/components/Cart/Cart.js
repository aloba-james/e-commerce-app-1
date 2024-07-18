import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, decrementItem, removeItem } from '../../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCount = useSelector((state) => state.cart.totalCount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem({ id }));
  };

  return (
    <div className="border p-4">
      <h2 className="text-2xl mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/shop">Continue Shopping</Link>
        </div>

      ) : (
        <div>
         
          {cartItems.map((item) => (
            <div key={item.id} className="border p-2 mb-2">
              <h3><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className="flex items-center">
                <button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-gray-500 text-white p-1 mr-2"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <button
                  onClick={() => handleIncrement(item)}
                  className="bg-gray-500 text-white p-1 mr-2"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white p-1"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
           <div className="mb-4">
            <p>Total Items: {totalCount}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="bg-blue-500 text-white p-2 ">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
