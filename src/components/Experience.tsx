import { Building2, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Developed automation workflows using Flow, Approval Process, and Validation Rules",
    "Built data-driven dashboards and reports for Sales and Service performance tracking",
    "Managed user profiles, roles, and field-level security",
    "Collaborated on Sales Cloud, Service Cloud, and Marketing Cloud configurations"
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="glass-card p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Salesforce Admin & Developer Trainee</h3>
              <div className="flex items-center gap-2 text-primary mb-2">
                <Building2 className="h-5 w-5" />
                <span className="font-semibold">NTT DATA Center of Excellence</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
              <Calendar className="h-4 w-4" />
              <span>Jan 2023 – Present</span>
            </div>
          </div>

          <div className="space-y-3">
            {responsibilities.map((item, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
