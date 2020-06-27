import React from "react";
import { Grid, Header, Button, List } from "semantic-ui-react";
import styled from "styled-components";

const WrapperList = styled.div`
  text-align: center;
  font-size: 18px;
  background-color: #f2f2f2;
  padding: 0.8em;
  width: 100%;
  height: 100%;

  &.background {
    position: relative
    width: 100%;
    min-height: 100%;
    background-color: yellow;
  }
`;

const P = styled.p`
  font-size: 1.2em;
  height: auto;
`;
const Question = (props) => {
  const {
    question,
    option,
    quizLength,
    currIndex,
    quizEnd,
    disabled,
    score,
    userAnswer,
  } = props.stateData;
  return quizEnd ? (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header as="h1">Your Total Scores are: {score} points</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Button color="red" onClick={() => props.reset()}>
            Start Again
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ) : (
    <Grid columns="equal">
      <Grid.Row textAlign="center">
        <Grid.Column>
          <h2>{question}</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center">
        <Grid.Column>
          <Header>{`Question ${currIndex + 1} of ${quizLength}`}</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          {option &&
            option.map((element, index) => {
              return (
                <List key={index}>
                  <WrapperList
                    className={userAnswer === element ? "background" : ""}
                  >
                    <P onClick={() => props.onCheckAnswer(element)}>
                      {element}
                    </P>
                  </WrapperList>
                </List>
              );
            })}
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center">
        <Grid.Column>
          {currIndex < quizLength - 1 && (
            <Button
              color="teal"
              type="submit"
              value="Next Question"
              disabled={disabled}
              onClick={() => props.nextQuestionHandler()}
            >
              Next
            </Button>
          )}
        </Grid.Column>
      </Grid.Row>
      {currIndex === quizLength - 1 && (
        <Button
          color="orange"
          onClick={() => props.onFinishHandler()}
          disabled={disabled}
        >
          Finish
        </Button>
      )}
    </Grid>
  );
};
export default Question;
