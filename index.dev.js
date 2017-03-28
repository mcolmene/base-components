import React from 'react';
import { Col, Row } from 'react-bootstrap/lib'
import { render } from 'react-dom';

import DetailsBlock from './src/DetailsBlock';
import ImageSection from './src/ImageSection';
import ImageTextOverlay from './src/ImageTextOverlay';
import LoadingSpinner from './src/LoadingSpinner'
import './src/static/global-styles.css'


// Render example of base-components, one of each should be rendered inside the list
render(
    <div>
      <Col md={4}>
        <DetailsBlock imageSrc="./src/static/Fresh_Foods.jpg"/>
      </Col>
      <Col md={4}>
        <DetailsBlock />
      </Col>
      <Col md={4}>
        <DetailsBlock />
      </Col>
    </div>,
    document.getElementById('root')
);
