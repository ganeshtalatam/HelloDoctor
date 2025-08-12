import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Factory,
  Microscope,
  Users,
  Award,
  TrendingUp,
  Globe,
} from "lucide-react";

const ProfessionalJourney = () => {
  const journeyPhases = [
    {
      period: "Current Era",
      title: "Global Healthcare Leadership",
      description:
        "Leading transformative initiatives across international healthcare networks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      highlights: [
        "Senior Advisory Consultant - Healthcare Management",
        "T-Hub & NiMSME Entrepreneurial Mentor",
        "GUIDEPOINT Global Advisors, New York",
        "AINU Ethics Committee Leadership",
      ],
    },
    {
      period: "2010-2020",
      title: "Corporate Healthcare Excellence",
      description:
        "Strategic leadership roles in major pharmaceutical and diagnostic companies",
      icon: <Building className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
      highlights: [
        "KIMS Corporate Hospital Management",
        "SRL Diagnostics (Agilus) Leadership",
        "Medall Diagnostics Strategic Role",
        "Healthcare Project Management",
      ],
    },
    {
      period: "2000-2010",
      title: "Pharmaceutical Innovation",
      description: "Pioneering roles with global pharmaceutical giants",
      icon: <Factory className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      highlights: [
        "Novo Nordisk Strategic Initiatives",
        "Abbott Healthcare Solutions",
        "Dr. Reddy's Laboratories",
        "Alkem & Gland Pharma Projects",
      ],
    },
    {
      period: "1990-2000",
      title: "Medical Genetics Expertise",
      description:
        "Specialized focus on rare genetic disorders and diagnostic innovation",
      icon: <Microscope className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      highlights: [
        "LSDs (Lysosomal Storage Disorders)",
        "IEMs (Inborn Errors of Metabolism)",
        "Genetic Disorder Diagnosis",
        "Treatment Protocol Development",
      ],
    },
  ];

  const industryStats = [
    {
      label: "Healthcare Sectors",
      value: "All Major",
      icon: <Building className="w-6 h-6" />,
    },
    {
      label: "Companies Worked",
      value: "15+",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      label: "Board Positions",
      value: "25+",
      icon: <Award className="w-6 h-6" />,
    },
    {
      label: "Years Experience",
      value: "30+",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  const currentBoardPositions = [
    {
      organization: "VVISM-Pharma & Healthcare Management",
      role: "Industry Advisor",
      focus: "Strategic Healthcare Consulting",
    },
    {
      organization: "Shri Nijalingappa Medical College & HSKRC",
      role: "Healthcare Advisory Consultant",
      focus: "Medical Education Excellence",
    },
    {
      organization: "NITI Aayog - AIM Healthcare Start-Ups",
      role: "Entrepreneurial Mentor",
      focus: "Healthcare Innovation",
    },
    {
      organization: "Malla Reddy Institute of Health Sciences",
      role: "Guest Faculty",
      focus: "Healthcare Management Education",
    },
  ];

  return (
    <section
      id="journey"
      className="py-24 relative overflow-hidden bg-secondary/30"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Three Decades of
            <br />
            <span className="text-gradient">Healthcare Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A transformative journey across all major healthcare sectors, from
            pharmaceutical innovation to global advisory roles, consistently
            driving excellence and setting industry standards.
          </p>
        </div>

        {/* Industry Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {industryStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover-lift animate-scale-up border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="space-y-12 mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Career Evolution
          </h3>

          {journeyPhases.map((phase, index) => (
            <div
              key={index}
              className={`animate-slide-in ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              } flex flex-col lg:flex-row items-center gap-12`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className="flex-1">
                <Card className="bg-gradient-card border-0 shadow-xl hover-lift">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center text-white`}
                      >
                        {phase.icon}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {phase.period}
                        </Badge>
                        <h4 className="text-2xl font-bold">{phase.title}</h4>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {phase.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-gradient-accent rounded-full"></div>
                          <span className="text-sm font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline Connector */}
              <div className="hidden lg:flex flex-col items-center">
                <div
                  className={`w-4 h-4 bg-gradient-to-r ${phase.color} rounded-full`}
                ></div>
                {index < journeyPhases.length - 1 && (
                  <div className="w-0.5 h-24 bg-gradient-to-b from-primary to-accent mt-4"></div>
                )}
              </div>

              {/* Spacer for reverse layout */}
              <div className="flex-1 lg:block hidden"></div>
            </div>
          ))}
        </div>

        {/* Current Board Positions */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Current Board Positions & Advisory Roles
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {currentBoardPositions.map((position, index) => (
              <Card
                key={index}
                className="hover-lift animate-fade-up border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">
                        {position.organization}
                      </h4>
                      <Badge className="mb-3">{position.role}</Badge>
                      <p className="text-muted-foreground text-sm">
                        {position.focus}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary Statement */}
        <div className="mt-20 text-center animate-fade-up">
          <Card className="bg-gradient-hero text-white border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Current Focus</h3>
              <p className="text-xl leading-relaxed opacity-90">
                "Currently serving as a Senior Advisory Consultant in Healthcare
                Management, Trainer/Coach/Mentor, and Guest Faculty to numerous
                organizations and academic institutes. Active leadership in
                Industry Advisory Boards and Ethics Committees, contributing to
                strategic decision-making and ethical healthcare practices
                worldwide."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
