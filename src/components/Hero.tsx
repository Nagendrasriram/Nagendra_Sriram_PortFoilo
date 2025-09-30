import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Github, Linkedin, Youtube, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Futuristic tech background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-lg md:text-xl mb-4 font-mono"
          >
            Hi there, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Nagendra Sriram
            </span>
          </motion.h1>

          {/* Typing Animation */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 h-20 md:h-24 flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Web Developer",
                2000,
                "Tech Enthusiast",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-foreground"
              repeat={Infinity}
            />
          </div>

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            3rd Year B.Tech CSE Student at SRMIST | Passionate about building
            scalable applications and solving real-world problems with code
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow-primary text-base md:text-lg px-8 py-6 group"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-primary text-primary hover:bg-primary/10 text-base md:text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 text-base md:text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/Nagendrasriram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6 md:h-7 md:w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/nagendrasriram103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6 md:h-7 md:w-7" />
            </a>
            <a
              href="https://www.youtube.com/@Nagendra103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="h-6 w-6 md:h-7 md:w-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};
