var xx = require("./file2");
var b = 1;
var a = 1 + b;
console.log("hello " + a + " goodbye man");
var Class1 = (function () {
    function Class1() {
        console.log("My Class1 Cons");
    }
    return Class1;
})();
var c = new Class1();
var test = new xx.Class2();
