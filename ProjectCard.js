import React from 'react';

function ProjectCard({ project, setActiveProject, isActive }) {
  const { id, imgSrc, name, description } = project;

  const handleClick = () => {
    setActiveProject(isActive ? null : id); // Toggle the active state
  };

  return (
    <div className={`project ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
      <div className={`project-details ${isActive ? 'active' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
