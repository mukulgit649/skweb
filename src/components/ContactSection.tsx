import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import ThumbnailSlideshow from "./ThumbnailSlideshow";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or academic discussions?
            Let's connect and explore possibilities together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">sumitkrmehta@rnd.iitg.ac.in</p>
                    <p className="text-muted-foreground">sumit090391@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Professional inquiries welcome</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">Department of Mechanical Engineering</p>
                    <p className="text-muted-foreground">IIT Guwahati, Assam, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Profiles</h4>
                    <div className="flex flex-col gap-2 text-sm">
                      <a href="https://orcid.org/0000-0001-8806-3767" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> ORCID
                      </a>
                      <a href="https://scholar.google.co.in/citations?user=Rk-6RA0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Google Scholar
                      </a>
                      <a href="https://www.researchgate.net/profile/Sumit_Mehta4" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> ResearchGate
                      </a>
                      <a href="https://www.webofscience.com/wos/author/record/2141279" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Web of Science
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Research Interests */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-xl font-bold mb-4 text-gradient">Open for Collaboration</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Joint Research Projects in CFD and Microfluidics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Industry Consultancy in Computational Modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Academic Partnerships and Student Exchange</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Conference Speaking and Keynote Presentations</span>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-primary/50 hover:border-primary hover-lift flex-1"
                onClick={() => window.location.href = 'mailto:sumitkrmehta@rnd.iitg.ac.in'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-card border-primary/50 hover:border-primary hover-lift flex-1"
                onClick={() => window.open('https://www.linkedin.com/in/dr-sumit-kumar-mehta-b5abbb9a/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="glass-card border-primary/30 focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="glass-card border-primary/30 focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Research collaboration inquiry"
                  className="glass-card border-primary/30 focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your research interests, collaboration ideas, or questions..."
                  rows={6}
                  className="glass-card border-primary/30 focus:border-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full hero-glow hover-lift group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                Response time: Usually within 24-48 hours
              </p>
            </div>

            {/* QR Code */}
            <div className="mt-6 flex justify-center">
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <img
                  src="/frame (2).png"
                  alt="Contact QR Code"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Gallery Slideshow */}
        <ThumbnailSlideshow />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            © 2024 Dr. Sumit Kumar Mehta. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with passion for scientific research and innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;