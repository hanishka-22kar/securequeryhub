import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Yuvraj Mahendra Sanghai",
    role: "Computer Engineering",
    email: "yuvrajms008@gmail.com",
    mobile: "8378833508"
  },
  {
    name: "Gopal Vijay Dose",
    role: "Computer Engineering",
    email: "gopaldose21@gmail.com",
    mobile: "8605961162"
  },
  {
    name: "Pranjal Dhananjay Sapkale",
    role: "Computer Engineering",
    email: "pranjalsapkaledgk@gmail.com",
    mobile: "8600170063"
  },
  {
    name: "Hanishka Chandrabhan Baviskar",
    role: "Computer Engineering",
    email: "hanishkabaviskar@gmail.com",
    mobile: "7558245617"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold text-dark">Meet Our Team</h2>
          <p className="mt-4 text-xl text-gray-600">The innovative minds behind GuardAI</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-primary font-bold">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.email}</p>
              <p className="text-sm text-gray-500">{member.mobile}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;