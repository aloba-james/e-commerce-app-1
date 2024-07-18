import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../../features/cart/cartSlice';

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.items.find((item) => item.id === Number(productId))
  );
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between w-full">
      <div className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0">
        <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
      </div>
      <div className="w-full md:w-1/2 lg:w-2/3 p-4 md:p-8">
        <h2 className="text-2xl mb-4">{product.name}</h2>
        <p className="mb-4">{product.description}</p>
        <p className="mb-4">${product.price}</p>
        <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

