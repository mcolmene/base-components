import React, { Component } from 'react'
import {Grid} from 'react-bootstrap/lib/'
import {Row} from 'react-bootstrap/lib'
import {Col} from 'react-bootstrap/lib'

export default class MenuHeader extends Component {
  render() {
    return (
      <Col md={12} style={{borderBottom: "2px solid #e0e0e0", textAlign: "center"}}>
        <span>Select a food category</span>
      </Col>
    )
  }
}
