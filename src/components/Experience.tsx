import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Atoms Digital Solutions",
    period: "Dec 2024 – Mar 2025",
    description: [
      "Building responsive web applications with modern frameworks",
      "Optimizing UI/UX design and user experience flows",
      "Improving application performance and load times",
      "Collaborating with cross-functional teams on client projects",
    ],
    current: false,
  },
  {
    title: "Frontend Developer Intern",
    company: "Remote Internship",
    period: "3 months",
    description: [
      "Designed and developed dynamic web pages with interactive features",
      "Implemented responsive layouts using HTML, CSS, and JavaScript",
      "Enhanced user engagement through modern UI components",
      "Collaborated with designers to bring mockups to life",
    ],
    current: false,
  },
  {
    title: "Research Intern",
    company: "IIT Mandi",
    period: "1 month",
    description: [
      "Contributed to academic software research projects",
      "Analyzed and implemented computational algorithms",
      "Documented research findings and technical specifications",
      "Collaborated with researchers on cutting-edge technology",
    ],
    current: false,
  },
];

const certifications = [
  "JavaScript Certification (GUVI)",
  "HTML & CSS Certification (GUVI)",
  "Python Programming (Udemy)",
  "Generative AI Fundamentals (LinkedIn/Microsoft)",
  "Postman API Fundamentals",
  "Gen AI Productivity Skills",
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Experience & Certifications
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Growing through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-border" />
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Dot */}
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      exp.current 
                        ? 'bg-primary shadow-glow-primary animate-glow-pulse' 
                        : 'bg-accent/20 border-2 border-accent'
                    }`}>
                      <Briefcase className={`h-6 w-6 ${exp.current ? 'text-primary-foreground' : 'text-accent'}`} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 backdrop-blur-glass bg-glass-bg border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-primary transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h4>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                        {exp.current && (
                          <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="backdrop-blur-glass bg-glass-bg border border-glass-border rounded-lg p-4 shadow-glass hover:shadow-glow-accent hover:border-accent/50 transition-all duration-300 text-center group"
              >
                <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="backdrop-blur-glass bg-glass-bg border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-primary transition-all duration-300">
              <div className="text-4xl mb-3">🏀</div>
              <h4 className="text-xl font-bold text-foreground mb-2">District-level Basketball Player</h4>
              <p className="text-muted-foreground">Competed at district level, demonstrating teamwork, discipline, and competitive excellence</p>
            </div>
            <div className="backdrop-blur-glass bg-glass-bg border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-accent transition-all duration-300">
              <div className="text-4xl mb-3">👥</div>
              <h4 className="text-xl font-bold text-foreground mb-2">ACM-W Board Member</h4>
              <p className="text-muted-foreground">Active leadership role in promoting women in computing and organizing tech events</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
