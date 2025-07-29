import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Languages, Award, Download } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-gradient">Dr. Mehta</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multidisciplinary researcher pushing the boundaries of fluid mechanics and computational science
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="relative">
            <div className="glass-card p-8 hover-lift">
              <div className="aspect-square bg-gradient-card rounded-lg flex items-center justify-center text-6xl font-bold text-primary mb-6">
                SM
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="glass-card p-4 border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Location</span>
                  </div>
                  <p className="font-semibold">Assam, India</p>
                </Card>
                
                <Card className="glass-card p-4 border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Languages className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Languages</span>
                  </div>
                  <p className="font-semibold">Hindi, English</p>
                </Card>
                
                <Card className="glass-card p-4 border-primary/30 col-span-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Certification</span>
                  </div>
                  <p className="font-semibold">Wiley Top Cited Paper</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Bio and Details */}
          <div className="space-y-8">
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Biography</h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Dr. Sumit Kumar Mehta is a multidisciplinary researcher working on fluid mechanics, 
                micro/nanofluidics, electrokinetics, and heat transfer simulations using COMSOL and 
                ANSYS Fluent. He holds a PhD from NIT Silchar and currently works as a postdoctoral 
                fellow at IIT Guwahati.
              </p>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Core Expertise</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Academic Leadership",
                    "Scientific Writing", 
                    "Experimental Analysis",
                    "Computational Modeling"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Career Timeline Preview */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Career Highlights</h3>
              <div className="space-y-4">
                {[
                  { year: "2024-Present", title: "SERB-NPDF Fellow", org: "IIT Guwahati" },
                  { year: "2022-2024", title: "R&D Project Staff", org: "IIT Guwahati" },
                  { year: "2017-2022", title: "Research Scholar", org: "NIT Silchar" }
                ].map((item, index) => (
                  <div key={index} className="timeline-item flex gap-4 items-start opacity-0 animate-[slide-in-right_0.6s_ease-out_forwards]" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-primary">{item.year}</p>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Button className="w-full glass-card border-primary/50 hover:border-primary hover-lift group" variant="outline">
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Complete CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;