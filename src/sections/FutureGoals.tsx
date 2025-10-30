import { Target, TrendingUp } from "lucide-react";

const FutureGoals = () => {
  const goals = [
    {
      year: "2026",
      text: "Achieve Salesforce Certified Administrator & Platform Developer I"
    },
    {
      year: "2027",
      text: "Deepen expertise in Flow Orchestration & LWC"
    },
    {
      year: "Long Term",
      text: "Contribute to enterprise-scale CRM architecture"
    }
  ];

  return (
    <section id="future-goals" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">
              Future <span className="gradient-text">Goals</span>
            </h2>
          </div>
          <p className="text-muted-foreground">
            Continuous growth and learning in the Salesforce ecosystem
          </p>
        </div>

        <div className="space-y-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="glass-card p-6 flex items-start gap-6 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-2 min-w-[100px]">
                <div className="p-3 rounded-full bg-gradient-to-br from-primary to-secondary">
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-sm font-bold gradient-text">{goal.year}</span>
              </div>
              <div className="flex-1 pt-3">
                <p className="text-lg text-foreground leading-relaxed">
                  {goal.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureGoals;
