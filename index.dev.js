import React from 'react';
import { Col, Row } from 'react-bootstrap/lib'
import { render } from 'react-dom';

import DetailsBlock from './src/components/DetailsBlock'
import styles from './src/static/styles.css'


// Render example axp-balance-details components, one of each should be rendered inside the list
render(
    <Row>
        <Col md={4}>
            <DetailsBlock />
        </Col>
        <Col md={4}>
            <DetailsBlock />
        </Col>
        <Col md={4}>
            <DetailsBlock />
        </Col>
    </Row>,
    document.getElementById('root')
);
