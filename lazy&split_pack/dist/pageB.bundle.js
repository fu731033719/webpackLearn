webpackJsonp([4],{

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);

let page = 'pageB'

if (page === 'pageA') {
  Promise.all/* require.ensure */([__webpack_require__.e(1), __webpack_require__.e(2)]).then((function () {
    var subPageA = __webpack_require__(0)
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  // import( /* webpackChunkName:'subPageA' */ './subPageA').then((subPageA) => {
  //   console.log(subPageA);
  // })
} else if (page === 'pageB') {
  Promise.all/* require.ensure */([__webpack_require__.e(0), __webpack_require__.e(2)]).then((function () {
    var subPageB = __webpack_require__(1)
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe)
  // import( /* webpackChunkName:'subPageB' */ './subPageA').then((subPageB) => {
  //   console.log(subPageB);
  // })
}
/* harmony default export */ __webpack_exports__["default"] = ('pageB');

/***/ })

},[6]);