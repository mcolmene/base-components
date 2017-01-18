import React from 'react'
import {NavItem} from 'react-bootstrap/lib'
import {Nav} from 'react-bootstrap/lib'

export default class Navs extends React.Component {
  render () {
    return (
      <Nav bsStyle="pills" activeKey={4} className={this.props.className}>
        <NavItem eventKey={1} href="./index.html">Home</NavItem>
        <NavItem eventKey={2} href="../client/about.html">About</NavItem>
        <NavItem eventKey={3} >Help</NavItem>
      </Nav>
    )
  }
}
