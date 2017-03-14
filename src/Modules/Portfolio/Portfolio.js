import React, { Component } from 'react';
import NavLink from '../../Modules/NavLink';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>This is my portfolio.</h1>
        <NavLink to="/project1">Project 1</NavLink>
        <NavLink to="/project2">Project 2</NavLink>
        <NavLink to="/project3">Project 3</NavLink>
        <NavLink to="/project4">Project 4</NavLink>
        {this.props.children}
      </div>
    );
  }
}

export default Portfolio;
