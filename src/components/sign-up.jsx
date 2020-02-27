import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle } from 'reactstrap';

const SignUp = (props) => {
  return (
    <Card body>
      <CardTitle>Sign Up</CardTitle>
      <Form>

      <FormGroup>
        <Label for="userName">Name</Label>
        <Input type="text" name="userName" id="userName" placeholder="Enter user name" />
      </FormGroup>

      <FormGroup>
        <Label for="userEmail">Email</Label>
        <Input type="text" name="userEmail" id="userEmail" placeholder="Enter email" />
      </FormGroup>

      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="***********"/>
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="***********"/>
      </FormGroup>
      <Button color="secondary">Sign Up</Button>
      </Form>
    </Card>
  );
}

export default SignUp;