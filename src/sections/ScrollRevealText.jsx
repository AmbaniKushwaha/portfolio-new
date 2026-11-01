
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const ScrollWord = ({ progress, index, total, word }) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    progress,
    [start, end],
    [0.2, 1]
  );

  return (
    <motion.span style={{ opacity }}>
      {word}{" "}
    </motion.span>
  );
};

const ScrollRevealText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const words = text.trim().split(/\s+/);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <ScrollWord
          key={index}
          word={word}
          index={index}
          total={words.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default ScrollRevealText;
