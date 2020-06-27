import React from "react";
import { Button, Form, Grid, Input } from "semantic-ui-react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f2f2f2;
  min-width: 100%;
  align-item: center;
  display: flex;
  justify-content: center;
  color: #111;
  font-weight: bold;
  padding: 1.2em 2em 1em;
  font-size: 1.2em;
`;

class InputForm extends React.Component {
  state = { fullname: "", phone: 0 };

  onHandleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.submitUser(this.state.fullname, this.state.phone);
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.onHandleSubmit}>
          <Grid columns="equal">
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>Full Name</label>
                  <Input
                    type="text"
                    placeholder="please enter your Full Name..."
                    name="fullname"
                    size="large"
                    icon="user"
                    ref={this.handleRef}
                    value={this.state.fullname}
                    onChange={this.onHandleChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Form.Field>
                  <label>Your Phone</label>
                  <Input
                    type="text"
                    placeholder="please enter your Phone Number..."
                    name="phone"
                    icon="phone"
                    size="large"
                    value={this.state.phone}
                    onChange={this.onHandleChange}
                  />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Button type="submit">Register</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form>
      </Wrapper>
    );
  }
}

export default InputForm;
