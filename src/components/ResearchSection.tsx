import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Beaker, Zap, Waves, Thermometer, Cpu, BarChart3, FileText, Download, ExternalLink } from "lucide-react";
import { useState } from "react";

const ResearchSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const researchAreas = [
    {
      id: 1,
      title: "Computational Fluid Dynamics (CFD)",
      description: "Advanced numerical simulations of fluid flow phenomena using ANSYS Fluent and COMSOL",
      abstract: "Development of sophisticated computational models for complex fluid flow problems including turbulence modeling, heat transfer, and multi-phase flows. Focus on high-performance computing implementations for large-scale simulations.",
      icon: Waves,
      tags: ["CFD", "Simulation", "Numerical"],
      tools: ["ANSYS Fluent", "COMSOL", "OpenFOAM"],
      category: "computational",
      status: "Active",
      publications: 8
    },
    {
      id: 2,
      title: "Paper-Microfluidics",
      description: "Novel microfluidic devices using paper-based materials for lab-on-chip applications",
      abstract: "Innovative paper-based microfluidic platforms for point-of-care diagnostics and chemical analysis. Research focuses on capillary flow control, surface treatments, and integration with detection systems.",
      icon: Beaker,
      tags: ["Microfluidics", "Paper", "Lab-on-chip"],
      tools: ["COMSOL", "ImageJ", "MATLAB"],
      category: "experimental",
      status: "Active",
      publications: 5
    },
    {
      id: 3,
      title: "Electroosmotic Flows",
      description: "Electrokinetic transport phenomena in micro and nano-scale confined geometries",
      abstract: "Fundamental study of electroosmotic flow behavior in microchannels with focus on zeta potential effects, slip conditions, and non-Newtonian fluid behavior under electric fields.",
      icon: Zap,
      tags: ["Electrokinetics", "Transport", "Nanofluidics"],
      tools: ["COMSOL", "MATLAB", "LabVIEW"],
      category: "theoretical",
      status: "Active",
      publications: 12
    },
    {
      id: 4,
      title: "Non-Newtonian Flows",
      description: "Complex fluid behavior analysis in microchannels and industrial applications",
      abstract: "Investigation of non-Newtonian fluid rheology in confined geometries, including shear-thinning and viscoelastic effects in microfluidic applications and industrial processes.",
      icon: BarChart3,
      tags: ["Non-Newtonian", "Complex fluids", "Rheology"],
      tools: ["ANSYS Fluent", "Rheometer", "PIV"],
      category: "experimental",
      status: "Ongoing",
      publications: 6
    },
    {
      id: 5,
      title: "COMSOL/ANSYS Simulations",
      description: "Multi-physics modeling combining fluid flow, heat transfer, and mass transport",
      abstract: "Advanced multi-physics simulations integrating fluid dynamics, heat transfer, mass transport, and electromagnetic phenomena for comprehensive system analysis and optimization.",
      icon: Cpu,
      tags: ["COMSOL", "ANSYS", "Multi-physics"],
      tools: ["COMSOL Multiphysics", "ANSYS Workbench", "Python"],
      category: "computational",
      status: "Active",
      publications: 10
    },
    {
      id: 6,
      title: "Wavy Microchannel Mixing",
      description: "Enhanced mixing strategies in wavy microchannel geometries for improved efficiency",
      abstract: "Design and optimization of wavy microchannel geometries to enhance mixing efficiency through chaotic advection and secondary flow generation in microfluidic systems.",
      icon: Waves,
      tags: ["Mixing", "Wavy channels", "Enhancement"],
      tools: ["COMSOL", "MATLAB", "3D Printing"],
      category: "experimental",
      status: "Completed",
      publications: 4
    },
    {
      id: 7,
      title: "Nanofluid Heat Transport",
      description: "Thermal enhancement using nanoparticles in base fluids for heat transfer applications",
      abstract: "Experimental and numerical investigation of nanofluid thermal properties and heat transfer enhancement in various geometries including microchannels and heat exchangers.",
      icon: Thermometer,
      tags: ["Nanofluids", "Heat transfer", "Enhancement"],
      tools: ["Thermal Camera", "COMSOL", "Particle Analyzer"],
      category: "experimental",
      status: "Active",
      publications: 7
    }
  ];

  const filters = [
    { id: "all", label: "All Research", count: researchAreas.length },
    { id: "computational", label: "Computational", count: researchAreas.filter(r => r.category === "computational").length },
    { id: "experimental", label: "Experimental", count: researchAreas.filter(r => r.category === "experimental").length },
    { id: "theoretical", label: "Theoretical", count: researchAreas.filter(r => r.category === "theoretical").length }
  ];

  const filteredResearch = selectedFilter === "all"
    ? researchAreas
    : researchAreas.filter(area => area.category === selectedFilter);

  return (
    <section id="research" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Research <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">& Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Exploring the frontiers of fluid mechanics, microfluidics, and computational science
          </p>

          {/* Enhanced Filter Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all relative overflow-hidden group ${selectedFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "glass-card border-primary/30 hover:border-primary text-gray-300 hover:text-white"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {filter.label}
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {filter.count}
                  </span>
                </span>
                {selectedFilter !== filter.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Research Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResearch.map((area, index) => {
            const Icon = area.icon;
            const isHovered = hoveredProject === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="glass-card group cursor-pointer relative overflow-hidden h-full"
                  onMouseEnter={() => setHoveredProject(area.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge
                      className={`${area.status === "Active" ? "bg-green-500/20 text-green-400 border-green-500/50" :
                          area.status === "Ongoing" ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/50" :
                            "bg-blue-500/20 text-blue-400 border-blue-500/50"
                        }`}
                    >
                      {area.status}
                    </Badge>
                  </div>

                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity z-10" />

                  <div className="p-8 relative z-20 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-4 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors group-hover:scale-110 transform duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">Publications</p>
                        <p className="text-lg font-bold text-primary">{area.publications}</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      {area.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                      {isHovered ? area.abstract : area.description}
                    </p>

                    {/* Tools Used */}
                    <div className="mb-6">
                      <p className="text-sm text-primary font-medium mb-2">Tools & Software:</p>
                      <div className="flex flex-wrap gap-1">
                        {area.tools.map((tool) => (
                          <span key={tool} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/30">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {area.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-primary/50 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <Button size="sm" variant="outline" className="flex-1 glass-card border-primary/50 hover:border-primary group/btn">
                        <FileText className="h-4 w-4 mr-2 group-hover/btn:rotate-6 transition-transform" />
                        Details
                      </Button>
                      <Button size="sm" variant="outline" className="glass-card border-primary/50 hover:border-primary group/btn">
                        <Download className="h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                      </Button>
                      <Button size="sm" variant="outline" className="glass-card border-primary/50 hover:border-primary group/btn">
                        <ExternalLink className="h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
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