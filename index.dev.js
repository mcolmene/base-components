import React from 'react';
import { Col, Row } from 'react-bootstrap/lib'
import { render } from 'react-dom';

import DetailsBlock from './src/DetailsBlock';
import ImageSection from './src/ImageSection';
import ImageTextOverlay from './src/ImageTextOverlay';
import LoadingSpinner from './src/LoadingSpinner';
import Form from './src/Form';

import './src/static/global-styles.css'

const props = {
  inputObject : {
    item: {
      value:'',
      inputType: 'input'
    },
    itemLabel: '',
    amount: {
      value:'',
      inputType: 'input'
    },
    amountLabel: '',
    description: {
      value:'',
      inputType: 'input'
    },
    descriptionLabel: '',
    user: {
      value: 'Select',
      inputType: 'select',
      options: [
        'Select',
        '1',
        '2'
      ],
    },
    state: {
      value: 'Choose State',
      inputType: 'select',
      options: [
        'Choose State',
        'AZ',
        'CA'
      ],
    },
  }
};
function validation(inputValue, inputName) {
  console.log(inputName);
  console.log(inputValue);
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
  <div style={{width:200}}>
    <Form
      handleValidation={validation}
      {...props}
    />
  </div>,
    document.getElementById('root')
);
