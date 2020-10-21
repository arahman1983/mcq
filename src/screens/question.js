import React, { Component } from "react";
import { ChoiceRadio, SubmitBtn } from "../components";

class Question extends Component {
  constructor() {
    super();
    this.state = {
      selectsAnswer: "",
    };
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  selectAnswer(e) {
    console.log(e.target.value)
    this.setState({
      selectsAnswer : e.target.value
    })
  }

  answerQuestion(e){
    e.preventDefault()
    /// dispatch adding answer id and wId to answers array
    /// check if there are other questions in the store get new one
    /// else change type to result
  }

  render() {
    /// will come from store
    const questionObj = {
      qId: 1,
      question: "What is Egypt's Capital ?",
      choices: [
        {
          id: 1,
          title: "Alex",
        },
        {
          id: 2,
          title: "Cairo",
        },
        {
          id: 3,
          title: "Aswan",
        },
        {
          id: 4,
          title: "Mansoura",
        },
      ],
      answer: 2,
    };
    return (
      <>
        <h4>{questionObj.question}</h4>
        <div className="row">
          {questionObj.choices.map((choice, index) => (
            <div className="col-6 my-3" key={index}>
              <ChoiceRadio name="choices" selectsAnswer ={this.state.selectsAnswer} choiceLabel={choice.title} choiceId={choice.id} changeValue={this.selectAnswer} />
            </div>
          ))}
          <div className="w-50 mx-auto my-3">
            <SubmitBtn btnLabel="New MCQ" btnHandler={this.answerQuestion} />
          </div>
        </div>
      </>
    );
  }
}

export default Question;
