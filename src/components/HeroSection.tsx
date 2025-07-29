import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Name with Kinetic Animation */}
        <h1 className="kinetic-title text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gradient">Dr. Sumit Kumar</span>
          <br />
          <span className="text-foreground">Mehta</span>
        </h1>
        
        {/* Title */}
        <div className="kinetic-title opacity-0 animate-[kinetic-reveal_1s_ease-out_0.3s_forwards]">
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 font-light">
            SERB-National Postdoctoral Fellow at{" "}
            <span className="text-primary font-medium">IIT Guwahati</span>
          </p>
        </div>
        
        {/* Subtitle */}
        <div className="kinetic-title opacity-0 animate-[kinetic-reveal_1s_ease-out_0.6s_forwards]">
          <p className="text-lg sm:text-xl text-primary mb-8 hero-glow">
            World's Top 2% Scientist (Elsevier)
          </p>
        </div>
        
        {/* Expertise Tags */}
        <div className="kinetic-title opacity-0 animate-[kinetic-reveal_1s_ease-out_0.9s_forwards]">
          <div className="flex flex-wrap justify-center gap-3 mb-10 font-mono text-sm">
            {["CFD", "Microfluidics", "Nanofluidics", "Heat Transfer", "COMSOL", "MATLAB"].map((tag) => (
              <span
                key={tag}
                className="glass-card px-4 py-2 text-primary border-primary/50 hover:border-primary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="kinetic-title opacity-0 animate-[kinetic-reveal_1s_ease-out_1.2s_forwards]">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="hero-glow hover-lift group"
              onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View Research
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-card border-primary/50 hover:border-primary hover-lift group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;