import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

// Move navLinks outside component for better performance
const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "use-cases", label: "Use Cases" },
  { id: "achievements", label: "Trailhead" },
  { id: "certifications", label: "Certifications" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

// Throttle utility for performance optimization
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: any[]) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay);
    }
  };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Named function for scroll handling with throttling
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 20);
    }, 100); // Throttle to 100ms for performance

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Named function for navigation click
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // Named function for logo click
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Named function for theme toggle
  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Named function for mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Named function for resume download
  const handleResumeDownload = () => {
    window.open('#download', '_self');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-primary via-primary/95 to-secondary backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <button
            onClick={handleLogoClick}
            className="text-xl font-bold text-primary-foreground hover:opacity-80 transition-opacity"
            aria-label="Scroll to top - Karthik Chary"
          >
            Karthik Chary
          </button>

          {/* Desktop Navigation */}
          <DesktopNav navLinks={navLinks} onNavClick={handleNavClick} />

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className="text-primary-foreground hover:bg-primary-foreground/10"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            <Button
              size="sm"
              className="hidden md:inline-flex bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={handleResumeDownload}
              aria-label="Download resume"
            >
              Download Resume
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
              onClick={handleMobileMenuToggle}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileNav
          isOpen={isMobileMenuOpen}
          navLinks={navLinks}
          onNavClick={handleNavClick}
        />
      </div>
    </nav>
  );
};

// Separate component for Desktop Navigation
interface NavProps {
  navLinks: Array<{ id: string; label: string }>;
  onNavClick: (id: string) => void;
}

const DesktopNav = ({ navLinks, onNavClick }: NavProps) => (
  <div className="hidden md:flex items-center gap-1">
    {navLinks.map((link) => (
      <button
        key={link.id}
        onClick={() => onNavClick(link.id)}
        className="px-4 py-2 text-primary-foreground/90 hover:text-primary-foreground font-medium relative group transition-colors"
        aria-label={`Navigate to ${link.label} section`}
      >
        {link.label}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-foreground group-hover:w-full transition-all duration-300" />
      </button>
    ))}
  </div>
);

// Separate component for Mobile Navigation
interface MobileNavProps extends NavProps {
  isOpen: boolean;
}

const MobileNav = ({ isOpen, navLinks, onNavClick }: MobileNavProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 animate-fade-in">
      <div className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavClick(link.id)}
            className="px-4 py-3 text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10 rounded-lg text-left transition-all"
            aria-label={`Navigate to ${link.label} section`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
