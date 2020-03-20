"use strict";

var _jest = require("jest");

(0, _jest.runCLI)({}, ['.']).then(function (resp) {
  console.log('And the resp: ', resp);
})["catch"](function (e) {
  return console.log(e);
});