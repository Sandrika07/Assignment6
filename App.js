import React, { useState } from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Portfolio',
      imgSrc: '/images/p1.png',
      description: 'It is built using modern web technologies including Vue.js and Vue Router to create a dynamic and interactive user experience.',
    },
    {
      id: 2,
      name: 'Pet Portal',
      imgSrc: '/images/p2.png',
      description: 'A web application that could be used by animal lovers, especially cynophilists, created using HTML and CSS.',
    },
    {
      id: 3,
      name: 'Drum Kit',
      imgSrc: '/images/p3.png',
      description: 'An interactive web application that provides users with a virtual drum set experience, developed with HTML, CSS, and JavaScript.',
    }
  ];

  return (
    <div>
      <header>
        <h1>Sai Sandrika Reddy's Portfolio</h1>
        <p>Welcome to my portfolio. Explore my projects below!</p>
      </header>

      <section id="projects">
        <h2>My Projects</h2>
        <div className="project-container">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setActiveProject={setActiveProject}
              isActive={activeProject === project.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
