import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Welcome, Result, Question } from "./screens";
class App extends Component {
  constructor() {
    super();
    this.state = {
      appState: "welcome", ///will come from store
    };
  }
  render() {
    return (
      <div className="d-flex flex-colum bg-light w-100 justify-content-center align-items-center " style={{ height: "100vh" }}>
        <div className="card p-3 col-md-6 col-12 m-auto">
          <div className="card-body">{this.state.appState === "welcome" ? <Welcome /> : this.state.appState === "question" ? <Question /> : <Result />}</div>
        </div>
      </div>
    );
  }
}

export default App;
