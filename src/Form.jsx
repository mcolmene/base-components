import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row} from 'react-bootstrap/lib';
import styles from './static/Input.css';
import { defaultButton } from './config/form';
import noop from 'lodash/noop';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.submit = this.submit.bind(this);

  }
  handleChange(event) {
    this.props.handleChange(event);
  }
  handleFocus(event) {
    this.props.handleFocus(event);
  }
  handleBlur(event) {
    this.props.handleBlur(event);
  }

  submit() {
    this.props.submit;
   }

  createFormInput(stateObject, key, index, inputObj, errorsObj) {
    let content;
    const {
      inputType,
      title,
      label,
      type,
      options
    } = stateObject;
    let {
      size,
      className
    } = stateObject;

    size = (size) ? size : { xs: 12};
    className = (className) ? className : '';
    switch(inputType) {
      case 'select': {
        content = (
          <Col key={`${key}Div`} {...size} className="margin-tb-3">
            <select
              name={key}
              title={title}
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
            <label className={inputObj[`${key}Label`]}>{label}</label>
            <input
              key={`input${index}`}
              ref={(input) => {this[`${key}_ref`] = input}}
              type={type}
              title={title}
              name={key}
              className={`${className} ${errorsObj[key]}`}
              value={inputObj[key].value}
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
      inputObject,
      errorsObj,
      Button,
    } = this.props;

    const inputStyles = ( formStyle && typeof formStyle === 'string')
      ? styles[formStyle]
      : this.getFormStyle(formStyle);

    const inputs = (
      Object.keys(inputObject).map((key, index) => {
        return (key.includes('Label'))
          ? (null)
          : (
            this.createFormInput(inputObject[key], key, index, inputObject, errorsObj)
          );
      })
    );

    return(
      <form>
        <Row className={`${inputStyles}`}>
          {
            inputs
          }
        </Row>
        <div className="float-r">
          <Button onSubmit={this.submit}/>
        </div>
      </form>
    )
  }
}

Form.defaultProps ={
  formStyle: false,
  inputObject: {},
  handleValidation: noop,
  handleBlur: noop,
  handleChange: noop,
  submit: noop,
  Button: defaultButton
};

Form.propTypes = {
  formStyle: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  inputObject: PropTypes.object,
  handleValidation: PropTypes.func
};
