import '../index.css';
import React from 'react';
import Section from './Section';
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Section
        sectionTitle="Lets Connect!"
        content={
          <div className="mb-20">
            <p className="opacity-7 lato-light text-lg">I'm always looking to meet new people, share new experiences and code new things!</p>
            <p className="opacity-7 lato-light text-lg">I am currently seeking a remote front end software engineering position following my graduation in May. Please connect if i would be a suitable candidate to join your team!</p>

            <div className="mt-5 grid grid-cols-7">
              <a className="text-primary" href="https://www.github.com/shaunjorstad">Github</a>
              <a className="text-primary" href="https://www.linkedin.com/in/shaunjorstad">LinkedIn</a>
              <a className="text-primary" href="mailto:jorstadsd17@gcc.edu">Email</a>
              <a className="text-primary" href="tel:4846497528">Phone</a>
            </div>
          </div>
        }
      />
    );
  }
}

export default Footer;
