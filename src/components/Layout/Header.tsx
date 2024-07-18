import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';



const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalCount = useSelector((state: RootState) => state.cart.totalCount);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-10 top-0 left-0 flex items-center justify-between px-4 py-4 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-white'}`}>
      <div className="flex items-center gap-2">
        <Link to='/' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'}`}>Core</Link>
      </div>
      <nav className="hidden md:flex gap-4">
        <ul className="flex gap-4">
          <li><Link to='/' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`}>Men</Link></li>
          <li><Link to='/shop' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`}>Women</Link></li>
        </ul>
      </nav>
      <div className='hidden md:flex'>
        <div className="flex gap-4">
          {user ? (
            <div className="flex gap-2 items-center">
              <Link to='/user' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`}>Profile</Link>
            </div>
          ) : (
            <Link to='/login' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`}>Login</Link>
          )}
          <Link to='/cart' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`}>Cart ({totalCount})</Link>
          
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-xl focus:outline-none">
          <svg className={`${isScrolled ? 'text-white' : 'text-black'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-14 left-0 right-0 ${isScrolled ? 'bg-black' : 'bg-white'} shadow-md rounded-lg py-4`}>
        <ul className="flex flex-col items-center gap-4">
          <li><Link to='/' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`} onClick={toggleMenu}>Home</Link></li>
          <li><Link to='/' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`} onClick={toggleMenu}>Men</Link></li>
          <li><Link to='/' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`} onClick={toggleMenu}>Women</Link></li>
          {user ? (
            <li><Link to='/user' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`} onClick={toggleMenu}>Profile</Link></li>
          ) : (
            <li><Link to='/login' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`} onClick={toggleMenu}>Login</Link></li>
          )}
          <li><Link to='/cart' className={`text-lg font-bold ${isScrolled ? 'text-white' : 'text-black'} hover:underline`} onClick={toggleMenu}>Cart ({totalCount})</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

