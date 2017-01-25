import React, { Component } from 'react'
import {Link} from 'react-router'


export default class BackButton extends Component {
  render() {
    return (
      <Link to="/menu"><span style={{color:"black"}}>Back</span></Link>
    )
  }
}
