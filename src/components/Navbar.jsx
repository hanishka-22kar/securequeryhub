import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-dark">
              Guard<span className="text-primary">AI</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#solutions" className="text-gray-600 hover:text-primary transition-colors">Solutions</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;