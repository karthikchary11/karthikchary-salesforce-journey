import { Heart, Cloud } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-muted/20">
      {/* Cloud Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Kukunoori Karthik Chary. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground/70">
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-primary transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <p className="flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> — Inspired by
            </p>
            <Cloud className="h-5 w-5 text-primary" />
            <span className="font-semibold gradient-text">Salesforce</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
