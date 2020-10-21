import React, { Component } from "react";
import { UserInput, SubmitBtn } from "../components";
export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      error: false,
    };
    this.startMCQ = this.startMCQ.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }
  startMCQ(e) {
    e.preventDefault();
    if (this.state.userName) {
      console.log(this.state.userName) //// will replace with redux
                                       /// change appState to question
    } else {
      this.setState({
        error: true,
      });
    }
  }

  updateUserName(e) {
    this.setState({
      userName: e.target.value,
      error: false,
    });
  }

  render() {
    return (
      <>
        <h3 className="text-center">Welcome to MCQ</h3>
        <p className="text-center">Please Enter Your Name</p>
        <div className="w-50 mx-auto my-3">
          <UserInput inputVal={this.state.userName} inputChange={this.updateUserName} placeHolder="Student Name" />
          {this.state.error && <p className="text-danger text-center my-3">You must enter your name</p>}
        </div>
        <div className="w-50 mx-auto my-3">
          <SubmitBtn btnLabel="Start MCQ" btnHandler={this.startMCQ} />
        </div>
      </>
    );
  }
}
