import React, { Component } from 'react'
import {Col} from 'react-bootstrap/lib'
import BackButton from './BackButton.jsx';

export default class FoodType extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Col>
          {this.props.label}
        </Col>
        <div>
          <img src={this.props.src}/>
        </div>
      </div>
    )
  }
}
