import React, { Component } from 'react';
import './index.css';
import NavLink from './Modules/NavLink';


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        {this.props.children}
      </div>
    );
  }
}

export default App;
