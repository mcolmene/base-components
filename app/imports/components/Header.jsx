import React from 'react'
import {Col} from 'react-bootstrap/lib'
import Links from './Links.jsx'

export default class Header extends React.Component {
  render() {
    return (
      <div >
        <Col sm={12} md={6} className ={this.props.style}>
          <h1 >{this.props.placeholder}</h1>
        </Col>
        <Col sm={12} md={6} className="overlap" style={{top:20, textAlign: "right"}}>
          <Links className="right white links"/>
        </Col>
      </div>
    )
  }
}
