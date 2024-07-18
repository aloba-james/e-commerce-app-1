import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, AppDispatch } from '../../store'; // Adjust the import path as needed
import { addItem } from '../../features/cart/cartSlice';

interface Product {
  id: string; // Changed to string to match with URL param
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = useSelector((state: RootState) =>
    state.products.items.find((item) => item.id === productId)
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    if (product) {
      const cartItem: CartItem = {
        ...product,
        quantity: 1 // Adding a default quantity of 1
      };
      dispatch(addItem(cartItem));
    }
  };

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between w-full p-4">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 md:pl-8">
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;