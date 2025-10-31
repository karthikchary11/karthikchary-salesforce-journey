import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface AchievementCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  statistic?: string;
  statisticLabel?: string;
  items?: string[];
  images?: string[];
  animationVariants: any; // For framer-motion variants
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  icon,
  title,
  description,
  statistic,
  statisticLabel,
  items,
  images,
  animationVariants,
}) => {
  return (
    <motion.div
      variants={animationVariants}
      className="glass-card p-6 flex flex-col hover:shadow-xl transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Body Content */}
      <div className="flex-grow space-y-4">
        {statistic && statisticLabel && (
          <div className="text-center bg-background/50 p-4 rounded-lg">
            <div className="text-4xl font-bold gradient-text mb-1">
              {statistic}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              {statisticLabel}
            </div>
          </div>
        )}

        {items && (
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="px-3 py-2 bg-background/50 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {images && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={img}
                  alt={`${title} proof ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AchievementCard;
