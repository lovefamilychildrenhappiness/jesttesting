"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Example = /*#__PURE__*/function () {
  function Example() {
    (0, _classCallCheck2["default"])(this, Example);
  }

  (0, _createClass2["default"])(Example, [{
    key: "add",
    value: function add(a, b) {
      return a + b;
    }
  }]);
  return Example;
}();

exports["default"] = Example;