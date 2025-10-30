import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// All sections now imported from the new 'sections' directory
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import UseCases from "@/sections/UseCases";
import Testimonials from "@/sections/Testimonials";
import FutureGoals from "@/sections/FutureGoals";
import Contact from "@/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* 1. Who Am I? (Introduction & Foundation) */}
      <About />
      <Education />

      {/* 2. Core Expertise & Validation */}
      <Skills />
      <Certifications />
      
      {/* 3. Professional History & Work Showcase */}
      <Experience />
      <Projects />
      <UseCases />
      
      {/* 4. Social Proof & Future */}
      <Testimonials />
      <FutureGoals />
      
      {/* 5. Action */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
