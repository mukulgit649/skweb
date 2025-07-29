import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Download, Quote, Award } from "lucide-react";

const PublicationsSection = () => {
  const journalPapers = [
    {
      title: "Electroosmotic Mixing of Biofluids in Wavy Microchannel",
      journal: "Journal of Fluid Mechanics",
      year: "2023",
      citations: 45,
      impact: "High Impact",
      doi: "10.1017/jfm.2023.xxx",
      tags: ["Electroosmosis", "Microfluidics", "Mixing"]
    },
    {
      title: "Thermo-Hydraulic Performance of Wavy Channels with Nanofluid Flow",
      journal: "International Journal of Heat and Mass Transfer",
      year: "2022",
      citations: 38,
      impact: "Q1",
      doi: "10.1016/j.ijheatmasstransfer.2022.xxx",
      tags: ["Heat Transfer", "Nanofluids", "CFD"]
    },
    {
      title: "Entropy Analysis of Nanofluid Flow in MHD Conditions",
      journal: "Physics of Fluids",
      year: "2022",
      citations: 52,
      impact: "Top Cited",
      doi: "10.1063/5.xxx",
      tags: ["Entropy", "MHD", "Thermodynamics"]
    },
    {
      title: "Slip-Dependent Zeta Potential Modeling in Microchannels",
      journal: "Microfluidics and Nanofluidics",
      year: "2021",
      citations: 29,
      impact: "Q2",
      doi: "10.1007/s10404-021-xxx",
      tags: ["Zeta Potential", "Slip Condition", "Modeling"]
    }
  ];

  const conferences = [
    {
      title: "Advanced CFD Techniques in Microfluidic Device Design",
      conference: "International Conference on Microfluidics",
      year: "2023",
      location: "Singapore"
    },
    {
      title: "Electrokinetic Transport in Paper-Based Microfluidics",
      conference: "ASME Heat Transfer Conference",
      year: "2022",
      location: "Philadelphia, USA"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Publications</span> & Research Output
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed contributions to fluid mechanics and computational science
          </p>
        </div>

        <Tabs defaultValue="journals" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 glass-card p-1">
            <TabsTrigger value="journals" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Journal Papers
            </TabsTrigger>
            <TabsTrigger value="conferences" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Conferences
            </TabsTrigger>
            <TabsTrigger value="metrics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Citations & Metrics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="journals" className="space-y-6">
            {journalPapers.map((paper, index) => (
              <Card key={index} className="glass-card p-6 hover-lift group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Quote className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {paper.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-primary font-medium">{paper.journal}</p>
                      <p className="text-sm text-muted-foreground">
                        Published: {paper.year} • DOI: {paper.doi}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {paper.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-primary/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:text-right space-y-3">
                    <div className="flex lg:flex-col gap-2 items-center lg:items-end">
                      <Badge className="bg-primary/20 text-primary border-primary/50">
                        {paper.citations} Citations
                      </Badge>
                      <Badge variant="outline" className="border-primary/50">
                        {paper.impact}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="glass-card border-primary/50 hover:border-primary">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="glass-card border-primary/50 hover:border-primary">
                        <Download className="h-4 w-4 mr-1" />
                        PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="conferences" className="space-y-6">
            {conferences.map((conf, index) => (
              <Card key={index} className="glass-card p-6 hover-lift">
                <div className="flex items-start gap-3 mb-3">
                  <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{conf.title}</h3>
                    <p className="text-primary font-medium">{conf.conference}</p>
                    <p className="text-sm text-muted-foreground">{conf.year} • {conf.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="metrics" className="space-y-8">
            {/* Citation Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">164</div>
                <div className="text-sm text-muted-foreground">Total Citations</div>
              </Card>
              <Card className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">h-index</div>
              </Card>
              <Card className="glass-card p-6 text-center hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">12</div>
                <div className="text-sm text-muted-foreground">i10-index</div>
              </Card>
            </div>

            {/* Research Impact */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Research Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>World's Top 2% Scientist (Elsevier)</span>
                  <Badge className="bg-primary/20 text-primary">2023</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Wiley Top-Cited Paper Award</span>
                  <Badge className="bg-primary/20 text-primary">2022</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>SERB National Postdoctoral Fellowship</span>
                  <Badge className="bg-primary/20 text-primary">2024</Badge>
                </div>
              </div>
            </Card>

            <div className="text-center">
              <Button className="hero-glow hover-lift">
                <ExternalLink className="mr-2 h-5 w-5" />
                View Google Scholar Profile
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PublicationsSection;