import { useEffect, useRef, useState } from 'react';
import { Building2, Award, Globe, Users, Stethoscope, BookOpen } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  achievements: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "1990-2000",
    title: "Foundation Years",
    description: "Building expertise in healthcare fundamentals and establishing professional foundation.",
    icon: <BookOpen className="h-6 w-6" />,
    color: "healthcare-blue",
    achievements: ["Healthcare Management Certification", "ISB Alumni Program", "Strategic Leadership Training"]
  },
  {
    year: "2000-2010", 
    title: "Corporate Healthcare Leadership",
    description: "Leading major healthcare transformations and establishing industry best practices.",
    icon: <Building2 className="h-6 w-6" />,
    color: "gold",
    achievements: ["Multi-Hospital Management", "Healthcare Innovation", "Team Leadership Excellence"]
  },
  {
    year: "2010-2020",
    title: "Global Advisory & Consulting",
    description: "Expanding influence through international consulting and advisory positions.",
    icon: <Globe className="h-6 w-6" />,
    color: "coral",
    achievements: ["International Projects", "Global Best Practices", "Cross-Cultural Leadership"]
  },
  {
    year: "2020-Present",
    title: "Senior Healthcare Strategist", 
    description: "Shaping the future of healthcare through strategic advisory and board positions.",
    icon: <Stethoscope className="h-6 w-6" />,
    color: "mint",
    achievements: ["Board Positions", "Strategic Advisory", "Industry Transformation"]
  }
];

const AnimatedTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveIndex(index);
            
            // Animate timeline line
            if (lineRef.current) {
              const percentage = ((index + 1) / timelineData.length) * 100;
              lineRef.current.style.height = `${percentage}%`;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-white via-mint-soft/20 to-healthcare-blue/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Professional Evolution
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              Three decades of transformative leadership in healthcare management, 
              from foundational expertise to global strategic advisory.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-1 bg-gray-200 h-full">
            <div 
              ref={lineRef}
              className="w-full bg-gradient-to-b from-healthcare-blue via-gold to-mint transition-all duration-1000 ease-out"
              style={{ height: '0%' }}
            />
          </div>

          {timelineData.map((item, index) => (
            <div 
              key={index}
              data-index={index}
              className={`timeline-item relative flex items-center mb-16 md:mb-20 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                <div className={`w-16 h-16 rounded-full border-4 border-white shadow-lg transition-all duration-500 flex items-center justify-center ${
                  activeIndex >= index 
                    ? `bg-${item.color} animate-glow` 
                    : 'bg-gray-200'
                }`}>
                  <div className={`transition-colors duration-500 ${
                    activeIndex >= index ? 'text-white' : 'text-gray-400'
                  }`}>
                    {item.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ml-28 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12 md:text-right' : 'md:ml-12'
              }`}>
                <ScrollReveal 
                  direction={index % 2 === 0 ? 'right' : 'left'} 
                  delay={200}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover-lift transition-all duration-500 ${
                    activeIndex >= index ? 'animate-pop-in' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-2xl font-bold bg-gradient-to-r from-${item.color} to-${item.color}/70 bg-clip-text text-transparent`}>
                        {item.year}
                      </span>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${item.color}/10 text-${item.color}`}>
                        Phase {index + 1}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-navy/70 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-navy mb-3">Key Achievements:</h4>
                      <div className="grid gap-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <div 
                            key={achievementIndex}
                            className="flex items-center gap-3 group"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${item.color} group-hover:animate-pulse`} />
                            <span className="text-sm text-navy/80 group-hover:text-navy transition-colors">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Card */}
        <ScrollReveal delay={400}>
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-navy to-healthcare-blue rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Continuing the Journey
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Today, Dr. Muralidhar continues to shape the future of healthcare 
                    through strategic advisory roles, board positions, and mentoring 
                    the next generation of healthcare leaders.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="h-12 w-12 text-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-white/80">Organizations Served</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-12 w-12 text-gold mx-auto mb-2" />
                    <div className="text-2xl font-bold">30+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AnimatedTimeline;