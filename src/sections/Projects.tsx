import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // Added Button

const PROJECTS_DRIVE_URL = "https://drive.google.com/drive/folders/1KNw-2fhm2O06_JfIM5YaNRqGdCfsXjdV?usp=drive_link";

const Projects = () => {
  const projects = [
    {
      name: "Lead Routing System",
      description: "Automated lead assignment and tracking using record-triggered flows and queues to ensure fair distribution and faster conversions.",
      tags: ["Flow Builder", "Queues", "Decision Elements"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      name: "Real Estate CRM",
      description: "End-to-end CRM for managing property sales. Implemented record types, validation rules, and two-level approval for deals.",
      tags: ["Custom Objects", "Record Types", "Approval Processes"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Learning Management System (LMS)",
      description: "Managed student, faculty, and course data with automation for enrollment, reporting, and progress tracking.",
      tags: ["Lightning App Builder", "Flows", "Reports"],
      color: "from-teal-500/20 to-green-500/20"
    },
    {
      name: "Case Automation (Service Cloud)",
      description: "Built SLA escalation and time-based notifications using Flows to ensure customer issue resolution within defined timelines.",
      tags: ["Service Cloud", "Time-Based Flows", "Email Alerts"],
      color: "from-indigo-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Key <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  {/* Replaced icon with Button link */}
                  <Button
                    variant="ghost" 
                    size="icon"
                    className="h-8 w-8 p-0 text-muted-foreground group-hover:text-primary"
                    onClick={() => window.open(PROJECTS_DRIVE_URL, '_blank')}
                    aria-label={`View documentation for ${project.name}`}
                  >
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
