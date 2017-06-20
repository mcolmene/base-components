import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  render() {
    const {
      title,
      name,
      options,
      htmlRef,
      id,
      className,
      value
    } = this.props;

    return(
      <div>
        <select
          title={title}
          name={name}
          ref={htmlRef}
          id={id}
          className={className}
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          {...this.props}
        >
          {
            options.map((option, index) => (
              <option key={`option${index}`} value={option}>{option}</option>
            ))
          }
        </select>
      </div>
    );
  }
}

Dropdown.defaultProps = {
  handleChange: noop,
  handleBlur: noop,
  handleFocus: noop
};

Dropdown.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  options:PropTypes.array,
  className: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleFocus: PropTypes.func,
};
