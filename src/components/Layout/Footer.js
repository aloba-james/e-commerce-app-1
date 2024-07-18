import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p>
              We are a team of passionate developers who are dedicated to providing high-quality products.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Links</h2>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/shop" className="hover:text-gray-400">Shop</a></li>
              <li><a href="/about" className="hover:text-gray-400">About</a></li>
              <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p>123 Street Name</p>
            <p>City, Country</p>
            <p>Email: contact@example.com</p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Insert your social media icons here */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Insert your social media icons here */}
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Insert your social media icons here */}
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
