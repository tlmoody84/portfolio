import React from 'react';

const projects = [
  { title: 'Breastfeeding Capstone',
    description: 'Informative website on breastfeeding.', 
    link: 'https://github.com/tlmoody84/Breastfeeding-with-Tiffany.git' },
  { title: 'Weatherapp', 
    description: 'Get the weather in your area.', 
    link: 'https://github.com/tlmoody84/weatherapp.git' },
  { title: 'Funny Socks', 
    description: 'Socks for sale.', 
    link: 'https://github.com/tlmoody84/Funny-Socks.git' },
];

const Projects = () => {
  return (
    <div>
      <h1 style={{ fontSize: '3em', color: 'magenta' }}>Projects</h1>
      <br></br>
      {projects.map((project, index) => (
        <div key={index}>
          <h2 style={{ fontSize: '2em'}}>{project.title}</h2>
          <br></br>
          <p style={{color: 'magenta' }}>{project.description}</p>
          <a className="m-1 text-emerald-500 hover:text-emerald-700" href={project.link}>View Project</a>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Projects;