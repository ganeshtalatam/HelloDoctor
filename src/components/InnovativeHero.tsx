import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Users } from "lucide-react";
import drMuralidharPortrait from "@/assets/dr-muralidhar-portrait.jpg";

const InnovativeHero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Content Side */}
          <div className="space-y-8 animate-slide-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-medium">30+ Years Healthcare Excellence</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Dr. Muralidhar
                <br />
                <span className="text-gradient bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                  Panchagnula
                </span>
                <span className="text-3xl md:text-4xl text-blue-200 block mt-2">(h.c.)</span>
              </h1>
              
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
                  ))}
                </div>
                <span className="text-white/80">ISB Alumni</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              Transforming healthcare through visionary leadership and innovative management. 
              A distinguished consultant shaping the future of medical excellence across continents.
            </p>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h3 className="text-white font-semibold mb-2">Healthcare Management</h3>
                <p className="text-white/80 text-sm">Strategic leadership across pharmaceutical, diagnostic, and hospital sectors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <h3 className="text-white font-semibold mb-2">Global Advisory</h3>
                <p className="text-white/80 text-sm">International consulting with GUIDEPOINT Global Advisors, NY</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift group shadow-xl">
                Explore My Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                View Credentials
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-scale-up">
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-300/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
            
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src={drMuralidharPortrait}
                  alt="Dr. Muralidhar Panchagnula"
                  className="w-full rounded-2xl shadow-2xl hover-lift"
                />
                
                {/* Floating Stats */}
                <div className="absolute -left-6 top-1/2 bg-white rounded-2xl p-4 shadow-xl animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">30+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                </div>
                
                <div className="absolute -right-6 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">500+</div>
                    <div className="text-xs text-muted-foreground">Organizations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center text-white animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-white/80 text-sm">Major Companies</div>
          </div>
          
          <div className="text-center text-white animate-fade-up" style={{ animationDelay: '0.7s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-white/80 text-sm">Certifications</div>
          </div>
          
          <div className="text-center text-white animate-fade-up" style={{ animationDelay: '0.9s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-white/80 text-sm">Countries</div>
          </div>
          
          <div className="text-center text-white animate-fade-up" style={{ animationDelay: '1.1s' }}>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-white/80 text-sm">Board Positions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovativeHero;