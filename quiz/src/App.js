import React from "react";
import InputForm from "./components/InputForm";
import Question from "./components/Question";
import { data } from "./Questions";
import { Container } from "semantic-ui-react";
import Title from "./components/Title";
import styled from "styled-components";

const WrapperInputForm = styled.div`
  &.hide {
    display: none;
  }
`;

const WrapperQuestion = styled.div`
  &.show {
    opacity: 1;
    transition: 0.8s ease;
  }
  &.hide {
    opacity: 0;
    transition: 0.8s ease;
  }
`;
class App extends React.Component {
  state = {
    userName: "",
    userPhone: "",
    isRegistered: false,
    quizLength: data.length,
    questions: data,
    currIndex: 0,
    option: [],
    quizEnd: false,
    score: 0,
    disabled: true,
    userAnswer: null,
  };

  onHandleUser = (username, phone) => {
    this.setState({ userName: username, userPhone: phone, isRegistered: true });
  };

  loadQuestionHandler = () => {
    // load specific question along with options and answers
    this.setState({
      question: data[this.state.currIndex].question,
      option: data[this.state.currIndex].options,
      answer: data[this.state.currIndex].answer,
    });
  };

  nextQuestionHandler = () => {
    //update the score
    const { userAnswer, answer, score, currIndex } = this.state;
    if (userAnswer === answer) {
      this.setState({ score: score + 1 });
    }

    // update currIndex
    this.setState({
      currIndex: currIndex + 1,
      userAnswer: null,
      disabled: true,
    });
  };

  onCheckAnswer = (answer) => {
    // Whenever we click the answer, the state is going to store
    if (this.state.userName !== "" && this.state.userPhone.length === 10) {
      this.setState({ userAnswer: answer, disabled: false });
    } else {
      alert("Please enter input your Name and your Phone!");
    }
  };

  onFinishHandler = () => {
    const { currIndex, quizLength } = this.state;
    if (currIndex === quizLength - 1) {
      // check again for final question
      if (this.state.answer === this.state.userAnswer) {
        this.setState({ score: this.state.score + 1, quizEnd: true });
      } else {
        this.setState({ quizEnd: true });
      }
    }
  };

  resetPage() {
    window.location.reload(false);
  }

  componentDidMount() {
    this.loadQuestionHandler();
  }

  componentDidUpdate(prevProps, prevState) {
    //this function is going to check whether the prev state of currIndex is different from current index
    //if it is different, which means the state is going to be updated, the setState is happening
    const { currIndex } = this.state;
    if (currIndex !== prevState.currIndex) {
      this.setState({
        question: data[currIndex].question,
        option: data[currIndex].options,
        answer: data[currIndex].answer,
      });
    }
  }
  render() {
    return (
      <Container>
        <Title />
        <WrapperInputForm className={this.state.isRegistered ? "hide" : null}>
          <InputForm submitUser={this.onHandleUser} />
        </WrapperInputForm>
        <WrapperQuestion className={this.state.isRegistered ? "show" : "hide"}>
          <Question
            reset={this.resetPage}
            nextQuestionHandler={this.nextQuestionHandler}
            onCheckAnswer={this.onCheckAnswer}
            onFinishHandler={this.onFinishHandler}
            onHandleToggle={this.onToggleHandler}
            stateData={this.state}
          />
        </WrapperQuestion>
      </Container>
    );
  }
}

export default App;
