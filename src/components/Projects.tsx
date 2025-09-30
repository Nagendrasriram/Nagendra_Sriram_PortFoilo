import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";

const projects = [
  {
    title: "Electricity Billing System",
    description: "Enterprise-grade billing system with customer management, bill generation, and payment tracking. Built with Java Swing for desktop application.",
    tech: ["Java", "JDBC", "MySQL", "Swing"],
    github: "https://github.com/Nagendrasriram",
    demo: null,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Car Rental System",
    description: "Interactive web application for car rental services with booking management, user authentication, and real-time availability tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nagendrasriram",
    demo: "https://www.youtube.com/@Nagendra103",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Responsive Resume Website",
    description: "Modern, fully responsive personal resume website with smooth animations and optimized performance across all devices.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nagendrasriram",
    demo: null,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "CNN Pill Quality Classifier",
    description: "Deep learning model for pharmaceutical quality control using Convolutional Neural Networks to classify pill defects with high accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com/Nagendrasriram",
    demo: "https://www.youtube.com/@Nagendra103",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "SafeTrail: Smart Women's Safety App",
    description: "AI-powered safety application with real-time location tracking, emergency alerts, and automated safety check-ins for women's security.",
    tech: ["Python", "Tkinter", "Flask", "ML"],
    github: "https://github.com/Nagendrasriram",
    demo: "https://www.youtube.com/@Nagendra103",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and professional experience with modern design and animations.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Nagendrasriram/Portfolio",
    demo: null,
    gradient: "from-indigo-500 to-purple-500",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Building solutions that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative backdrop-blur-glass bg-glass-bg border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-primary transition-all duration-300 h-full flex flex-col">
                {/* Gradient Header */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient} rounded-t-xl`} />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors mt-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Button>
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => window.open("https://github.com/Nagendrasriram", "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
