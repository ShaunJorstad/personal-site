import '../index.css';
import React from 'react';
import Section from './Section.js';
import data from './content/Skills.json';
class Skills extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let columns = data.sections.map((section) =>
      <div>
        <p className="skillTitle mb-4">{section.title}</p>
        {section.skills.map((skill) =>
          <p className="skill lato-light text-md opacity-70 mb-2">{skill}</p>
        )}
      </div>
    )

    return (
      <Section
        sectionTitle="Skills"
        content={
          <div className={`grid grid-cols-${data.sectionCount}`}>
            {columns}
          </div>
        }
      />
    );
  }
}

export default Skills;
