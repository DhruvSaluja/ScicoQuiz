'use client'
import '../app/globals.css';

import React ,{ useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div  >
      {/* Navbar */}
      <nav className="flex  fixed top-0 z-50 w-full mt-2 rounded-full  justify-between items-center px-4 py-2 md:px-8 bg-white bg-opacity-10 backdrop-blur-lg border-b border-gray-300 border-opacity-20">
        <div className="flex ml-9 items-center">
          <img src="/images/logofinal.png" alt="Logo" className="h-14" />
          <span className="text-coral-500 text-5xl font-bold ml-5">SCICOQUIZ</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-20 text-2xl mr-8 text-white">
          <a href="/" className="hover:text-coral-500 hover:underline">HOME</a>
          <a href="/about" className="hover:text-coral-500 hover:underline">ABOUT</a>
          <a href="/team" className="hover:text-coral-500 hover:underline">TEAM</a>
          <a href="/contact" className="hover:text-coral-500 hover:underline">CONTACT US</a>
          <a href="/login" className="hover:text-coral-500 hover:underline">LOGIN</a>
        </div>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <CloseIcon className="h-6 w-6 text-white hover:text-coral-500" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white hover:text-coral-500" />
          )}
        </div>
      </nav>
      
      {/* Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg z-50 ` }>
        <ul className="mt-16 space-y-6 text-center">
          <li><a href="/" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>HOME</a></li>
          <li><a href="/about" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>ABOUT</a></li>
          <li><a href="/team" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>TEAM</a></li>
          <li><a href="/contact" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>CONTACT US</a></li>
          <li><a href="/login" className="block py-3 hover:bg-gray-700" onClick={closeMenu}>LOGIN</a></li>
        </ul>
      </div>
      
      {/* Overlay to close menu when clicking outside */}
      {isOpen && <div className="fixed inset-0 bg-transparent opacity-50 z-10" onClick={closeMenu}></div>}
      
      
    </div>
  );
}
