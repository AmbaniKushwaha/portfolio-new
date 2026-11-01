import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const ScrollLine = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 40%"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.15, 1]
  );

  return (
    <motion.span
      ref={ref}
      style={{ opacity }}
      className="block"
    >
      {children}
    </motion.span>
  );
};

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

// Parent animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

// Text animation
const textVariants = {
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

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >

            {/* About Label */}
            <motion.div variants={textVariants}>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground"
            >
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-muted-foreground">

  <p className="leading-relaxed">
    <ScrollLine>
      I'm a Full-Stack Developer passionate about
    </ScrollLine>
    <ScrollLine>
      building modern, thoughtful digital experiences.
    </ScrollLine>
    <ScrollLine>
      I enjoy turning ideas into clean, responsive
    </ScrollLine>
    <ScrollLine>
      interfaces and reliable applications that are built to perform.
    </ScrollLine>
  </p>

  <p className="leading-relaxed">
    <ScrollLine>
      My work spans both frontend and backend development,
    </ScrollLine>
    <ScrollLine>
      with a strong focus on modern technologies, intuitive UI,
    </ScrollLine>
    <ScrollLine>
      and scalable solutions. I love working with React,
    </ScrollLine>
    <ScrollLine>
      JavaScript, and modern web technologies.
    </ScrollLine>
  </p>

  <p className="leading-relaxed">
    <ScrollLine>
      For me, great development isn't just about writing code —
    </ScrollLine>
    <ScrollLine>
      it's about solving problems, creating meaningful experiences,
    </ScrollLine>
    <ScrollLine>
      and turning ideas into products people enjoy using.
    </ScrollLine>
  </p>

</div>

            {/* Quote Box */}
            <motion.div
              variants={textVariants}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 glow-border"
            >
              <p className="text-lg font-medium italic text-foreground">
                “Building digital experiences that are beautiful on
                the surface and powerful underneath.”
              </p>
            </motion.div>

          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
                className="glass p-6 rounded-2xl hover:border-primary/50 transition-colors duration-500"
              >
                <motion.div
                  whileHover={{ scale: 1.12, rotate: 5 }}
                  transition={{ duration: 0.25 }}
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"
                >
                  <item.icon className="w-6 h-6 text-primary" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
