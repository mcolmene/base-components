/*
*  Created by Martin Colmenero 2/27/17
* */

import React, { Component} from 'react';
import PropTypes from 'prop-types';
import styles from '../static/DetailsBlock.css';

export default class DetailsBlock extends Component {
  render() {
    const {
      details,
      feature,
      featureDivStyles,
      featureImgStyles,
      imageSrc
    } = this.props;

    return (
      <div className={`${styles.featureDiv} ${featureDivStyles} center`}>
        <div>
          <img className={`${styles.featureImg} ${featureImgStyles}`} src={imageSrc}/>
        </div>
        <h3>{feature}</h3>
        <p>{details}</p>
      </div>
    )
  }
}
DetailsBlock.defaultProps = {
  details: 'Some details of this features are...',
  feature: '(enter a feature) ',
  featureDivStyles: '',
  featureImgStyles:'',
  imageSrc: '#',

};

DetailsBlock.propTypes = {
  details: PropTypes.string,
  feature: PropTypes.string,
  imageSrc: PropTypes.string,
};
