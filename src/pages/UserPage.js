import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../services/api';

const UserPage = () => {
    const user  = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    getUserData();
  }, []);


  if (!userData) {
    return <div>Loading...</div>;
  }

  const { orders } = userData;

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Credentials</h2>
        <p>Username: {user.username}</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">User Order History</h2>
        <ol>
          {orders.map(order => (
            <li key={order.id} className="mb-4">
              <p><strong>Order ID:</strong> {order.id}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
              <p><strong>Products:</strong></p>
              <ul className="ml-4 list-disc">
                {order.products.map(product => (
                  <li key={product.id}>
                    {product.name} - Quantity: {product.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default UserPage;
