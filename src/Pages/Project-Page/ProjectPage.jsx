import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import { ReactComponent as Home } from "../../Assets/home.svg";
import { ReactComponent as Project } from "../../Assets/project.svg";
import { ReactComponent as Contact } from "../../Assets/contact.svg";
import projects from "../../project-data/projects.json";
import "./ProjectPage.css";
import ProjectList from "../../Components/ProjectList/ProjectList";
import ProjectDetail from "../../Components/ProjectDetail/ProjectDetail";
import ProjectSpecs from "../../Components/ProjectSpecs/ProjectSpecs";
import TechUsed from "../../Components/TechUsed/TechUsed";
import ProjectLinks from "../../Components/ProjectLinks/ProjectLinks";
import HeaderDetails from "../../Components/HeaderDetails/HeaderDetails";

class ProjectPage extends Component {
  state = {
    projects: projects,
    project: null,
  };

  componentDidMount = () => {
      const localProject = JSON.parse(localStorage.getItem('project'))
      this.setState({ project: localProject })
      console.log(localProject)
  }
    
  setProject = (name) => {
    if (localStorage.getItem('project')) {
      var localProject = JSON.parse(localStorage.getItem('project'));
      this.setState({ project: localProject})
    }
    const project = projects.find((project) => project.name === name);
    this.setState({ project }, localStorage.setItem('project', JSON.stringify(project)));
    // localStorage.setItem('project', this.state.project)
  };

  render() {
    const localProject = JSON.parse(localStorage.getItem('project'))
    const project  = this.state.project ? this.state.project : localProject

    return (
      <>
        <header></header>
        <div className="main">
          <div className="shayne">
            <Route path="/projects/:id">
              <TechUsed project={project} />
            </Route>
          </div>
          <div className="projects-container">
            <div className="project-header">
              <div className="header-left">
                <h1>Projects</h1>
              </div>
              <div className="header-mid">
                <Route path="/projects/:name">
                  <HeaderDetails project={project} />
                </Route>
              </div>
              <div className="header-right">
                <Link to="/">
                  <Home className="nav-icon" />
                </Link>
                <Link to="/projects">
                  <Project className="nav-icon" />
                </Link>
                <Link to="/contact">
                  <Contact className="nav-icon" />
                </Link>
              </div>
            </div>

            <div className="projects">
              <div className="project-name">
                <Route path="/projects/:id">
                  <ProjectSpecs project={project} />
                </Route>
              </div>
              <div className="project-content">
                <Route path="/projects" exact>
                  <ProjectList
                    setProject={this.setProject}
                    projects={this.state.projects}
                  />
                </Route>
                <Route path="/projects/:id">
                  <ProjectDetail project={project} />
                </Route>
              </div>
              <div className="project-details">
                <Route path="/projects/:id">
                  <ProjectLinks project={project} />
                </Route>
              </div>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </>
    );
  }
}

export default withRouter(ProjectPage);
