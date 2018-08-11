// const square = (x) => {
//     let result = x * x;
//     return result;
// };

// SAME AS
// SAME AS
// SAME AS
// const square = (x) => {
//     return  x * x;
// };

// SAME AS
// SAME AS
// SAME AS
// const square = (x) => x * x;

// SAME AS
// SAME AS
// SAME AS
const square = x => x * x;
console.log(square(9));

const user = {
    name: "Jesus",
    sayHi: () => {
        console.log(arguments);
        console.log(`Hello. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hello. I'm ${this.name}`);
    }
};

// user.sayHi(1, 2, 3, 4);  // --> will not work with "this" keyword
user.sayHiAlt(1, 2, 3);     // --> will work with "this" keyword