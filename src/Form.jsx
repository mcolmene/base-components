import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Col, Row} from 'react-bootstrap/lib';
import styles from './static/Input.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    const inputObj = props.inputObject;
    this.state = inputObj;
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(event) {
   const newObj = {
    value : event.target.value
   };
   const mergedObj = Object.assign({}, this.state[event.target.name], newObj);
   this.setState({ [event.target.name]: mergedObj });
   }
   handleFocus(event) {
   const label = event.target.name + 'Label';
   this.setState({ [label]: styles.transform });
   }
   handleBlur(event) {
     if(this.state[event.target.name].value.length === 0) {
       const label = event.target.name + 'Label';
       this.setState({[label]: ''});
     }
     this.props.handleValidation(this.state[event.target.name].value, event.target.name);
   }
  createFormInput(stateObject, key, index) {
    let content;
    const {
      type,
      size,
      className,
      options
  } = stateObject;

    switch(type) {
      case 'select': {
        content = (
          <Col key={`${key}Div`} xs={size || 12} className="margin-tb-3">
            <select
              name={key}
              ref={(select) => {this.key = select}}
              className={`form-control ${className}`.trim()}
              onChange={this.handleChange}
              value={this.state[key].value}
            >
              {
                options.map((option, index) => (
                  <option key={`option${index}`} value={option}>{option}</option>
                ))
              }
            </select>
          </Col>
        );
        break;
      }
      case 'input': {
        content = (
          <Col key={`${key}Div`} xs={size || 12}>
            <label className={this.state[`${key}Label`]}>{key}</label>
            <input
              key={`input${index}`}
              ref={(input) => {this.key = input}}
              type="text"
              name={key}
              className={className}
              value={this.state[key].value}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </Col>
        );
        break;
      }
      default: {
        content = <div></div>;
        break;
      }
    }
    return content;
  }
  getFormStyle(styleNumber) {
    let style;
    switch (styleNumber) {
      case 1 : {
        style = styles['inputContainerDefault1'];
        break;
      }
      case 2: {
        style = styles['inputContainerDefault2'];
        break;
      }
      default: {
        style = styles['inputContainerDefault1'];
      }
    }
    return style;
}
  render() {
    const {
      formStyle,
      inputObject
    } = this.props;

    const inputStyles = ( formStyle && typeof formStyle === 'string')
      ? styles[formStyle]
      : this.getFormStyle(formStyle);

    const inputs = (
      Object.keys(inputObject).map((key, index) => {
        return (key.includes('Label'))
          ? (null)
          : (
            this.createFormInput(inputObject[key], key, index)
          );
      })
    );
    return(
      <Row className={`${inputStyles}`}>
        {
          inputs
        }
      </Row>
    )
  }
}

Form.defaultProps ={
  formStyle: false,
  inputObject: {},
  handleValidation: () => {},
};

Form.propTypes = {
  formStyle: PropTypes.bool,
  inputObject: PropTypes.object,
  handleValidation: PropTypes.func
};
