import React,{Component} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route} from "react-router-dom"
import home from "./components/home"
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from "./components/navbar"
import projects from "./components/projects"
import skills from "./components/skills"
import exp from "./components/experience"

export default class App extends Component{
  render(){
    return(
      <React.Fragment>
      <Router>
        <div>
          <NavigationBar/>
          <Route exact path="/" component={home}/>
          <Route path="/projects" component={projects}/>
          <Route path="/skills" component={skills}/>
          <Route path="/experience" component={exp}/>
        </div>
      </Router>
      </React.Fragment>
    )
  }
}
