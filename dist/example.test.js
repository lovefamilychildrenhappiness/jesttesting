"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _example = _interopRequireDefault(require("./example"));

describe('#add', function () {
  it('adds two numbers', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var example;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            example = new _example["default"]();
            expect(example.add(1, 2)).toBe(3);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
});