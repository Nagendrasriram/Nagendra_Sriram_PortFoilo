import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Expertise",
    description: "Proficient in Java, Spring Boot, React, and modern web technologies",
  },
  {
    icon: Rocket,
    title: "Project Builder",
    description: "Created 6+ real-world projects with practical applications",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Strong leadership and collaboration skills with ACM-W experience",
  },
  {
    icon: Award,
    title: "Certified Professional",
    description: "Multiple certifications in JavaScript, Python, and Generative AI",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
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
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </motion.div>

        {/* Main Content - Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative backdrop-blur-glass bg-glass-bg border border-glass-border rounded-2xl p-8 md:p-12 shadow-glass">
            <div className="absolute inset-0 bg-gradient-card rounded-2xl opacity-50" />
            <div className="relative z-10">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                I'm a <span className="text-primary font-semibold">3rd Year B.Tech Computer Science student at SRMIST</span> (2023-2027) with a passion for turning ideas into reality through code. As a <span className="text-primary font-semibold">Java Full Stack Developer</span>, I specialize in building scalable, user-centric applications that solve real-world problems.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                My journey in tech has been driven by curiosity and a commitment to continuous learning. From developing <span className="text-accent font-semibold">enterprise-grade billing systems</span> to creating <span className="text-accent font-semibold">AI-powered safety applications</span>, I thrive on challenges that push the boundaries of what's possible.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or playing basketball at the district level. I believe in the power of collaboration and am always eager to connect with fellow developers and innovators.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <div className="relative backdrop-blur-glass bg-glass-bg border border-glass-border rounded-xl p-6 shadow-glass hover:shadow-glow-primary transition-all duration-300 h-full">
                <div className="absolute inset-0 bg-gradient-card rounded-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative z-10">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
