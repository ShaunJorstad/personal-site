import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Header from './components/Header.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Jobs from './components/Jobs.js';
import Skills from './components/Skills.js';
import Footer from './components/Footer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="body ">
        <Header />
        <About />
        <Projects /> 
        <Jobs/>
        <Skills />
        <Footer />
      </div>
    );
  }
}

export default App;
