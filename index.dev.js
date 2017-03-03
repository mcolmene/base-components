import React from 'react';
import { Col, Row } from 'react-bootstrap/lib'
import { render } from 'react-dom';

import DetailsBlock from './src/components/DetailsBlock';
import ImageSection from './src/components/ImageSection';
import ImageTextOverlay from './src/components/ImageTextOverlay';
import './src/static/global-styles.css'


// Render example axp-balance-details components, one of each should be rendered inside the list
render(
    <div>
      <ImageSection url="./src/static/Fresh_Foods.jpg" />
    </div>,
    document.getElementById('root')
);
