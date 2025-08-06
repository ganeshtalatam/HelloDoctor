import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Users, Calendar, Award, Heart, Shield } from "lucide-react";
import drMuralidharPortrait from "@/assets/dr-muralidhar-portrait.jpg";
import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const EnhancedHero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-16">
      {/* Healthcare-focused Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-healthcare-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-healthcare-green/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-healthcare-teal/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Content Side */}
          <ScrollReveal direction="left" className="space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 hover-scale">
              <Sparkles className="w-5 h-5 text-healthcare-amber icon-pulse" />
              <span className="text-white font-medium">30+ Years Healthcare Excellence</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-healthcare-amber fill-current" />
                ))}
              </div>
            </div>

            {/* Main Heading with Enhanced Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-in-scale">
                Dr. Muralidhar
                <br />
                <span className="text-gradient bg-gradient-to-r from-healthcare-amber to-white bg-clip-text text-transparent animate-shimmer">
                  Panchagnula
                </span>
                <span className="text-3xl md:text-4xl text-healthcare-primary-light block mt-2">(h.c.)</span>
              </h1>
              
              <div className="flex items-center space-x-4 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center space-x-2 bg-healthcare-blue/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Shield className="w-5 h-5 text-healthcare-blue" />
                  <span className="text-white/90 font-medium">ISB Alumni</span>
                </div>
                <div className="flex items-center space-x-2 bg-healthcare-green/20 px-4 py-2 rounded-full backdrop-blur-sm">
                  <Heart className="w-5 h-5 text-healthcare-green icon-pulse" />
                  <span className="text-white/90 font-medium">Healthcare Leader</span>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <ScrollReveal direction="up" delay={500}>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Transforming healthcare through <span className="text-healthcare-amber font-semibold">visionary leadership</span> and 
                <span className="text-healthcare-green-light font-semibold"> innovative management</span>. 
                A distinguished consultant shaping the future of medical excellence across continents.
              </p>
            </ScrollReveal>

            {/* Key Expertise Cards */}
            <ScrollReveal direction="up" delay={700}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover-lift group">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-healthcare-primary/30 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-white font-semibold">Healthcare Management</h3>
                  </div>
                  <p className="text-white/80 text-sm">Strategic leadership across pharmaceutical, diagnostic, and hospital sectors</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover-lift group">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-healthcare-green/30 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-white font-semibold">Global Advisory</h3>
                  </div>
                  <p className="text-white/80 text-sm">International consulting with GUIDEPOINT Global Advisors, NY</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Enhanced Action Buttons */}
            <ScrollReveal direction="up" delay={900}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-healthcare-primary hover:bg-white/90 btn-healthcare group shadow-xl"
                >
                  <span>Explore My Journey</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-healthcare-primary backdrop-blur-md btn-healthcare"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          {/* Enhanced Image Side */}
          <ScrollReveal direction="right" className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-healthcare-amber/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-healthcare-blue/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Main Image Container with Glow Effect */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-healthcare-blue/30 to-healthcare-green/30 rounded-3xl blur-2xl transform rotate-6 glow-healthcare"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover-lift">
                <img
                  src={drMuralidharPortrait}
                  alt="Dr. Muralidhar Panchagnula"
                  className="w-full rounded-2xl shadow-2xl hover-scale"
                />
                
                {/* Floating Achievement Cards */}
                <div className="absolute -left-6 top-1/2 bg-white rounded-2xl p-4 shadow-2xl animate-float hover-scale">
                  <div className="text-center">
                    <AnimatedCounter target={30} suffix="+" delay={1000} />
                    <div className="text-xs text-muted-foreground font-medium">Years Experience</div>
                  </div>
                </div>
                
                <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl p-4 shadow-2xl animate-float hover-scale" style={{ animationDelay: '1.5s' }}>
                  <div className="text-center">
                    <AnimatedCounter target={500} suffix="+" delay={1500} />
                    <div className="text-xs text-muted-foreground font-medium">Organizations</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 right-1/4 bg-healthcare-amber text-white rounded-xl p-3 shadow-xl animate-bounce-gentle">
                  <Award className="w-6 h-6" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Enhanced Bottom Statistics */}
        <ScrollReveal direction="up" delay={1200}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: 15, suffix: '+', label: 'Major Companies', delay: 0 },
              { icon: Star, number: 25, suffix: '+', label: 'Certifications', delay: 200 },
              { icon: Sparkles, number: 5, suffix: '+', label: 'Countries', delay: 400 },
              { icon: Award, number: 10, suffix: '+', label: 'Board Positions', delay: 600 }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white hover-scale" style={{ animationDelay: `${stat.delay}ms` }}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 hover-lift">
                  <stat.icon className="w-8 h-8 icon-float" />
                </div>
                <div className="text-white">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} delay={1500 + stat.delay} />
                </div>
                <div className="text-white/80 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EnhancedHero;