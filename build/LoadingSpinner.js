'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LoadingSpinner = require('./static/LoadingSpinner.css');

var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingSpinner = function (_Component) {
  _inherits(LoadingSpinner, _Component);

  function LoadingSpinner() {
    _classCallCheck(this, LoadingSpinner);

    return _possibleConstructorReturn(this, (LoadingSpinner.__proto__ || Object.getPrototypeOf(LoadingSpinner)).apply(this, arguments));
  }

  _createClass(LoadingSpinner, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: '' + _LoadingSpinner2.default['sk-fading-circle'] },
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle1'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle2'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle3'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle4'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle5'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle6'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle7'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle8'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle9'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle10'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle11'] + ' ' + _LoadingSpinner2.default['sk-circle'] }),
        _react2.default.createElement('div', { className: _LoadingSpinner2.default['sk-circle12'] + ' ' + _LoadingSpinner2.default['sk-circle'] })
      );
    }
  }]);

  return LoadingSpinner;
}(_react.Component);

exports.default = LoadingSpinner;