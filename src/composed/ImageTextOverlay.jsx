import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageTextOverlay extends Component {
  render() {
    const subtitle = {
      color: 'white',
      font: 'bold 40px/70px Helvetica, Sans-Serif',
      letterSpacing: '-1px',
      background: 'rgb(0, 0, 0)', /* fallback color */
      padding: '10px'
    };
    const { topText, bottomText } = this.props;
    return(
      <h2>
        <span style={subtitle} >
          {topText}<span className="pad-lr-1" />
          <br />
          <span className="pad-lr-1" />
          {bottomText}
        </span>
      </h2>
    );
  }
}
ImageTextOverlay.defaultProps = {
  topText: "I am topText",
  bottomText: "I am bottom text"
};
ImageTextOverlay.propTypes = {
  topText: PropTypes.string,
  bottomText: PropTypes.string
};
