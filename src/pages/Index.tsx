import EnhancedNavigation from "@/components/EnhancedNavigation";
import ModernHero from "@/components/ModernHero";
import ModernAbout from "@/components/ModernAbout";
import AnimatedTimeline from "@/components/AnimatedTimeline";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollHome from "@/components/ScrollHome";
import HeroSection from "@/components/HeroSection";
import EnhancedHero from "@/components/EnhancedHero";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EnhancedNavigation />
      <ModernHero />
      <ModernAbout />
      <AnimatedTimeline />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
