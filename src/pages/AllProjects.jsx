import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  Search,
  X,
  Sparkles,
  ExternalLink,
  Code2,
  FolderGit2,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/Button";

const categories = ["All", "Full Stack", "Frontend", "UI / Animation", "Backend"];

export const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Count projects per category
  const categoryCounts = useMemo(() => {
    const counts = { All: projectsData.length };
    categories.forEach((cat) => {
      if (cat !== "All") {
        counts[cat] = projectsData.filter((p) => p.category === cat).length;
      }
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-50"
            style={{
              backgroundColor: "#20B2A6",
              left: `${(i * 19) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animation: `slow-drift ${15 + (i % 10) * 2}s ease-in-out infinite`,
              animationDelay: `${(i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Top Back Navigation Bar */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all text-sm font-medium text-muted-foreground hover:text-foreground group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs sm:text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {projectsData.length} Projects Total
          </span>
        </div>

        {/* Header Section */}
        <div className="text-center mx-auto max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm text-secondary-foreground uppercase tracking-wider mb-4 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Complete Portfolio Archive
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Explore All{" "}
            <span className="font-serif italic font-normal text-white">
              Projects & Work.
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg mt-4 animate-fade-in animation-delay-200 max-w-2xl mx-auto leading-relaxed">
            A comprehensive showcase of web applications, interactive frontend
            experiences, creative UI systems, and backend RESTful services I've
            engineered.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects by name, tech or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-surface/70 glass rounded-full border border-border text-foreground placeholder:text-muted-foreground text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer p-1"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs sm:text-sm text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-primary">
                {filteredProjects.length}
              </span>{" "}
              of {projectsData.length} projects
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              const count = categoryCounts[category] || 0;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "glass text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-black/20 text-white"
                        : "bg-surface text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id || idx}
                className="group glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between"
                style={{ animationDelay: `${(idx + 1) * 75}ms` }}
              >
                <div>
                  {/* Image container */}
                  <div className="relative overflow-hidden aspect-video bg-surface">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-60" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full glass text-xs font-medium text-primary border border-primary/20">
                        {project.category}
                      </span>
                      {project.year && (
                        <span className="px-2.5 py-0.5 rounded-full glass text-[11px] font-medium text-muted-foreground">
                          {project.year}
                        </span>
                      )}
                    </div>

                    {/* Overlay Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/50 backdrop-blur-xs">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                          title="Open Live Preview"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 delay-75"
                          title="View Source Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 mt-4 border-t border-border/30 flex items-center justify-between gap-3 text-xs">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-primary hover:underline font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="text-muted-foreground/60 italic">In progress</span>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="glass rounded-3xl p-12 text-center max-w-md mx-auto my-12 animate-fade-in border border-border/60">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-sm text-muted-foreground mb-6">
              We couldn't find any projects matching "{searchQuery}". Try searching for
              another term or selecting a different category.
            </p>
            <Button
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Bottom Call to Action */}
        <div className="mt-20 glass rounded-3xl p-8 sm:p-12 border border-primary/30 relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-highlight/10 pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-primary">
              Have a Project in Mind?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Let's create something extraordinary together.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Whether you need a full-stack engineer, frontend specialist, or modern UI/UX implementation, I'm currently available for work.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Button href="/#contact" size="lg">
                Contact Me
              </Button>
              <Link
                to="/"
                className="px-6 py-3 rounded-full glass text-foreground hover:text-primary hover:border-primary/50 transition-all font-medium text-sm flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Return to Overview
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

