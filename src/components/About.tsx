import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Brain, Code, Database, Globe, Shield, BarChart3, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { TeamMemberDialog } from "./TeamMemberDialog";
import Selim from "@/assets/people/selim.png";
import Nizar from "@/assets/people/nizar.jpeg";
import Badis from "@/assets/people/badis.png";

const About = () => {
  const { t } = useTranslation();
  const { elementRef: titleRef, isIntersecting: titleVisible } = useIntersectionObserver();
  const { elementRef: cardsRef, isIntersecting: cardsVisible } = useIntersectionObserver({ rootMargin: '0px 0px -50px 0px' });
  
  const skillIconMap: { [key: string]: any } = {
    "GenAI": Brain,
    "NLP": Globe,
    "MLOps": Database,
    "Banking": BarChart3,
    "Software": Code,
    "Backend": Database,
    "Frontend": Globe,
    "DevOps": Shield,
    "AI": Brain,
    "Consulting": Users,
    "Humanitarian": Users,
    "Graph ML": Shield,
    "Enterprise": BarChart3,
    "Deployment": Database,
  };

  const getSkillIcon = (skill: string) => {
    const Icon = skillIconMap[skill] || Code;
    return <Icon className="w-4 h-4" />;
  };

  const teamMembers = [
    {
      name: t('about.nizar.name'),
      role: t('about.nizar.role'),
      photo: Nizar,
      bio: t('about.nizar.bio'),
      linkedinUrl: "https://www.linkedin.com/in/nizar-ghandri-232b71174/",
      skills: t('about.nizar.skills', { returnObjects: true }) as string[],
      experience: t('about.nizar.experience', { returnObjects: true }) as string[],
      topSkills: ["GenAI", "Graph ML", "MLOps", "Enterprise"],
    },
    {
      name: t('about.selim.name'),
      role: t('about.selim.role'),
      photo: Selim,
      bio: t('about.selim.bio'),
      linkedinUrl: "https://www.linkedin.com/in/selim-fekih-a37521181/",
      skills: t('about.selim.skills', { returnObjects: true }) as string[],
      experience: t('about.selim.experience', { returnObjects: true }) as string[],
      topSkills: ["NLP", "Consulting", "AI", "Humanitarian"],
    },
    {
      name: t('about.badis.name'),
      role: t('about.badis.role'),
      photo: Badis,
      bio: t('about.badis.bio'),
      linkedinUrl: "https://www.linkedin.com/in/badis-machraoui-9a44051b7/",
      skills: t('about.badis.skills', { returnObjects: true }) as string[],
      experience: t('about.badis.experience', { returnObjects: true }) as string[],
      topSkills: ["Frontend", "Backend", "AI", "DevOps"],
    },
  ];
  
  return (
    <section id="about" className="min-h-screen flex items-center py-24 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberDialog
              key={index}
              trigger={
                <Card 
                  className={`group cursor-pointer p-6 bg-card/50 border-border/50 backdrop-blur-sm hover:shadow-elegant transition-all duration-700 hover:-translate-y-2 relative ${
                    index === 2 ? 'lg:col-span-2 lg:mx-auto lg:w-1/2' : ''
                  } ${
                    cardsVisible 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: cardsVisible ? `${(index + 1) * 200}ms` : '0ms' }}
                >
                  {/* More Info - Top Right */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-xs font-medium text-accent group-hover:text-accent/80 transition-colors">
                      {t('about.moreButton')} →
                    </span>
                  </div>

                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Left side: Photo and LinkedIn */}
                      <div className="flex flex-col items-center gap-3 flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild 
                          className="w-full px-3"
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                          <a 
                            href={member.linkedinUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                          </a>
                        </Button>
                      </div>

                      {/* Right side: Name, Role, and Skills */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                        <p className="text-accent font-medium mb-4">{member.role}</p>
                        
                        {/* Skill Icons */}
                        <div className="flex flex-wrap gap-1.5">
                          {member.topSkills.map((skill, skillIndex) => (
                            <div 
                              key={skillIndex}
                              className="flex items-center gap-1.5 bg-muted/50 px-2 py-1 rounded-md border border-border/50"
                              title={skill}
                            >
                              {getSkillIcon(skill)}
                              <span className="text-[11px] font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              }
              name={member.name}
              role={member.role}
              photo={member.photo}
              bio={member.bio}
              linkedinUrl={member.linkedinUrl}
              experience={member.experience}
              skills={member.skills}
            />
          ))}
        </div>


        {/* <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Together, we combine deep technical expertise with a mission to democratize AI and create meaningful impact.
          </p>
          <CVForm
            trigger={
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Join Our Mission
              </Button>
            }
          />
        </div> */}
      </div>
    </section>
  );
};

export default About;