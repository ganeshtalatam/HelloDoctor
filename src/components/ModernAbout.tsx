import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Target,
  Award,
  Lightbulb,
  Globe,
  Heart,
  Users,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const ModernAbout = () => {
  const currentRoles = [
    {
      title: "Senior Advisory Consultant",
      subtitle: "Healthcare Management & Project Management",
      description:
        "Leading strategic initiatives in corporate hospital management and medical diagnostics",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Social Scientist/Ethicist",
      subtitle: "AINU - Asian Institute of Nephrology & Urology",
      description:
        "Ethics Committee member ensuring responsible medical practices",
      icon: <Heart className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Entrepreneurial Mentor",
      subtitle: "T-Hub & NiMSME, Hyderabad",
      description:
        "Fostering innovation in healthcare startups and entrepreneurship",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Global Advisory Consultant",
      subtitle: "GUIDEPOINT, New York, USA",
      description: "International healthcare consulting and strategic guidance",
      icon: <Globe className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      title: "Consultant Advisory Entrepreneurial Mentor",
      subtitle: "AIMs/AICs, UOH, O.T.B.I., NITI Aayog - AIM Healthcare Start-Ups at ALEAP, Hyderabad",
      description:
        "Mentoring healthcare startups and fostering innovation in the healthcare ecosystem",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Industry Advisor on Board",
      subtitle: "VVISM-Pharma & Healthcare Management",
      description:
        "Strategic advisory role in pharmaceutical and healthcare management education",
      icon: <Building2 className="w-6 h-6" />,
      color: "from-teal-500 to-teal-600",
    },
    {
      title: "Guest Faculty & Speaker",
      subtitle: "Healthcare Institutes & Academic Institutions",
      description:
        "Guest faculty at Malla Reddy Inst. of Health Sciences, SNMC-Bagalkot, VVISM, Woxsen's Univ., ASCI, MBU, MRIDS, Govt. Degree Colleges",
      icon: <Users className="w-6 h-6" />,
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Healthcare Advisory Consultant",
      subtitle: "Shri Nijalingappa Medical College & HSKRC, Bagalkot",
      description:
        "Strategic advisory role in medical education and healthcare delivery excellence",
      icon: <Heart className="w-6 h-6" />,
      color: "from-rose-500 to-rose-600",
    },
  ];

  const specializations = [
    "Healthcare Management",
    "Project Management",
    "Corporate Hospital Management",
    "Medical Diagnostics",
    "Leadership Training",
    "Healthcare Recruitment",
    "Medical Ethics",
    "Genetic Disorders (IEMs/LSDs)",
    "Healthcare Innovation",
    "Strategic Planning",
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              About Dr. Muralidhar
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Pioneering Healthcare
            <br />
            <span className="bg-gradient-to-r from-healthcare-blue  to-gold bg-clip-text text-transparent mt-1">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A visionary leader with over 28 years of transformative
            experience across all healthcare sectors, driving innovation and
            setting new standards in medical practice and administration.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20 animate-scale-up">
          <Card className="bg-gradient-card border-0 shadow-xl hover-lift">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-healthcare-blue to-gold-light rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Professional Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                "To transform healthcare delivery through strategic management,
                innovative project leadership, and comprehensive training
                programs that foster excellence in medical practice. My
                commitment extends beyond consultation to mentoring the next
                generation of healthcare leaders and ensuring ethical practices
                across all medical domains."
              </p>
              <div className="mt-8 flex justify-center">
                <Badge variant="secondary" className="px-6 py-2 text-lg">
                  Healthcare Management Professional
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Objective */}
        {/* <div className="mb-20 animate-scale-up">
          <Card className="bg-gradient-to-r from-navy to-healthcare-blue border-0 shadow-xl hover-lift text-white">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Professional Objective</h3>
              <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                "TO BE A PART OF DEVELOPMENT IN OTHERS' LIVES WHILE DEVELOPING MYSELF."
              </p>
              <div className="mt-8 flex justify-center">
                <Badge variant="secondary" className="px-6 py-2 text-lg bg-white/20 text-white border-white/30">
                  Personal Development & Service
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div> */}

        {/* Current Roles Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Positions Held
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentRoles.map((role, index) => (
              <Card
                key={index}
                className="group hover-lift animate-fade-up border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{role.icon}</div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{role.title}</h4>
                  <p className="text-primary font-medium text-sm mb-4">
                    {role.subtitle}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {role.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Experience */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Industry Overview */}
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold mb-8">Industry Impact</h3>
            <div className="space-y-8">
              <Card className="bg-gradient-card border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">
                        Pharmaceutical Excellence
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Strategic roles with industry giants including Novo
                        Nordisk, Abbot, Dr. Reddy's, Alkem, and Gland Pharma,
                        driving innovation and operational excellence.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Novo Nordisk</Badge>
                        <Badge variant="secondary">Abbot</Badge>
                        <Badge variant="secondary">Dr. Reddy's</Badge>
                        <Badge variant="secondary">Alkem</Badge>
                        <Badge variant="secondary">Gland Pharma</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">
                        Diagnostic Innovation
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Leadership positions with SRL Diagnostics (Agilus) and
                        Medall Diagnostics, revolutionizing laboratory
                        management and diagnostic technologies.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">SRL Diagnostics</Badge>
                        <Badge variant="secondary">Medall Diagnostics</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-3">
                        Hospital Management
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Corporate consulting with KIMS and ethics committee
                        leadership at AINU, ensuring highest standards of
                        patient care and medical ethics.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">KIMS</Badge>
                        <Badge variant="secondary">AINU</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: Specializations */}
          <div className="animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-3xl font-bold mb-8">Core Specializations</h3>

            <Card className="bg-gradient-card border-0 shadow-xl hover-lift">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-colors group"
                    >
                      <div className="w-2 h-2 bg-gradient-accent rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-sm font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6 animate-in">
              <Card className="bg-primary text-white border-0 shadow-lg hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter target={500} suffix="+" delay={300} />
                  </div>
                  <div className="text-sm opacity-90">Organizations Served</div>
                </CardContent>
              </Card>
              <Card className="bg-primary text-white border-0 shadow-lg hover-lift text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold mb-2">28+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAbout;
