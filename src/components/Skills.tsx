import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Expert" },
        { name: "HTML/CSS", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Redux", level: "Advanced" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express", level: "Advanced" },
        { name: "REST APIs", level: "Expert" },
        { name: "GraphQL", level: "Intermediate" },
        { name: "JWT Auth", level: "Advanced" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Mongoose", level: "Advanced" },
        { name: "Redis", level: "Intermediate" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: "Expert" },
        { name: "Docker", level: "Intermediate" },
        { name: "AWS", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary/10 text-primary border-primary/20";
      case "Advanced":
        return "bg-accent/10 text-accent border-accent/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 glass-effect hover-lift"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <h3 className="text-2xl font-bold mb-6 text-gradient">
                  {category.category}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between gap-4"
                      data-aos="fade-up"
                      data-aos-delay={skillIndex * 80}
                    >
                      <span className="font-medium">{skill.name}</span>

                      <Badge
                        variant="outline"
                        className={`${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
