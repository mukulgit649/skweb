import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const TimelineSection = () => {
  const education = [
    {
      degree: "PhD in Mechanical Engineering",
      institution: "NIT Silchar",
      period: "2017 - 2022",
      description: "Specialization in Computational Fluid Dynamics and Microfluidics",
      thesis: "Electroosmotic Flow and Heat Transfer in Microchannels",
      grade: "Excellent"
    },
    {
      degree: "MTech in Thermal Engineering", 
      institution: "NIT Silchar",
      period: "2015 - 2017",
      description: "Focus on Heat Transfer and Fluid Mechanics",
      thesis: "Heat Transfer Enhancement in Wavy Channels",
      grade: "8.5 CGPA"
    },
    {
      degree: "BTech in Mechanical Engineering",
      institution: "Asansol Engineering College",
      period: "2011 - 2015",
      description: "Foundation in Mechanical Engineering principles",
      achievement: "University Topper",
      grade: "8.2 CGPA"
    }
  ];

  const experience = [
    {
      position: "SERB-National Postdoctoral Fellow",
      institution: "IIT Guwahati",
      period: "2024 - Present",
      description: "Advanced research in microfluidics and electrokinetic phenomena under SERB fellowship",
      highlights: ["Leading independent research projects", "Mentoring PhD students", "International collaborations"]
    },
    {
      position: "R&D Project Staff",
      institution: "IIT Guwahati", 
      period: "2022 - 2024",
      description: "Research and development on computational fluid dynamics and heat transfer applications",
      highlights: ["Multi-physics simulations", "Industrial consultancy", "Technology transfer projects"]
    },
    {
      position: "Research Scholar",
      institution: "NIT Silchar",
      period: "2017 - 2022",
      description: "Doctoral research on electroosmotic flows and microfluidic mixing",
      highlights: ["Published 15+ research papers", "Conference presentations", "Teaching assistantship"]
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-gradient">Education</span> Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Academic foundation in engineering and research
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="relative timeline-item opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                    
                    <Card className="ml-16 glass-card p-6 hover-lift">
                      <div className="flex items-start gap-3 mb-4">
                        <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      
                      {edu.thesis && (
                        <p className="text-sm text-primary mb-3">
                          <strong>Thesis:</strong> {edu.thesis}
                        </p>
                      )}
                      
                      <div className="flex gap-2">
                        <Badge variant="outline" className="border-primary/50">
                          {edu.grade || edu.achievement}
                        </Badge>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Professional <span className="text-gradient">Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Research and academic career progression
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />
              
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="relative timeline-item opacity-0 animate-[slide-in-right_0.8s_ease-out_forwards]"
                    style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                    
                    <Card className="ml-16 glass-card p-6 hover-lift">
                      <div className="flex items-start gap-3 mb-4">
                        <Briefcase className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold">{exp.position}</h3>
                          <p className="text-primary font-medium">{exp.institution}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{exp.period}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      {exp.highlights && (
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {exp.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;