import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Image } from "antd";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      offset: 120,
      easing: "ease-out-cubic"
    });
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/e-commerce.png",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      title: "Task Management App",
      description:
        "Real-time collaborative task management tool with drag-and-drop functionality and team features.",
      techStack: ["React", "Express", "PostgreSQL", "Socket.io"],
      image: "/app.png",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with interactive charts and data visualization.",
      techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: "/social.png",
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      title: "Blog Platform",
      description:
        "Modern blogging platform with markdown support, comments, and user profiles.",
      techStack: ["React", "Express", "MongoDB", "AWS S3"],
      image: "/blog.png",
      github: "https://github.com",
      live: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden glass-effect hover-lift"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
              >
                {/* Image */}
                <div data-aos="zoom-in" data-aos-delay="200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    preview={true}
                    className="w-full h-full object-cover aspect-video"
                    fallback="/fallback.png"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">

                  <h3
                    className="text-2xl font-bold"
                    data-aos="fade-up"
                    data-aos-delay="250"
                  >
                    {project.title}
                  </h3>

                  <p
                    className="text-muted-foreground"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="350">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="font-medium"
                        data-aos="zoom-in"
                        data-aos-delay={techIndex * 100}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-2">
                    <div className="flex-1" data-aos="fade-in" data-aos-delay="450">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>

                    <div className="flex-1" data-aos="fade-in" data-aos-delay="500">
                      <Button size="sm" className="w-full" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
