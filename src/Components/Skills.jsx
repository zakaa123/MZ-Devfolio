import { motion } from 'framer-motion';
import '../styles/main.css';
import { FaHtml5, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiShopify, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'HTML & CSS', icon: <FaHtml5 color="#f06529" />, percent: 95 },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript color="#f7df1e" />, percent: 85 },
  { name: 'React.js', icon: <FaReact color="#61dbfb" />, percent: 90 },
  { name: 'Node.js', icon: <FaNodeJs color="#3c873a" />, percent: 80 },
  {
    name: 'Express.js',
    icon: <FaNodeJs color="#000000" />, // fallback icon for Express
    percent: 80
  },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" />, percent: 80 },
  { name: 'Shopify Liquid', icon: <SiShopify color="#7AB55C" />, percent: 90 },
];

const Skills = () => {
  return (
    <motion.section 
      className="skills-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="skills-left">
        <motion.button 
          className="skills-btn"
          whileHover={{ scale: 1.1 }}
        >
          My Skills
        </motion.button>
        <p className="skills-subtext">
          Expertise in modern web technologies with a strong focus on performance and scalability.
        </p>
        <div className="skills-tags">
          {skills.map((skill, i) => (
            <div key={i} className="skill-tag">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-right">
        {skills.map((skill, i) => (
          <div key={i} className="progress-bar-wrapper">
            <span className="label">{skill.icon} {skill.name}</span>
            <div className="progress-bar">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
