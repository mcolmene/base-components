import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap/lib';
import ImageTextOverlay from './ImageTextOverlay';

export default class ImageSection extends Component {
  render() {
    let imageContainer = {
      height: '550px',
      display: 'table',
      width: '100%',
      padding: 0,
    };

    const { topText, bottomText, url} = this.props;
    imageContainer.backgroundImage = 'url(' + url + ')';
    return(

      <Col sm={12} md={12} className="parallax" style={imageContainer}>
        <ImageTextOverlay topText={topText} bottomText={bottomText}/>
      </Col>
    );
  }
}
ImageSection.defaultProps = {
  topText: 'I am topText',
  bottomText: 'I am bottom text',
  url: '#'
};
ImageSection.propTypes = {
  topText: PropTypes.string,
  bottomText: PropTypes.string
};
