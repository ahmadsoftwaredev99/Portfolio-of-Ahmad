import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/ahmadsoftwaredev99"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: ""
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href:"mailto:ahmadmdev33@gmail.com"

    }
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover-lift"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Ahmad. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
