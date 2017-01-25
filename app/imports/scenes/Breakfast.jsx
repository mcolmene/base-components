import React, { Component } from 'react'
import {Link} from 'react-router'

import BackButton from '../components/BackButton.jsx'

export default class Breakfast extends Component {
  render() {
    return (
    <div>
      <BackButton />
      <div>Hello Breakfast</div>
    </div>
    )
  }
}
