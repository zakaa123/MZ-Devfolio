import React from 'react';
import '../Styles/main.css'; // Updated path to custom styles
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const Stats = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {/* LEFT SIDE */}
        <div className="stats-left" data-aos="fade-right">
          <h2 className="stat-main">3+</h2>
          <h3 className="stat-heading">Years of Experience</h3>
          <p className="stat-text">
            With over 3 years of experience, I have completed a wide range of projects,
            specializing in web development and Shopify solutions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="stats-right">
          <div className="stat-box" data-aos="fade-up" data-aos-delay="100">
            <h3>75+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-box" data-aos="fade-up" data-aos-delay="200">
            <h3>20+</h3>
            <p>React Web Apps</p>
          </div>
          <div className="stat-box" data-aos="fade-up" data-aos-delay="300">
            <h3>50+</h3>
            <p>Shopify Stores</p>
          </div>
          <div className="stat-box" data-aos="fade-up" data-aos-delay="400">
            <h3>15,000+</h3>
            <p>Lines of Code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
