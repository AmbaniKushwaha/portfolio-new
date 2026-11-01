import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image from "/logo.png";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (href) => {
    if (isHomePage) return href;
    return `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary transition-colors cursor-pointer"
        >
          <img src={image} alt="Logo" className="w-12 h-12 rounded-3xl" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                isHomePage
                  ? "text-primary bg-surface/50 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              Home
            </Link>

            {navLinks.map((link, index) => (
              <a
                href={getHref(link.href)}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface transition-all"
              >
                {link.label}
              </a>
            ))}

            {/* <Link
              to="/projects"
              className={`px-4 py-2 text-sm rounded-full transition-all ${
                location.pathname === "/projects"
                  ? "text-primary bg-surface/50 font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface"
              }`}
            >
              All Projects
            </Link> */}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button href={getHref("#contact")} size="sm">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in border-b border-border/50">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg py-2 transition-colors ${
                isHomePage
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>

            {navLinks.map((link, index) => (
              <a
                href={getHref(link.href)}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* <Link
              to="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg py-2 transition-colors ${
                location.pathname === "/projects"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Projects
            </Link> */}

            <Button
              href={getHref("#contact")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
