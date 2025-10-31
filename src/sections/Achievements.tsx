import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBookOpen, FaSalesforce, FaUsers } from 'react-icons/fa';

// 1. IMPORT YOUR IMAGES FROM 'src/assets'
import nttAwardImage1 from '../assets/ntt-award-1.jpg';
import nttAwardImage2 from '../assets/ntt-award-2.jpg';


const Achievements: React.FC = () => {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="achievements" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          My Achievements
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Section 1: NTT DATA Award */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <FaAward className="text-6xl text-yellow-400 mb-4" />
            <h3 className="text-3xl font-bold mb-4">Awarded by NTT DATA Leadership</h3>
            <p className="text-lg text-gray-300 mb-6">
              I was honored to be awarded with exclusive NTT DATA goodies by the **VP and SVP of Talent Acquisition**
              at NTT DATA for my contributions and outstanding performance. This recognition came from senior leadership,
              acknowledging my dedication and impact within the organization.
            </p>
            
            {/* 2. USE THE IMPORTED IMAGE VARIABLES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300">
                    <img src={nttAwardImage1} alt="NTT Data Goodies" className="w-full h-auto object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300">
                    <img src={nttAwardImage2} alt="Award Ceremony" className="w-full h-auto object-cover" />
                </div>
            </div>
          </motion.div>

          {/* Section 2: Other Key Achievements */}
          <div className="space-y-10">
            {/* Journal Publication */}
            <motion.div variants={itemVariants} className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-700/50 transition-shadow duration-300">
              <FaBookOpen className="text-4xl text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">International Journal Publication</h3>
                <p className="text-gray-300">
                  Authored and published a research paper on **blockchain technology** for an international conference,
                  contributing to academic discourse in distributed ledger systems.
                </p>
              </div>
            </motion.div>

            {/* Salesforce Superbadges & Badges */}
            <motion.div variants={itemVariants} className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-700/50 transition-shadow duration-300">
              <FaSalesforce className="text-4xl text-blue-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Salesforce Trailblazer Recognition</h3>
                <p className="text-gray-300">
                  Achieved **6 Salesforce Superbadges** and over **50+ badges**, demonstrating advanced proficiency and hands-on expertise
                  across various Salesforce clouds and development practices.
                </p>
              </div>
            </motion.div>

            {/* Salesforce Developer Group */}
            <motion.div variants={itemVariants} className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-purple-700/50 transition-shadow duration-300">
              <FaUsers className="text-4xl text-green-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Active Community Member</h3>
                <p className="text-gray-300">
                  Active member of the **Salesforce Developer Group – Hyderabad chapter**, engaging in knowledge sharing,
                  community events, and collaborative learning within the Salesforce ecosystem.
                **</p>** </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
