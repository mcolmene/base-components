import React, { Component } from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

export default class Input extends Component {
  constructor(props) {
  super(props)
  this.onChange = this.onChange.bind(this);
  this.onFocus = this.onFocus.bind(this);
  this.onBlur = this.onBlur.bind(this);
}
onChange(event) {
  this.props.onChange(event);
}
onFocus(event) {
  this.props.onFocus(event);
}
onBlur(event) {
  this.props.onBlur(event);
}

  render() {
    const {
      title,
      htmlRef,
      name,
      type,
      id,
      className,
      value,
    } = this.props;

    return(
      <div>
        <input
          title={title}
          name={name}
          type={type}
          ref={htmlRef}
          id={id}
          className={className}
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          {...this.props}
        />
      </div>
    );
  }
}

Input.defaultProps = {
  onChange: noop,
  onBlur: noop,
  onFocus: noop
}

Input.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
