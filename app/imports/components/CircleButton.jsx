import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap/lib'
import Scroll from 'react-scroll'

var scroll = Scroll.animateScroll;

export default class CircleButton extends Component {


  handleClick() {
    //window.scrollTo(0, 320)
    scroll.scrollTo(320)
    console.log(document.getElementsByClassName('circleButton')[0].style.display = "none")
  }
  render() {

    return (
      <div className="circleButton" onClick={this.handleClick}>
          <Glyphicon glyph="chevron-down" />
      </div>
    )
  }
}
