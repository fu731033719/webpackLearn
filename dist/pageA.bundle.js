webpackJsonp([3],{

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

let page = 'pageA'

if (page === 'pageA') {
  // require.ensure(['./subPageA'], function () {
  //   var subPageA = require('./subPageA')
  // }, 'subPageA')
  __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 0)).then((subPageA) => {
    console.log(subPageA);
  })
} else if (page === 'pageB') {
  // require.ensure(['./subPageB'], function () {
  //   var subPageB = require('./subPageB')
  // }, 'subPageB')
  __webpack_require__.e/* import() */(0/* duplicate */).then(__webpack_require__.bind(null, 0)).then((subPageB) => {
    console.log(subPageB);
  })
}

/* harmony default export */ __webpack_exports__["default"] = ('pageA');

/***/ })

},[2]);