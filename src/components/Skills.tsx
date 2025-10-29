import { Shield, Zap, Code, BarChart, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Administration",
      icon: Shield,
      skills: ["User & Security Management", "Record Types & Page Layouts", "Validation Rules", "Approval Processes"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Automation",
      icon: Zap,
      skills: ["Flow Builder", "Scheduled & Record-Triggered Flows", "Email Alerts", "Auto-Assignment Rules"],
      color: "from-cyan-500 to-teal-500"
    },
    {
      name: "Development",
      icon: Code,
      skills: ["Apex (Triggers & Classes)", "Lightning Web Components (Beginner)", "Data Loader", "Postman"],
      color: "from-teal-500 to-green-500"
    },
    {
      name: "Analytics",
      icon: BarChart,
      skills: ["Reports & Dashboards", "Summary Formulas", "Dynamic Dashboards"],
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Clouds",
      icon: Cloud,
      skills: ["Sales Cloud", "Service Cloud", "Marketing Cloud"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Core <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-2 bg-background/50 rounded-lg text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
