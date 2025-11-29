import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";
import { motion } from "framer-motion";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave-bg" />
        <div className="wave-bg" />
        <div className="wave-bg" />
      </div>

      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Enhanced Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: i % 3 === 0 ? 'hsl(188 100% 43% / 0.3)' :
                i % 3 === 1 ? 'hsl(193 82% 31% / 0.2)' : 'hsl(0 0% 80% / 0.1)',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Name with Enhanced Kinetic Animation - Fixed to single line */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 whitespace-nowrap"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Dr. Sumit Kumar Mehta
          </motion.span>
        </motion.h1>

        {/* Title with Staggered Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="mb-6">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-2">
              National Post Doctoral Fellow
            </p>
            <p className="text-sm sm:text-base text-gray-400 font-light mb-4">
              (Anusandhan National Research Foundation, Government of India)
            </p>
            <p className="text-lg sm:text-xl text-primary font-medium">
              Department of Mechanical Engineering
            </p>
            <p className="text-base sm:text-lg text-gray-300">
              Indian Institute of Technology Guwahati, Guwahati-781039, Assam
            </p>
          </div>
        </motion.div>

        {/* Subtitle with Pulsing Glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <motion.p
            className="text-lg sm:text-xl text-primary mb-8 font-medium"
            animate={{
              textShadow: [
                "0 0 20px hsl(188 100% 43% / 0.5)",
                "0 0 30px hsl(188 100% 43% / 0.8)",
                "0 0 20px hsl(188 100% 43% / 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            World's top 2% scientists 2025, 2024 (Stanford University and Elsevier)
          </motion.p>
        </motion.div>

        {/* Enhanced Expertise Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-10 font-mono text-sm">
            {["CFD", "Microfluidics", "Nanofluidics", "Heat Transfer", "COMSOL", "MATLAB"].map((tag, index) => (
              <motion.span
                key={tag}
                className="glass-card px-4 py-2 text-primary border-primary/50 hover:border-primary transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px hsl(188 100% 43% / 0.4)",
                  borderColor: "hsl(188 100% 43%)"
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Buttons with Glowing Effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="relative overflow-hidden group bg-primary hover:bg-primary/90"
                onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">View Research</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-primary/50 hover:border-primary hover:bg-primary/10 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform relative z-10" />
                <span className="relative z-10">Download CV</span>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-primary/50 hover:border-primary hover:bg-primary/10 group"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:rotate-6 transition-transform" />
                Research Portfolio
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary/70 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
