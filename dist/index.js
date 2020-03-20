"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _jest = _interopRequireDefault(require("jest"));

var options = {
  projects: './example.test.js',
  silent: true
};

_jest["default"].runCLI(options, options.projects).then(function (success) {
  console.log(success);
})["catch"](function (failure) {
  console.error(failure);
});