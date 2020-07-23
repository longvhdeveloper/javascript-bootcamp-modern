'use strict';

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var _scream = require('./scream');

var _scream2 = _interopRequireDefault(_scream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('index.js');
console.log((0, _util.add)(10, 5));
console.log(_util.name);

console.log((0, _scream2.default)('hello webpack'));
console.log((0, _util2.default)(10));
