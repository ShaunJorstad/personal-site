import '../index.css';
import React from 'react';
import data from './content/AboutData.json';
import Section from './Section.js';
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let renderedContent = data.description.map( item => <p className="opacity-7 lato-light text-md pb-3">{item}</p>)
    return (
      <Section
        sectionTitle="About"
        content={
          renderedContent
        } 
      />
    );
  }
}

export default About;
