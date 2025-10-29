import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Trophy } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background animate-gradient-shift" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Kukunoori Karthik Chary" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left space-y-6 order-2 md:order-1">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Kukunoori <span className="gradient-text">Karthik Chary</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Salesforce Administrator & Developer
              </p>
              <p className="text-lg text-muted-foreground/80">
                NTT DATA COE Trainee
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl">
              Building scalable CRM solutions with 1.5+ years of experience across Sales, Service, and Marketing Cloud
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/karthikchary', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-accent transition-all duration-300"
                onClick={() => window.open('https://www.salesforce.com/trailblazer/karthikchary11', '_blank')}
              >
                <Trophy className="mr-2 h-5 w-5" />
                Trailhead
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="hover:bg-accent transition-all duration-300"
                onClick={() => window.location.href = 'mailto:kukunoorikarthik@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
