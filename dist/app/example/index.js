"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var path = _interopRequireWildcard(require("path"));

var _jest = require("jest");

var Example = /*#__PURE__*/function () {
  function Example() {
    (0, _classCallCheck2["default"])(this, Example);
  }

  (0, _createClass2["default"])(Example, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }, {
    key: "executeTest",
    value: function () {
      var _executeTest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var success, resp, result;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                success = false;
                _context.prev = 1;
                _context.next = 4;
                return (0, _jest.runCLI)({
                  testMatch: ['<rootDir>/dist/spec/integration/example/*.test.js']
                }, [process.cwd()]);

              case 4:
                resp = _context.sent;
                console.log('has resp changed: ', resp);
                result = resp.results.testResults.filter(function (result) {
                  return path.basename(result.testFilePath) === 'example.test.js';
                });
                success = result.every(function (test) {
                  return test.numFailingTests === 0;
                });
                console.log('the resp: ', success);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log('ERROR: ', _context.t0);

              case 14:
                return _context.abrupt("return", success);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }));

      function executeTest() {
        return _executeTest.apply(this, arguments);
      }

      return executeTest;
    }()
  }]);
  return Example;
}();

exports["default"] = Example;