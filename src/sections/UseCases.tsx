import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle2, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS_DRIVE_URL = "https://drive.google.com/drive/folders/1KNw-2fhm2O06_JfIM5YaNRqGdCfsXjdV?usp=drive_link";

const UseCases = () => {
  const cases = [
    {
      name: "Sales Performance Dashboard",
      problem: "Lack of visibility into sales metrics",
      solution: "Interactive dashboards and summary formulas for KPIs",
      components: ["Reports", "Dashboards", "Formulas"]
    },
    {
      name: "Tiered Discount Governance",
      problem: "Uncontrolled discounts",
      solution: "Multi-step approvals with validation and auto-reject flows",
      components: ["Approval Process", "Validation Rules", "Scheduled Flow"]
    },
    {
      name: "Pipeline Visibility & Data Governance",
      problem: "Incomplete opportunity data",
      solution: "Record Types, mandatory fields and scheduled alerts for stalled deals",
      components: ["Record Types", "Validation Rules", "Scheduled Flows"]
    }
  ];

  return (
    <section id="use-cases" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Use <span className="gradient-text">Cases</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world business problems solved through Salesforce automation and governance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <Card key={index} className="glass-card group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{useCase.name}</CardTitle>
                <CardDescription className="flex items-start gap-2 mt-3">
                  <span className="text-destructive font-medium">Problem:</span>
                  <span>{useCase.problem}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-primary font-medium">Solution:</span>
                    <p className="text-sm text-muted-foreground mt-1">{useCase.solution}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-muted-foreground">Components Used:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {useCase.components.map((component, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              {/* Added CardFooter with Link Button */}
              <CardFooter>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open(PROJECTS_DRIVE_URL, '_blank')}
                  className="w-full justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  <Link className="h-4 w-4 mr-2" />
                  View Documentation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
