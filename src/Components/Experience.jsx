import React from 'react';
import '../Styles/main.css'; // Custom CSS

const Experience = () => {
  const experiences = [
    {
      title: "Junior Project  Manager",
      company: "The Tuistnist",
      period: "Mar 24 - Oct 24",
      responsibilities: [
        "Assisted in planning, scheduling, and monitoring project timelines and deliverables.",
        "Coordinated with cross-functional teams to ensure smooth communication and workflow.",
        "Tracked project progress and prepared weekly status reports for senior management.",
        "Helped identify potential risks and contributed to mitigation strategies.",
        "Facilitated team meetings and documented key decisions and action items.",
        "Monitored resource allocation and supported in resolving conflicts or bottlenecks.",
        "Ensured adherence to company policies, quality standards, and client requirements.",
        "Assisted in preparing project documentation, proposals, and client presentations."
      ]
    },
    {
      title: "Top Rated Shopify Developer",
      company: "Upwork Freelance",
      period: "Freelance",
      responsibilities: [
        "Designed, developed, and customized Shopify stores for clients across various industries.",
        "Created responsive and mobile-friendly themes tailored to client brand identity.",
        "Integrated third-party apps, payment gateways, and shipping solutions to enhance store functionality.",
        "Optimized site performance, speed, and SEO to improve search rankings and conversions.",
        "Implemented custom Shopify Liquid code for advanced features and unique layouts.",
        "Migrated stores from other eCommerce platforms to Shopify with minimal downtime.",
      ]
    },
    {
      title: "Front-End Developer",
      company: "Innosync webhub",
      period: "Nov 24 - Mar 25",
      responsibilities: [
        "Developed and maintained responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks.",
        "Collaborated with UI/UX designers to translate wireframes and mockups into interactive features.",
        "Optimized website performance for speed, accessibility, and cross-browser compatibility.",
        "Integrated APIs and backend services to display dynamic data on web pages.",
        "Implemented animations, transitions, and interactive elements to enhance user experience.",
        "Tested and debugged front-end code to ensure quality and functionality across devices.",
        "Maintained version control and project documentation using Git and project management tools."
      ]
    },
   
    {
      title: "Mern Stack Developer",
      company: "Ezitech Software House",
      period: "July 2025 -  Present",
      responsibilities: [
        "Designed, developed, and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    "Built and integrated RESTful APIs for seamless communication between frontend and backend.",
    "Implemented authentication and authorization using JWT, OAuth, and role-based access control.",
    "Optimized database queries and application performance for scalability and speed.",
    "Developed responsive and user-friendly UI components with React.js and Tailwind CSS/Bootstrap.",
    "Handled state management using Redux/Context API for complex application workflows.",
    "Worked closely with UI/UX teams to ensure optimal user experience and design consistency.",
    "Deployed and maintained applications on cloud platforms such as AWS, Vercel, or Heroku.",
    "Conducted code reviews, debugging, and testing to ensure application reliability and security.",
    "Collaborated with cross-functional teams to deliver projects within deadlines and quality standards."
      ]
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Resume</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="timeline-header">
                <h3>{exp.title} <span className="company">@ {exp.company}</span></h3>
                <span className="period">{exp.period}</span>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
