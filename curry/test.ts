import lodash = require('lodash');
var curry = lodash.curry;

var match = curry(function(what, x) {
  return x.match(what);
});

console.log(match(/\s+/g, "hello world"));

var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var increment = add(1);
var addTen = add(10);

console.log(increment(2));
// 3

console.log(addTen(2));
// 12

let wrn = (x) => console.log(`WARN: ${x}`);
let cl = (x) => console.log(`: ${x}`);

wrn("Yo");

var replace = curry(function(what, replacement, x) {
  return x.replace(what, replacement);
});

var filter = curry(function(f, xs) {
  return xs.filter(f);
});

var map = curry(function(f, xs) {
  return xs.map(f);
});

var hasSpaces = match(/\s+/g);

if(hasSpaces("hello world")) { cl("YEs");}

var map = curry(function(f, xs) {
  return xs.map(f);
});

var length = (x:string)=>{return(x.length)};
wrn(length("AAA"));

var strgs = ["this", "is", "cool"];

var lengths = map(length);
cl(lengths(strgs));
