'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lib = require('react-bootstrap/lib');

var _ImageTextOverlay = require('./ImageTextOverlay');

var _ImageTextOverlay2 = _interopRequireDefault(_ImageTextOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageSection = function (_Component) {
  _inherits(ImageSection, _Component);

  function ImageSection() {
    _classCallCheck(this, ImageSection);

    return _possibleConstructorReturn(this, (ImageSection.__proto__ || Object.getPrototypeOf(ImageSection)).apply(this, arguments));
  }

  _createClass(ImageSection, [{
    key: 'render',
    value: function render() {
      var imageContainer = {
        height: '550px',
        display: 'table',
        width: '100%',
        padding: 0
      };

      var _props = this.props,
          topText = _props.topText,
          bottomText = _props.bottomText,
          url = _props.url;

      imageContainer.backgroundImage = 'url(' + url + ')';
      return _react2.default.createElement(
        _lib.Col,
        { sm: 12, md: 12, className: 'parallax', style: imageContainer },
        _react2.default.createElement(_ImageTextOverlay2.default, { topText: topText, bottomText: bottomText })
      );
    }
  }]);

  return ImageSection;
}(_react.Component);

exports.default = ImageSection;

ImageSection.defaultProps = {
  topText: 'I am topText',
  bottomText: 'I am bottom text',
  url: '#'
};
ImageSection.propTypes = {
  topText: _react.PropTypes.string,
  bottomText: _react.PropTypes.string
};