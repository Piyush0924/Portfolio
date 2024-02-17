import React from 'react';
import { Link } from "react-router-dom";
import './Projects.css';

const Projects = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">My Projects</h1>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">E-commerce</h2>
                <p className="card-text"></p>
                <span>
                  <Link to={"/Project"} className="card-link">Project</Link>
                </span>
                <span>
                  <Link to={"/Github Link"} className="card-link">Github Link</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">GoogleNews</h2>
                <p className="card-text"></p>
                <Link to={"/Project"} className="card-link">Project</Link>
                <Link to={"/Github Link"} className="card-link">Github Link</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">AmazonClone</h2>
                <p className="card-text"></p>
                <Link to={"/Project"} className="card-link">Project</Link>
                <Link to={"/Github Link"} className="card-link">Github Link</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
