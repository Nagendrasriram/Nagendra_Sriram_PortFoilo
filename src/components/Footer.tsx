import { Github, Linkedin, Youtube, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Nagendrasriram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nagendrasriram103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://www.youtube.com/@Nagendra103"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube Channel"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Nagendra Sriram. Built with{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and{" "}
              <span className="text-primary font-semibold">React</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Designed & Developed for Impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
