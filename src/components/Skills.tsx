import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Globe, GitBranch, Cpu, Layers } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    color: "primary",
  },
  {
    icon: Layers,
    title: "Frameworks",
    skills: ["Spring Boot", "React", "Angular", "Node.js", "TensorFlow", "Flask"],
    color: "accent",
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "JDBC"],
    color: "primary",
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["REST APIs", "Responsive Design", "UI/UX", "Postman"],
    color: "accent",
  },
  {
    icon: GitBranch,
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Specializations",
    skills: ["DSA", "Full Stack Development", "AI/ML", "Problem Solving"],
    color: "accent",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
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
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative backdrop-blur-glass bg-glass-bg border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-primary transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-card rounded-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10">
                  <div className={`bg-${category.color}/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className={`h-7 w-7 text-${category.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="relative backdrop-blur-glass bg-glass-bg border border-glass-border rounded-xl p-8 shadow-glass text-center">
            <div className="absolute inset-0 bg-gradient-card rounded-xl opacity-30" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3 text-foreground">Soft Skills</h3>
              <p className="text-lg text-muted-foreground">
                Leadership • Team Collaboration • Strong Communication • Problem Solving • Adaptability
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
