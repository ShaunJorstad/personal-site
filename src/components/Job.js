import '../index.css';

import React from 'react';
class Job extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mb-7">
        <p className="lato-regular opacity-9 text-lg">{this.props.job.title}</p>
        <p className="lato-regular opacity-50 text-lg">{this.props.job.location}</p>
        <p className={`inline-block ${this.props.job.cancelled? "pr-2" : ""} text-red`}>{this.props.job.cancelled? "Cancelled" : ""}</p>
        <p className="inline-block opacity-50">{this.props.job.date}</p>
      </div>
    );
  }
}

export default Job;
