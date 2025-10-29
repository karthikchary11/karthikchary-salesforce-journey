import { Trophy, Award, Users, FileText } from "lucide-react";

const Achievements = () => {
  const stats = [
    { icon: Trophy, value: "77,000+", label: "Trailhead Points" },
    { icon: Award, value: "50+", label: "Badges Earned" },
    { icon: Award, value: "6", label: "Superbadges" },
  ];

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
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Trailhead & <span className="gradient-text">Achievements</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
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
