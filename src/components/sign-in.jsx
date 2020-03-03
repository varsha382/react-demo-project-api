import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, FormText } from 'reactstrap';
import { sendSignInInformation } from './Api'
import '../style/signUp.css'


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    sendSignInInformation(this.state)
  }

  render() {
    const {userEmail, password} = this.state;

    return (
      <Card body>
        <CardTitle>Sign In</CardTitle>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="userEmail">Email</Label>
            <Input
              type="email"
              name="userEmail"
              id="userEmail"
              value={userEmail}
              placeholder="Enter email"
              onChange={this.handleChange}
              />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="***********"
              onChange={this.handleChange}
              />
          </FormGroup>
          <Button color="secondary">Sign In</Button>
        </Form>
      </Card>
    );
  }
}

export default SignIn;
