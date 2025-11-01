import React from 'react';
import { motion } from 'framer-motion';
// Using your project's 'lucide-react' icons
import { Award, BookOpen, Trophy, Users } from 'lucide-react';

// Using the correct import paths from 'src/assets'
import nttAwardImage1 from '../assets/ntt-award-1.jpg';
import nttAwardImage2 from '../assets/ntt-award-2.jpg';

const Achievements: React.FC = () => {
  // Animation variants for staggered appearance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger items as they appear
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    // Using your project's standard 'glass-card' theme
    <section id="achievements" className="py-20 px-4 bg-muted/20">
      {/* Centered container, max-w-4xl for a clean single column */}
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          My <span className="gradient-text">Achievements</span>
        </motion.h2>

        {/* Main grid changed to a single column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8" // This is now a single column
        >
          {/* Card 1: NTT DATA Award */}
          <motion.div 
            variants={itemVariants} 
            className="glass-card p-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-4">
                 <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Awarded by NTT DATA Leadership</h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                I was awarded with goodies, including a bag, from NTT DATA officials for being part of their Center of Excellence (COE). This recognition came from the **VP and SVP of Talent Acquisition** at NTT DATA.
              </p>
              
              {/* Images are in a 2-col grid *within* the card to keep them large */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                      <img src={nttAwardImage1} alt="Award Ceremony" className="w-full h-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                      <img src={nttAwardImage2} alt="NTT Data Goodies" className="w-full h-full object-cover" />
                  </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Journal Publication */}
          <motion.div variants={itemVariants} 
            className="glass-card p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">International Journal Publication</h3>
              <p className="text-muted-foreground text-sm">
                Published a paper on the **'Secure Load Balancer'** (Cyber Security), proposing a blockchain-based architecture to replace traditional load balancers.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Salesforce Trailblazer */}
          <motion.div variants={itemVariants} 
            className="glass-card p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Salesforce Trailblazer</h3>
              <p className="text-muted-foreground text-sm">
                Achieved **6 Salesforce Superbadges** and over **50+ badges** on the Trailhead platform.
              </p>
            </div>
          </motion.div>
          
          {/* Card 4: Active Community Member */}
          <motion.div variants={itemVariants} 
            className="glass-card p-6 flex items-start space-x-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Active Community Member</h3>
              <p className="text-muted-foreground text-sm">
                Active member of the **Salesforce Developer Group – Hyderabad chapter**.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;