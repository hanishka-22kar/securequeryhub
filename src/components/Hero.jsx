import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onGetStarted }) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            Innovative Banking Security
          </span>
          <h1 className="mt-8 text-5xl md:text-6xl font-bold text-dark leading-tight">
            Securing Identity, Streamlining Service
          </h1>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Advanced AI-powered identity verification and banking security solutions for the modern financial world.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button 
              onClick={onGetStarted}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-secondary transition-colors text-lg font-medium"
            >
              Get Started
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-colors text-lg font-medium">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;