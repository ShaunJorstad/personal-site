import '../index.css';
import React from 'react';
import Section from './Section.js';
import data from './content/WorkData.json';
import Job from './Job.js';
import resume from '../assets/resume.pdf';
class Jobs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let jobs = data.map(job => <Job job={job} />);
    return (
      <Section
        sectionTitle="Work"
        content={
          <div>
            <div className="timeline mr-4"></div>
            {jobs}
            <a className="text-primary" href={resume} target="_blank">View Resume</a>
          </div>
        }
      />
    );
  }
}

export default Jobs;
