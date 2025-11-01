import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Star, Trophy, Users } from 'lucide-react';
import AchievementCard from '@/components/AchievementCard';

// 1. Import SVGs as standard string URLs (no '?react')
import trailheadIconUrl from '../assets/trailhead-icon.svg'; 
import superbadgeIconUrl from '../assets/superbadge-icon.svg';

// Import images
import nttAwardImage1 from '../assets/ntt-award-1.jpg';
import nttAwardImage2 from '../assets/ntt-award-2.jpg';

// 2. Define the achievements
const achievementsData = [
  {
    type: 'stat',
    // 3. Render the imported URL inside an <img> tag
    icon: <img src={trailheadIconUrl} alt="Trailhead icon" className="h-6 w-6" />,
    title: 'Trailhead Ranger',
    description: 'Demonstrated dedication to learning on the Salesforce platform.',
    statistic: '77,000+',
    statisticLabel: 'Trailhead Points',
  },
  {
    type: 'stat',
    icon: <Trophy className="h-6 w-6 text-primary" />, // Lucide components work as-is
    title: 'Trailblazer Badges',
    description: 'Completed hands-on challenges and modules across the ecosystem.',
    statistic: '50+',
    statisticLabel: 'Badges Earned',
  },
  {
    type: 'list',
    // 4. Render the imported URL inside an <img> tag
    icon: <img src={superbadgeIconUrl} alt="Superbadge icon" className="h-6 w-6" />,
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
    icon: <Award className="h-6 w-6 text-primary" />, // Lucide components work as-is
    title: 'NTT DATA Award',
    description: 'Honored by the VP & SVP of Talent Acquisition for outstanding performance.',
    images: [nttAwardImage1, nttAwardImage2],
  },
  {
    type: 'list',
    icon: <BookOpen className="h-6 w-6 text-primary" />, // Lucide components work as-is
    title: 'International Journal Publication',
    description: 'Authored and published a research paper on blockchain technology.',
    items: ['Secure Load Balancer – A Blockchain-based Load Balancer (IJTER)'],
  },
  {
    type: 'list',
    icon: <Users className="h-6 w-6 text-primary" />, // Lucide components work as-is
    title: 'Community & Recognition',
    description: 'Actively contributing to the Salesforce and tech community.',
    items: [
      'Top 60, NTT DATA COE Salesforce Program',
      'Active Member, Salesforce Developer Group – Hyderabad',
    ],
  },
];

// 5. Renamed component to TrailheadStats
const TrailheadStats: React.FC = () => { 
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
    // 6. Changed ID to be unique
    <section id="trailhead-stats" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Trailhead <span className="gradient-text">Stats</span>
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

export default TrailheadStats; // 7. Export the new component