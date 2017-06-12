import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Col, Row} from 'react-bootstrap/lib';
import styles from './static/Input.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
    const inputObj = props.inputObject;
    const errorsObj = {};
    const errors = {};
    const keys = Object.keys(props.inputObject);
    keys.map((key) => {
      if (!key.includes('Label')) {
        errorsObj[key] = '';
      }
    })
    this.state = {
      inputObj,
      errorsObj,
      errors
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleChange(event) {
   const obj = Object.assign({}, this.state);
   obj.inputObj[event.target.name].value = event.target.value;
   this.setState({ obj });
   }
   handleFocus(event) {
    let obj = Object.assign({}, this.state.inputObj)
   const label = event.target.name + 'Label';
    obj[label] = styles.transform
   this.setState({ inputObj: obj });
   }
   handleBlur(event) {
    const name = event.target.name;
     if(this.state.inputObj[name].value.length === 0) {
       let obj = Object.assign({}, this.state)
       const label = name + 'Label';
       obj.inputObj[label] = ''
       const status = this.props.handleValidation(this.state.inputObj[name].value, name);
       obj.errorsObj[name] = status;
       this.setState({ obj });
     } else {
       let obj = Object.assign({}, this.state)
       const status = this.props.handleValidation(this.state.inputObj[name].value, name);
       obj.errorsObj[name] = status;
       this.setState({ obj });
     }

   }
  createFormInput(stateObject, key, index) {
    let content;
    const {
      type,
      options
    } = stateObject;
    let {
      size,
      className
    } = stateObject;

    size = (size) ? size : { xs: 12};
    className = (className) ? className : '';
    const {
      inputObj
    } = this.state;
    switch(type) {
      case 'select': {
        content = (
          <Col key={`${key}Div`} {...size} className="margin-tb-3">
            <select
              name={key}
              ref={(select) => {this[`${key}_ref`] = select}}
              className={`form-control ${className}`.trim()}
              onChange={this.handleChange}
              value={inputObj[key].value}
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
          <Col key={`${key}Div`} {...size}>
            <label className={inputObj[`${key}Label`]}>{key}</label>
            <input
              key={`input${index}`}
              ref={(input) => {this[`${key}_ref`] = input}}
              type="text"
              name={key}
              className={`${className} ${this.state.errorsObj[key]}`}
              value={this.state.inputObj[key].value}
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
  formStyle: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  inputObject: PropTypes.object,
  handleValidation: PropTypes.func
};
