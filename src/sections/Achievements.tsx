import React from 'react';
import { motion } from 'framer-motion';
// 1. Using your project's 'lucide-react' icons
import { Award, BookOpen, Trophy, Users } from 'lucide-react'; 

// 2. Using the correct import paths from 'src/assets'
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
    // 3. Using your standard section padding (removed bg-gray-900)
    <section id="achievements" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          // 4. Using your project's 'gradient-text' class
          className="text-4xl font-bold mb-12 text-center"
        >
          My <span className="gradient-text">Achievements</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Section 1: NTT DATA Award */}
          <motion.div variants={itemVariants} 
            // 5. Using your project's 'glass-card' style
            className="glass-card p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
          >
            <Award className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-3xl font-bold mb-4">Awarded by NTT DATA Leadership</h3>
            {/* 6. Using your project's 'text-muted-foreground' */}
            <p className="text-lg text-muted-foreground mb-6">
              I was honored to be awarded with exclusive NTT DATA goodies by the **VP and SVP of Talent Acquisition**
              at NTT DATA for my contributions and outstanding performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src={nttAwardImage1} alt="Award Ceremony" className="w-full h-auto object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                    <img src={nttAwardImage2} alt="NTT Data Goodies" className="w-full h-auto object-cover" />
                </div>
            </div>
          </motion.div>

          {/* Section 2: Other Key Achievements */}
          <div className="space-y-8">
            {/* Journal Publication */}
            <motion.div variants={itemVariants} 
              className="glass-card p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">International Journal Publication</h3>
                <p className="text-muted-foreground">
                  Authored and published a research paper on **blockchain technology** for an international conference.
                </p>
              </div>
            </motion.div>

            {/* Salesforce Superbadges & Badges */}
            <motion.div variants={itemVariants} 
              className="glass-card p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
                {/* 7. Replaced FaSalesforce with Trophy, which you use in Certifications.tsx */}
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Salesforce Trailblazer</h3>
                <p className="text-muted-foreground">
                  Achieved **6 Salesforce Superbadges** and over **50+ badges**, demonstrating advanced proficiency.
                </p>
              </div>
            </motion.div>

            {/* Salesforce Developer Group */}
            <motion.div variants={itemVariants} 
              className="glass-card p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Active Community Member</h3>
                {/* 8. FIXED SYNTAX ERROR HERE */}
                <p className="text-muted-foreground">
                  Active member of the **Salesforce Developer Group – Hyderabad chapter**.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
