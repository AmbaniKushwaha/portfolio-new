import { Github, Linkedin, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const socialLinks = [
  { icon: Github, href: "https://github.com/AmbaniKushwaha", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ambani-kushwaha-ab6236377", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/innovate_with_cs?stkn=cDQ2bHhkbDRrbHV2", label: "Instagram" },
];

const footerNavLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const getHref = (href) => {
    if (isHomePage) return href;
    return `/${href}`;
  };

  return (
    <footer className="py-12 border-t border-border relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
              AK<span className="text-primary glow-text">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Ambani Kushwaha. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            {footerNavLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/projects"
              className={`text-sm transition-colors ${
                location.pathname === "/projects"
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Projects
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
