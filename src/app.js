import base from './css/base.css'
import common from './css/common.css'

base.use()
base.unuse()

var flag = false;
setInterval(() => {
  flag = !flag
  if (flag) {
    base.use()
  } else {
    base.unuse()
  }
}, 3000)