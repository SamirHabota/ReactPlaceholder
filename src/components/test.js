import React, { Component } from "react";
import { Link } from "react-router-dom";

class Test extends Component {
  render() {
    return (
      <div>
        <h2>This is a test component, to check the router</h2>
        <div className="setToCenter-link">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Test;
