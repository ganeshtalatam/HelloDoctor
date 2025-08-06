import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const EducationSection = () => {
  const academicQualifications = [
    {
      degree: "Honorary Doctorate in Healthcare Management",
      institution: "CIAC/CIHF / University of Technology & Entrepreneurship",
      location: "Delaware, USA",
      icon: <Award className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      degree: "Masters in Business, Leadership & Conflict Management (MBM, MLM, MCM)",
      institution: "Masterclass University",
      location: "California",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Post Graduate in Reproductive Physiology & Endocrinology (Mammalian)",
      institution: "S.V.U.",
      location: "Tirupati",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      degree: "Post Graduate in Marketing & Management - PGDM",
      institution: "IGNOU",
      location: "New Delhi",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      degree: "Innovation & Corporate Entrepreneurship",
      institution: "ISB (Indian School of Business)",
      location: "Hyderabad",
      icon: <Award className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const certifications = [
    {
      category: "Healthcare Specializations",
      certs: [
        "AED/CPR - American Health Care Academy, Texas",
        "Infection Control in Healthcare - ALISON, Ireland",
        "Understanding & Management of Type-2 Diabetes - ALISON, Ireland",
        "Usage of Social Media in Healthcare - ALISON, Ireland",
        "Infection Prevention & Control - IFCAI",
        "Medical Ethics",
        "AMR (AntiMicrobial Resistance) Stewardship - G-SPARC Summit",
        "National Strategic Plan for TB with WHO Badge"
      ]
    },
    {
      category: "Professional Development",
      certs: [
        "Grade-A Certified Lean Six Sigma Professional - Manipal ProLearn University",
        "Certified Health & Wellness Coach - CIIS (California Institute of Integral Studies)",
        "American TESOL / Peak Performance - Certified Trainer to the Trainers",
        "Leadership Discovery Certification - W.H.O"
      ]
    },
    {
      category: "Specialized Training",
      certs: [
        "Yoga & Consciousness - Andhra University, Vizag",
        "Pre-Eclampsia Prediction & Prevention - RCOG (Royal College of Obstetritians & Gynaecologists, London)",
        "Various Healthcare Courses - Aster Health Academy",
        "Multiple Healthcare Management Domains - FMF, RCOG, AHA-Aster Health Academy"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
            Education & <span className="bg-gradient-to-r from-healthcare-blue to-gold bg-clip-text text-transparent">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive educational foundation spanning healthcare management, business leadership, 
            and specialized medical domains from prestigious institutions worldwide.
          </p>
        </div>

        {/* Academic Qualifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Academic Qualifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academicQualifications.map((qual, index) => (
              <Card key={index} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${qual.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {qual.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <h4 className="font-semibold text-lg leading-tight">{qual.degree}</h4>
                  <p className="text-primary font-medium">{qual.institution}</p>
                  <div className="flex items-center justify-center space-x-1 text-muted-foreground">
                    <Globe size={14} />
                    <span className="text-sm">{qual.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Professional Certifications</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {certifications.map((category, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-xl font-semibold">{category.category}</h4>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.certs.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cert}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-navy mb-2">
                <AnimatedCounter target={5} suffix="+" delay={500} />
              </div>
              <div className="text-navy/70">Degree Programs</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-navy mb-2">
                <AnimatedCounter target={25} suffix="+" delay={700} />
              </div>
              <div className="text-navy/70">Certifications</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-navy mb-2">
                <AnimatedCounter target={10} suffix="+" delay={900} />
              </div>
              <div className="text-navy/70">Countries</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-navy mb-2">
                <AnimatedCounter target={20} suffix="+" delay={1100} />
              </div>
              <div className="text-navy/70">Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;