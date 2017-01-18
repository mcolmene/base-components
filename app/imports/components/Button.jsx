import React from 'react';
import Button from 'react-bootstrap/lib/Button';
//import 'bootstrap/less/bootstrap.less';

class BsButton extends React.Component {
	render() {
		return (
			<Button onClick={this.props.clickHandler} bsStyle={this.props.bsStyle} bsSize={this.props.bsSize}>{this.props.placeholder}</Button>
		)
	}
}

export default BsButton;
