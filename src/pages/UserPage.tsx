import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Adjust the import path as needed
import { fetchUserData } from '../services/api';

interface User {
  username: string;
}

interface Product {
  id: string;
  name: string;
  quantity: number;
}

interface Order {
  id: string;
  date: string; 
  products: Product[];
}

const UserPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user as User | null);
  const [userData, setUserData] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data.orders);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data. Please try again later.');
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Credentials</h2>
        <p>Username: {user?.username || 'N/A'}</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">User Order History</h2>
        {userData.length > 0 ? (
          <ol>
            {userData.map(order => (
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
        ) : (
          <p>No order history available.</p>
        )}
      </section>
    </div>
  );
};

export default UserPage;