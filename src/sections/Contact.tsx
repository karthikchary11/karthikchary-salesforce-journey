import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Trophy, Copy } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText("kukunoorikarthik@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h2>

        <div className="glass-card p-8 md:p-12 text-center">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Interested in collaborating or discussing Salesforce opportunities? 
            <br />
            Feel free to reach out to me directly.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
              onClick={() => window.location.href = 'mailto:kukunoorikarthik@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:bg-accent transition-all duration-300"
              onClick={copyEmail}
            >
              <Copy className="mr-2 h-5 w-5" />
              Copy Email
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="ghost" 
              size="lg"
              className="hover:text-primary transition-colors"
              onClick={() => window.open('https://linkedin.com/in/karthikchary', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="hover:text-primary transition-colors"
              onClick={() => window.open('https://www.salesforce.com/trailblazer/karthikchary11', '_blank')}
            >
              <Trophy className="mr-2 h-5 w-5" />
              Trailhead Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
