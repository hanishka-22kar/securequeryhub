import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Video, Brain, Lock, UserCheck, BarChart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "AI-driven VKYC",
    description: "Secure and efficient identity verification with advanced facial recognition."
  },
  {
    icon: Brain,
    title: "Smart Chatbots",
    description: "Instant query resolution with AI-powered conversation systems."
  },
  {
    icon: UserCheck,
    title: "Personalized Services",
    description: "Tailored recommendations based on individual customer data."
  },
  {
    icon: Lock,
    title: "Biometric Authentication",
    description: "Enhanced fraud prevention with cutting-edge security measures."
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Centralized platforms providing actionable customer insights."
  },
  {
    icon: Video,
    title: "Video Processing",
    description: "Advanced video and audio query processing with NLP."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-dark"
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600"
          >
            Discover our comprehensive suite of security and service solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;