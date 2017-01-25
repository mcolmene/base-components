import {Grid} from 'react-bootstrap/lib/'
import {Row} from 'react-bootstrap/lib'
import {Col} from 'react-bootstrap/lib'

import React, { Component } from 'react';
import {Link} from 'react-router'

import FoodType from './FoodType.jsx'

export default class FoodCategory extends Component {
  render() {
    return(
      <div>
        <Col mdOffset={1} md={10}>
          <Link to="menu/breakfast">
            <FoodType className="foodType" src="#" label="Breakfast"/>
          </Link>
        </Col>
        <Col mdOffset={1} md={10}>
          <Link to="menu/lunch">
            <FoodType className="foodType" src="#" label="Lunch"/>
          </Link>
        </Col>
        <Col mdOffset={1} md={10}>
          <Link to="menu/dinner">
            <FoodType className="foodType" src="#" label="Dinner"/>
          </Link>
        </Col>
      </div>
    )
  }
}
