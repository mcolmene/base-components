/*
*  Created by Martin Colmenero 2/27/17
* */

import React, { PropTypes, Component} from 'react'

export default class DetailsBlock extends Component {
  render() {
    return (
      <div className="feature-div center">
        <div>
          <img className="feature-img" src={this.props.imageSrc}/>
        </div>
        <h3>{this.props.feature}</h3>
        <p>{this.props.details}</p>
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
