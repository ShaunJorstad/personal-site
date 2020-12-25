import '../index.css';

import React from 'react';
class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let techStack = this.props.project.techStack.map(item => <span className="p-1 px-2 mr-1 bg-lightPrimary text-primary rounded-md lato-regular text-sm">{item}</span>)
    return (
      <div className="mb-9">
        <a href={this.props.project.address}>
          <p className="lato-regular opacity-7 inline-block text-2xl hover:text-primary hover-padding transition-all duration-700 ease-in-out">{this.props.project.projectName}</p>
          <div className="projectIcon"></div>
        </a>

        <p className="lato-light pl-5 opacity-8 text-md">
          {this.props.project.description}
          <br />
          <div className="mt-2">
            {techStack}
          </div>
        </p>
      </div>
    );
  }
}

export default Project;

