import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Home from './imports/scenes/home.jsx'
import Menu from './imports/scenes/menu.jsx'

import Header from './imports/components/Header.jsx'
import {Row} from 'react-bootstrap/lib'

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)
    const Container = (props) => <div>
    <Row>
      <Header style="overlap fmtText fmtFont" placeholder="Marty's Famous"/>
    </Row>
  {props.children}
</div>
export default class App extends React.Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}
