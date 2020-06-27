import React from "react";
import { Header } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  font-size: 1.75em;
  margin-bottom: 1.75em;
`;
const Title = () => {
  return (
    <Wrapper>
      <Header>Quiz App</Header>
    </Wrapper>
  );
};

export default Title;
