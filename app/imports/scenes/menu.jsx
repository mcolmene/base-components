import {Grid} from 'react-bootstrap/lib/'
import {Row} from 'react-bootstrap/lib'
import {Col} from 'react-bootstrap/lib'

import React from 'react';
import {render} from 'react-dom';

export default class Menu extends React.Component {
  render () {
    const container = {
      borderWidth: 1 ,
      borderColor: 'e0e0e0',
      borderStyle: 'solid',
      height: 500,
      width: '80%',
      display: 'block',
      margin: '100px auto',
      position: 'relative',
    }
    return (
        <div style={container}>

        </div>
    )
  }
}
