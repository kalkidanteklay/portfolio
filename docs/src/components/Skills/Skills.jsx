import { motion, useScroll, useSpring,} from "framer-motion";
import { useRef,  useState  } from "react";
import "./Skills.css";

const skills = [
  {
    title: "HTML",
    imageSrc: `${import.meta.env.BASE_URL}htmllogo.svg`,
  },
  {
    title: "CSS",
    imageSrc: `${import.meta.env.BASE_URL}CSS-Logo.png`,
  },
  {
    title: "React",
    imageSrc: `${import.meta.env.BASE_URL}react-logo.png`,
  },
  {
    title: "Node.js",
    imageSrc: `${import.meta.env.BASE_URL}node-js.png`,
  },
  {
    title: "Javascript",
    imageSrc: `${import.meta.env.BASE_URL}JavaScript-Logo.png`,
  },
  {
    title: "Python",
    imageSrc: `${import.meta.env.BASE_URL}python-logo.png`,
  },
  {
    title: "Mongodb",
    imageSrc: `${import.meta.env.BASE_URL}Mongodb-logo.png`,
  },
  {
    title: "Git",
    imageSrc: `${import.meta.env.BASE_URL}git.png`,
  },
  {
    title: "Flutter",
    imageSrc: `${import.meta.env.BASE_URL}flutter logo.png`,
  },
];

const Single = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="skill-card"
      whileHover={{
        scale: 1.2, 
        rotateY: 30, 
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)", 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        perspective: 1000, 
        transformStyle: "preserve-3d" 
      }}
    >
      <motion.div
        className="imageContainer"
        animate={{
          rotateX: isHovered ? 15 : 0,
          rotateY: isHovered ? 30 : 0 
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <img src={skill.imageSrc} alt={skill.title} />
      </motion.div>
      <h3>{skill.title}</h3>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="skills-section" ref={ref}>
      <div className="progress">
        <h1>Skills</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <Single key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;