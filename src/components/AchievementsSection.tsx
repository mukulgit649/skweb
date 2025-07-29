import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "World's Top 2% Scientist",
      organization: "Elsevier",
      year: "2023",
      description: "Recognized among the top 2% of scientists worldwide in the field of Mechanical Engineering and Fluid Mechanics",
      icon: Trophy,
      category: "International Recognition",
      color: "text-yellow-400"
    },
    {
      title: "SERB National Postdoctoral Fellowship", 
      organization: "SERB, India",
      year: "2024",
      description: "Prestigious national fellowship for outstanding postdoctoral researchers",
      icon: Award,
      category: "Fellowship",
      color: "text-blue-400"
    },
    {
      title: "Wiley Top-Cited Paper Award",
      organization: "Wiley Publishing",
      year: "2022",
      description: "Award for one of the most cited papers in microfluidics research",
      icon: Star,
      category: "Publication Excellence",
      color: "text-green-400"
    },
    {
      title: "Best Research Paper Award",
      organization: "International Conference on Microfluidics",
      year: "2023",
      description: "Recognition for outstanding research contribution in electroosmotic mixing",
      icon: Medal,
      category: "Conference Award",
      color: "text-purple-400"
    },
    {
      title: "PhD Excellence Award",
      organization: "NIT Silchar",
      year: "2022",
      description: "Awarded for exceptional doctoral research in computational fluid dynamics",
      icon: Trophy,
      category: "Academic Excellence",
      color: "text-red-400"
    },
    {
      title: "Young Researcher Award",
      organization: "Indian Society of Heat and Mass Transfer",
      year: "2021",
      description: "Recognition for significant contributions to heat transfer research",
      icon: Star,
      category: "Professional Recognition",
      color: "text-cyan-400"
    }
  ];

  const stats = [
    { label: "Awards & Honors", value: "15+", icon: "🏆" },
    { label: "International Recognition", value: "3", icon: "🌍" },
    { label: "Research Grants", value: "₹25L+", icon: "💰" },
    { label: "Years of Excellence", value: "7+", icon: "⭐" }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span> & Awards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition for excellence in research, innovation, and academic contributions
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card p-6 text-center hover-lift">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="glass-card group hover-lift cursor-pointer relative overflow-hidden opacity-0 animate-[kinetic-reveal_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-glow opacity-0 group-hover:opacity-50 transition-opacity -translate-y-16 translate-x-16" />
                
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-background/50 rounded-lg group-hover:scale-110 transition-transform ${achievement.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {achievement.year}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <Badge className="bg-primary/20 text-primary text-xs">
                      {achievement.category}
                    </Badge>
                    
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-primary font-medium text-sm">
                      {achievement.organization}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>

                {/* Hover Shimmer Effect */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            );
          })}
        </div>

        {/* Special Recognition Section */}
        <div className="mt-16">
          <Card className="glass-card p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-20" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Special Recognition
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Dr. Mehta's research contributions have earned global recognition, placing him among 
                the world's most influential scientists in mechanical engineering and fluid dynamics research.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-primary/20 text-primary px-4 py-2">
                  Highly Cited Researcher
                </Badge>
                <Badge className="bg-primary/20 text-primary px-4 py-2">
                  International Collaborator
                </Badge>
                <Badge className="bg-primary/20 text-primary px-4 py-2">
                  Research Excellence
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;