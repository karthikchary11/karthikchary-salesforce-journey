import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import UseCases from "@/components/UseCases";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import FutureGoals from "@/components/FutureGoals";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <UseCases />
      <Achievements />
      <Certifications />
      <Testimonials />
      <FutureGoals />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
