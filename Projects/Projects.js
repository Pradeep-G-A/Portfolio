import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css';

const projects1 = [
    {
      title: "Trip Planner App",
      description: "Built a Trip Planner web app for Singapore using React for the frontend UI.The app allows users to explore destinations,view food and accommodation options.Ensures a responsive and user-friendly experience with modern React design",
      tech: ["React", "JavaScript", "CSS"],
      image: "/images/trip-planner.png",
      github: "https://github.com/Pradeep-G-A/Trip-Planner",
      live: "https://triplannerrr.netlify.app/"
      
    },
    
    // Add more projects here
  ];
const projects2 = [
    {
            title: "Application Programming Interface",
            description: "Built RESTful APIs with Spring Boot to handle CRUD operations, connected to a MySQL database.Integrated frontend and backend using Axios for seamless data exchange.Implements real-time data updates with a responsive UI.",
            tech: ["React", "Spring Boot", "MySQL"],
            image: "/public/logo192.png",
            github: "https://github.com/Pradeep-G-A/springapi1",
            
          
    },
    
    // Add more projects here
  ];

export const Projects = () => {
    
    return (
        <div>
        <Navbar/>
        <section className="projects-section">
          {/* <h2 className="section-title">My Projects</h2> */}
          <div className="projects-grid">
            {projects1.map((project, index) => (
              <div className="project-card" key={index}>
                <img src="https://img.freepik.com/premium-photo/young-people-together-planning-trip-europe-top-view-empty-white-space-notebook-where-you-time-plan-text-travel-concept_292052-1627.jpg?w=1480" alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="tech-item">{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-secondary">
                Live Demo
              </a>
                  
                </div>
              </div>
            ))}
            {projects2.map((project, index) => (
              <div className="project-card" key={index}>
                <img src="https://img.freepik.com/free-vector/gradient-api-illustration_23-2149370938.jpg?ga=GA1.1.29520515.1745935115&semt=ais_hybrid&w=740" alt={project.title} className="project-image" />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="tech-item">{tech}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                    GitHub
                  </a>
                 
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
      );
    };