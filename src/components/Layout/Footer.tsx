import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p>
             I am a passionate developer who is dedicated to providing high-quality products.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Links</h2>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/shop" className="hover:text-gray-400">Men</a></li>
              <li><a href="/about" className="hover:text-gray-400">Women</a></li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>Victoria Island</p>
            <p>Lagos, Nigeria</p>
            <p>Email: <a href="mailto:alobaakinsanmi119@gmail.com" className="hover:text-gray-400">alobaakinsanmi119@gmail.com</a></p>
          </div>
        
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Akinsanmi James Aloba. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

