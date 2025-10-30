import { Code2, Workflow, Database, BarChart3 } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Code2, label: "Development" },
    { icon: Workflow, label: "Automation" },
    { icon: Database, label: "Administration" },
    { icon: BarChart3, label: "Analytics" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate <span className="text-primary font-semibold">Salesforce Administrator & Developer</span> trained at NTT DATA Center of Excellence, with 1.5+ years of hands-on experience across Sales, Service, and Marketing Cloud.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I design and automate scalable CRM solutions using declarative tools like <span className="text-secondary font-semibold">Flow, Approval Processes, and Validation Rules</span> — complemented with basic development expertise in Apex and Lightning Web Components.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My focus is on delivering efficient, data-driven business solutions with real impact.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="h-8 w-8 text-primary mb-2" />
                    <span className="text-sm font-medium text-center">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
