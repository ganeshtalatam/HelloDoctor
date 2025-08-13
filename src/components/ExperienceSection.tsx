import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Stethoscope, FlaskConical, Users, Award, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experienceCategories = [
    {
      title: "Pharmaceutical Industry",
      icon: <FlaskConical className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      companies: [
        { name: "Novo Nordisk", role: "Healthcare Management", focus: "Diabetes Care & Medical Devices" },
        { name: "Abbot", role: "Strategic Consultant", focus: "Nutrition & Pharmaceuticals" },
        { name: "Dr. Reddy's Laboratories", role: "Advisory Role", focus: "Generic & Specialty Medicines" },
        { name: "Alkem Laboratories", role: "Management Consultant", focus: "Pharmaceutical Operations" },
        { name: "Gland Pharma", role: "Project Advisor", focus: "Injectable Manufacturing" }
      ]
    },
    {
      title: "Diagnostic Services",
      icon: <Stethoscope className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      companies: [
        { name: "SRL Diagnostics (Agilus)", role: "Senior Consultant", focus: "Laboratory Management & Operations" },
        { name: "Medall Diagnostics", role: "Strategic Advisor", focus: "Diagnostic Technology & Quality" }
      ]
    },
    {
      title: "Hospital Management",
      icon: <Building2 className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      companies: [
        { name: "KIMS (Krishna Institute of Medical Sciences)", role: "Corporate Consultant", focus: "Hospital Operations & Management" },
        { name: "AINU (Asian Institute of Nephrology & Urology)", role: "Ethics Committee Member", focus: "Social Scientist/Ethicist" }
      ]
    },
    {
      title: "Medical Genetics",
      icon: <Award className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      companies: [
        { name: "LSDs (Lysosomal Storage Disorders)", role: "Domain Expert", focus: "Diagnosis & Treatment Protocols" },
        { name: "IEMs (Inborn Errors of Metabolism)", role: "Clinical Consultant", focus: "Genetic Disorder Management" }
      ]
    }
  ];

  const currentBoards = [
    {
      organization: "VVISM-Pharma & Healthcare Management",
      role: "Industry Advisor on Board",
      focus: "Strategic Healthcare Management"
    },
    {
      organization: "Shri Nijalingappa Medical College & HSKRC, Bagalkot",
      role: "Healthcare Advisory Consultant to the Board",
      focus: "Medical Education & Healthcare Delivery"
    },
    {
      organization: "GUIDEPOINT Global Advisors, New York, USA",
      role: "Advisory Consultant",
      focus: "International Healthcare Consulting"
    },
    {
      organization: "T-Hub & NiMSME, Hyderabad",
      role: "Guest Faculty & Consultant",
      focus: "Entrepreneurial Mentoring"
    },
    {
      organization: "AIMs/AICs, UOH, O.T.B.I., NITI Aayog - AIM Healthcare Start-Ups at ALEAP, Hyderabad",
      role: "Consultant Advisory Entrepreneurial Mentor",
      focus: "Healthcare Innovation & Startups"
    },
    {
      organization: "Malla Reddy Institute of Health Sciences",
      role: "Guest Faculty & Guest Speaker",
      focus: "Healthcare Management Education"
    },
    {
      organization: "SNMC-Bagalkot",
      role: "Guest Faculty & Guest Speaker",
      focus: "Healthcare Management Education"
    },
    {
      organization: "VVISM, Woxsen's University, ASCI, MBU, MRIDS",
      role: "Guest Faculty/Guest Speaker",
      focus: "Academic & Professional Development"
    },
    {
      organization: "Government Degree Colleges at Kadapa/Rajahmundry",
      role: "Guest Faculty/Guest Speaker",
      focus: "Academic Excellence & Leadership"
    }
  ];

  const achievements = [
    { number: "28+", label: "Years Experience", icon: <TrendingUp className="h-5 w-5" /> },
    { number: "15+", label: "Major Organizations", icon: <Building2 className="h-5 w-5" /> },
    { number: "500+", label: "Professionals Trained", icon: <Users className="h-5 w-5" /> },
    { number: "25+", label: "Board Positions", icon: <Award className="h-5 w-5" /> }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            28+ years of comprehensive experience across all major sectors of the healthcare industry,
            driving innovation and excellence in medical practice and administration.
          </p>
        </div>

        {/* Experience Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry Experience */}
        <div className="space-y-12">
          <h3 className="text-2xl font-semibold text-center mb-8">Industry Experience</h3>

          {experienceCategories.map((category, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="hover-lift">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                      <p className="text-muted-foreground">Leading organizations in {category.title.toLowerCase()}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.companies.map((company, companyIndex) => (
                      <Card key={companyIndex} className="bg-secondary/50 hover-lift">
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-lg mb-2">{company.name}</h4>
                          <Badge variant="outline" className="mb-3">{company.role}</Badge>
                          <p className="text-sm text-muted-foreground">{company.focus}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Current Board Positions */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Current Board Positions & Advisory Roles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentBoards.map((board, index) => (
              <Card key={index} className="hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center text-primary-foreground flex-shrink-0">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">{board.organization}</h4>
                      <Badge className="mb-3">{board.role}</Badge>
                      <p className="text-sm text-muted-foreground">{board.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mt-16">
          <Card className="hover-lift animate-fade-in">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Professional Summary</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Currently serving as a Senior Advisory Consultant in Healthcare Management,
                Trainer/Coach/Mentor, and Guest Faculty to numerous organizations and academic institutes.
                Active member of Industry Advisory Boards and Ethics Committees across multiple healthcare corporates,
                contributing to strategic decision-making and ethical healthcare practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;