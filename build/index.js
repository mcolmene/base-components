'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require('./components/Button');

var _Button2 = _interopRequireDefault(_Button);

var _DetailsBlock = require('./components/DetailsBlock');

var _DetailsBlock2 = _interopRequireDefault(_DetailsBlock);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _ImageSection = require('./components/ImageSection');

var _ImageSection2 = _interopRequireDefault(_ImageSection);

var _ImageTextOverlay = require('./components/ImageTextOverlay');

var _ImageTextOverlay2 = _interopRequireDefault(_ImageTextOverlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {
  Button: _Button2.default,
  DetailsBlock: _DetailsBlock2.default,
  Footer: _Footer2.default,
  ImageSection: _ImageSection2.default,
  ImageTextOverlay: _ImageTextOverlay2.default
};

exports.default = components;