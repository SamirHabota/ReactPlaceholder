import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is the main page of the app</h2>
        <div className="setToCenter-link">
          <Link to={"/test"} className="nav-link">
            Router Test
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
