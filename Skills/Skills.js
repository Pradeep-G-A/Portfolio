import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Skills.css";

const frontendSkills = [
  { name: "HTML", logo: "https://logospng.org/download/html-5/logo-html-5-1024.png" },
  { name: "CSS", logo: "https://pnghq.com/wp-content/uploads/css-html-logo-png-transparent-overlay-1536x1536.png" },
  { name: "JavaScript", logo: "https://logospng.org/download/javascript/logo-javascript-icon-512.png" },
  { name: "React", logo: "https://pluspng.com/img-png/react-logo-png-js-logo-react-react-js-icon-512x512.png" },
  { name: "Figma", logo: "https://logospng.org/download/figma/figma-4096.png" }
];

const backendSkills = [
  { name: "Spring Boot", logo: "https://i0.wp.com/indiciatraining.com/wp-content/uploads/2020/05/spring-boot-logo.png?fit=856%2C768&ssl=1" },
  { name: "MySQL", logo: "https://tse3.mm.bing.net/th?id=OIP.lflm3p0jvoC4p8c-j8zfJgHaEk&pid=Api&P=0&h=180" },
  { name: "Github", logo: "https://pngimg.com/d/github_PNG63.png" },
  { name: "REST API", logo: "data:image/png;base64,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" }
];

export const Skills = () => {
  return (
    <div >
        <Navbar/>
    <section className="skill-section">
        <div className="skill-card1">
        <h4 className="slill-card-title">🌐  WebDevelopment</h4>
        <p>I specialize in crafting modern, responsive websites using the latest web technologies. From intuitive user interfaces with React and JavaScript to robust backends with Spring Boot and MySQL, I build full-stack applications that are fast, scalable, and user-friendly. With a keen eye for design and a strong foundation in code, I turn ideas into interactive digital experiences.</p>
            
        </div>
        <div className="skill-card">
          <image src="https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg?t=st=1746017772~exp=1746021372~hmac=00e38cf046ca882ab6ef1810f5a5739782d3e47f7204058811c17e2ffa75aa74&w=1380"></image>
        <h4 className="slill-card-title">🔧 Backend Development</h4>
        <p>I develop powerful backend systems that support seamless data management using Spring Boot and MySQL. With secure and efficient CRUD operations (Create, Read, Update, Delete), I ensure your application runs smoothly behind the scenes. I focus on creating scalable APIs, handling database logic, and maintaining data integrity with clean, structured code.</p>
            
        </div>
    </section>  
    <section className="skills-section">
     

      <div className="skills-category">
        <h3 className="category-title">Frontend</h3>
        <div className="skills-grid">
          {frontendSkills.map((skill, i) => (
            <div className="skills-card" key={i}>
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3 className="category-title">Backend</h3>
        <div className="skills-grid">
          {backendSkills.map((skill, i) => (
            <div className="skills-card" key={i}>
              <img src={skill.logo} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

