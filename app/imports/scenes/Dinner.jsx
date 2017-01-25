import React, { Component } from 'react'
import BackButton from '../components/BackButton.jsx'

export default class Dinner extends Component {
  render() {
    return (
    <div>
      <BackButton />
      <div>Hello Dinner</div>
    </div>
    )
  }
}
