import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, AppDispatch } from '../../store';
import { getProducts } from '../../features/products/productsSlice';
import { addItem } from '../../features/cart/cartSlice';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Omit<Product, 'description' | 'image'> {
  quantity: number;
}

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.items);
  const status = useSelector((state: RootState) => state.products.status);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <p className="text-center text-xl">Loading...</p>;
  }

  if (status === 'failed') {
    return <p className="text-center text-xl text-red-500">Error: {error}</p>;
  }

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1 
    };
    dispatch(addItem(cartItem));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg flex flex-col hover:shadow-2xl">
            <Link to={`/product/${product.id}`} className="mb-4">
              <img src={product.image} alt={product.name} className="w-full h-50 object-cover hover:opacity-75 transition duration-300 ease-in out rounded transform hover:scale-105 " />
              <h3 className="text-xl font-semibold m-3 hover:text-blue-500 ">{product.name}</h3>
              <p className="text-gray-700">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;