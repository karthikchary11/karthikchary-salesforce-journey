import { Badge } from "@/components/ui/badge";
import { Award, Star } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { title: "Apex Specialist", type: "Superbadge" },
    { title: "Flow Administration", type: "Superbadge" },
    { title: "Flow Elements & Resources", type: "Superbadge" },
    { title: "Flow Orchestration", type: "Superbadge" },
    { title: "Process Automation", type: "Superbadge" },
    { title: "Flow Fundamentals", type: "Superbadge" }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Certifications & <span className="gradient-text">Superbadges</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Validated expertise through Salesforce's rigorous hands-on challenges
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <Badge variant="secondary" className="gap-1">
                    <Star className="h-3 w-3 fill-primary text-primary" />
                    {cert.type}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
