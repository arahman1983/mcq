import React, { useState } from "react";
import { UserInput, SubmitBtn } from "../components";
import {addUser} from '../redux/actions/userActions';
import {changeAppState} from '../redux/actions/appStateAction';
import { connect } from "react-redux";
import {randomQ} from '../redux/actions/questionsActions'


function Welcome (props) {
  const [userName, setUserName] = useState("")
  const [error, setError] = useState(false)
  
  const startMCQ = (e) => {
    e.preventDefault();
    if (userName) {
      props.dispatch(addUser(userName));
      props.dispatch(changeAppState('question'))
      props.dispatch(randomQ())
    } else {
      setError(true)
    }
  }

  const updateUserName = (e) => {
    setError(false)
    setUserName(e.target.value)
  }

    return (
      <>
        <h3 className="text-center">Welcome to MCQ</h3>
        <p className="text-center">Please Enter Your Name</p>
        <div className="w-50 mx-auto my-3">
          <UserInput inputVal={userName} inputChange={updateUserName} placeHolder="Student Name" />
          {error && <p className="text-danger text-center my-3">You must enter your name</p>}
        </div>
        <div className="w-50 mx-auto my-3">
          <SubmitBtn btnLabel="Start MCQ" btnHandler={startMCQ} />
        </div>
      </>
    );
  }


export default connect()(Welcome)