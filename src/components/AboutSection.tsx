import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Languages, Award, Download, GraduationCap, Building, Calendar } from "lucide-react";
import profileImage from "@/assets/profile-dr-mehta.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Dr. Mehta</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Multidisciplinary researcher pushing the boundaries of fluid mechanics and computational science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Professional Image Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-8 hover-lift">
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative group">
                  <img 
                    src={profileImage} 
                    alt="Dr. Sumit Kumar Mehta"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="glass-card px-4 py-2 border-primary/50">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-primary font-medium">Available for Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Info Cards */}
              <div className="space-y-4">
                <Card className="glass-card p-4 border-primary/30 hover:border-primary/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                       <p className="text-sm text-gray-400">Location</p>
                       <p className="font-semibold text-white">IIT Guwahati, Assam</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="glass-card p-4 border-primary/30 hover:border-primary/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Languages className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Languages</p>
                      <p className="font-semibold text-white">Hindi, English</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="glass-card p-4 border-primary/30 hover:border-primary/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                       <p className="text-sm text-gray-400">Recognition</p>
                       <p className="font-semibold text-white">Stanford Top 2% Scientist</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>
          </motion.div>

          {/* Bio and Timeline Column */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Biography */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Biography
              </h3>
               <p className="text-lg leading-relaxed text-gray-300 mb-8">
                 I have proficiency modelling micro and nano scale flow and ionic transport phenomenon using finite element method-based solver, COMSOL Multiphysics. 
                 Also, the experimental and mathematical modelling has been recently done for nutrient transport inside the plant root in flowing condition. 
                 Further, I have proficiency modelling forced and natural convective heat transport inside complex geometries utilizing Newtonian and non-Newtonian fluids numerically using ANSYS Fluent and COMSOL Multiphysics.
               </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Core Expertise
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Academic Leadership",
                      "Scientific Writing", 
                      "Experimental Analysis",
                      "Computational Modeling"
                    ].map((skill, index) => (
                      <motion.div 
                        key={skill} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-gray-300">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5" />
                    Research Focus
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Computational Fluid Dynamics",
                      "Microfluidics & Nanofluidics", 
                      "Heat Transfer Analysis",
                      "Multi-physics Simulations"
                    ].map((focus, index) => (
                      <motion.div 
                        key={focus} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-gray-300">{focus}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Career Timeline */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent flex items-center gap-3">
                <Calendar className="h-8 w-8 text-primary" />
                Career Timeline
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
                
                <div className="space-y-8">
                  {[
                    { 
                      year: "2024-Present", 
                      title: "SERB-NPDF Fellow", 
                      org: "IIT Guwahati",
                      description: "Leading advanced research in microfluidics and electrokinetic phenomena"
                    },
                    { 
                      year: "2022-2024", 
                      title: "R&D Project Staff", 
                      org: "IIT Guwahati",
                      description: "Research and development on computational fluid dynamics applications"
                    },
                    { 
                      year: "2017-2022", 
                      title: "Research Scholar", 
                      org: "NIT Silchar",
                      description: "Doctoral research on electroosmotic flows and microfluidic mixing"
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="relative flex gap-6 items-start"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background flex-shrink-0 mt-2" />
                      
                      <div className="min-w-0 flex-1">
                        <div className="glass-card p-6 border-primary/30 hover:border-primary/60 transition-colors">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <span className="text-sm font-mono text-primary bg-primary/20 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                            <span className="text-lg font-bold text-white">{item.title}</span>
                          </div>
                          <p className="text-primary font-medium mb-2">{item.org}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Download CV Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button className="w-full glass-card border-primary/50 hover:border-primary hover-lift group bg-primary/10 hover:bg-primary/20" variant="outline" size="lg">
                <Download className="mr-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
                <span className="text-lg">Download Complete CV</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;