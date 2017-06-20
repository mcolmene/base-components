import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row} from 'react-bootstrap/lib';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown'
import styles from '../static/Input.css';
import { defaultButton } from '../config/form';
import noop from 'lodash/noop';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.createFormInput = this.createFormInput.bind(this);
  }
  submit() {
    this.props.submit;
   }

  createFormInput(stateObject, key, index, errorsObj) {
    let content;
    const {
      inputType,
      title,
      label,
      type,
      options,
      value
    } = stateObject;
    let {
      size,
      className
    } = stateObject;

    size = (size) ? size : { xs: 12 };
    className = (className) ? className : '';
    switch(inputType) {
      case 'select': {
        content = (
          <Col key={`${key}Div`} {...size} className="margin-tb-3">
            <Dropdown
              name={key}
              title={title}
              htmlRef={(select) => {this[`${key}_ref`] = select}}
              className={`form-control ${className}`.trim()}
              onChange={this.props.handleChange}
              value={value}
              options={options}
            />
          </Col>
        );
        break;
      }
      case 'input': {
        content = (
          <Col key={`${key}Div`} {...size}>
            <label className={stateObject[`${key}Label`]}>{label}</label>
            <Input
              key={`input${index}`}
              htmlRef={(input) => {this[`${key}_ref`] = input}}
              type={type}
              title={title}
              name={key}
              className={`${className} ${errorsObj[key]}`.trim()}
              value={value}
              onChange={this.props.onChange}
              onFocus={this.props.onFocus}
              onBlur={this.props.onBlur}
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
    console.log('re rendering');
    const {
      formStyle,
      inputObject,
      errorsObj,
      Button,
    } = this.props;
    console.log(inputObject);
    const inputStyles = ( formStyle && typeof formStyle === 'string')
      ? styles[formStyle]
      : this.getFormStyle(formStyle);

    const inputs = (
      Object.keys(inputObject).map((key, index) => {
        return (key.includes('Label'))
          ? (null)
          : (
            this.createFormInput(inputObject[key], key, index, errorsObj)
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
        <div className="float-r margin-t-4">
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
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  submit: noop,
  Button: defaultButton
};

Form.propTypes = {
  formStyle: PropTypes.oneOfType(PropTypes.bool, PropTypes.number),
  inputObject: PropTypes.object,
  handleValidation: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};
