import React, {useEffect, useState} from "react";
import Lottie from "react-lottie";
import success from "../animation/success.json";
import lose from "../animation/lose.json";
import {SubmitBtn} from '../components'
import {addUser} from '../redux/actions/userActions';
import {changeAppState} from '../redux/actions/appStateAction';
import {resetAnswer} from '../redux/actions/answersActions';
import { connect } from "react-redux";

function  Result (props) {
  const [result, setResult] = useState(0)
  useEffect(() => {
    setResult(
      props.answers.filter(answer => Number(answer.answer) === Number(answer.choice)).length * 2
    )
  }, [ props.answers])
  // let result = 9

  const tryAgain = (e)=>{
    props.dispatch(changeAppState("welcome"));
    props.dispatch(addUser(''));
    props.dispatch(resetAnswer())
  }

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
          <SubmitBtn btnLabel="New MCQ" btnHandler={tryAgain} />
        </div>
      </>
    );
  }

  const mapStateToProps = (state)=> {
    return state
  }

export default connect(mapStateToProps)(Result);
