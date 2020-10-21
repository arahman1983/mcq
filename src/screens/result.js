import React, { Component } from "react";
import Lottie from "react-lottie";
import success from "../animation/success.json";
import lose from "../animation/lose.json";
import {SubmitBtn} from '../components'

class Result extends Component {
  constructor() {
    super();
    this.state = {
      result: 8, //// will come from store
    };
  }

  tryAgain(e){
    console.log("type will be welcome again") //// dispatch to change appState to welcome 
  }


  render() {
    const result = this.state.result;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: result > 5 ? success : lose,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    
    return (
      <>
        <h3 className={`text-center ${result > 5 ? "text-success" : "text-danger"}`}>{result > 5 ? "Cognates you are awesome !" : "Hard Luck, Try Again"}</h3>
        <Lottie options={defaultOptions} height={200} width={200} />
        <p className="text-center">your score {result}/10</p>
        <div className="w-50 mx-auto my-3">
          <SubmitBtn btnLabel="New MCQ" btnHandler={this.tryAgain} />
        </div>
      </>
    );
  }
}

export default Result;
