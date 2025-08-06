import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Calendar } from "lucide-react";
import drMuralidharPortrait from "@/assets/dr-muralidhar-portrait.jpg";
import healthcareHeroBg from "@/assets/healthcare-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(220, 50, 20, 0.9), rgba(200, 95, 45, 0.8)), url(${healthcareHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-white space-y-6 animate-fade-in">
          <div className="space-y-2">
            <p className="text-lg font-medium opacity-90">Healthcare Management Professional</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Dr. Muralidhar
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Panchagnula (h.c.)
              </span>
            </h1>
            <p className="text-xl opacity-90">ISB (Indian School of Business) Alumnus</p>
          </div>

          <p className="text-lg leading-relaxed opacity-90 max-w-xl">
            Senior Advisory Consultant with more than 3 decades of experience in all the 
            offshoots of Healthcare Industry. Specialized in Healthcare Management, 
            Project Management, and Corporate Hospital Management.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover-lift group"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Credentials
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-2">
                <Calendar className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold">30+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-2">
                <Users className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Organizations</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-2">
                <Award className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-80">Certifications</div>
            </div>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="relative animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl animate-float"></div>
            <img
              src={drMuralidharPortrait}
              alt="Dr. Muralidhar Panchagnula"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl hover-lift"
            />
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;