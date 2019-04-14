import React, { Component } from "react";
import { MdCode, MdComputer } from "react-icons/md";

import "./styles.css";

class Main extends Component {
  render() {
    return (
      <div id="main-container">
        <div className="header">
          <ul className="header-menu">
            <li className="header-menu-item">
              <MdCode className="header-menu-icon" />
            </li>
            <li className="header-menu-item">File</li>
            <li className="header-menu-item">Edit</li>
          </ul>
        </div>
        <div className="code-page">
          <div className="side-left-menu">
            <div className="extensions-menu">
              <span className="extensions-font">G</span>
              <span className="extensions-font">A</span>
              <span className="extensions-font">B</span>
              <span className="extensions-font">R</span>
              <span className="extensions-font">I</span>
              <span className="extensions-font">E</span>
              <span className="extensions-font">L</span>
            </div>

            <div className="files-menu" />
          </div>
          <div className="main-page">
            <div className="links-open" />
            <div className="tree" />
            <div className="code-area" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
