import React from 'react';
import { Router, Route } from 'react-router';
import App from './App';
import About from './Modules/About/About';
import Home from './Modules/Home/Home';
import Portfolio from './Modules/Portfolio/Portfolio';
import Resume from './Modules/Resume/Resume';
import Project from './Modules/Project/Project'

var USER_DATA = {
  name: "Treasure Porth",
  username: "trezp",
  imageUrl: "http://placehold.it/350x150"
}

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio"component={Portfolio}>
        <Route path="/project1" component={Project}/>
        <Route path="/project2" component={Project}/>
        <Route path="/project3" component={Project}/>
        <Route path="/project4" component={Project}/>
      </Route>
      <Route path="/resume"component={Resume}/>
    </Route>
  </Router>
);

export default Routes;
