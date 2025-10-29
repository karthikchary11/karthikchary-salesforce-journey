import { Trophy, Award, Users, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Achievements = () => {
  const [counters, setCounters] = useState({
    points: 0,
    badges: 0,
    superbadges: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate points counter
          let pointsCount = 0;
          const pointsInterval = setInterval(() => {
            pointsCount += 1000;
            if (pointsCount >= 77000) {
              setCounters(prev => ({ ...prev, points: 77000 }));
              clearInterval(pointsInterval);
            } else {
              setCounters(prev => ({ ...prev, points: pointsCount }));
            }
          }, 20);

          // Animate badges counter
          let badgesCount = 0;
          const badgesInterval = setInterval(() => {
            badgesCount += 1;
            if (badgesCount >= 50) {
              setCounters(prev => ({ ...prev, badges: 50 }));
              clearInterval(badgesInterval);
            } else {
              setCounters(prev => ({ ...prev, badges: badgesCount }));
            }
          }, 30);

          // Animate superbadges counter
          let superbadgesCount = 0;
          const superbadgesInterval = setInterval(() => {
            superbadgesCount += 1;
            if (superbadgesCount >= 6) {
              setCounters(prev => ({ ...prev, superbadges: 6 }));
              clearInterval(superbadgesInterval);
            } else {
              setCounters(prev => ({ ...prev, superbadges: superbadgesCount }));
            }
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const achievements = [
    {
      icon: Users,
      text: "Selected among Top 60 students for NTT DATA COE Salesforce Program"
    },
    {
      icon: FileText,
      text: "Published paper: 'Secure Load Balancer – A Blockchain-based Load Balancer' (IJTER)"
    },
    {
      icon: Users,
      text: "Active Member, Salesforce Developer Group — Hyderabad"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Trailhead & <span className="gradient-text">Achievements</span>
        </h2>

        {/* Animated Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
              <Trophy className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <div className="text-4xl font-bold gradient-text mb-2">
              {counters.points.toLocaleString()}+
            </div>
            <div className="text-muted-foreground">Trailhead Points</div>
          </div>

          <div className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
              <Award className="h-8 w-8 text-secondary animate-pulse" />
            </div>
            <div className="text-4xl font-bold gradient-text mb-2">
              {counters.badges}+
            </div>
            <div className="text-muted-foreground">Badges Earned</div>
          </div>

          <div className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
              <Award className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <div className="text-4xl font-bold gradient-text mb-2">
              {counters.superbadges}
            </div>
            <div className="text-muted-foreground">Superbadges</div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed pt-2">
                  {achievement.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
