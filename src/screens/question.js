import React, { useState } from "react";
import { ChoiceRadio, SubmitBtn } from "../components";
import { connect } from "react-redux";
import {addAnswer} from '../redux/actions/answersActions'
import {changeAppState} from '../redux/actions/appStateAction'

function Question (props) {
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [RandomIndex, setRandomIndex] = useState(0)
  const [error, setError] = useState(false)

  const selectAnswer = (e) => {
    setSelectedAnswer(e.target.value)
    setError(false);
  }

  const answerQuestion = (e)=>{
    e.preventDefault();
    if(selectedAnswer){
      props.dispatch(addAnswer({
        qId: props.question[RandomIndex].qId,
        answer: props.question[RandomIndex].answer,
        choice: selectedAnswer
      }))
      setSelectedAnswer("")
      /// dispatch adding answer id and wId to answers array
      if(props.answers.length === props.question.length-1){
        props.dispatch(changeAppState('result'))
      }else{
        setRandomIndex(RandomIndex + 1)
      }
    }else{
      setError(true);
    }
  }
    
    return (
      <>
        <h4>{props.question[RandomIndex].question}</h4>
        <div className="row">
          {props.question[RandomIndex].choices.map((choice, index) => (
            <div className="col-6 my-3" key={index}>
              <ChoiceRadio name={`choices${choice.qId}`} selectsAnswer ={selectedAnswer} choiceLabel={choice.title} choiceId={choice.id} changeValue={selectAnswer} />
            </div>
          ))}
          <div className="w-50 mx-auto my-3">
            <SubmitBtn btnLabel="submit answer" btnHandler={answerQuestion} />
          </div>
          {
            error &&
            <div className="w-100 mx-auto">
              <p className="text-center text-danger" >You Must choose answer</p>
            </div>
          }
        </div>
      </>
    );
  }


  


const mapStateToProps = (state)=> {
  return state
}
export default connect(mapStateToProps)(Question);
