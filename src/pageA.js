import * as _ from 'lodash'
let page = 'pageA'

if (page === 'pageA') {
  require.ensure(['./subPageA'], function () {
    var subPageA = require('./subPageA')
  }, 'subPageA')
  // import( /* webpackChunkName: 'subPageA'*/ './subPageA').then((subPageA) => {
  //   console.log(subPageA);
  // })
} else if (page === 'pageB') {
  require.ensure(['./subPageB'], function () {
    var subPageB = require('./subPageB')
  }, 'subPageB')
  // import( /* webpackChunkName: 'subPageB'*/ './subPageA').then((subPageB) => {
  //   console.log(subPageB);
  // })
}

export default 'pageA'