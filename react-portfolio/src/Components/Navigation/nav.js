//the navigation bar for the portfolio

import React, { Component } from "react";
import './nav.css'
class Nav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg nav-dark">
        <a class="navbar-brand" href="#">
          Robert Boyd
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active" onClick={this.props.showPage1}>

            </li>
            <li class="nav-item" onClick={this.props.showPage2}>
              Resume
            </li>
            <li class="nav-item" onClick={this.props.showPage3}>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
