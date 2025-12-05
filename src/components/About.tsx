import { Code2, Database, Layout, Server } from "lucide-react";
import { Card } from "@/components/ui/card";
import ahmadImg from "../assets/me.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
    });
  }, []);

  const highlights = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Frontend",
      description: "React, TypeScript, Tailwind",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend",
      description: "Node.js, Express, REST APIs",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database",
      description: "MongoDB, PostgreSQL",
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Tools",
      description: "Git, Docker, AWS",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div
            className="text-center mb-16"
            data-aos="fade-up"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">Get to know me better</p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div
              className="space-y-6"
              data-aos="fade-right"
            >
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden glass-effect">
                <img src={ahmadImg} alt="portfolio" />
              </div>
            </div>

            {/* Text + Highlights */}
            <div
              className="space-y-6"
              data-aos="fade-left"
            >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold">Full Stack Developer</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Passionate MERN stack developer with expertise in building modern,
                  scalable web applications. I specialize in creating seamless user
                  experiences with clean, maintainable code.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  With a strong foundation in both frontend and backend development,
                  I bring ideas to life through innovative solutions and best practices.
                </p>
              </div>

              {/* Skills Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 hover-lift glass-effect cursor-pointer"
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  >
                    <div className="text-primary mb-2">{item.icon}</div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
