require.include('./moduleA')
let page = 'pageA'

if (page === 'pageA') {
  require.ensure(['./subPageA'], function () {
    var subPageA = require('./subPageA')
  }, 'subPageA')
} else if (page === 'pageB') {
  require.ensure(['./subPageB'], function () {
    var subPageA = require('./subPageB')
  }, 'subPageB')
}

// import './subPageA'
// import './subPageB'
// import * as _ from 'lodash'
require.ensure(['lodash'], function() {
  var _ = require('lodash')
  _.join(['1', '2'], '3')
}, 'vendor')
export default 'pageA'