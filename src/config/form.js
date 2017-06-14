import React from 'react';
import { Button } from 'react-bootstrap/lib';

// Defaults
export const defaultButton = ({onSubmit}) => {
  return (
    <Button
    bsStyle="danger"
    bsSize="large"
    onClick={onSubmit}
  >
    Submit
  </Button>
  )
}
