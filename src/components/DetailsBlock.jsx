import React from 'react'

export default class DetailsBlock extends React.Component {
  render() {
    return (
      <div className= {this.props.style}>
        <div>
          <img className="feature-img" src={this.props.imageSrc}/>
        </div>
        <h3>{this.props.feature}</h3>
        <p>{this.props.details}</p>
      </div>
    )
  }
}
