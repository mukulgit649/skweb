import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import TimelineSection from "@/components/TimelineSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen custom-scrollbar">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <PublicationsSection />
      <TimelineSection />
      <AchievementsSection />
      <ContactSection />
      <BackToTop />
    </div>
  );
};

export default Index;
