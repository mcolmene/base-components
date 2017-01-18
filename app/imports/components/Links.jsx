import React from 'react'
import {Link} from 'react-router'
export default class Links extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/menu'>Menu</Link>
      </div>
    )
  }
}
