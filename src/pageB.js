import * as _ from 'lodash'
let page = 'pageB'

if (page === 'pageA') {
  import( /*webpackChunkName:'subPageA'*/ './subPageA').then((subPageA) => {
    console.log(subPageA);
  })
} else if (page === 'pageB') {
  import( /*webpackChunkName:'subPageB'*/ './subPageA').then((subPageB) => {
    console.log(subPageB);
  })
}
export default 'pageB'