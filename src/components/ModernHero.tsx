import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Award,
  Users,
  Calendar,
  Stethoscope,
  Globe,
  BookOpen,
} from "lucide-react";
import drMuralidharPortrait from "@/assets/dr-muralidhar-portrait.jpg";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const ModernHero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-hero pt-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10 mt-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left: Content */}
          <div className="order-1 space-y-8 animate-fade-up">
            {/* <div className="inline-flex items-center mt-3 gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium animate-glow">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-gold">30+ Years Healthcare Excellence</span>
            </div> */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Dr. Muralidhar
                <span
                  className="block bg-gradient-to-r from-gold via-gold-light to-white bg-clip-text text-transparent py-3 animate-shimmer"
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Panchagnula (h.c.)
                </span>
              </h1>
              <p className="text-2xl text-gold font-semibold">
                ISB Alumni • Healthcare Visionary
              </p>
            </div>
            <p className="text-xl leading-relaxed text-white/90 max-w-2xl font-light">
              Transforming Healthcare Management across 3+ decades. Senior
              Advisory Consultant specializing in Corporate Hospital Management
              and Healthcare Innovation.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-healthcare-blue/20 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Healthcare Management
                    </h3>
                    <p className="text-sm text-white/70">
                      Strategic Leadership
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <Globe className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      Global Advisory
                    </h3>
                    <p className="text-sm text-white/70">
                      International Expertise
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="inline-flex items-center mt-3 gap-2 bg-white border-white rounded-full px-6 py-3 text-sm font-medium animate-glow">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-gold">30+ Years Healthcare Excellence</span>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 btn-healthcare group text-lg px-8 py-4 font-semibold">
                Explore My Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" className="bg-gold text-navy hover:bg-gold/90 btn-healthcare group text-lg px-8 py-4 font-semibold">
                Schedule Consultation
              </Button>
            </div> */}
          </div>
          {/* Right: Image */}
          <div className="order-2 flex justify-center items-center animate-fade-up">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-healthcare-blue/30 rounded-3xl blur-2xl pointer-events-none" />
              <div className="relative bg-white/20 backdrop-blur-sm border border-white/30 rounded-3xl p-6">
                <img
                  src={drMuralidharPortrait}
                  alt="Dr. Muralidhar Panchagnula"
                  className="w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Statistics Grid */}
        <div className="mt-16 mb-4 lg:mt-20 max-w-4xl mx-auto bg-gradient-to-r from-navy to-healthcare-blue rounded-2xl">
          <ScrollReveal direction="up" delay={300}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 rounded-2xl p-8 shadow-2xl">
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-gold/30 rounded-2xl mx-auto mb-3">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={50} suffix="+" delay={800} />
                </div>
                <div className="text-sm text-white/90 font-medium">
                  Major Companies
                </div>
              </div>
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-healthcare-blue/30 rounded-2xl mx-auto mb-3">
                  <Award className="h-8 w-8 text-healthcare-blue" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={25} suffix="+" delay={1000} />
                </div>
                <div className="text-sm text-white/90 font-medium">
                  Certifications
                </div>
              </div>
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-coral/30 rounded-2xl mx-auto mb-3">
                  <Globe className="h-8 w-8 text-coral" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={15} suffix="+" delay={1200} />
                </div>
                <div className="text-sm text-white/90 font-medium">
                  Countries
                </div>
              </div>
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-mint/30 rounded-2xl mx-auto mb-3">
                  <Calendar className="h-8 w-8 text-mint" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={12} suffix="+" delay={1400} />
                </div>
                <div className="text-sm text-white/90 font-medium">
                  Board Positions
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
