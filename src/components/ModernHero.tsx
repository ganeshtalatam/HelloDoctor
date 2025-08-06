import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Calendar, Stethoscope, Globe, BookOpen } from "lucide-react";
import drMuralidharPortrait from "@/assets/dr-muralidhar-portrait.jpg";
import ScrollReveal from "./ScrollReveal";
import AnimatedCounter from "./AnimatedCounter";

const ModernHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center bg-gradient-hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float-subtle"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-healthcare-blue/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-coral/10 rounded-full blur-xl animate-pulse-fast"></div>
        
        {/* Gradient Animation */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'var(--gradient-animated)',
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 12s ease-in-out infinite'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <ScrollReveal direction="left" delay={200}>
          <div className="text-white space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-sm font-medium animate-glow">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-gold">30+ Years Healthcare Excellence</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white">Dr. Muralidhar</span>
                <span className="block bg-gradient-to-r from-gold via-gold-light to-white bg-clip-text text-transparent animate-shimmer" 
                      style={{ backgroundSize: '200% 100%' }}>
                  Panchagnula (h.c.)
                </span>
              </h1>
              <p className="text-2xl text-gold font-semibold">ISB Alumni • Healthcare Visionary</p>
            </div>

            <p className="text-xl leading-relaxed text-white/90 max-w-2xl font-light">
              Transforming Healthcare Management across 3+ decades. Senior Advisory Consultant 
              specializing in Corporate Hospital Management and Healthcare Innovation.
            </p>

            {/* Expertise Cards */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover-scale">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-healthcare-blue/20 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-healthcare-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Healthcare Management</h3>
                    <p className="text-sm text-white/70">Strategic Leadership</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover-scale">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gold/20 rounded-lg">
                    <Globe className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Global Advisory</h3>
                    <p className="text-sm text-white/70">International Expertise</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gold text-navy hover:bg-gold/90 btn-healthcare group text-lg px-8 py-4 font-semibold animate-glow-gold"
              >
                Explore My Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-navy backdrop-blur-sm text-lg px-8 py-4 font-semibold"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Professional Portrait */}
        <ScrollReveal direction="right" delay={400}>
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-healthcare-blue/30 rounded-3xl blur-2xl group-hover:blur-xl transition-all duration-500 animate-glow"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-4 hover-lift">
                <img
                  src={drMuralidharPortrait}
                  alt="Dr. Muralidhar Panchagnula"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-healthcare-blue/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-healthcare-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">ISB Graduate</p>
                  <p className="text-xs text-navy/70">Leadership Excellence</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Award className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">Healthcare Pioneer</p>
                  <p className="text-xs text-navy/70">Industry Recognition</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Statistics Grid */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" delay={600}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-gold/20 rounded-2xl mx-auto mb-3 group-hover:animate-bounce-micro">
                  <Users className="h-8 w-8 text-gold" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={50} suffix="+" delay={800} />
                </div>
                <div className="text-sm text-white/70 font-medium">Major Companies</div>
              </div>
              
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-healthcare-blue/20 rounded-2xl mx-auto mb-3 group-hover:animate-bounce-micro">
                  <Award className="h-8 w-8 text-healthcare-blue" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={25} suffix="+" delay={1000} />
                </div>
                <div className="text-sm text-white/70 font-medium">Certifications</div>
              </div>
              
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-coral/20 rounded-2xl mx-auto mb-3 group-hover:animate-bounce-micro">
                  <Globe className="h-8 w-8 text-coral" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={15} suffix="+" delay={1200} />
                </div>
                <div className="text-sm text-white/70 font-medium">Countries</div>
              </div>
              
              <div className="text-center group hover-scale">
                <div className="flex items-center justify-center w-16 h-16 bg-mint/20 rounded-2xl mx-auto mb-3 group-hover:animate-bounce-micro">
                  <Calendar className="h-8 w-8 text-mint" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  <AnimatedCounter target={12} suffix="+" delay={1400} />
                </div>
                <div className="text-sm text-white/70 font-medium">Board Positions</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;