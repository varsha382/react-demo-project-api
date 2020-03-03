import React, { useState } from 'react';
import axios from 'axios'


export function sendSignUpInformation(user, callback, sucessCallback){
  axios.post('http://localhost:3001/api/sign_up', { 
    user: { 
      user_name: user.userName, 
      email: user.userEmail, 
      password: user.password, 
      password_confirmation: user.confirmPassword
    }
  })
  .then(function (response) {
    if(response.data.status===false) {
      sucessCallback();
      console.log(response.data.message);
    }
    else{
      if(response.data.error){
        callback(response.data.error)
      }
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}