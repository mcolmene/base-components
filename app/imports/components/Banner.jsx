import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap/lib'
export default class Banner extends Component {
  render() {
    return (
      <Col sm={12} md={12} className="mainBanner">
        <Row>
          <h2 className="fmtText headerFont ">Welcome to Paradise</h2>
        </Row>
        <Row>
          <p className="font52 fmtText">Food just like Home</p>
        </Row>
      </Col>
    )
  }
}
