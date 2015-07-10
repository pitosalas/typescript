var x = 100;
var y = 1000;
console.log(x + " == " + y);
var Class2 = (function () {
    function Class2() {
        console.log("My Class2 Cons");
    }
    return Class2;
})();
exports.Class2 = Class2;
