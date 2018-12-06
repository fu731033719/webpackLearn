import * as _ from 'lodash'
const NUM = 45
console.log(_.chunk([1,2,3,4,5], 2))
interface Cat {
  name: String,
  sex: String
}

function touchCat(cat:Cat) {
  console.log('miao~', cat.name);
}

touchCat({
  name: 'tom',
  sex: 'male'
});