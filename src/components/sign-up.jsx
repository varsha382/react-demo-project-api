import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, FormText } from 'reactstrap';
import '../style/signUp.css'


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      password: '',
      confirmPassword: '',
      userNameError: '',
      userEmailError: '',
      passwordError: '',
      confirmPasswordError: '',
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

  }

  render() {
    const {userName, userEmail, password, confirmPassword, userNameError, userEmailError, passwordError, confirmPasswordError} = this.state;

    return (
      <Card body>
        <CardTitle>Sign Up</CardTitle>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="userName">Name</Label>
            <Input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter user name"
              value={userName}
              onChange={this.handleChange} />
            {userNameError !== "" &&
              <FormText color="muted" className="error-message" >{userNameError}</FormText>
            }
          </FormGroup>


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
            {userEmailError !== "" &&
              <FormText color="muted" className="error-message">{userEmailError}</FormText>
            }
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
            {passwordError !== "" &&
              <FormText color="muted" className="error-message">{passwordError}</FormText>
            }
          </FormGroup>
          <FormGroup>
            <Label for="confirmPassword">Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="***********"
              onChange={this.handleChange}
              />
            {confirmPasswordError !== "" &&
             <FormText color="muted" className="error-message">{confirmPasswordError}</FormText>
            }
          </FormGroup>
          <Button color="secondary">Sign Up</Button>
        </Form>
      </Card>
    );
  }
}

export default SignUp;
