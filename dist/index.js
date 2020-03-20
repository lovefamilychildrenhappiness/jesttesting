"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var path = _interopRequireWildcard(require("path"));

var _jest = require("jest");

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var resp, result, success;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _jest.runCLI)({}, ['.']);

        case 3:
          resp = _context.sent;
          result = resp.results.testResults.filter(function (result) {
            return path.basename(result.testFilePath) === 'example.test.js';
          });
          success = result.every(function (test) {
            return test.numFailingTests === 0;
          });
          console.log('the resp: ', success);
          _context.next = 12;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.log('ERROR: ', _context.t0);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 9]]);
}))();