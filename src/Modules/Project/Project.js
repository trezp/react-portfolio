import React, { Component } from 'react';

const PROJECT_DATA = {
  title: "Project 10",
  description: "All about this project. Such a great project."
}

class Project extends Component {
  render() {
    return (
      <div>
        <h1>This is project { this.props.title }</h1>
        <p> Figure out how to add unique stuff to each project!!!</p>
      </div>
    );
  }
}

export default Project;
