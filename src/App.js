import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Welcome, Result, Question } from "./screens";
import {connect} from 'react-redux'


function App (props){
    return (
      <div className="d-flex flex-colum bg-light w-100 justify-content-center align-items-center " style={{ height: "100vh" }}>
        <div className="card p-3 col-md-6 col-12 m-auto">
          <div className="card-body">{props.appState === "welcome" ? <Welcome /> : props.appState === "question" ? <Question /> : <Result />}</div>
        </div>
      </div>
    );
  }

  const mapStateToProps = (state)=> {
    return state
  }

export default connect(mapStateToProps)(App);
