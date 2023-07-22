import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(technologies)

  const technologiesLists = technologies.map((technology ,index) => {
    return <li key={index}>{technology}</li>
  })
  console.log(technologiesLists)
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        <span>{technologiesLists}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
