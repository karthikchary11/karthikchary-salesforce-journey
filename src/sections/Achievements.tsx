import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Trophy, Users } from 'lucide-react';
import AchievementCard from '@/components/AchievementCard';

// Import custom icons
import TrailheadIcon from '@/assets/trailhead-icon.svg?react'; // Import as React component
import SuperbadgeIcon from '@/assets/superbadge-icon.svg?react';

// Import images
import nttAwardImage1 from '@/assets/ntt-award-1.jpg';
import nttAwardImage2 from '@/assets/ntt-award-2.jpg';

// Define the achievements
const achievementsData = [
  {
    type: 'stat',
    icon: <TrailheadIcon className="h-6 w-6 text-primary" />,
    title: 'Trailhead Ranger',
    description: 'Demonstrated dedication to learning on the Salesforce platform.',
    statistic: '77,000+',
    statisticLabel: 'Trailhead Points',
  },
  {
    type: 'stat',
    icon: <Trophy className="h-6 w-6 text-primary" />,
    title: 'Trailblazer Badges',
    description: 'Completed hands-on challenges and modules across the ecosystem.',
    statistic: '50+',
    statisticLabel: 'Badges Earned',
  },
  {
    type: 'list',
    icon: <SuperbadgeIcon className="h-6 w-6 text-primary" />,
    title: 'Superbadges',
    description: 'Proved expertise with complex, real-world business problems.',
    items: [
      'Apex Specialist',
      'Flow Administration',
      'Flow Orchestration',
      'Process Automation',
      'Flow Elements & Resources',
      'Flow Fundamentals',
    ],
  },
  {
    type: 'image',
    icon: <Award className="h-6 w-6 text-primary" />,
    title: 'NTT DATA Award',
    description: 'Honored by the VP & SVP of Talent Acquisition for outstanding performance.',
    images: [nttAwardImage1, nttAwardImage2],
  },
  {
    type: 'list',
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: 'International Journal Publication',
    description: 'Authored and published a research paper on blockchain technology.',
    items: ['Secure Load Balancer – A Blockchain-based Load Balancer (IJTER)'],
  },
  {
    type: 'list',
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Community & Recognition',
    description: 'Actively contributing to the Salesforce and tech community.',
    items: [
      'Top 60, NTT DATA COE Salesforce Program',
      'Active Member, Salesforce Developer Group – Hyderabad',
    ],
  },
];

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="gradient-text">Achievements</span>
        </h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((ach, index) => (
            <AchievementCard
              key={index}
              icon={ach.icon}
              title={ach.title}
              description={ach.description}
              statistic={ach.type === 'stat' ? ach.statistic : undefined}
              statisticLabel={ach.type === 'stat' ? ach.statisticLabel : undefined}
              items={ach.type === 'list' ? ach.items : undefined}
              images={ach.type === 'image' ? ach.images : undefined}
              animationVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
