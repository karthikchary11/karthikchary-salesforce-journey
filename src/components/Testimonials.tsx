import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Karthik consistently demonstrates strong problem-solving skills and an excellent grasp of Flow automation.",
      author: "NTT DATA COE Mentor"
    },
    {
      quote: "A proactive and curious learner — Karthik contributed great ideas during our CRM sessions.",
      author: "Peer Trainee"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What colleagues and mentors say about my work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 relative group hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              <div className="relative z-10">
                <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  <p className="font-semibold text-sm gradient-text">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
