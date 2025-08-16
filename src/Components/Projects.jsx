import { useState } from 'react';
import { motion } from 'framer-motion';
import '../Styles/main.css';
import hepta from '../assets/hepta.png';
import Banking from '../assets/banking.png';
import vegefood from '../assets/vegefood.png';
import dryfruit from '../assets/dry fruit.png';
import mern from '../assets/mern app.png';
import dash from '../assets/dash.png';
import blog from '../assets/blogging.png';
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
   
    {
      title: "Mern Authentication web App",
      tags: ["React.js", "JavaScript", "MongoDB","Express.js","Node.js"],
      category: "Full Stack Web App",
      demoLink: "#",
      image: mern,
    },
    {
      title: "Balitistan Organic Dry Fruits",
      tags: ["Shopify", "Liquid", "CSS"],
      category: "Shopify",
      demoLink: "https://baltistanorganicdryfruits.netlify.app/",
      image: dryfruit ,
    },
    {
      title: "Hepta Luxury Hotal",
      tags: ["Html5", "Css", "JavaScript"],
      category: "Frontend",
      demoLink: "https://heptaluxuryhotal.netlify.app/",
      image: hepta,
    },
    {
      title: "Banking SOlution-React App",
      tags: ["React.js", "Node.js", "CSS", "Bootstrap"],
      category: "Frontend",
      demoLink: "https://bankingsolution.vercel.app/",
      image: Banking ,
    },
    {
      title: "VegeFood-React App",
      tags: ["React.js", "Node.js", "CSS", "Bootstrap"],
      category: "Frontend",
      demoLink: "https://vegefood-chi.vercel.app/",
      image: vegefood,
    },
  
    {
  title: "Full-Stack Blogging Website",
  tags: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
  category: "Full Stack",
  demoLink: "#", 
  image: blog,
},
    
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <div className="filter-tabs">
          {['All',].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Project Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
            )}

            <h3>{project.title}</h3>
            {project.subtitle && <p className="subtitle">{project.subtitle}</p>}
            <div className="tech-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
