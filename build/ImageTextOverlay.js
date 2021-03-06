'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageTextOverlay = function (_Component) {
  _inherits(ImageTextOverlay, _Component);

  function ImageTextOverlay() {
    _classCallCheck(this, ImageTextOverlay);

    return _possibleConstructorReturn(this, (ImageTextOverlay.__proto__ || Object.getPrototypeOf(ImageTextOverlay)).apply(this, arguments));
  }

  _createClass(ImageTextOverlay, [{
    key: 'render',
    value: function render() {
      var subtitle = {
        color: 'white',
        font: 'bold 40px/70px Helvetica, Sans-Serif',
        letterSpacing: '-1px',
        background: 'rgb(0, 0, 0)', /* fallback color */
        padding: '10px'
      };
      var _props = this.props,
          topText = _props.topText,
          bottomText = _props.bottomText;

      return _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement(
          'span',
          { style: subtitle },
          topText,
          _react2.default.createElement('span', { className: 'pad-lr-1' }),
          _react2.default.createElement('br', null),
          _react2.default.createElement('span', { className: 'pad-lr-1' }),
          bottomText
        )
      );
    }
  }]);

  return ImageTextOverlay;
}(_react.Component);

exports.default = ImageTextOverlay;

ImageTextOverlay.defaultProps = {
  topText: "I am topText",
  bottomText: "I am bottom text"
};
ImageTextOverlay.propTypes = {
  topText: _react.PropTypes.string,
  bottomText: _react.PropTypes.string
};