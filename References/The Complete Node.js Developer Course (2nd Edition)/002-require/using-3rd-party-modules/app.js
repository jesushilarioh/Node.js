const _ = require("lodash");

// console.log(_.isString(true));
// console.log(_.isString("Grand"));
//
// const name = _.toArray("jesushilario");
//
// console.log(name);
//
// _.reverse(name);
// console.log(name);
//
// _.reverse(name);
// console.log(name);
//
// console.log(_.add(65, 95));
// console.log(_.subtract(65, 95));
// console.log(_.multiply(65, 95));
// console.log(_.divide(65, 95));

const filtered_array = ["James", 54, 65, 99, 99, 1, 2, 1, "Jesus"];
console.log(_.uniq(filtered_array));
console.log(filtered_array);