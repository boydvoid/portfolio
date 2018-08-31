//the navigation bar for the portfolio

import React, { Component } from "react";

class Nav extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
                Page 1 
            </li>
            <li class="nav-item" onClick={this.props.showPage2}>
                Page 2
            </li>
            <li class="nav-item" onClick={this.props.showPage3}>
                Page 3
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
