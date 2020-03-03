import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, FormText } from 'reactstrap';
import { sendSignUpInformation } from './Api'
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
    let {userNameError, userEmailError, passwordError, confirmPasswordError}  = this.state
    sendSignUpInformation(this.state, (response) => {
      const items = Object.entries(response);
      items.map(item => {
        switch(item[0]){
          case 'user_name':{
            userNameError = item[1][0]
            break;
          }
          case 'email':{
            userEmailError = item[1][0]
            break;
          }
          case 'password':{
            passwordError = item[1][0]
            break;
          }
          case 'password_confirmation':{
            confirmPasswordError = item[1][0]
            break;
          }
        }
      })

      this.setState({userNameError, userEmailError, passwordError, confirmPasswordError});
    }, () => {
      this.setState({
        userName: '',
        userEmail: '',
        password: '',
        confirmPassword: '',
      })
    })
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
