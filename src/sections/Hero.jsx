
import { motion } from "motion/react";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Instagram,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "React",
  "GSAP",
  "JavaScript",
  "Node.js",
  "ExpressJs",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 7) * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >

            {/* Developer Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full Stack Developer & Designer
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={fadeUp} className="space-y-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                I'm
                <span className="text-primary glow-text"> Ambani</span>
                <br />
                Kushwaha
                <span className="text-primary glow-text">.</span>
                <br />
                <span className="font-serif italic font-normal text-white">
                  {/* with precision */}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Hi, I'm Ambani Kushwaha. I am currently pursuing a Bachelor
              of Technology (B.Tech) in Computer Science from Gyan Ganga
              College of Technology. I am passionate about learning and
              exploring new technologies, and I have a strong interest in
              building my knowledge in the field of computer science.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <Button href="#contact" size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <AnimatedBorderButton
                  href="/resume.pdf"
                  download="Ambani_Kushwaha_Resume.pdf"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">
                Follow me:
              </span>

              {[
                {
                  icon: Github,
                  href: "https://github.com/AmbaniKushwaha",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/ambani-kushwaha-ab6236377",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/innovate_with_cs",
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social profile"
                  whileHover={{
                    y: -5,
                    scale: 1.12,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">

              {/* Glow Background */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"
              />

              {/* Profile Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative glass rounded-3xl p-2 glow-border"
              >
                <img
                  src="/profile-photo.png"
                  alt="Ambani Kushwaha"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Available Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </motion.div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3"
                >
                  <div className="text-2xl font-bold text-primary">
                    1+
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>

          <div className="relative overflow-hidden">

            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />

            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="flex-shrink-0 px-8 py-4 cursor-default"
                >
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>

    </section>
  );
};
