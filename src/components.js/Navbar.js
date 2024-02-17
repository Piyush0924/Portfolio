import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  handleItemClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <nav>
        <NavLink to="/" exact activeClassName="active">
          <img src="./logo.svg" alt="symbol" /><span className='heading'>Piyush's Portfolio</span>
        </NavLink>
        <div>
          <ul id="navbar" className={this.state.clicked ? "navbar active" : "navbar"}>
            <li>
              <NavLink to="/" exact activeClassName="active" onClick={this.handleItemClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Skills" activeClassName="active" onClick={this.handleItemClick}>Skills</NavLink>
            </li>
            <li>
              <NavLink to="/Projects" activeClassName="active" onClick={this.handleItemClick}>Project</NavLink>
            </li>
            <li>
              <NavLink to="/Contact" activeClassName="active" onClick={this.handleItemClick}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div id="mobile" onClick={this.handleToggle}>
          <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    );
  }
};

export default Navbar;
