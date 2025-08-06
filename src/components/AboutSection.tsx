import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Target } from "lucide-react";

const AboutSection = () => {
  const currentRoles = [
    {
      title: "Senior Advisory Consultant",
      organization: "Healthcare Management & Project Management",
      description: "Corporate Hospital Management & Medical Diagnostics"
    },
    {
      title: "Social Scientist/Ethicist",
      organization: "AINU - Asian Institute of Nephrology & Urology",
      description: "Ethics Committee member"
    },
    {
      title: "Guest Faculty & Consultant",
      organization: "T-Hub & NiMSME",
      description: "Entrepreneurial Mentor"
    },
    {
      title: "Advisory Consultant",
      organization: "GUIDEPOINT, Global Advisors",
      description: "New York, USA"
    }
  ];

  const expertise = [
    "Healthcare Management",
    "Healthcare Project Management", 
    "Corporate Hospital Management",
    "Medical Diagnostics",
    "Leadership Training",
    "Healthcare Recruitment",
    "Project Management",
    "Healthcare Marketing",
    "Medical Ethics",
    "Genetic/Rare Disorders (IEMs/LSDs)"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Dr. Muralidhar Panchagnula</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A distinguished healthcare management professional with over three decades of comprehensive 
            experience across all sectors of the healthcare industry, driving innovation and excellence 
            in medical practice and administration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-6 animate-slide-up">
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Mission</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Dedicated to advancing healthcare through strategic management, innovative project leadership, 
                  and comprehensive training programs. Committed to improving healthcare delivery systems and 
                  fostering excellence in medical practice across various healthcare institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Industry Experience</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Extensive experience across major healthcare sectors:
                </p>
                <div className="space-y-2">
                  <div><strong>Pharmaceutical:</strong> Novo Nordisk, Abbott, Dr. Reddy's, Alkem, Gland Pharma</div>
                  <div><strong>Diagnostics:</strong> SRL Diagnostics (Agilus), Medall Diagnostics</div>
                  <div><strong>Hospital Corporate:</strong> KIMS (Krishna Institute of Medical Sciences)</div>
                  <div><strong>Medical Genetics:</strong> LSDs, IEMs - Diagnosis & Treatment</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Current Roles */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">Current Positions</h3>
            <div className="space-y-4">
              {currentRoles.map((role, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{role.title}</h4>
                        <p className="text-primary font-medium text-sm mb-1">{role.organization}</p>
                        <p className="text-muted-foreground text-sm">{role.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Expertise Areas */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Areas of Expertise</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expertise.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="hover-lift">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;