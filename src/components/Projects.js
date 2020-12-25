import '../index.css';
import React from 'react';
import Section from './Section.js';
import Project from './Project.js';
import data from './content/ProjectsData.json';
class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderedProjects = data.map(project => <Project project={project} />);

    return (
      <Section
        sectionTitle="Projects"
        content={
          <div>
            {renderedProjects}
            <a className="text-primary" href="https://www.github.com/shaunjorstad">Github</a>
          </div>}
      />
    );
  }
}

export default Projects;
