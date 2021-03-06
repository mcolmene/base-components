'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DetailsBlock = require('./static/DetailsBlock.css');

var _DetailsBlock2 = _interopRequireDefault(_DetailsBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *  Created by Martin Colmenero 2/27/17
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * */

var DetailsBlock = function (_Component) {
  _inherits(DetailsBlock, _Component);

  function DetailsBlock() {
    _classCallCheck(this, DetailsBlock);

    return _possibleConstructorReturn(this, (DetailsBlock.__proto__ || Object.getPrototypeOf(DetailsBlock)).apply(this, arguments));
  }

  _createClass(DetailsBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          details = _props.details,
          feature = _props.feature,
          featureDivStyles = _props.featureDivStyles,
          featureImgStyles = _props.featureImgStyles,
          imageSrc = _props.imageSrc;


      return _react2.default.createElement(
        'div',
        { className: _DetailsBlock2.default.featureDiv + ' ' + featureDivStyles + ' center' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('img', { className: _DetailsBlock2.default.featureImg + ' ' + featureImgStyles, src: imageSrc })
        ),
        _react2.default.createElement(
          'h3',
          null,
          feature
        ),
        _react2.default.createElement(
          'p',
          null,
          details
        )
      );
    }
  }]);

  return DetailsBlock;
}(_react.Component);

exports.default = DetailsBlock;

DetailsBlock.defaultProps = {
  details: 'Some details of this features are...',
  feature: '(enter a feature) ',
  featureDivStyles: '',
  featureImgStyles: '',
  imageSrc: '#'

};

DetailsBlock.propTypes = {
  details: _react.PropTypes.string,
  feature: _react.PropTypes.string,
  imageSrc: _react.PropTypes.string
};