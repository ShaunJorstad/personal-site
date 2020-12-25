import '../index.css';
// import './components.css';
import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="grid grid-cols-8 mt-10">
        <div className="col-span-5 relative">
          <div className="inline-block mb-4">
            <span className="name">Shaun Jorstad</span><br />
            <div className="name-underline bg-primary"></div>
          </div>
          <br />
          <span className="title-description">I’m a <span className="bold">Software Engineer</span> passionate about
              building intuitive responsive front end applications, high
              performing back ends and the stack in between
          </span>

          <div className="grid grid-cols-5 w-5/6 absolute bottom-0">
            <span className="navigation-link"><a href="#About">About</a></span>
            <span className="navigation-link"><a href="#Projects">Projects</a></span>
            <span className="navigation-link"><a href="#Work">Work</a></span>
            <span className="navigation-link"><a href="#Skills">Skills</a></span>
            <span className="navigation-link"><a href="#Lets Connect!">Connect</a></span>
          </div>
        </div>
        <div className="col-span-3 bg-profileImage rounded-2xl">
        </div>
      </div>
    );
  }
}

export default Header;
