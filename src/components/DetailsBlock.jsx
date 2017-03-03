/*
*  Created by Martin Colmenero 2/27/17
* */

import React, { PropTypes, Component} from 'react'

export default class DetailsBlock extends Component {
  render() {
    const featureDiv = {
      borderRadius: '5px',
      margin: '30px 0px',
      minHeight: '200px'
    };
    const featureImg = {
      width: '80px',
      height: '80px'
    };
    const { imageSrc, feature, details } = this.props;
    return (
      <div className={`${featureDiv} center`}>
        <div>
          <img className={`${featureImg}`} src={imageSrc}/>
        </div>
        <h3>{feature}</h3>
        <p>{details}</p>
      </div>
    )
  }
}
DetailsBlock.defaultProps = {
  details: "Some details of this features are...",
  feature: "(enter a feature) ",
  imageSrc: '#',
};

DetailsBlock.propTypes = {
  details: PropTypes.string,
  feature: PropTypes.string,
  imageSrc: PropTypes.string,
};
