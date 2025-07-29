import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Beaker, Zap, Waves, Thermometer, Cpu, BarChart3 } from "lucide-react";
import { useState } from "react";

const ResearchSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const researchAreas = [
    {
      id: 1,
      title: "Computational Fluid Dynamics (CFD)",
      description: "Advanced numerical simulations of fluid flow phenomena using ANSYS Fluent and COMSOL",
      icon: Waves,
      tags: ["CFD", "Simulation", "Numerical"],
      category: "computational"
    },
    {
      id: 2,
      title: "Paper-Microfluidics",
      description: "Novel microfluidic devices using paper-based materials for lab-on-chip applications",
      icon: Beaker,
      tags: ["Microfluidics", "Paper", "Lab-on-chip"],
      category: "experimental"
    },
    {
      id: 3,
      title: "Electroosmotic Flows",
      description: "Electrokinetic transport phenomena in micro and nano-scale confined geometries",
      icon: Zap,
      tags: ["Electrokinetics", "Transport", "Nanofluidics"],
      category: "theoretical"
    },
    {
      id: 4,
      title: "Non-Newtonian Flows",
      description: "Complex fluid behavior analysis in microchannels and industrial applications",
      icon: BarChart3,
      tags: ["Non-Newtonian", "Complex fluids", "Rheology"],
      category: "experimental"
    },
    {
      id: 5,
      title: "COMSOL/ANSYS Simulations",
      description: "Multi-physics modeling combining fluid flow, heat transfer, and mass transport",
      icon: Cpu,
      tags: ["COMSOL", "ANSYS", "Multi-physics"],
      category: "computational"
    },
    {
      id: 6,
      title: "Wavy Microchannel Mixing",
      description: "Enhanced mixing strategies in wavy microchannel geometries for improved efficiency",
      icon: Waves,
      tags: ["Mixing", "Wavy channels", "Enhancement"],
      category: "experimental"
    },
    {
      id: 7,
      title: "Nanofluid Heat Transport",
      description: "Thermal enhancement using nanoparticles in base fluids for heat transfer applications",
      icon: Thermometer,
      tags: ["Nanofluids", "Heat transfer", "Enhancement"],
      category: "experimental"
    }
  ];

  const filters = [
    { id: "all", label: "All Research" },
    { id: "computational", label: "Computational" },
    { id: "experimental", label: "Experimental" },
    { id: "theoretical", label: "Theoretical" }
  ];

  const filteredResearch = selectedFilter === "all" 
    ? researchAreas 
    : researchAreas.filter(area => area.category === selectedFilter);

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Research <span className="text-gradient">& Interests</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Exploring the frontiers of fluid mechanics, microfluidics, and computational science
          </p>
          
          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "glass-card border-primary/30 hover:border-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Research Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResearch.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={area.id}
                className="glass-card group hover-lift cursor-pointer relative overflow-hidden opacity-0 animate-[kinetic-reveal_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-glow rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/50 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Research Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Research Papers", value: "25+", icon: "📄" },
            { label: "Citations", value: "150+", icon: "📈" },
            { label: "Years Experience", value: "7+", icon: "🎓" },
            { label: "Collaborations", value: "10+", icon: "🤝" }
          ].map((stat, index) => (
            <Card key={index} className="glass-card p-6 text-center hover-lift">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;