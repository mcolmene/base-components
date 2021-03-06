import React from 'react';
import { Col, Row } from 'react-bootstrap/lib'
import { render } from 'react-dom';

import DetailsBlock from './src/DetailsBlock';
import ImageSection from './src/ImageSection';
import ImageTextOverlay from './src/ImageTextOverlay';
import LoadingSpinner from './src/LoadingSpinner';
import Form from './src/Form';

import './src/static/global-styles.css'
import styles from './src/static/Input.css';

const props = {
  inputObject : {
    item: {
      value:'',
      type: 'input',
      className: 'form-control',
    },
    itemLabel: '',
    amount: {
      value:'',
      type: 'input',
      className: 'form-control',

    },
    amountLabel: '',
    description: {
      value:'',
      type: 'input',
      size: '6',
      className: 'form-control',
    },
    descriptionLabel: '',
    user: {
      value: 'Select',
      type: 'select',
      size: '6',
      options: [
        'Select',
        '1',
        '2'
      ],
    },
    state: {
      value: 'Choose State',
      type: 'select',
      size: '6',
      options: [
        'Choose State',
        'AZ',
        'CA'
      ],
    },
  }
};
function validation(inputValue, inputName) {
  switch (inputName){
    case 'item':
      if(inputValue.length < 5) {
        console.log('too short')
      }
      break;
  }
}
// Render example of base-components, one of each should be rendered inside the list
render(
  <div className="container">
    <Form
      formStyle={2}
      handleValidation={validation}
      {...props}
    />
  </div>,
    document.getElementById('root')
);
