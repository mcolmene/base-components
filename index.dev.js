import React from 'react';
import { render } from 'react-dom';

// import DetailsBlock from './src/DetailsBlock';
// import ImageSection from './src/ImageSection';
// import ImageTextOverlay from './src/ImageTextOverlay';
// import LoadingSpinner from './src/LoadingSpinner';
import Form from './src/composed/Form';

import './src/static/global-styles.css'
import styles from './src/static/Input.css';

const props = {
  inputObject: {
    "firstName": {
      value:'',
      label:'First Name',
      title:'Please enter your first name',
      inputType: 'input',
      type: 'text',
      size: 6,
      className: 'form-control',
    },
    firstNameLabel: '',
    "lastName": {
      value: '',
      label: 'Last Name',
      title: 'Please enter your last name',
      inputType: 'input',
      type: 'text',
      size: 6,
      className: 'form-control',
    },
    lastNameLabel: '',
    "email": {
      value:'',
      label: 'Email',
      title: 'Please enter your email',
      inputType: 'input',
      type: 'email',
      size: 12,
      className: 'form-control',
    },
    emailLabel: '',
    "password": {
      value:'',
      label: 'Password',
      title: 'Please enter your password',
      inputType: 'input',
      type: 'password',
      size: 12,
      className: 'form-control',
    },
    passwordLabel: '',
    "confirmPassword": {
      value:'',
      label: 'Confirm Password',
      title: 'Please confirm your password',
      inputType: 'input',
      type: 'password',
      size: 12,
      className: 'form-control',
    },
    confirmPasswordLabel: '',
  },
  errorsObj: {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: ''
  }
};
function validation(inputValue, inputName) {
  switch (inputName){
    case 'item':
      if(inputValue.length < 5) {
        return styles.error;
      }
      else if (inputValue.length > 5) {
        return 'success';
      }
      break;
  }
}
function handleChange(e) {
  console.log(e.target.value);
}
function handleBlur(){
  console.log('blurring');
}
function handleFocus(){
  console.log('focusing')
}
const SubmitBtn = () => (<button>hello</button>)
// Render example of base-components, one of each should be rendered inside the list
render(
  <div className="container">
    <Form
      formStyle={2}
      handleValidation={validation}
      Button={SubmitBtn}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      {...props}
    />
  </div>,
    document.getElementById('root')
);
